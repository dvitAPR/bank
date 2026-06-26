export interface User {
  id: string;
  email: string;
  username: string;
  shortId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Transaction {
  id: string;
  amount: number;
  description: string;
  status: 'PENDING' | 'CONFIRMED';
  paidBy: 'INITIATOR' | 'COUNTERPARTY';
  createdAt: Date;
  updatedAt: Date;
  initiatorId: string;
  counterpartyId: string;
  initiator?: User;
  counterparty?: User;
}

export interface TransactionWithUsers extends Transaction {
  initiator: User;
  counterparty: User;
}

export interface BalanceSummary {
  youAreOwed: number;
  youOwe: number;
  net: number;
}
