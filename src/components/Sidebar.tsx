import "../styles/sidebar.scss";
import toggleIcon from "../assets/toggle-sidebar.svg";
import React, { useState, useEffect, useCallback } from "react";

import ReceiptForm from "./ReceiptForm/ReceiptForm";
import { SidebarProps } from "../interfaces/IReceipt";
import ReceiptPreview from "./ReceiptPreview/ReceiptPreview";

const Sidebar: React.FC<SidebarProps> = ({
  children,
  receiptData,
  setReceiptData,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        (event.metaKey || event.ctrlKey) &&
        event.shiftKey &&
        event.key.toLowerCase() === "s"
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [toggleSidebar]);

  return (
    <div className={`sidebar-container ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Edit Receipt</h2>
          <button className="toggle-button" onClick={toggleSidebar}>
            <img src={toggleIcon} alt="Toggle sidebar" />
          </button>
        </div>
        <div className="sidebar-content">
          <ReceiptForm
            receiptData={receiptData}
            setReceiptData={setReceiptData}
          />
        </div>
        {!isCollapsed && <div className="sidebar-content">{children}</div>}
      </div>
      <div className="main-content">
        <nav>
          <h2>Receipt Preview</h2>
          {isCollapsed && (
            <button
              type="button"
              title="Toggle sidebar (⌘/Ctrl + Shift + S)"
              className="toggle-button"
              onClick={toggleSidebar}
            >
              <img src={toggleIcon} alt="Toggle sidebar" />
            </button>
          )}
        </nav>
        <div className="content-wrapper">
          <ReceiptPreview receiptData={receiptData} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
