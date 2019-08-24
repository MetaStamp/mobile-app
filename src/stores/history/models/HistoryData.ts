import { types as t, Instance } from 'mobx-state-tree'
import { SignatureStatus } from '../../../constants/statuses'

export const HistoryData = t.model('HistoryData', {
  id: t.number,
  timestamp: t.number,
  application: t.string,
  logo: t.string,
  status: t.enumeration<SignatureStatus>('SignatureStatus', Object.values(SignatureStatus))
})

export interface IHistoryData extends Instance<typeof HistoryData> {}
