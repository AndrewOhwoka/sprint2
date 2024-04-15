import React, { useContext, useState } from "react";
import { ProductContext } from "./Context";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, total, shipping, clearCart } = useContext(ProductContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name || !email || !address || !cardNumber || !cardExpiry || !cardCvv) {
      alert("Please fill in all the required fields.");
      return;
    }

    // Process the payment
    // (You would typically integrate with a payment gateway here)
    console.log("Processing payment...");

    // Clear the cart after successful payment
    clearCart();

    // Redirect the user to the success page
    navigate("/success");
  };

  return (
    <div
      className="checkout-container"
      style={{
        backgroundColor: "#f5f5f5",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ color: "#333", marginBottom: "1.5rem" }}>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              width: "50%",
              padding: "0.75rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "50%",
              padding: "0.75rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="address" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>
            Address:
          </label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            style={{
              width: "50%",
              padding: "0.75rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
              resize: "vertical",
            }}
          ></textarea>
        </div>
        <div className="form-group" style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="card-number" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>
            Card Number:
          </label>
          <input
            type="text"
            id="card-number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            style={{
              width: "50%",
              padding: "0.75rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="card-expiry" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>
            Expiry Date:
          </label>
          <input
            type="text"
            id="card-expiry"
            value={cardExpiry}
            onChange={(e) => setCardExpiry(e.target.value)}
            required
            style={{
              width: "50%",
              padding: "0.75rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="card-cvv" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>
            CVV:
          </label>
          <input
            type="text"
            id="card-cvv"
            value={cardCvv}
            onChange={(e) => setCardCvv(e.target.value)}
            required
            style={{
              width: "50%",
              padding: "0.75rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          />
        </div>
        <div className="order-summary" style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ color: "#333", marginBottom: "1rem" }}>Order Summary</h3>
          <p style={{ color: "#555", marginBottom: "0.5rem" }}>Total: ${total.toFixed(2)}</p>
          <p style={{ color: "#555", marginBottom: "0.5rem" }}>Shipping: ${shipping.toFixed(2)}</p>
          <p style={{ color: "#555", marginBottom: "1rem" }}>Total Amount: ${(total + shipping).toFixed(2)}</p>
        </div>
        <button
          type="submit"
          className="checkout-btn"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "0.75rem 1.5rem",
            borderRadius: "4px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Place Order
        </button>
      </form>
    </div>
  );
}