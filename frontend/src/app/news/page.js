<<<<<<< HEAD
"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faImages,
  faInfo,
  faInfoCircle,
  faNewspaper,
  faStar,
  faStarAndCrescent,
} from "@fortawesome/free-solid-svg-icons";

const events = [
  {
    title: "Tocăniță pentru toți Bobiță",
    date: "10 Iunie 2024",
    description:
      "Vedete din diverse domenii gătesc o masă caldă pentru câinii din adăpost.",
    link: "#",
  },
  {
    title: "Maratonul Adopțiilor",
    date: "25 Iunie 2024",
    description:
      "Un eveniment special pentru promovarea adopțiilor responsabile.",
    link: "#",
  },
  {
    title: "Ziua Porților Deschise",
    date: "5 Iulie 2024",
    description:
      "Vizitează adăpostul nostru și întâlnește câinii care caută o casă.",
    link: "#",
  },
=======
'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faImages, faInfo, faInfoCircle, faNewspaper, faStar, faStarAndCrescent } from '@fortawesome/free-solid-svg-icons';

const events = [
  {
    title: 'Tocăniță pentru toți Bobiță',
    date: '10 Iunie 2024',
    description: 'Vedete din diverse domenii gătesc o masă caldă pentru câinii din adăpost.',
    link: '#'
  },
  {
    title: 'Maratonul Adopțiilor',
    date: '25 Iunie 2024',
    description: 'Un eveniment special pentru promovarea adopțiilor responsabile.',
    link: '#'
  },
  {
    title: 'Ziua Porților Deschise',
    date: '5 Iulie 2024',
    description: 'Vizitează adăpostul nostru și întâlnește câinii care caută o casă.',
    link: '#'
  }
>>>>>>> 193af1b896ce52e8a6c79619e9ed354f90dfcf83
];

const successStories = [
  {
<<<<<<< HEAD
    title: "Max și familia lui iubitoare",
    description:
      "Max a fost adoptat de o familie minunată și acum trăiește fericit.",
    link: "#",
  },
  {
    title: "Luna și noua ei viață",
    description: "Luna a găsit o casă unde este iubită și îngrijită.",
    link: "#",
  },
=======
    title: 'Max și familia lui iubitoare',
    description: 'Max a fost adoptat de o familie minunată și acum trăiește fericit.',
    link: '#'
  },
  {
    title: 'Luna și noua ei viață',
    description: 'Luna a găsit o casă unde este iubită și îngrijită.',
    link: '#'
  }
>>>>>>> 193af1b896ce52e8a6c79619e9ed354f90dfcf83
];

const careTips = [
  {
<<<<<<< HEAD
    title: "Cum să îngrijești un câine senior",
    description:
      "Sfaturi pentru a oferi cea mai bună îngrijire câinilor seniori.",
    link: "#",
  },
  {
    title: "Alimentația corectă a pisicilor",
    description: "Ghid complet despre alimentația sănătoasă pentru pisici.",
    link: "#",
  },
=======
    title: 'Cum să îngrijești un câine senior',
    description: 'Sfaturi pentru a oferi cea mai bună îngrijire câinilor seniori.',
    link: '#'
  },
  {
    title: 'Alimentația corectă a pisicilor',
    description: 'Ghid complet despre alimentația sănătoasă pentru pisici.',
    link: '#'
  }
>>>>>>> 193af1b896ce52e8a6c79619e9ed354f90dfcf83
];

const legislativeNews = [
  {
<<<<<<< HEAD
    title: "Noua lege privind protecția animalelor",
    description:
      "Detalii despre schimbările recente în legislația privind protecția animalelor.",
    link: "#",
  },
  {
    title: "Reguli noi pentru adopțiile de animale",
    description:
      "Ce trebuie să știi despre noile reguli pentru adopțiile de animale.",
    link: "#",
  },
=======
    title: 'Noua lege privind protecția animalelor',
    description: 'Detalii despre schimbările recente în legislația privind protecția animalelor.',
    link: '#'
  },
  {
    title: 'Reguli noi pentru adopțiile de animale',
    description: 'Ce trebuie să știi despre noile reguli pentru adopțiile de animale.',
    link: '#'
  }
>>>>>>> 193af1b896ce52e8a6c79619e9ed354f90dfcf83
];

const interviewsAndArticles = [
  {
<<<<<<< HEAD
    title: "Interviu cu Dr. Popescu, veterinar",
    description:
      "Discutăm despre cele mai comune probleme de sănătate la câini.",
    link: "#",
  },
  {
    title: "Povestea unui voluntar: Maria",
    description: "Maria ne împărtășește experiențele sale din adăpost.",
    link: "#",
  },
];

// Linkul către galeria foto
const galleryLink =
  "https://adapostulsperanta.ro/evenimente/tocanita-virgil-iantu/";

export default function News() {
  return (
    <div
      className="text-black"
      style={{ marginTop: "50px", fontFamily: "Sylfaen" }}
    >
      <div className="section">
        <h1
          className="section-title self-center text-4xl font-semibold whitespace-nowrap text-[#3C2925]"
          style={{ fontFamily: "Ink Free" }}
        >
          EVENIMENTE
        </h1>
=======
    title: 'Interviu cu Dr. Popescu, veterinar',
    description: 'Discutăm despre cele mai comune probleme de sănătate la câini.',
    link: '#'
  },
  {
    title: 'Povestea unui voluntar: Maria',
    description: 'Maria ne împărtășește experiențele sale din adăpost.',
    link: '#'
  }
];

// Linkul către galeria foto
const galleryLink = 'https://adapostulsperanta.ro/evenimente/tocanita-virgil-iantu/';

export default function News() {
  return (
    <div className="text-black" style={{ marginTop: '50px', fontFamily: 'Sylfaen' }}>
      <div className="section">
        <h1 className="section-title self-center text-4xl font-semibold whitespace-nowrap text-[#3C2925]" style={{ fontFamily: 'Ink Free' }}>EVENIMENTE</h1>
>>>>>>> 193af1b896ce52e8a6c79619e9ed354f90dfcf83
        <div className="container">
          {events.map((event, index) => (
            <div key={index} className="item">
              <div className="item-details">
                <h3>{event.title}</h3>
                <p>Data: {event.date}</p>
                <p>{event.description}</p>
                <a href={event.link}>Citește mai mult</a>
              </div>
              <FontAwesomeIcon icon={faImages} size="2x" className="icon" />
            </div>
          ))}
        </div>
      </div>
      <div className="section">
<<<<<<< HEAD
        <h2
          className="section-title self-center text-4xl font-semibold whitespace-nowrap text-[#3C2925]"
          style={{ fontFamily: "Ink Free" }}
        >
          POVESTI DE SUCCES
        </h2>
=======
        <h2 className="section-title self-center text-4xl font-semibold whitespace-nowrap text-[#3C2925]" style={{ fontFamily: 'Ink Free' }}>POVESTI DE SUCCES</h2>
>>>>>>> 193af1b896ce52e8a6c79619e9ed354f90dfcf83
        <div className="container">
          {successStories.map((story, index) => (
            <div key={index} className="item">
              <div className="item-details">
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <a href={story.link}>Citește mai mult</a>
              </div>
              <FontAwesomeIcon icon={faStar} size="2x" className="icon" />
            </div>
          ))}
        </div>
      </div>
      <div className="section">
<<<<<<< HEAD
        <h2
          className="section-title self-center text-4xl font-semibold whitespace-nowrap text-[#3C2925]"
          style={{ fontFamily: "Ink Free" }}
        >
          SFATURI PENTRU INGRIJIREA ANIMALELOR
        </h2>
=======
        <h2 className="section-title self-center text-4xl font-semibold whitespace-nowrap text-[#3C2925]" style={{ fontFamily: 'Ink Free' }}>SFATURI PENTRU INGRIJIREA ANIMALELOR</h2>
>>>>>>> 193af1b896ce52e8a6c79619e9ed354f90dfcf83
        <div className="container">
          {careTips.map((tip, index) => (
            <div key={index} className="item">
              <div className="item-details">
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
                <a href={tip.link}>Citește mai mult</a>
              </div>
              <FontAwesomeIcon icon={faInfoCircle} size="2x" className="icon" />
            </div>
          ))}
        </div>
      </div>
      <div className="section">
<<<<<<< HEAD
        <h2
          className="section-title self-center text-4xl font-semibold whitespace-nowrap text-[#3C2925]"
          style={{ fontFamily: "Ink Free" }}
        >
          NOUTATI LEGISLATIVE
        </h2>
=======
        <h2 className="section-title self-center text-4xl font-semibold whitespace-nowrap text-[#3C2925]" style={{ fontFamily: 'Ink Free' }}>NOUTATI LEGISLATIVE</h2>
>>>>>>> 193af1b896ce52e8a6c79619e9ed354f90dfcf83
        <div className="container">
          {legislativeNews.map((news, index) => (
            <div key={index} className="item">
              <div className="item-details">
                <h3>{news.title}</h3>
                <p>{news.description}</p>
                <a href={news.link}>Citește mai mult</a>
              </div>
              <FontAwesomeIcon icon={faFolderOpen} size="2x" className="icon" />
            </div>
          ))}
        </div>
      </div>
      <div className="section">
<<<<<<< HEAD
        <h2
          className="section-title self-center text-4xl font-semibold whitespace-nowrap text-[#3C2925]"
          style={{ fontFamily: "Ink Free" }}
        >
          INTERVIURI SI ARTICOLE
        </h2>
=======
        <h2 className="section-title self-center text-4xl font-semibold whitespace-nowrap text-[#3C2925]" style={{ fontFamily: 'Ink Free' }}>INTERVIURI SI ARTICOLE</h2>
>>>>>>> 193af1b896ce52e8a6c79619e9ed354f90dfcf83
        <div className="container">
          {interviewsAndArticles.map((article, index) => (
            <div key={index} className="item">
              <div className="item-details">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.link}>Citește mai mult</a>
              </div>
              <FontAwesomeIcon icon={faNewspaper} size="2x" className="icon" />
            </div>
          ))}
        </div>
      </div>
      <div className="section">
<<<<<<< HEAD
        <h2
          className="section-title self-center text-4xl font-semibold whitespace-nowrap text-[#3C2925]"
          style={{ fontFamily: "Ink Free" }}
        >
          GALERIE FOTO
        </h2>
        <div className="container" style={{ marginTop: "30px" }}>
=======
        <h2 className="section-title self-center text-4xl font-semibold whitespace-nowrap text-[#3C2925]" style={{ fontFamily: 'Ink Free' }}>GALERIE FOTO</h2>
        <div className="container" style={{  marginTop: '30px'}}>
>>>>>>> 193af1b896ce52e8a6c79619e9ed354f90dfcf83
          {/* Iconița pentru galerie foto */}
          <a href={galleryLink} className="gallery-link">
            <FontAwesomeIcon icon={faImages} size="4x" />
          </a>
        </div>
      </div>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: auto;
          background-color: #fff;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
        }
        .section-title {
          font-size: 24px;
          margin-bottom: 10px;
          text-align: center;
        }
        .item {
          border-bottom: 1px solid #ddd;
          padding: 15px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .item-details {
          flex: 1;
        }
        .item h3 {
          margin: 0;
          color: #333;
        }
        .item p {
          margin: 5px 0;
          color: #666;
        }
        .icon {
          margin-left: 20px;
          color: #666;
        }
        .gallery-link {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
