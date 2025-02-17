import React from "react";
import { ReceiptPreviewProps } from "../../interfaces/IReceipt";
import "../../styles/receipt-preview.scss";

const ReceiptPreview: React.FC<ReceiptPreviewProps> = ({ receiptData }) => {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="receipt-preview">
      <div className="receipt-container">
        <div className="receipt-header">
          <div className="logo-placeholder">STORE NAME</div>
          <div className="receipt-title">Sales Receipt</div>
          <div>123 Business Street</div>
          <div>City, State 12345</div>
          <div>Tel: (555) 123-4567</div>
        </div>

        <div className="receipt-details">
          <div className="detail-row">
            <span className="label">Date:</span>
            <span>{receiptData.date || currentDate}</span>
          </div>
          <div className="detail-row">
            <span className="label">Time:</span>
            <span>{receiptData.time || currentTime}</span>
          </div>
          <div className="detail-row">
            <span className="label">Receipt #:</span>
            <span>INV-{Math.floor(Math.random() * 10000)}</span>
          </div>
        </div>

        <div className="receipt-items">
          <div className="item-row">
            <span className="item-name">{receiptData.name || "Item"}</span>
            <span className="item-amount">${receiptData.amount || "0.00"}</span>
          </div>
        </div>

        <div className="receipt-total">
          <div className="detail-row">
            <span className="label">Total:</span>
            <span>${receiptData.amount || "0.00"}</span>
          </div>
        </div>

        <div className="receipt-footer">
          <div className="footer-text">Thank you for your business!</div>
          <div className="footer-text">{receiptData.place || "Store Location"}</div>
          <div className="footer-text">Please come again</div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPreview;
