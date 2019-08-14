import { types as t, Instance } from 'mobx-state-tree'

export enum SignatureStatus {
  confirmed = 'confirmed',
  rejected = 'rejected'
}

export const HistoryData = t.model('HistoryData', {
  id: t.number,
  timestamp: t.number,
  application: t.string,
  logo: t.string,
  status: t.enumeration<SignatureStatus>('SignatureStatus', Object.values(SignatureStatus))
})

export interface IHistoryData extends Instance<typeof HistoryData> {}
