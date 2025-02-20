import { IReceipt } from "../interfaces/IReceipt";
import { getReceipt } from "../cache/cache.util";

import React from "react";
import { useParams, Navigate } from "react-router-dom";

const ReceiptPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Navigate to="/" replace />;
  }

  const receipt: IReceipt | null = getReceipt(id);

  if (!receipt) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1>Receipt {id}</h1>
      <p>Name: {receipt.data.name}</p>
      <p>Email: {receipt.data.email}</p>
      <p>Date: {receipt.data.date}</p>
      <p>Amount: {receipt.data.amount}</p>
      <p>Currency: {receipt.data.currency}</p>
      <p>Status: {receipt.data.status}</p>
    </div>
  );
};

export default ReceiptPage;
