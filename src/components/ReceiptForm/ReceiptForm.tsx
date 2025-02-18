import React from "react";
import "../../styles/receipt-form.scss";
import { ReceiptFormProps } from "../../interfaces/IReceipt";

const ReceiptForm: React.FC<ReceiptFormProps> = ({
  receiptData,
  setReceiptData,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedValue =
      e.target.type === "number" ? parseFloat(value) || 0 : value;

    if (name === "tripCharge") {
      const tripCharge = parseFloat(value) || 0;
      const gstAmount = Number((tripCharge * 0.05).toFixed(2));
      const subtotal = tripCharge + gstAmount;
      const roundedTotal = Math.ceil(subtotal * 20) / 20;
      const rounding = Number((roundedTotal - subtotal).toFixed(2));
      const total = Number((tripCharge + gstAmount + rounding).toFixed(2));

      setReceiptData((prev) => ({
        ...prev,
        tripCharge,
        gstAmount,
        rounding,
        total
      }));
    } else {
      setReceiptData((prev) => ({
        ...prev,
        [name]: updatedValue,
      }));
    }
  };

  return (
    <div className="receipt-form">
      <div className="form-group">
        <label htmlFor="customerName">Customer Name:</label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          value={receiptData.customerName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="total">Total Amount:</label>
        <input
          type="number"
          id="total"
          name="total"
          value={receiptData.total}
          onChange={handleChange}
          step="0.01"
        />
      </div>
      <div className="form-group">
        <label htmlFor="tripCharge">Trip Charge:</label>
        <input
          type="number"
          id="tripCharge"
          name="tripCharge"
          value={receiptData.tripCharge}
          onChange={handleChange}
          step="0.01"
        />
      </div>
      <div className="form-group">
        <label htmlFor="rounding">Rounding:</label>
        <input
          type="number"
          id="rounding"
          name="rounding"
          value={receiptData.rounding}
          onChange={handleChange}
          step="0.01"
        />
      </div>
      <div className="form-group">
        <label htmlFor="gstAmount">GST Amount:</label>
        <input
          type="number"
          id="gstAmount"
          name="gstAmount"
          value={receiptData.gstAmount}
          onChange={handleChange}
          step="0.01"
        />
      </div>
      <div className="form-group">
        <label htmlFor="paymentMethod">Payment Method:</label>
        <input
          type="text"
          id="paymentMethod"
          name="paymentMethod"
          value={receiptData.paymentMethod}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="paymentTime">Payment Time:</label>
        <input
          type="text"
          id="paymentTime"
          name="paymentTime"
          value={receiptData.paymentTime}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="driverName">Driver Name:</label>
        <input
          type="text"
          id="driverName"
          name="driverName"
          value={receiptData.driverName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="licensePlate">License Plate:</label>
        <input
          type="text"
          id="licensePlate"
          name="licensePlate"
          value={receiptData.licensePlate}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="vehicleType">Vehicle Type:</label>
        <input
          type="text"
          id="vehicleType"
          name="vehicleType"
          value={receiptData.vehicleType}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="distance">Distance (km):</label>
        <input
          type="text"
          id="distance"
          name="distance"
          value={receiptData.distance}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="duration">Duration (min):</label>
        <input
          type="text"
          id="duration"
          name="duration"
          value={receiptData.duration}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pickupTime">Pickup Time:</label>
        <input
          type="text"
          id="pickupTime"
          name="pickupTime"
          value={receiptData.pickupTime}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dropTime">Drop Time:</label>
        <input
          type="text"
          id="dropTime"
          name="dropTime"
          value={receiptData.dropTime}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pickupLocation">Pickup Location:</label>
        <input
          type="text"
          id="pickupLocation"
          name="pickupLocation"
          value={receiptData.pickupLocation}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dropLocation">Drop Location:</label>
        <input
          type="text"
          id="dropLocation"
          name="dropLocation"
          value={receiptData.dropLocation}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ReceiptForm;
