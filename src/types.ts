export interface Member {
  address: string;
  name: string;
  avatarUrl: string;
}

export interface Group {
  id: string;
  name: string;
  icon: string; // lucide icon name like 'flight_takeoff', 'home', 'ac_unit'
  dateRange?: string;
  members: Member[];
  totalSpend: number;
  yourBalance: number; // positive = owed to you, negative = you owe
  owedToName?: string;
  owedAmount?: number;
  status: 'Active' | 'Pending' | 'Settled';
  lastActivity: string;
}

export interface ExpenseShare {
  memberAddress: string;
  memberName: string;
  amount: number;
}

export interface Expense {
  id: string;
  groupId: string;
  groupName: string;
  amount: number;
  currency: string;
  description: string;
  paidByAddress: string;
  paidByName: string;
  receiptName?: string;
  receiptUrl?: string; // Shelby blob URL or data preview
  shelbyBlobKey?: string;
  shelbyTxHash?: string;
  splitMethod: 'equal' | 'custom';
  shares: ExpenseShare[];
  timestamp: string;
  status: 'On-Chain Verified' | 'Pending';
}

export type ActivePage = 'home' | 'dashboard' | 'groups' | 'add-expense' | 'expenses' | 'settings';
