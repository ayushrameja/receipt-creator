import jsPDF from "jspdf";
import "../styles/sidebar.scss";
import html2canvas from "html2canvas";
import downloadButton from "../assets/download.svg";
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

  const handleDownloadPDF = useCallback(() => {
    const receiptElement = document.querySelector(
      ".receipt-container"
    ) as HTMLElement;

    if (receiptElement) {
      html2canvas(receiptElement).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });

        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        const fileName = `Receipt_${receiptData.date}.pdf`;
        pdf.save(fileName);
      });
    }
  }, [receiptData.date]);

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
          <div className="nav-buttons">
            <button
              type="button"
              title="Download PDF"
              className="toggle-button"
              onClick={handleDownloadPDF}
            >
              <img src={downloadButton} alt="Download PDF" />
            </button>
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
          </div>
        </nav>
        <div className="content-wrapper">
          <ReceiptPreview receiptData={receiptData} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
