export interface Member {
  address: string;
  
 
  receiptUrl?: string; // Shelby blob URL or data preview
  shelbyBlobKey?: string;
  shelbyTxHash?: string;
  splitMethod: 'equal' | 'custom';
  shares: ExpenseShare[];
  timestamp: string;
  status: 'On-Chain Verified' | 'Pending';
}

export type ActivePage = 'home' | 'dashboard' | 'groups' | 'add-expense' | 'expenses' | 'settings';
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

  receiptUrl?: string; // Shelby blob URL or data preview
  shelbyBlobKey?: string;
  shelbyTxHash?: string;
  splitMethod: 'equal' | 'custom';
  shares: ExpenseShare[];
  timestamp: string;
  status: 'On-Chain Verified' | 'Pending';
}

export type ActivePage = 'home' | 'dashboard' | 'groups' | 'add-expense' | 'expenses' | 'settings';
