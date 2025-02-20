export interface IReceipt {
  id: string;
  title: string;
  data: {
    name: string;
    email: string;
    date: string;
    amount: number;
    currency: string;
    status: string;
    description: string;
  };
}
