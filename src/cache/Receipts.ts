import { IReceipt } from "../interfaces/IReceipt";

export const receipts: Record<string, IReceipt> = {
  "123e4567-e89b-12d3-a456-426614174000": {
    id: "123e4567-e89b-12d3-a456-426614174000",
    title: "Receipt 1",
    data: {
      name: "John Doe",
      email: "john@example.com",
      date: "2023-01-01",
      amount: 100,
      currency: "USD",
      status: "pending",
      description: "This is a description",
    },
  },
  "123e4567-e89b-12d3-a456-426614174001": {
    id: "123e4567-e89b-12d3-a456-426614174001",
    title: "Receipt 2",
    data: {
      name: "Jane Doe",
      email: "jane@example.com",
      date: "2023-01-02",
      amount: 200,
      currency: "USD",
      status: "pending",
      description: "This is a description",
    },
  },
};
