import React, { useState } from "react";
import Receipt from "./components/recipt";

const App: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [receiptData, setReceiptData] = useState({
    customerName: "Chitwan",
    date: "December 11, 2024",
    tripCharge: 54.82,
    rounding: 0.18,
    total: 55.0,
    paymentMethod: "Cash",
    paymentTime: "12/11/24 11:02 AM",
    gstAmount: 2.9,
    driverName: "SUBODH KUMAR SINGH",
    licensePlate: "DL3SFC8221",
    vehicleType: "Moto Saver",
    distance: "6.60",
    duration: "17",
    pickupTime: "10:44 AM",
    pickupLocation:
      "A31, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309, India",
    dropTime: "11:02 AM",
    dropLocation:
      "Qa Infotech, Block A, Sector 68, Noida, Uttar Pradesh 201307, India",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReceiptData((prev) => ({
      ...prev,
      [name]:
        name.includes("trip") ||
        name.includes("total") ||
        name.includes("rounding") ||
        name.includes("gst")
          ? parseFloat(value) || 0
          : value,
    }));
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        gap: "2rem",
        justifyContent: "flex-start",
        position: "relative",
        paddingLeft: isFormVisible ? "40px" : "20px",
        transition: "all 0.3s ease-in-out"
      }}
    >
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: "5px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        {isFormVisible ? "Hide Form ←" : "Show Form →"}
      </button>
      <Receipt {...receiptData} />
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          width: "400px",
          height: "fit-content",
          transition: "all 0.3s ease-in-out",
          display: isFormVisible ? "block" : "none",
          position: "relative",
          overflowY: "auto",
          marginRight: "20px"
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Edit Receipt</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Customer Name</label>
            <input
              type="text"
              name="customerName"
              value={receiptData.customerName}
              onChange={handleInputChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Date</label>
            <input
              type="text"
              name="date"
              value={receiptData.date}
              onChange={handleInputChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Trip Charge</label>
            <input
              type="number"
              name="tripCharge"
              value={receiptData.tripCharge}
              onChange={handleInputChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Rounding</label>
            <input
              type="number"
              name="rounding"
              value={receiptData.rounding}
              onChange={handleInputChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Total</label>
            <input
              type="number"
              name="total"
              value={receiptData.total}
              onChange={handleInputChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Payment Method</label>
            <input
              type="text"
              name="paymentMethod"
              value={receiptData.paymentMethod}
              onChange={handleInputChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Payment Time</label>
            <input
              type="text"
              name="paymentTime"
              value={receiptData.paymentTime}
              onChange={handleInputChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>GST Amount</label>
            <input
              type="number"
              name="gstAmount"
              value={receiptData.gstAmount}
              onChange={handleInputChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Driver Name</label>
            <input
              type="text"
              name="driverName"
              value={receiptData.driverName}
              onChange={handleInputChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>License Plate</label>
            <input
              type="text"
              name="licensePlate"
              value={receiptData.licensePlate}
              onChange={handleInputChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Vehicle Type</label>
            <input
              type="text"
              name="vehicleType"
              value={receiptData.vehicleType}
              onChange={handleInputChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Distance</label>
            <input
              type="text"
              name="distance"
              value={receiptData.distance}
              onChange={handleInputChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Duration</label>
            <input
              type="text"
              name="duration"
              value={receiptData.duration}
              onChange={handleInputChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Pickup Time</label>
            <input
              type="text"
              name="pickupTime"
              value={receiptData.pickupTime}
              onChange={handleInputChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Pickup Location</label>
            <input
              type="text"
              name="pickupLocation"
              value={receiptData.pickupLocation}
              onChange={handleInputChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Drop Time</label>
            <input
              type="text"
              name="dropTime"
              value={receiptData.dropTime}
              onChange={handleInputChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Drop Location</label>
            <input
              type="text"
              name="dropLocation"
              value={receiptData.dropLocation}
              onChange={handleInputChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
