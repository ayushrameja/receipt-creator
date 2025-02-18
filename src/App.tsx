import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { IReceipt } from "./interfaces/IReceipt";

const App: React.FC = () => {
  const [receiptData, setReceiptData] = useState<IReceipt>({
    date: "December 11, 2024",
    customerName: "Chitwan",
    linkRedirect: "https://www.uber.com",
    total: 55.0,
    tripCharge: 54.82,
    rounding: 0.18,
    gstAmount: 2.9,
    paymentMethod: "Cash",
    paymentTime: "12/11/24 11:02 AM",
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

  return (
    <div>
      <Sidebar
        receiptData={receiptData}
        setReceiptData={setReceiptData}
      ></Sidebar>
    </div>
  );
};

export default App;
