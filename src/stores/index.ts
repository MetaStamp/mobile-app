import { types as t } from 'mobx-state-tree'
import * as RNLocalize from 'react-native-localize'

import Settings from './settings/'
import { Theme } from '../constants/colors'
import { Language } from '../constants/i18n'

const AppStore = t.
  model('AppStore', {
    settings: t.optional(Settings, {
      theme: Theme.LIGHT,
      language: Language[RNLocalize.getLocales()[0].languageCode],
    })
  })

export default AppStore.create({})
