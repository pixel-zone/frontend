export interface ITransation {
  id: string
  block_number: number
  block_timestamp: string
  hash: string
  code: number
  data: any
  info: string
  logs: Logs[]
  gas_wanted: number
  gas_used: number
  gas_fee: GasFee
  codespace: string
  tx_type: string
  messages: Message[]
  signatures: Signature[]
  memo: string
  tx_number: number
  block_unix_timestamp: number
  error_log: string
}

export interface Logs {
  msg_index: number
  events: Event[]
}

export interface Event {
  type: string
  attributes: Attribute[]
}

export interface Attribute {
  key: string
  value?: string
}

interface GasFee {
  amount: Amount[]
  gas_limit: number
  payer: string
  granter: string
}

interface Amount {
  denom: string
  amount: string
}

interface Message {
  type: string
  value: Value
}

interface Value {
  sender: string
  contract: string
  msg: string
  funds: string
}

interface Signature {
  pubkey: string
  address: string
  sequence: number
  signature: string
}
