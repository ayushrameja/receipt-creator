import React from "react";
import { ReceiptFormProps } from "../../interfaces/IReceipt";
import "../../styles/receipt-form.scss";

const ReceiptForm: React.FC<ReceiptFormProps> = ({
  receiptData,
  setReceiptData,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReceiptData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="receipt-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={receiptData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={receiptData.amount}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={receiptData.date}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={receiptData.time}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="place">Place:</label>
        <input
          type="text"
          id="place"
          name="place"
          value={receiptData.place}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ReceiptForm;
