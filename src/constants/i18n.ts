import memoize from 'lodash.memoize'
import i18n from 'i18n-js'

export enum Language {
  en = 'en'
}

export const translate = memoize(
  (key, config?) => i18n.t(key, config),
  (key, config?) => (config ? key + JSON.stringify(config) : key),
)

export const translations = {
  en: {
    first: {
      welcome: 'Welcome to MetaStamp.IO',
      labelNewUser: "Don't know what to do?",
      labelOldUser: "Already have seed phrase or private key?",
    },
  },
}
