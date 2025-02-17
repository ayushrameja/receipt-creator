import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { IReceipt } from "./interfaces/IReceipt";

const App: React.FC = () => {
  const [receiptData, setReceiptData] = useState<IReceipt>({
    name: "Ayush Rameja",
    amount: "250",
    date: "12/12/25",
    time: "12:15 PM",
    place: "Noida, UP",
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
