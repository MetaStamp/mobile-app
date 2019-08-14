import { types as t, Instance } from 'mobx-state-tree'
import i18n from 'i18n-js'

// Models
import { HistoryData } from './models/HistoryData'

// Constants
import { Theme } from '../../constants/colors'
import { Language, translations, translate } from '../../constants/i18n'

i18n.translations = translations

const History = t
  .model('History', {
    data: t.array(HistoryData)
  })
  .actions(self => ({
  }))

export default History

export interface IHistoryStore extends Instance<typeof History> {}
