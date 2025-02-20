import React from "react";

import { Link } from "react-router-dom";
import { IReceipt } from "../interfaces/IReceipt";
import { getReceipts } from "../cache/cache.util";

const Dashboard: React.FC = () => {
  const receipts: IReceipt[] = getReceipts();

  return (
    <div>
      <h1>All Receipts</h1>
      <ul>
        {Object.values(receipts).map((receipt: IReceipt) => (
          <li key={receipt.id}>
            <Link to={`/receipt/${receipt.id}`}>{receipt.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
