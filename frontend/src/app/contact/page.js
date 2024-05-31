"use client";

import React, { useState } from "react";
import "../globals.css";
import { toast } from "react-toastify";
import Notification from "@/components/Notification";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    toast.success("Thank you for your message! We'll reach out soon.", {
      position: "top-right",
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className="contact-bg-img mx-auto mt-10 max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center"
      style={{ marginTop: "50px", fontFamily: "Sylfaen" }}
    >
      <div
        className="contact-form text-1xl opacity-80"
        style={{ fontFamily: "Sylfaen" }}
      >
        <div className="text-xl" style={{ fontFamily: "Ink Free" }}>
          <h2>CONTACT US</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <label>NAME</label>
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <label>EMAIL</label>
          </div>
          <div className="input-container">
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            ></textarea>
            <label>MESSAGE</label>
          </div>
          <button
            type="submit"
            className="button-custom"
            style={{ fontFamily: "Ink Free" }}
          >
            <div className="contact-form text-1xl">SEND MESSAGE</div>
          </button>
        </form>
      </div>
      <Notification />

      <div
        className="contact-info"
        style={{
          position: "absolute",
          marginTop: "100000000px",
          bottom: 0,
          right: "150px",
          padding: "12px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          fontFamily: "Ink Free",
        }}
      >
        <h3>Despre Noi</h3>
        <div
          className="contact-info"
          style={{ marginTop: "10px", fontFamily: "Ink Free" }}
        >
          <h3>Abonează-te la Newsletter</h3>
        </div>
      </div>

      <div
        className="contact-info"
        style={{
          marginTop: "1000px",
          position: "absolute",
          bottom: 0,
          right: "385px",
          padding: "5px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          fontFamily: "Ink Free",
        }}
      >
        <h3>Linkuri Utile</h3>
        <ul>
          <li>
            <a href="https://adapostulsperanta.ro/politica-de-confidentialitate/">
              Politica si confidentialitate
            </a>
          </li>
          <li>
            <a href="https://adapostulsperanta.ro/politica-de-cookies/">
              Cookies
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
