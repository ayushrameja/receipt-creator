import React from "react";
import Receipt from "./components/recipt";

const App: React.FC = () => {
  const receiptData = {
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
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Receipt {...receiptData} />
    </div>
  );
};

export default App;
