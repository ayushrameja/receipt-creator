export interface ReceiptProps {
  customerName: string;
  date: string;
  tripCharge: number;
  rounding: number;
  total: number;
  paymentMethod: string;
  paymentTime: string;
  gstAmount: number;
  driverName: string;
  licensePlate: string;
  vehicleType: string;
  distance: string;
  duration: string;
  pickupTime: string;
  pickupLocation: string;
  dropTime: string;
  dropLocation: string;
}