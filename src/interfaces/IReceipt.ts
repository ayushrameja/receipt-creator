export interface IReceipt {
  name: string;
  amount: string;
  date: string;
  time: string;
  place: string;
}

export interface SidebarProps {
  children?: React.ReactNode;
  receiptData: IReceipt;
  setReceiptData: React.Dispatch<React.SetStateAction<IReceipt>>;
}

export interface ReceiptFormProps {
  receiptData: IReceipt;
  setReceiptData: React.Dispatch<React.SetStateAction<IReceipt>>;
}

export interface ReceiptPreviewProps {
  receiptData: IReceipt;
}
