import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { IReceipt } from "./interfaces/IReceipt";

const App: React.FC = () => {
  const [receiptData, setReceiptData] = useState<IReceipt>({
    date: "12/12/25",
    customerName: "Ayush Rameja",
    total: 250,
    tripCharge: 100,
    rounding: 10,
    paymentMethod: "Cash",
    paymentTime: "12:15 PM",
    driverName: "John",
    licensePlate: "XX XX XX XXXX",
    vehicleType: "Sedan",
    distance: "0",
    duration: "0",
    pickupTime: "00:00",
    dropTime: "00:00",
    pickupLocation: "Pickup Location",
    dropLocation: "Drop Location",
    gstAmount: 0,
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
