import React from "react";
import "../styles/Receipt.scss";
import cashLogo from "../assets/money.svg";
import { ReceiptProps } from "../interfaces/Receipt";
import uberLogo from "../assets/simple-icons_uber.svg";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";

const Receipt: React.FC<ReceiptProps> = ({
  customerName,
  date,
  tripCharge,
  rounding,
  total,
  paymentMethod,
  paymentTime,
  gstAmount,
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
  const styles = StyleSheet.create({
    page: {
      padding: 30,
      backgroundColor: "white",
      fontFamily: "Helvetica"
    },
    header: {
      marginBottom: 20,
      alignItems: "center"
    },
    logo: {
      width: 100,
      height: 45,
      marginBottom: 15,
      objectFit: "contain"
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 8
    },
    subtitle: {
      fontSize: 14,
      color: "#666",
      marginBottom: 25
    },
    fareSection: {
      marginBottom: 25,
      borderBottom: "1pt solid #eee",
      paddingBottom: 15
    },
    totalRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 15,
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#eee",
      borderBottomStyle: "solid"
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 8
    },
    label: {
      fontSize: 12,
      color: "#444"
    },
    value: {
      fontSize: 12,
      fontWeight: "bold"
    },
    paymentSection: {
      marginTop: 25,
      marginBottom: 25,
      borderBottom: "1pt solid #eee",
      paddingBottom: 15
    },
    locationSection: {
      marginTop: 15
    },
    locationPoint: {
      marginBottom: 10
    },
    footer: {
      marginTop: 30,
      fontSize: 10,
      color: "#666",
      textAlign: "center"
    }
  });

  const ReceiptPDF = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={uberLogo} style={styles.logo} />
          <Text style={styles.title}>Receipt for your ride</Text>
          <Text style={styles.subtitle}>{customerName} • {date}</Text>
        </View>

        <View style={styles.fareSection}>
          <View style={styles.totalRow}>
            <Text style={[styles.label, { fontSize: 16, fontWeight: "bold" }]}>Total</Text>
            <Text style={[styles.value, { fontSize: 16 }]}>₹{total.toFixed(2)}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Trip Charge</Text>
            <Text style={styles.value}>₹{tripCharge.toFixed(2)}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Rounding</Text>
            <Text style={styles.value}>₹{rounding.toFixed(2)}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>GST (included)</Text>
            <Text style={styles.value}>₹{gstAmount.toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.paymentSection}>
          <Text style={[styles.label, { fontSize: 14, fontWeight: "bold", marginBottom: 10 }]}>Payment Details</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Method</Text>
            <Text style={styles.value}>{paymentMethod}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Time</Text>
            <Text style={styles.value}>{paymentTime}</Text>
          </View>
        </View>

        <View style={styles.fareSection}>
          <Text style={[styles.label, { fontSize: 14, fontWeight: "bold", marginBottom: 10 }]}>Ride Details</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Driver</Text>
            <Text style={styles.value}>{driverName}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Vehicle</Text>
            <Text style={styles.value}>{vehicleType} ({licensePlate})</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Distance</Text>
            <Text style={styles.value}>{distance}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Duration</Text>
            <Text style={styles.value}>{duration}</Text>
          </View>
        </View>

        <View style={styles.locationSection}>
          <Text style={[styles.label, { fontSize: 14, fontWeight: "bold", marginBottom: 10 }]}>Journey</Text>
          <View style={styles.locationPoint}>
            <Text style={styles.label}>{pickupTime}</Text>
            <Text style={styles.value}>{pickupLocation}</Text>
          </View>
          <View style={styles.locationPoint}>
            <Text style={styles.label}>{dropTime}</Text>
            <Text style={styles.value}>{dropLocation}</Text>
          </View>
        </View>

        <Text style={styles.footer}>
          Fares are inclusive of GST. This is a computer generated receipt and does not require a physical signature.
        </Text>
      </Page>
    </Document>
  );

  return (
    <div className="receipt-container">
      <div className="receipt-header">
        <div className="header-top">
          <img src={uberLogo} alt="Uber" style={{ height: "45px" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <PDFDownloadLink
              document={<ReceiptPDF />}
              fileName={`uber-receipt-${date}.pdf`}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "0.8rem",
                textDecoration: "none",
              }}
            >
              {({ loading }) =>
                loading ? "Generating PDF..." : "Download PDF"
              }
            </PDFDownloadLink>
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
          <span className="underline">Visit the trip page</span> for more
          information, including invoices (where available)
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
