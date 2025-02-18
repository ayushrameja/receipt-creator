export interface IReceipt {
  date: string;
  customerName: string;
  total: number;
  tripCharge: number;
  rounding: number;
  paymentMethod: string;
  paymentTime: string;
  driverName: string;
  licensePlate: string;
  vehicleType: string;
  distance: string;
  duration: string;
  pickupTime: string;
  dropTime: string;
  pickupLocation: string;
  dropLocation: string;
  gstAmount: number;
  linkRedirect: string;
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
