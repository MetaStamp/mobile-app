import { NativeModules } from 'react-native';
const Aes = NativeModules.Aes;

const ROUNDS = 5000
const SHA256_DIGEST_LENGTH = 512

/**
 * Class that exposes two public methods: Encrypt and Decrypt
 * This is used by the KeyringController to encrypt / decrypt the state
 * which contains sensitive seed words and addresses
 */
class Encryptor {
  key = null;

	_generateSalt(byteCount = 32, raw = false) {
		const view = new Uint8Array(byteCount)
		global.crypto.getRandomValues(view)

		if (!raw) {
			const b64encoded = btoa(String.fromCharCode.apply(null, view))
			return b64encoded
		}

		return String.fromCharCode.apply(null, view)
	}

	_generateKey = (password, salt) => Aes.pbkdf2(password, salt, ROUNDS, SHA256_DIGEST_LENGTH)

	_keyFromPassword = (password, salt) => this._generateKey(password, salt)

	_encryptWithKey = (text, keyBase64) => {
		const ivBase64 = this._generateSalt(32)
		return Aes.encrypt(text, keyBase64, ivBase64).then(cipher => ({ cipher, iv: ivBase64 }))
	}

	_decryptWithKey = (encryptedData, key) => Aes.decrypt(encryptedData.cipher, key, encryptedData.iv)

	/**
	 * Encrypts a JS object using a password (and AES encryption with native libraries)
	 *
	 * @param {string} password - Password used for encryption
	 * @param {object} object - Data object to encrypt
	 * @returns - Promise resolving to stringified data
	 */
	encrypt = async (password, object) => {
		const salt = this._generateSalt(16)
		const key = await this._keyFromPassword(password, salt)
		const result = await this._encryptWithKey(JSON.stringify(object), key)
		result.salt = salt
		return JSON.stringify(result)
	}

	/**
	 * Decrypts an encrypted JS object (encryptedString)
	 * using a password (and AES deccryption with native libraries)
	 *
	 * @param {string} password - Password used for decryption
	 * @param {string} encryptedString - String to decrypt
	 * @returns - Promise resolving to decrypted data object
	 */
	decrypt = async (password, encryptedString) => {
		const encryptedData = JSON.parse(encryptedString)
		const key = await this._keyFromPassword(password, encryptedData.salt)
		const data = await this._decryptWithKey(encryptedData, key)

		return JSON.parse(data)
	}

	randomPassword = () => this._generateSalt(32, true)
}

export default new Encryptor()
