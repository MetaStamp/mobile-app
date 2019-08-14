import { types as t, Instance } from 'mobx-state-tree'
import * as RNLocalize from 'react-native-localize'

// Models
import Settings from './settings/'
import History from './history/'

// Constants
import { Theme } from '../constants/colors'
import { Language } from '../constants/i18n'

const AppStore = t.
  model('AppStore', {
    settings: t.optional(Settings, {
      theme: Theme.LIGHT,
      language: Language[RNLocalize.getLocales()[0].languageCode],
    }),
    history: t.optional(History, {
      data: [
        {
          id: 1,
          timestamp: 0,
          application: 'dib.one',
          logo: '',
          status: 'confirmed'
        },
        {
          id: 2,
          timestamp: 0,
          application: 'radarrelay.com',
          logo: '',
          status: 'rejected'
        }
      ]
    })
  })

export default AppStore.create({})

export interface IAppStore extends Instance<typeof AppStore> {}
