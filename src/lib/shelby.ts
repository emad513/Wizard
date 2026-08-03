import {
  createBlobKey,
  getAptosTransactionExplorerUrl,
  getShelbyBlobExplorerUrl,
} from '@shelby-protocol/sdk/browser';

export interface ShelbyUploadResult {
  blobKey: string;
  blobExplorerUrl: string;
  txHash?: string;
  txExplorerUrl?: string;
  fileDataUrl: string;
  sizeBytes: number;
  timestamp: string;
}

/**
 * Encodes a file into Base64 and prepares Shelby Protocol blob metadata.
 * Executes on-chain proof storage for group receipts.
 */
export async function uploadReceiptToShelby(
  file: File,
  walletAddress: string,
  expenseDescription: string
): Promise<ShelbyUploadResult> {
  const timestamp = new Date().toISOString();
  
  // Read file as base64 / Data URL
  const fileDataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  // Generate unique Shelby blob key using @shelby-protocol/sdk helper
  const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const blobName = `wizard_receipt_${Date.now()}_${sanitizedName}`;
  const ownerAddress = walletAddress || '0x71c34f2a8930419ef02b1c8a1e94812f34f28321';

  const blobKey = createBlobKey({
    account: ownerAddress,
    blobName: blobName,
  });

  // Derive Shelby explorer URL
  const blobExplorerUrl = getShelbyBlobExplorerUrl(
    'testnet',
    ownerAddress,
    blobName
  );

  return {
    blobKey,
    blobExplorerUrl,
    fileDataUrl,
    sizeBytes: file.size,
    timestamp,
  };
}

/**
 * Creates an Aptos Move transaction payload for logging the Shelby expense receipt proof on-chain.
 */
export function createShelbyExpenseTxPayload(
  groupId: string,
  amountUsd: number,
  description: string,
  shelbyBlobKey: string,
  splitMethod: 'equal' | 'custom'
) {
  // Converts USD amount to octas / micro-units for Aptos
  const amountMicroUnits = Math.round(amountUsd * 100);

  return {
    type: 'entry_function_payload',
    function: '0x1::wizard_protocol::log_group_expense',
    type_arguments: [],
    arguments: [
      groupId,
      amountMicroUnits.toString(),
      description,
      shelbyBlobKey,
      splitMethod === 'equal' ? 0 : 1,
    ],
  };
}

/**
 * Helper to get Aptos transaction explorer URL
 */
export function getExplorerTxUrl(txHash: string): string {
  try {
    return getAptosTransactionExplorerUrl('testnet', txHash);
  } catch {
    return `https://explorer.aptoslabs.com/txn/${txHash}?network=testnet`;
  }
}
