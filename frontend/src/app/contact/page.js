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
    <div className="mx-auto mt-10 max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
      <div className="contact-form">
        <h2>Contact us</h2>
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
            <label>Name</label>
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
            <label>Email</label>
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
            <label>Message</label>
          </div>
          <button type="submit" className="button-custom">
            Send Message
          </button>
        </form>
      </div>
      <Notification />
    </div>
  );
}
