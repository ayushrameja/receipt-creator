import React from "react";
import "../styles/Receipt.scss";
import cashLogo from "../assets/money.svg";
import { ReceiptProps } from "../interfaces/Receipt";
import uberLogo from "../assets/simple-icons_uber.svg";

const Receipt: React.FC<ReceiptProps> = ({
  customerName,
  date,
  tripCharge,
  rounding,
  paymentMethod,
  paymentTime,
  driverName,
  licensePlate,
  vehicleType,
  distance,
  duration,
  pickupTime,
  pickupLocation,
  dropTime,
  dropLocation,
}) => {
  // Calculate the total based on tripCharge and rounding
  const total = tripCharge + rounding;
  
  // Calculate GST as 5.5% of the total
  const gstAmount = total * 0.055;

  return (
    <div className="receipt-container">
      <div className="receipt-header">
        <div className="header-top">
          <img src={uberLogo} alt="Uber" style={{ height: "45px" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span className="date">{date}</span>
          </div>
        </div>
        <h2>Here's your receipt for your ride, {customerName}</h2>
        <p>We hope you enjoyed your ride this morning.</p>
      </div>
      <div className="fare-breakdown">
        <div className="total-row">
          <h3>Total</h3>
          <span>₹{total.toFixed(2)}</span>
        </div>
        <div className="breakdown-details">
          <div className="row-top">
            <span>Trip Charge</span>
            <span>₹{tripCharge.toFixed(2)}</span>
          </div>
          <div className="row-bottom">
            <div className="nested-row">
              <span>Subtotal</span>
              <span>₹{tripCharge.toFixed(2)}</span>
            </div>
            <div className="nested-row">
              <span>Rounding</span>
              <span>₹{rounding.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="payment-info">
        <h3>Payments</h3>
        <div className="payment-row">
          <div className="payment-method">
            <span className="emoji">
              <img src={cashLogo} alt="Cash" />
            </span>
            <div className="details">
              <div className="method">{paymentMethod}</div>
              <div className="time">{paymentTime}</div>
            </div>
          </div>
          <span className="total">₹{total.toFixed(2)}</span>
        </div>

        <p className="visit-info">
          <a 
            href="https://m.uber.com/go/home" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline"
            style={{ textDecoration: 'none', color: 'blue', cursor: 'pointer' }}
          >
            Visit the trip page
          </a>{" "}
          for more information, including invoices (where available)
        </p>

        <p className="gst-info">
          The total of ₹{total.toFixed(2)} has a GST of ₹{gstAmount.toFixed(2)}{" "}
          included.
        </p>
      </div>

      <div className="ride-details">
        <p className="rider-info">You rode with {driverName}</p>
        <p className="license-plate">License Plate: {licensePlate}</p>
        <div className="vehicle-info">
          <span>{vehicleType}</span>
          <span>
            {distance} kilometers | {duration} min
          </span>
        </div>
        <div className="journey-details">
          <div className="location-point">
            <div className="dot"></div>
            <div className="location-info">
              <p className="address">
                {pickupTime} | <span>{pickupLocation}</span>
              </p>
            </div>
          </div>
          <div className="location-point">
            <div className="dot"></div>
            <div className="location-info">
              <p className="address">
                {dropTime} | <span>{dropLocation}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="footer-note">
        Fares are inclusive of GST. Please download the tax invoice from the
        trip detail page for a full tax breakdown.
      </p>
    </div>
  );
};

export default Receipt;
