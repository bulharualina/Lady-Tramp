"use client";

import { GlobalContext } from "@/context";
import { getAllAdminDogs } from "@/services/dog";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);

  const [dogs, setDogs] = useState([]);
  const router = useRouter();

  async function getListOfDogs() {
    const res = await getAllAdminDogs();

    if (res.success) {
      setDogs(res.data);
    }
  }

  useEffect(() => {
    getListOfDogs();
  }, []);

  console.log(dogs);

  return (
    <main className="flex flex-col justify-between">
      {/* Hero Section */}
      <div className="home-bg-img w-full h-screen flex items-center justify-center text-center">
        <div className="p-8">
          <h1
            className="text-7xl font-bold text-white mb-4"
            style={{ marginTop: "50px", fontFamily: "Sylfaen" }}
          >
            Welcome to Lady & Tramp
          </h1>
          <p
            className="text-2xl text-white mb-6"
            style={{ fontFamily: "Sylfaen" }}
          >
            Begin a heartwarming journey by giving a forever home to a friend in
            need. Adopt a loyal companion today.
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about-us" className="py-16 text-center">
        <h2
          className="text-3xl font-bold mb-4"
          style={{ fontFamily: "Sylfaen" }}
        >
          About Us
        </h2>
        <p className="mb-6 px-4">
          We are a shelter dedicated to rescuing and finding loving homes for
          dogs. Our mission is to give abandoned dogs a second chance and
          promote responsible adoption.
        </p>
      </section>

      {/* Available Dogs Section */}
      <section className="py-16 text-center items-stretch bg-gray-100">
        <h2
          className="text-3xl font-bold mb-4"
          style={{ fontFamily: "Sylfaen" }}
        >
          Dogs Available for Adoption
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {dogs.slice(0, 3).map((dog) => (
            <div key={dog._id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={dog.imageUrl}
                alt={dog.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold">{dog.name}</h3>
              <button
                onClick={() => router.push(`/dog/${dog._id}`)}
                className="btn-secondary mt-2"
                style={{ fontFamily: "Sylfaen" }}
              >
                Details
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={() => router.push("/adoptions")}
          className="text-xl mt-6 btn-primary"
          style={{ fontFamily: "Sylfaen" }}
        >
          View All Dogs
        </button>
      </section>

      {/* Our mission Section*/}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">OUR MISSION</h2>
        <div className="carousel">
          {/* Add carousel with testimonials here */}
        </div>
      </section>

      {/* Volunteering and Donations Section */}
      <section
        className="text-xl py-16 text-center bg-gray-100"
        style={{ fontFamily: "Sylfaen" }}
      >
        <h2 className="text-3xl font-bold mb-4">How You Can Help</h2>
        <p className="mb-6 px-4">You can donate to support our activities.</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => router.push("/donate")}
            className="btn-primary"
          >
            Donate Now
          </button>
        </div>
      </section>

      {/* Blog or News Section */}
      <section
        className="text-xl py-16 text-center"
        style={{ fontFamily: "Sylfaen" }}
      >
        <h2 className="text-3xl font-bold mb-4">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {/* Add recent articles here */}
        </div>
        <button
          //onClick={() => router.push("/news")}
          className="mt-6 btn-primary"
        >
          Read More
        </button>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#C67C4E] text-white text-center">
        <div className="container mx-auto px-4 w-full">
          <div className="social-icons mb-4">
            <a
              href="https://www.facebook.com"
              className="mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com"
              className="mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.twitter.com"
              className="mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="footer-nav mb-4" style={{ fontFamily: "Sylfaen" }}>
            <ul>
              <li>
                <a href="/" className="mx-2">
                  Home
                </a>
              </li>
              <li>
                <a href="#about-us" className="mx-2">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="mx-2">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4" style={{ fontFamily: "Sylfaen" }}>
            <p>Address: St Example, Timisoara</p>
            <p>Phone: 0123-456-789</p>
            <p>Email: contact@ladytramp.com</p>
          </div>

          <p className="mt-4" style={{ fontFamily: "Sylfaen" }}>
            &copy; 2024 Lady & Tramp. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
