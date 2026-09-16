
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../src/assets/airbnb.png";
import "./Home.css";

const properties = [
  {
    "id": 1,
    "title": "Modern Apartment in Cairo",
    "location": "New Cairo, Egypt",
    "price": 950,
    "rating": 4.6,
    "nights": 2,
    "badge": "Guest favorite",
    "images": [
      "/src/assets/apartment1.jpg",
      "/src/assets/apartment2.jpg",
      "/src/assets/apartment3.jpg"
    ],
    "guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Pool",
      "Parking"
    ],
    "description": "A comfortable modern apartment in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Sara",
    "hostYears": 2
  },
  {
    "id": 2,
    "title": "Cozy Apartment in Cairo",
    "location": "Cairo, Egypt",
    "price": 1200,
    "rating": 4.68,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/apartment2.jpg",
      "/src/assets/apartment3.jpg",
      "/src/assets/apartment4.jpg"
    ],
    "guests": 3,
    "bedrooms": 2,
    "beds": 3,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning"
    ],
    "description": "A comfortable cozy apartment in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Omar",
    "hostYears": 3
  },
  {
    "id": 3,
    "title": "Luxury Villa in Cairo",
    "location": "Cairo, Egypt",
    "price": 1450,
    "rating": 4.76,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/apartment3.jpg",
      "/src/assets/apartment4.jpg",
      "/src/assets/apartment5.jpg"
    ],
    "guests": 4,
    "bedrooms": 3,
    "beds": 3,
    "bathrooms": 3,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen"
    ],
    "description": "A comfortable luxury villa in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Mariam",
    "hostYears": 4
  },
  {
    "id": 4,
    "title": "Sea View Apartment in Cairo",
    "location": "New Cairo, Egypt",
    "price": 1800,
    "rating": 4.84,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/apartment4.jpg",
      "/src/assets/apartment5.jpg",
      "/src/assets/apartment6.jpg"
    ],
    "guests": 5,
    "bedrooms": 1,
    "beds": 2,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Pool"
    ],
    "description": "A comfortable sea view apartment in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Ahmed",
    "hostYears": 5
  },
  {
    "id": 5,
    "title": "Stylish Home in Cairo",
    "location": "Cairo, Egypt",
    "price": 2200,
    "rating": 4.92,
    "nights": 2,
    "badge": "Guest favorite",
    "images": [
      "/src/assets/apartment5.jpg",
      "/src/assets/apartment6.jpg",
      "/src/assets/apartment7.jpg"
    ],
    "guests": 6,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen"
    ],
    "description": "A comfortable stylish home in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Laila",
    "hostYears": 6
  },
  {
    "id": 6,
    "title": "Family Apartment in Cairo",
    "location": "Cairo, Egypt",
    "price": 2750,
    "rating": 4.6,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/apartment6.jpg",
      "/src/assets/apartment7.jpg",
      "/src/assets/apartment8.jpg"
    ],
    "guests": 7,
    "bedrooms": 3,
    "beds": 4,
    "bathrooms": 3,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Parking"
    ],
    "description": "A comfortable family apartment in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Karim",
    "hostYears": 7
  },
  {
    "id": 7,
    "title": "Beach House in Cairo",
    "location": "New Cairo, Egypt",
    "price": 3200,
    "rating": 4.68,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/apartment7.jpg",
      "/src/assets/apartment8.jpg",
      "/src/assets/images (1).jpeg"
    ],
    "guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Pool"
    ],
    "description": "A comfortable beach house in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Sara",
    "hostYears": 8
  },
  {
    "id": 8,
    "title": "Premium Stay in Cairo",
    "location": "Cairo, Egypt",
    "price": 3900,
    "rating": 4.76,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/apartment8.jpg",
      "/src/assets/images (1).jpeg",
      "/src/assets/images (2).jpeg"
    ],
    "guests": 3,
    "bedrooms": 2,
    "beds": 3,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning"
    ],
    "description": "A comfortable premium stay in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Omar",
    "hostYears": 9
  },
  {
    "id": 9,
    "title": "Modern Apartment in Cairo",
    "location": "Cairo, Egypt",
    "price": 950,
    "rating": 4.84,
    "nights": 2,
    "badge": "Guest favorite",
    "images": [
      "/src/assets/images (1).jpeg",
      "/src/assets/images (2).jpeg",
      "/src/assets/images (3).jpeg"
    ],
    "guests": 4,
    "bedrooms": 3,
    "beds": 3,
    "bathrooms": 3,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen"
    ],
    "description": "A comfortable modern apartment in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Mariam",
    "hostYears": 2
  },
  {
    "id": 10,
    "title": "Cozy Apartment in Cairo",
    "location": "New Cairo, Egypt",
    "price": 1200,
    "rating": 4.92,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (2).jpeg",
      "/src/assets/images (3).jpeg",
      "/src/assets/images (4).jpeg"
    ],
    "guests": 5,
    "bedrooms": 1,
    "beds": 2,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Pool"
    ],
    "description": "A comfortable cozy apartment in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Ahmed",
    "hostYears": 3
  },
  {
    "id": 11,
    "title": "Luxury Villa in Cairo",
    "location": "Cairo, Egypt",
    "price": 1450,
    "rating": 4.6,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (3).jpeg",
      "/src/assets/images (4).jpeg",
      "/src/assets/images (5).jpeg"
    ],
    "guests": 6,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Parking"
    ],
    "description": "A comfortable luxury villa in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Laila",
    "hostYears": 4
  },
  {
    "id": 12,
    "title": "Sea View Apartment in Cairo",
    "location": "Cairo, Egypt",
    "price": 1800,
    "rating": 4.68,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (4).jpeg",
      "/src/assets/images (5).jpeg",
      "/src/assets/images (6).jpeg"
    ],
    "guests": 7,
    "bedrooms": 3,
    "beds": 4,
    "bathrooms": 3,
    "amenities": [
      "Wi-Fi",
      "Air conditioning"
    ],
    "description": "A comfortable sea view apartment in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Karim",
    "hostYears": 5
  },
  {
    "id": 13,
    "title": "Stylish Home in Cairo",
    "location": "New Cairo, Egypt",
    "price": 2200,
    "rating": 4.76,
    "nights": 2,
    "badge": "Guest favorite",
    "images": [
      "/src/assets/images (5).jpeg",
      "/src/assets/images (6).jpeg",
      "/src/assets/images (7).jpeg"
    ],
    "guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Pool"
    ],
    "description": "A comfortable stylish home in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Sara",
    "hostYears": 6
  },
  {
    "id": 14,
    "title": "Family Apartment in Cairo",
    "location": "Cairo, Egypt",
    "price": 2750,
    "rating": 4.84,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (6).jpeg",
      "/src/assets/images (7).jpeg",
      "/src/assets/images (13).jpeg"
    ],
    "guests": 3,
    "bedrooms": 2,
    "beds": 3,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning"
    ],
    "description": "A comfortable family apartment in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Omar",
    "hostYears": 7
  },
  {
    "id": 15,
    "title": "Beach House in Cairo",
    "location": "Cairo, Egypt",
    "price": 3200,
    "rating": 4.92,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (7).jpeg",
      "/src/assets/images (13).jpeg",
      "/src/assets/images (15).jpeg"
    ],
    "guests": 4,
    "bedrooms": 3,
    "beds": 3,
    "bathrooms": 3,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen"
    ],
    "description": "A comfortable beach house in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Mariam",
    "hostYears": 8
  },
  {
    "id": 16,
    "title": "Premium Stay in Cairo",
    "location": "New Cairo, Egypt",
    "price": 3900,
    "rating": 4.6,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (13).jpeg",
      "/src/assets/images (15).jpeg",
      "/src/assets/images (16).jpeg"
    ],
    "guests": 5,
    "bedrooms": 1,
    "beds": 2,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Pool",
      "Parking"
    ],
    "description": "A comfortable premium stay in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Ahmed",
    "hostYears": 9
  },
  {
    "id": 17,
    "title": "Modern Apartment in Cairo",
    "location": "Cairo, Egypt",
    "price": 950,
    "rating": 4.68,
    "nights": 2,
    "badge": "Guest favorite",
    "images": [
      "/src/assets/images (15).jpeg",
      "/src/assets/images (16).jpeg",
      "/src/assets/images (19).jpeg"
    ],
    "guests": 6,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen"
    ],
    "description": "A comfortable modern apartment in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Laila",
    "hostYears": 2
  },
  {
    "id": 18,
    "title": "Cozy Apartment in Cairo",
    "location": "Cairo, Egypt",
    "price": 1200,
    "rating": 4.76,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (16).jpeg",
      "/src/assets/images (19).jpeg",
      "/src/assets/images (11).jpeg"
    ],
    "guests": 7,
    "bedrooms": 3,
    "beds": 4,
    "bathrooms": 3,
    "amenities": [
      "Wi-Fi",
      "Air conditioning"
    ],
    "description": "A comfortable cozy apartment in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Karim",
    "hostYears": 3
  },
  {
    "id": 19,
    "title": "Luxury Villa in Cairo",
    "location": "New Cairo, Egypt",
    "price": 1450,
    "rating": 4.84,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (19).jpeg",
      "/src/assets/images (11).jpeg",
      "/src/assets/images (12).jpeg"
    ],
    "guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Pool"
    ],
    "description": "A comfortable luxury villa in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Sara",
    "hostYears": 4
  },
  {
    "id": 20,
    "title": "Sea View Apartment in Cairo",
    "location": "Cairo, Egypt",
    "price": 1800,
    "rating": 4.92,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (11).jpeg",
      "/src/assets/images (12).jpeg",
      "/src/assets/apartment1.jpg"
    ],
    "guests": 3,
    "bedrooms": 2,
    "beds": 3,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning"
    ],
    "description": "A comfortable sea view apartment in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Omar",
    "hostYears": 5
  },
  {
    "id": 21,
    "title": "Stylish Home in Cairo",
    "location": "Cairo, Egypt",
    "price": 2200,
    "rating": 4.6,
    "nights": 2,
    "badge": "Guest favorite",
    "images": [
      "/src/assets/images (12).jpeg",
      "/src/assets/apartment1.jpg",
      "/src/assets/apartment2.jpg"
    ],
    "guests": 4,
    "bedrooms": 3,
    "beds": 3,
    "bathrooms": 3,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Parking"
    ],
    "description": "A comfortable stylish home in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Mariam",
    "hostYears": 6
  },
  {
    "id": 22,
    "title": "Family Apartment in Cairo",
    "location": "New Cairo, Egypt",
    "price": 2750,
    "rating": 4.68,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/apartment1.jpg",
      "/src/assets/apartment2.jpg",
      "/src/assets/apartment3.jpg"
    ],
    "guests": 5,
    "bedrooms": 1,
    "beds": 2,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Pool"
    ],
    "description": "A comfortable family apartment in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Ahmed",
    "hostYears": 7
  },
  {
    "id": 23,
    "title": "Beach House in Cairo",
    "location": "Cairo, Egypt",
    "price": 3200,
    "rating": 4.76,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/apartment2.jpg",
      "/src/assets/apartment3.jpg",
      "/src/assets/apartment4.jpg"
    ],
    "guests": 6,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen"
    ],
    "description": "A comfortable beach house in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Laila",
    "hostYears": 8
  },
  {
    "id": 24,
    "title": "Premium Stay in Cairo",
    "location": "Cairo, Egypt",
    "price": 3900,
    "rating": 4.84,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/apartment3.jpg",
      "/src/assets/apartment4.jpg",
      "/src/assets/apartment5.jpg"
    ],
    "guests": 7,
    "bedrooms": 3,
    "beds": 4,
    "bathrooms": 3,
    "amenities": [
      "Wi-Fi",
      "Air conditioning"
    ],
    "description": "A comfortable premium stay in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Karim",
    "hostYears": 9
  },
  {
    "id": 25,
    "title": "Modern Apartment in Cairo",
    "location": "New Cairo, Egypt",
    "price": 950,
    "rating": 4.92,
    "nights": 2,
    "badge": "Guest favorite",
    "images": [
      "/src/assets/apartment4.jpg",
      "/src/assets/apartment5.jpg",
      "/src/assets/apartment6.jpg"
    ],
    "guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Pool"
    ],
    "description": "A comfortable modern apartment in Cairo, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Sara",
    "hostYears": 2
  },
  {
    "id": 26,
    "title": "Modern Apartment in Alexandria",
    "location": "Alexandria, Egypt",
    "price": 950,
    "rating": 4.6,
    "nights": 2,
    "badge": "Guest favorite",
    "images": [
      "/src/assets/apartment5.jpg",
      "/src/assets/apartment6.jpg",
      "/src/assets/apartment7.jpg"
    ],
    "guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Pool",
      "Beachfront",
      "Parking"
    ],
    "description": "A comfortable modern apartment in Alexandria, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Sara",
    "hostYears": 2
  },
  {
    "id": 27,
    "title": "Cozy Apartment in Alexandria",
    "location": "Alexandria, Egypt",
    "price": 1200,
    "rating": 4.68,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/apartment6.jpg",
      "/src/assets/apartment7.jpg",
      "/src/assets/apartment8.jpg"
    ],
    "guests": 3,
    "bedrooms": 2,
    "beds": 3,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning"
    ],
    "description": "A comfortable cozy apartment in Alexandria, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Omar",
    "hostYears": 3
  },
  {
    "id": 28,
    "title": "Luxury Villa in Alexandria",
    "location": "Alexandria, Egypt",
    "price": 1450,
    "rating": 4.76,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/apartment7.jpg",
      "/src/assets/apartment8.jpg",
      "/src/assets/images (1).jpeg"
    ],
    "guests": 4,
    "bedrooms": 3,
    "beds": 3,
    "bathrooms": 3,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen"
    ],
    "description": "A comfortable luxury villa in Alexandria, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Mariam",
    "hostYears": 4
  },
  {
    "id": 29,
    "title": "Sea View Apartment in Alexandria",
    "location": "Alexandria, Egypt",
    "price": 1800,
    "rating": 4.84,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/apartment8.jpg",
      "/src/assets/images (1).jpeg",
      "/src/assets/images (2).jpeg"
    ],
    "guests": 5,
    "bedrooms": 1,
    "beds": 2,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Pool"
    ],
    "description": "A comfortable sea view apartment in Alexandria, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Ahmed",
    "hostYears": 5
  },
  {
    "id": 30,
    "title": "Stylish Home in Alexandria",
    "location": "Alexandria, Egypt",
    "price": 2200,
    "rating": 4.92,
    "nights": 2,
    "badge": "Guest favorite",
    "images": [
      "/src/assets/images (1).jpeg",
      "/src/assets/images (2).jpeg",
      "/src/assets/images (3).jpeg"
    ],
    "guests": 6,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Beachfront"
    ],
    "description": "A comfortable stylish home in Alexandria, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Laila",
    "hostYears": 6
  },
  {
    "id": 31,
    "title": "Family Apartment in Alexandria",
    "location": "Alexandria, Egypt",
    "price": 2750,
    "rating": 4.6,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (2).jpeg",
      "/src/assets/images (3).jpeg",
      "/src/assets/images (4).jpeg"
    ],
    "guests": 7,
    "bedrooms": 3,
    "beds": 4,
    "bathrooms": 3,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Parking"
    ],
    "description": "A comfortable family apartment in Alexandria, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Karim",
    "hostYears": 7
  },
  {
    "id": 32,
    "title": "Beach House in Alexandria",
    "location": "Alexandria, Egypt",
    "price": 3200,
    "rating": 4.68,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (3).jpeg",
      "/src/assets/images (4).jpeg",
      "/src/assets/images (5).jpeg"
    ],
    "guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Pool"
    ],
    "description": "A comfortable beach house in Alexandria, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Sara",
    "hostYears": 8
  },
  {
    "id": 33,
    "title": "Premium Stay in Alexandria",
    "location": "Alexandria, Egypt",
    "price": 3900,
    "rating": 4.76,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (4).jpeg",
      "/src/assets/images (5).jpeg",
      "/src/assets/images (6).jpeg"
    ],
    "guests": 3,
    "bedrooms": 2,
    "beds": 3,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning"
    ],
    "description": "A comfortable premium stay in Alexandria, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Omar",
    "hostYears": 9
  },
  {
    "id": 34,
    "title": "Modern Apartment in Alexandria",
    "location": "Alexandria, Egypt",
    "price": 950,
    "rating": 4.84,
    "nights": 2,
    "badge": "Guest favorite",
    "images": [
      "/src/assets/images (5).jpeg",
      "/src/assets/images (6).jpeg",
      "/src/assets/images (7).jpeg"
    ],
    "guests": 4,
    "bedrooms": 3,
    "beds": 3,
    "bathrooms": 3,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Beachfront"
    ],
    "description": "A comfortable modern apartment in Alexandria, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Mariam",
    "hostYears": 2
  },
  {
    "id": 35,
    "title": "Cozy Apartment in Alexandria",
    "location": "Alexandria, Egypt",
    "price": 1200,
    "rating": 4.92,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (6).jpeg",
      "/src/assets/images (7).jpeg",
      "/src/assets/images (13).jpeg"
    ],
    "guests": 5,
    "bedrooms": 1,
    "beds": 2,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Pool"
    ],
    "description": "A comfortable cozy apartment in Alexandria, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Ahmed",
    "hostYears": 3
  },
  {
    "id": 36,
    "title": "Luxury Villa in Alexandria",
    "location": "Alexandria, Egypt",
    "price": 1450,
    "rating": 4.6,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (7).jpeg",
      "/src/assets/images (13).jpeg",
      "/src/assets/images (15).jpeg"
    ],
    "guests": 6,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Parking"
    ],
    "description": "A comfortable luxury villa in Alexandria, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Laila",
    "hostYears": 4
  },
  {
    "id": 37,
    "title": "Sea View Apartment in Alexandria",
    "location": "Alexandria, Egypt",
    "price": 1800,
    "rating": 4.68,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (13).jpeg",
      "/src/assets/images (15).jpeg",
      "/src/assets/images (16).jpeg"
    ],
    "guests": 7,
    "bedrooms": 3,
    "beds": 4,
    "bathrooms": 3,
    "amenities": [
      "Wi-Fi",
      "Air conditioning"
    ],
    "description": "A comfortable sea view apartment in Alexandria, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Karim",
    "hostYears": 5
  },
  {
    "id": 38,
    "title": "Stylish Home in Alexandria",
    "location": "Alexandria, Egypt",
    "price": 2200,
    "rating": 4.76,
    "nights": 2,
    "badge": "Guest favorite",
    "images": [
      "/src/assets/images (15).jpeg",
      "/src/assets/images (16).jpeg",
      "/src/assets/images (19).jpeg"
    ],
    "guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Pool",
      "Beachfront"
    ],
    "description": "A comfortable stylish home in Alexandria, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Sara",
    "hostYears": 6
  },
  {
    "id": 39,
    "title": "Family Apartment in Alexandria",
    "location": "Alexandria, Egypt",
    "price": 2750,
    "rating": 4.84,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (16).jpeg",
      "/src/assets/images (19).jpeg",
      "/src/assets/images (11).jpeg"
    ],
    "guests": 3,
    "bedrooms": 2,
    "beds": 3,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning"
    ],
    "description": "A comfortable family apartment in Alexandria, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Omar",
    "hostYears": 7
  },
  {
    "id": 40,
    "title": "Beach House in Alexandria",
    "location": "Alexandria, Egypt",
    "price": 3200,
    "rating": 4.92,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (19).jpeg",
      "/src/assets/images (11).jpeg",
      "/src/assets/images (12).jpeg"
    ],
    "guests": 4,
    "bedrooms": 3,
    "beds": 3,
    "bathrooms": 3,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen"
    ],
    "description": "A comfortable beach house in Alexandria, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Mariam",
    "hostYears": 8
  },
  {
    "id": 41,
    "title": "Premium Stay in Alexandria",
    "location": "Alexandria, Egypt",
    "price": 3900,
    "rating": 4.6,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (11).jpeg",
      "/src/assets/images (12).jpeg",
      "/src/assets/apartment1.jpg"
    ],
    "guests": 5,
    "bedrooms": 1,
    "beds": 2,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Pool",
      "Parking"
    ],
    "description": "A comfortable premium stay in Alexandria, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Ahmed",
    "hostYears": 9
  },
  {
    "id": 42,
    "title": "Modern Apartment in Alexandria",
    "location": "Alexandria, Egypt",
    "price": 950,
    "rating": 4.68,
    "nights": 2,
    "badge": "Guest favorite",
    "images": [
      "/src/assets/images (12).jpeg",
      "/src/assets/apartment1.jpg",
      "/src/assets/apartment2.jpg"
    ],
    "guests": 6,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Beachfront"
    ],
    "description": "A comfortable modern apartment in Alexandria, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Laila",
    "hostYears": 2
  },
  {
    "id": 43,
    "title": "Cozy Apartment in Alexandria",
    "location": "Alexandria, Egypt",
    "price": 1200,
    "rating": 4.76,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/apartment1.jpg",
      "/src/assets/apartment2.jpg",
      "/src/assets/apartment3.jpg"
    ],
    "guests": 7,
    "bedrooms": 3,
    "beds": 4,
    "bathrooms": 3,
    "amenities": [
      "Wi-Fi",
      "Air conditioning"
    ],
    "description": "A comfortable cozy apartment in Alexandria, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Karim",
    "hostYears": 3
  },
  {
    "id": 44,
    "title": "Luxury Villa in Alexandria",
    "location": "Alexandria, Egypt",
    "price": 1450,
    "rating": 4.84,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/apartment2.jpg",
      "/src/assets/apartment3.jpg",
      "/src/assets/apartment4.jpg"
    ],
    "guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Pool"
    ],
    "description": "A comfortable luxury villa in Alexandria, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Sara",
    "hostYears": 4
  },
  {
    "id": 45,
    "title": "Sea View Apartment in Alexandria",
    "location": "Alexandria, Egypt",
    "price": 1800,
    "rating": 4.92,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/apartment3.jpg",
      "/src/assets/apartment4.jpg",
      "/src/assets/apartment5.jpg"
    ],
    "guests": 3,
    "bedrooms": 2,
    "beds": 3,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning"
    ],
    "description": "A comfortable sea view apartment in Alexandria, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Omar",
    "hostYears": 5
  },
  {
    "id": 46,
    "title": "Modern Apartment in Sharm El Sheikh",
    "location": "Sharm El Sheikh, Egypt",
    "price": 950,
    "rating": 4.6,
    "nights": 2,
    "badge": "Guest favorite",
    "images": [
      "/src/assets/apartment4.jpg",
      "/src/assets/apartment5.jpg",
      "/src/assets/apartment6.jpg"
    ],
    "guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Pool",
      "Beachfront",
      "Parking"
    ],
    "description": "A comfortable modern apartment in Sharm El Sheikh, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Sara",
    "hostYears": 2
  },
  {
    "id": 47,
    "title": "Cozy Apartment in Sharm El Sheikh",
    "location": "Sharm El Sheikh, Egypt",
    "price": 1200,
    "rating": 4.68,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/apartment5.jpg",
      "/src/assets/apartment6.jpg",
      "/src/assets/apartment7.jpg"
    ],
    "guests": 3,
    "bedrooms": 2,
    "beds": 3,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning"
    ],
    "description": "A comfortable cozy apartment in Sharm El Sheikh, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Omar",
    "hostYears": 3
  },
  {
    "id": 48,
    "title": "Luxury Villa in Sharm El Sheikh",
    "location": "Sharm El Sheikh, Egypt",
    "price": 1450,
    "rating": 4.76,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/apartment6.jpg",
      "/src/assets/apartment7.jpg",
      "/src/assets/apartment8.jpg"
    ],
    "guests": 4,
    "bedrooms": 3,
    "beds": 3,
    "bathrooms": 3,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen"
    ],
    "description": "A comfortable luxury villa in Sharm El Sheikh, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Mariam",
    "hostYears": 4
  },
  {
    "id": 49,
    "title": "Sea View Apartment in Sharm El Sheikh",
    "location": "Sharm El Sheikh, Egypt",
    "price": 1800,
    "rating": 4.84,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/apartment7.jpg",
      "/src/assets/apartment8.jpg",
      "/src/assets/images (1).jpeg"
    ],
    "guests": 5,
    "bedrooms": 1,
    "beds": 2,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Pool"
    ],
    "description": "A comfortable sea view apartment in Sharm El Sheikh, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Ahmed",
    "hostYears": 5
  },
  {
    "id": 50,
    "title": "Stylish Home in Sharm El Sheikh",
    "location": "Sharm El Sheikh, Egypt",
    "price": 2200,
    "rating": 4.92,
    "nights": 2,
    "badge": "Guest favorite",
    "images": [
      "/src/assets/apartment8.jpg",
      "/src/assets/images (1).jpeg",
      "/src/assets/images (2).jpeg"
    ],
    "guests": 6,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Beachfront"
    ],
    "description": "A comfortable stylish home in Sharm El Sheikh, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Laila",
    "hostYears": 6
  },
  {
    "id": 51,
    "title": "Family Apartment in Sharm El Sheikh",
    "location": "Sharm El Sheikh, Egypt",
    "price": 2750,
    "rating": 4.6,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (1).jpeg",
      "/src/assets/images (2).jpeg",
      "/src/assets/images (3).jpeg"
    ],
    "guests": 7,
    "bedrooms": 3,
    "beds": 4,
    "bathrooms": 3,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Parking"
    ],
    "description": "A comfortable family apartment in Sharm El Sheikh, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Karim",
    "hostYears": 7
  },
  {
    "id": 52,
    "title": "Beach House in Sharm El Sheikh",
    "location": "Sharm El Sheikh, Egypt",
    "price": 3200,
    "rating": 4.68,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (2).jpeg",
      "/src/assets/images (3).jpeg",
      "/src/assets/images (4).jpeg"
    ],
    "guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Pool"
    ],
    "description": "A comfortable beach house in Sharm El Sheikh, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Sara",
    "hostYears": 8
  },
  {
    "id": 53,
    "title": "Premium Stay in Sharm El Sheikh",
    "location": "Sharm El Sheikh, Egypt",
    "price": 3900,
    "rating": 4.76,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (3).jpeg",
      "/src/assets/images (4).jpeg",
      "/src/assets/images (5).jpeg"
    ],
    "guests": 3,
    "bedrooms": 2,
    "beds": 3,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning"
    ],
    "description": "A comfortable premium stay in Sharm El Sheikh, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Omar",
    "hostYears": 9
  },
  {
    "id": 54,
    "title": "Modern Apartment in Sharm El Sheikh",
    "location": "Sharm El Sheikh, Egypt",
    "price": 950,
    "rating": 4.84,
    "nights": 2,
    "badge": "Guest favorite",
    "images": [
      "/src/assets/images (4).jpeg",
      "/src/assets/images (5).jpeg",
      "/src/assets/images (6).jpeg"
    ],
    "guests": 4,
    "bedrooms": 3,
    "beds": 3,
    "bathrooms": 3,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Beachfront"
    ],
    "description": "A comfortable modern apartment in Sharm El Sheikh, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Mariam",
    "hostYears": 2
  },
  {
    "id": 55,
    "title": "Cozy Apartment in Sharm El Sheikh",
    "location": "Sharm El Sheikh, Egypt",
    "price": 1200,
    "rating": 4.92,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (5).jpeg",
      "/src/assets/images (6).jpeg",
      "/src/assets/images (7).jpeg"
    ],
    "guests": 5,
    "bedrooms": 1,
    "beds": 2,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Pool"
    ],
    "description": "A comfortable cozy apartment in Sharm El Sheikh, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Ahmed",
    "hostYears": 3
  },
  {
    "id": 56,
    "title": "Luxury Villa in Sharm El Sheikh",
    "location": "Sharm El Sheikh, Egypt",
    "price": 1450,
    "rating": 4.6,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (6).jpeg",
      "/src/assets/images (7).jpeg",
      "/src/assets/images (13).jpeg"
    ],
    "guests": 6,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Parking"
    ],
    "description": "A comfortable luxury villa in Sharm El Sheikh, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Laila",
    "hostYears": 4
  },
  {
    "id": 57,
    "title": "Sea View Apartment in Sharm El Sheikh",
    "location": "Sharm El Sheikh, Egypt",
    "price": 1800,
    "rating": 4.68,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (7).jpeg",
      "/src/assets/images (13).jpeg",
      "/src/assets/images (15).jpeg"
    ],
    "guests": 7,
    "bedrooms": 3,
    "beds": 4,
    "bathrooms": 3,
    "amenities": [
      "Wi-Fi",
      "Air conditioning"
    ],
    "description": "A comfortable sea view apartment in Sharm El Sheikh, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Karim",
    "hostYears": 5
  },
  {
    "id": 58,
    "title": "Stylish Home in Sharm El Sheikh",
    "location": "Sharm El Sheikh, Egypt",
    "price": 2200,
    "rating": 4.76,
    "nights": 2,
    "badge": "Guest favorite",
    "images": [
      "/src/assets/images (13).jpeg",
      "/src/assets/images (15).jpeg",
      "/src/assets/images (16).jpeg"
    ],
    "guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Pool",
      "Beachfront"
    ],
    "description": "A comfortable stylish home in Sharm El Sheikh, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Sara",
    "hostYears": 6
  },
  {
    "id": 59,
    "title": "Family Apartment in Sharm El Sheikh",
    "location": "Sharm El Sheikh, Egypt",
    "price": 2750,
    "rating": 4.84,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (15).jpeg",
      "/src/assets/images (16).jpeg",
      "/src/assets/images (19).jpeg"
    ],
    "guests": 3,
    "bedrooms": 2,
    "beds": 3,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning"
    ],
    "description": "A comfortable family apartment in Sharm El Sheikh, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Omar",
    "hostYears": 7
  },
  {
    "id": 60,
    "title": "Beach House in Sharm El Sheikh",
    "location": "Sharm El Sheikh, Egypt",
    "price": 3200,
    "rating": 4.92,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (16).jpeg",
      "/src/assets/images (19).jpeg",
      "/src/assets/images (11).jpeg"
    ],
    "guests": 4,
    "bedrooms": 3,
    "beds": 3,
    "bathrooms": 3,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen"
    ],
    "description": "A comfortable beach house in Sharm El Sheikh, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Mariam",
    "hostYears": 8
  },
  {
    "id": 61,
    "title": "Premium Stay in Sharm El Sheikh",
    "location": "Sharm El Sheikh, Egypt",
    "price": 3900,
    "rating": 4.6,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (19).jpeg",
      "/src/assets/images (11).jpeg",
      "/src/assets/images (12).jpeg"
    ],
    "guests": 5,
    "bedrooms": 1,
    "beds": 2,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Pool",
      "Parking"
    ],
    "description": "A comfortable premium stay in Sharm El Sheikh, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Ahmed",
    "hostYears": 9
  },
  {
    "id": 62,
    "title": "Modern Apartment in Sharm El Sheikh",
    "location": "Sharm El Sheikh, Egypt",
    "price": 950,
    "rating": 4.68,
    "nights": 2,
    "badge": "Guest favorite",
    "images": [
      "/src/assets/images (11).jpeg",
      "/src/assets/images (12).jpeg",
      "/src/assets/apartment1.jpg"
    ],
    "guests": 6,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Beachfront"
    ],
    "description": "A comfortable modern apartment in Sharm El Sheikh, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Laila",
    "hostYears": 2
  },
  {
    "id": 63,
    "title": "Cozy Apartment in Sharm El Sheikh",
    "location": "Sharm El Sheikh, Egypt",
    "price": 1200,
    "rating": 4.76,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/images (12).jpeg",
      "/src/assets/apartment1.jpg",
      "/src/assets/apartment2.jpg"
    ],
    "guests": 7,
    "bedrooms": 3,
    "beds": 4,
    "bathrooms": 3,
    "amenities": [
      "Wi-Fi",
      "Air conditioning"
    ],
    "description": "A comfortable cozy apartment in Sharm El Sheikh, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Karim",
    "hostYears": 3
  },
  {
    "id": 64,
    "title": "Luxury Villa in Sharm El Sheikh",
    "location": "Sharm El Sheikh, Egypt",
    "price": 1450,
    "rating": 4.84,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/apartment1.jpg",
      "/src/assets/apartment2.jpg",
      "/src/assets/apartment3.jpg"
    ],
    "guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1,
    "amenities": [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Pool"
    ],
    "description": "A comfortable luxury villa in Sharm El Sheikh, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Sara",
    "hostYears": 4
  },
  {
    "id": 65,
    "title": "Sea View Apartment in Sharm El Sheikh",
    "location": "Sharm El Sheikh, Egypt",
    "price": 1800,
    "rating": 4.92,
    "nights": 2,
    "badge": "",
    "images": [
      "/src/assets/apartment2.jpg",
      "/src/assets/apartment3.jpg",
      "/src/assets/apartment4.jpg"
    ],
    "guests": 3,
    "bedrooms": 2,
    "beds": 3,
    "bathrooms": 2,
    "amenities": [
      "Wi-Fi",
      "Air conditioning"
    ],
    "description": "A comfortable sea view apartment in Sharm El Sheikh, Egypt, with modern facilities and a relaxing atmosphere. Perfect for couples, families, and friends.",
    "host": "Omar",
    "hostYears": 5
  }
];


function Home() {
  const navigate = useNavigate();

  // Listings created from the BecomeHost page are stored locally.
  // Keep them separate from the demo data so the original listings stay untouched.
  const readHostedProperties = () => {
    try {
      const saved = JSON.parse(localStorage.getItem("hostProperties") || "[]");
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  };

  const [hostedProperties, setHostedProperties] = useState(readHostedProperties);

  useEffect(() => {
    const syncHostedProperties = () => {
      setHostedProperties(readHostedProperties());
    };

    window.addEventListener("focus", syncHostedProperties);
    window.addEventListener("storage", syncHostedProperties);

    return () => {
      window.removeEventListener("focus", syncHostedProperties);
      window.removeEventListener("storage", syncHostedProperties);
    };
  }, []);


  // =========================
  // LANGUAGE
  // =========================

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "English"
  );

  // لما نرجع للـ Home نقرأ اللغة المحفوظة
  useEffect(() => {
    const updateLanguage = () => {
      setLanguage(localStorage.getItem("language") || "English");
    };

    window.addEventListener("focus", updateLanguage);

    return () => {
      window.removeEventListener("focus", updateLanguage);
    };
  }, []);

  // =========================
  // TRANSLATIONS
  // =========================

  const text = {
    // Navbar
    host:
      language === "Arabic"
        ? "كن مضيفًا"
        : language === "French"
          ? "Devenir hôte"
          : "Become a host",
    plan :
      language === "Arabic"
        ? "خطط لرحلتي"
        : language === "French"
          ? "Planifier mon voyage"
          : "Plan my trip",
    homes:
      language === "Arabic"
        ? "بيوت"
        : language === "French"
          ? "Logements"
          : "Homes",

    wishlists:
      language === "Arabic"
        ? "قوائم الأمنيات"
        : language === "French"
          ? "Listes de souhaits"
          : "Wishlists",

    trips:
      language === "Arabic"
        ? "الرحلات"
        : language === "French"
          ? "Voyages"
          : "Trips",

    messages:
      language === "Arabic"
        ? "الرسائل"
        : language === "French"
          ? "Messages"
          : "Messages",

    profile:
      language === "Arabic"
        ? "الملف الشخصي"
        : language === "French"
          ? "Profil"
          : "Profile",

    languageCurrency:
      language === "Arabic"
        ? "اللغة والعملة"
        : language === "French"
          ? "Langue et devise"
          : "Languages & currency",
    services:
      language === "Arabic"
        ? "خدمات"
        : language === "French"
          ? "Services"
          : "Services",
    help:
      language === "Arabic"
        ? "مركز المساعدة"
        : language === "French"
          ? "Centre d'aide"
          : "Help Center",

    logout:
      language === "Arabic"
        ? "تسجيل الخروج"
        : language === "French"
          ? "Se déconnecter"
          : "Log out",

    // Search
    where:
      language === "Arabic"
        ? "إلى أين؟"
        : language === "French"
          ? "Où ?"
          : "Where",

    when:
      language === "Arabic"
        ? "متى؟"
        : language === "French"
          ? "Quand ?"
          : "When",

    who:
      language === "Arabic"
        ? "من؟"
        : language === "French"
          ? "Qui ?"
          : "Who",

    search:
      language === "Arabic"
        ? "بحث"
        : language === "French"
          ? "Rechercher"
          : "Search",

    searchDest:
      language === "Arabic"
        ? "ابحث عن وجهات"
        : language === "French"
          ? "Rechercher des destinations"
          : "Search destinations",

    addDates:
      language === "Arabic"
        ? "أضف التواريخ"
        : language === "French"
          ? "Ajouter des dates"
          : "Add dates",

    addGuests:
      language === "Arabic"
        ? "أضف الضيوف"
        : language === "French"
          ? "Ajouter des voyageurs"
          : "Add guests",

    selectDates:
      language === "Arabic"
        ? "اختر تواريخك"
        : language === "French"
          ? "Sélectionnez vos dates"
          : "Select your dates",

    checkIn:
      language === "Arabic"
        ? "تسجيل الوصول"
        : language === "French"
          ? "Arrivée"
          : "Check-in",

    checkOut:
      language === "Arabic"
        ? "تسجيل المغادرة"
        : language === "French"
          ? "Départ"
          : "Check-out",

    done:
      language === "Arabic"
        ? "تم"
        : language === "French"
          ? "Terminé"
          : "Done",

    // Guests
    adults:
      language === "Arabic"
        ? "البالغون"
        : language === "French"
          ? "Adultes"
          : "Adults",

    children:
      language === "Arabic"
        ? "الأطفال"
        : language === "French"
          ? "Enfants"
          : "Children",

    infants:
      language === "Arabic"
        ? "الرضع"
        : language === "French"
          ? "Bébés"
          : "Infants",

    pets:
      language === "Arabic"
        ? "الحيوانات الأليفة"
        : language === "French"
          ? "Animaux"
          : "Pets",

    ages13:
      language === "Arabic"
        ? "أعمار 13 سنة أو أكثر"
        : language === "French"
          ? "13 ans ou plus"
          : "Ages 13 or above",

    ages2:
      language === "Arabic"
        ? "من 2 إلى 12 سنة"
        : language === "French"
          ? "De 2 à 12 ans"
          : "Ages 2 – 12",

    under2:
      language === "Arabic"
        ? "أقل من سنتين"
        : language === "French"
          ? "Moins de 2 ans"
          : "Under 2",

    serviceAnimal:
      language === "Arabic"
        ? "هل تحضر حيوان خدمة؟"
        : language === "French"
          ? "Vous voyagez avec un animal d'assistance ?"
          : "Bringing a service animal?",

    guests:
      language === "Arabic"
        ? "ضيوف"
        : language === "French"
          ? "voyageurs"
          : "guests",

    // Categories
    all:
      language === "Arabic"
        ? "الكل"
        : language === "French"
          ? "Tout"
          : "All",

    experiences:
      language === "Arabic"
        ? "تجارب"
        : language === "French"
          ? "Expériences"
          : "Experiences",

    amazingPools:
      language === "Arabic"
        ? "حمامات سباحة رائعة"
        : language === "French"
          ? "Piscines incroyables"
          : "Amazing pools",

    beachfront:
      language === "Arabic"
        ? "على الشاطئ"
        : language === "French"
          ? "Bord de mer"
          : "Beachfront",

    cabins:
      language === "Arabic"
        ? "أكواخ"
        : language === "French"
          ? "Cabanes"
          : "Cabins",

    trending:
      language === "Arabic"
        ? "رائج"
        : language === "French"
          ? "Tendances"
          : "Trending",

    mansions:
      language === "Arabic"
        ? "قصور"
        : language === "French"
          ? "Maisons de luxe"
          : "Mansions",

    // Sections
    popularHomes:
      language === "Arabic"
        ? "بيوت شهيرة في القاهرة الجديدة"
        : language === "French"
          ? "Logements populaires au Nouveau Caire"
          : "Popular homes in New Cairo",

    availableWeekend:
      language === "Arabic"
        ? "متاحة في عطلة نهاية الأسبوع"
        : language === "French"
          ? "Disponibles ce week-end"
          : "Available this weekend",
  };
  const categories = [
    { id: "all", label: text.all, icon: "🌍" },
    { id: "pools", label: text.amazingPools, icon: "🏊" },
    { id: "beach", label: text.beachfront, icon: "🏖️" },
    { id: "cabins", label: text.cabins, icon: "🏕️" },
    { id: "trending", label: text.trending, icon: "🔥" },
    { id: "mansions", label: text.mansions, icon: "🏰" },
  ];

  // =========================
  // OTHER STATES
  // =========================

  const [activeTab, setActiveTab] = useState("all");
  const [openField, setOpenField] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const updateGuest = (key, delta) => {
    setGuests((prev) => ({
      ...prev,
      [key]: Math.max(0, prev[key] + delta),
    }));
  };

  const totalGuests = guests.adults + guests.children;

  const handleSearch = (homeCategory = "all") => {
    navigate("/explore", {
      state: {
        destination: destination.trim(),
        guests: totalGuests,
        checkIn,
        checkOut,
        homeCategory,
      },
    });
  };
  const userEmail = localStorage.getItem("userEmail") || "";
  const userInitial = userEmail ? userEmail.charAt(0).toUpperCase() : "U";
  return (

    <div className="home">

      <header className="navbar">

        <div className="navbar-top">

          {/* LOGO */}
          <div className="airbnb-logo">
            <img
              src={logo}
              alt="Airbnb"
            />
            <span>airbnb</span>
          </div>


          {/* CENTER TABS */}
          <nav className="navbar-tabs">

            <button
              className={`tab ${activeTab === "all" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("all");
                handleSearch("all");
              }}
            >
              <span className="tab-icon">🌏</span>
              <span>{text.all}</span>
            </button>


            <button
              className={`tab ${activeTab === "homes" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("homes");
                handleSearch("all");
              }}
            >
              <span className="tab-icon">🏠</span>
              <span>{text.homes}</span>
            </button>


            <button
              className={`tab ${activeTab === "experiences" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("experiences");
                navigate("/experiences");
              }}
            >
              <span className="tab-icon">🎈</span>
              <span>{text.experiences}</span>
            </button>


            <button
              className={`tab ${activeTab === "services" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("services");
                navigate("/services");
              }}
            >
              <span className="tab-icon">🛎️</span>
              <span>{text.services}</span>
            </button>

          </nav>


          <div className="navbar-actions">

  <button
    className="host-link"
    onClick={() => navigate("/trip-planner")}
  >
    ✨ {text.plan}
  </button>

  <button
    className="host-link"
    onClick={() => navigate("/become-host")}
  >
    {text.host}
  </button>


            <div className="profile-menu-wrapper position-relative">

              <button
                type="button"
                className="btn border rounded-pill bg-white d-flex align-items-center gap-2 p-1 pe-3"
                onClick={() => setShowUserMenu((prev) => !prev)}
              >
                <span
                  className="rounded-circle bg-dark text-white d-flex align-items-center justify-content-center"
                  style={{ width: "36px", height: "36px", fontSize: "14px" }}
                >
                  {userInitial}
                </span>

                <span style={{ fontSize: "18px" }}>☰</span>
              </button>

              {showUserMenu && (
                <div
                  className="position-absolute bg-white rounded-4 shadow p-2"
                  style={{
                    top: "55px",
                    right: 0,
                    width: "240px",
                    zIndex: 2000,
                  }}
                >

                  <button
                    className="dropdown-item rounded-2 py-2"
                    onClick={() => {
                      setShowUserMenu(false);
                      navigate("/wishlist");
                    }}
                  >
                    {text.wishlists}
                  </button>


                  <button
                    className="dropdown-item rounded-2 py-2"
                    onClick={() => {
                      setShowUserMenu(false);
                      navigate("/trips");
                    }}
                  >
                    {text.trips}
                  </button>


                  <button
                    className="dropdown-item rounded-2 py-2"
                    onClick={() => {
                      setShowUserMenu(false);
                      alert("Messages");
                    }}
                  >
                    {text.messages}
                  </button>

                  <button
                    className="dropdown-item rounded-2 py-2"
                    onClick={() => {
                      setShowUserMenu(false);
                      navigate("/profile");
                    }}
                  >
                    {text.profile}
                  </button>

                  <hr />

                  <button
                    className="dropdown-item rounded-2 py-2"
                    onClick={() => navigate("/language-currency")}
                  >
                    {text.languageCurrency}
                  </button>

                  <button
                    className="dropdown-item rounded-2 py-2"
                    onClick={() => alert("Help Center")}
                  >
                    {text.help}
                  </button>

                  <hr />

                  <button
                    className="dropdown-item rounded-2 py-2"
                    onClick={() => {
                      setShowUserMenu(false);
                      localStorage.clear();
                      navigate("/login");
                    }}
                  >
                    {text.logout}
                  </button>

                </div>
              )}

            </div>

          </div>


        </div>
      </header>



      <div className="container d-flex justify-content-center my-4">
        <div className="search-pill w-100">

          {/* WHERE */}

          <div
            className={`search-field ${openField === "where" ? "open" : ""
              }`}
            onClick={() =>
              setOpenField(
                openField === "where"
                  ? null
                  : "where"
              )
            }
          >

            <span className="field-label">
              {text.where}
            </span>

            <input
              type="text"
              placeholder="Search destinations"
              value={destination}
              onChange={(e) =>
                setDestination(e.target.value)
              }
              onClick={(e) =>
                e.stopPropagation()
              }
            />

            {openField === "where" && (
              <div
                className="where-dropdown"
                onClick={(e) =>
                  e.stopPropagation()
                }
              >

                <div className="map-title">
                  <strong>
                    Search destinations
                  </strong>
                </div>

                <div className="fake-map">

                  <div className="map-water"></div>

                  <div className="map-road road-1"></div>
                  <div className="map-road road-2"></div>
                  <div className="map-road road-3"></div>
                  <div className="map-road road-4"></div>

                  <button
                    type="button"
                    className="map-pin pin-cairo"
                    onClick={() => {
                      setDestination("Cairo");
                      setOpenField(null);
                    }}
                  >
                    📍
                  </button>
                  <button
                    type="button"
                    className="map-pin pin-sharm"
                    onClick={() => {
                      setDestination("Sharm el-Sheikh");
                      setOpenField(null);
                    }}
                  >
                    📍
                  </button>
                  <button
                    type="button"
                    className="map-pin pin-new-cairo"
                    onClick={() => {
                      setDestination("New Cairo");
                      setOpenField(null);
                    }}
                  >
                    📍
                  </button>

                  <button
                    type="button"
                    className="map-pin pin-alex"
                    onClick={() => {
                      setDestination("Alexandria");
                      setOpenField(null);
                    }}
                  >
                    📍
                  </button>

                  <span className="map-label cairo-label">
                    Cairo
                  </span>

                  <span className="map-label alex-label">
                    Alexandria
                  </span>
                  <span className="map-label sharm-label">
                    Sharm el-Sheikh
                  </span>
                  <span className="map-label new-cairo-label">
                    New Cairo
                  </span>
                </div>


                <div className="map-suggestions">

                  <button
                    type="button"
                    onClick={() => {
                      setDestination("Cairo");
                      setOpenField(null);
                    }}
                  >
                    📍
                    <div>
                      <strong>Cairo</strong>
                      <small>Egypt</small>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setDestination("New Cairo");
                      setOpenField(null);
                    }}
                  >
                    📍
                    <div>
                      <strong>New Cairo</strong>
                      <small>Cairo, Egypt</small>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setDestination("Alexandria");
                      setOpenField(null);
                    }}
                  >
                    📍
                    <div>
                      <strong>Alexandria</strong>
                      <small>Egypt</small>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setDestination("Sharm el-Sheikh");
                      setOpenField(null);
                    }}
                  >
                    📍
                    <div>
                      <strong>Sharm el-Sheikh</strong>
                      <small>Egypt</small>
                    </div>
                  </button>

                </div>

              </div>

            )}

          </div>

          <div className="divider" />

          {/* WHEN */}

          <div
            className={`search-field when-field ${openField === "when" ? "open" : ""
              }`}
            onClick={() =>
              setOpenField(
                openField === "when"
                  ? null
                  : "when"
              )
            }
          >

            <span className="field-label">
              {text.when}
            </span>

            <span className="field-value">
              {checkIn && checkOut
                ? `${checkIn} - ${checkOut}`
                : checkIn
                  ? checkIn
                  : "Add dates"}
            </span>

            {openField === "when" && (
              <div
                className="date-dropdown"
                onClick={(e) =>
                  e.stopPropagation()
                }
              >

                <div className="date-title">
                  <strong>
                    Select your dates
                  </strong>
                </div>

                <div className="date-inputs">

                  <div className="date-box">
                    <label>Check-in</label>

                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) =>
                        setCheckIn(e.target.value)
                      }
                    />
                  </div>

                  <div className="date-box">
                    <label>Check-out</label>

                    <input
                      type="date"
                      value={checkOut}
                      min={checkIn || undefined}
                      onChange={(e) =>
                        setCheckOut(e.target.value)
                      }
                    />
                  </div>

                </div>

                <button
                  type="button"
                  className="done-date-btn"
                  onClick={() =>
                    setOpenField(null)
                  }
                >
                  Done
                </button>

              </div>
            )}

          </div>

          <div className="divider" />

          {/* WHO */}

          <div
            className={`search-field who-field ${openField === "who" ? "open" : ""
              }`}
            onClick={() =>
              setOpenField(
                openField === "who"
                  ? null
                  : "who"
              )
            }
          >

            <span className="field-label">
              {text.who}
            </span>

            <span className="field-value">
              {totalGuests > 0
                ? `${totalGuests} guests`
                : "Add guests"}
            </span>

            <button
              type="button"
              className="search-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleSearch("all");
              }}
            >
              {text.search}
            </button>

            {openField === "who" && (
              <div
                className="guests-dropdown"
                onClick={(e) =>
                  e.stopPropagation()
                }
              >

                <GuestRow
                  title="Adults"
                  subtitle="Ages 13 or above"
                  value={guests.adults}
                  onDecrease={() =>
                    updateGuest("adults", -1)
                  }
                  onIncrease={() =>
                    updateGuest("adults", 1)
                  }
                />

                <GuestRow
                  title="Children"
                  subtitle="Ages 2 – 12"
                  value={guests.children}
                  onDecrease={() =>
                    updateGuest("children", -1)
                  }
                  onIncrease={() =>
                    updateGuest("children", 1)
                  }
                />

                <GuestRow
                  title="Infants"
                  subtitle="Under 2"
                  value={guests.infants}
                  onDecrease={() =>
                    updateGuest("infants", -1)
                  }
                  onIncrease={() =>
                    updateGuest("infants", 1)
                  }
                />

                <GuestRow
                  title="Pets"
                  subtitle="Bringing a service animal?"
                  value={guests.pets}
                  onDecrease={() =>
                    updateGuest("pets", -1)
                  }
                  onIncrease={() =>
                    updateGuest("pets", 1)
                  }
                />

              </div>
            )}

          </div>

        </div>
      </div>



      {/* CATEGORIES */}
      <div className="categories d-flex gap-4 px-4 py-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="category-item"
            onClick={() => handleSearch(cat.id)}
          >
            <span className="category-icon">
              {cat.icon}
            </span>

            <span className="category-label">
              {cat.label}
            </span>
          </button>
        ))}

      </div>

      {hostedProperties.length > 0 && (
        <section className="property-section">
          <h2 className="section-title">New listings from hosts</h2>

          <div className="property-grid">
            {hostedProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        </section>
      )}

      {['Cairo', 'Alexandria', 'Sharm El Sheikh'].map((city) => {
        const cityProperties = properties.filter((property) =>
          property.location.toLowerCase().includes(city.toLowerCase())
        );

        return (
          <section className="property-section" key={city}>
            <h2 className="section-title">
              {city === 'Cairo' ? 'Popular homes in Cairo' : `Explore ${city}`}
            </h2>

            <div className="property-grid">
              {cityProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                />
              ))}
            </div>
          </section>
        );
      })}

      <footer className="footer">

  <div className="footer-columns">

    <div>
      <h4>Support</h4>
      <ul>
        <li>Help Center</li>
        <li>Get help with a safety issue</li>
        <li>AirCover</li>
        <li>Cancellation options</li>
        <li>Contact us</li>
        <li>Accessibility support</li>
        <li>Report a problem</li>
      </ul>
    </div>

    <div>
      <h4>Hosting</h4>
      <ul>
        <li>Airbnb your home</li>
        <li>Airbnb your experience</li>
        <li>Hosting resources</li>
        <li>Community forum</li>
        <li>Host an experience</li>
        <li>Responsible hosting</li>
        <li>Hosting tips</li>
      </ul>
    </div>

    <div>
      <h4>Airbnb</h4>
      <ul>
        <li>Newsroom</li>
        <li>Careers</li>
        <li>Investors</li>
        <li>Gift cards</li>
        <li>About Airbnb</li>
        <li>Airbnb Plus</li>
        <li>Our community</li>
      </ul>
    </div>

    <div>
      <h4>Explore</h4>
      <ul>
        <li>Homes</li>
        <li>Experiences</li>
        <li>Services</li>
        <li>Popular destinations</li>
        <li>Beachfront homes</li>
        <li>Luxury stays</li>
        <li>Unique stays</li>
      </ul>
    </div>

  </div>

  <div className="footer-bottom">

    <span>
      ©️ 2026 Airbnb Clone Project
    </span>

    <div className="footer-socials">
      <span>🌐 English (US)</span>
      <span>💰 EGP</span>
      <span>📘 Facebook</span>
      <span>✖️ X</span>
      <span>📷 Instagram</span>
    </div>

  </div>

</footer>

</div>
  );
}

function PropertyCard({ property }) {

  const [isFavorite, setIsFavorite] =
    useState(false);

  const [imageIndex, setImageIndex] =
    useState(0);

  /* =========================
     LOAD SAVED WISHLIST
  ========================= */

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem("wishlist")
      ) || [];

    const exists = saved.some(
      (item) => item.id === property.id
    );

    setIsFavorite(exists);
  }, [property.id]);

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setImageIndex(
      (i) =>
        (i + 1) %
        property.images.length
    );
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setImageIndex(
      (i) =>
        (i - 1 + property.images.length) %
        property.images.length
    );
  };

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const saved =
      JSON.parse(
        localStorage.getItem("wishlist")
      ) || [];

    const exists = saved.some(
      (item) => item.id === property.id
    );

    let updated;

    if (exists) {
      updated = saved.filter(
        (item) => item.id !== property.id
      );
    } else {
      updated = [
        ...saved,
        {
          ...property,
          image: property.images[0],
        },
      ];
    }

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updated)
    );

    setIsFavorite(!exists);
  };

  return (
    <Link
      to={`/property/${property.id}`}
      state={{ property }}
      className="property-card"
    >

      <div className="card-image-wrapper">

        {property.badge && (
          <span className="card-badge">
            {property.badge}
          </span>
        )}

        <button
          type="button"
          className={`favorite-btn ${isFavorite ? "active" : ""
            }`}
          onClick={toggleFavorite}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>

        <img
          src={property.images[imageIndex]}
          alt={property.title}
          className="card-image"
        />

        {property.images.length > 1 && (
          <>
            <button
              type="button"
              className="nav-arrow left"
              onClick={prevImage}
            >
              ‹
            </button>

            <button
              type="button"
              className="nav-arrow right"
              onClick={nextImage}
            >
              ›
            </button>
          </>
        )}

        <div className="dots">

          {property.images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === imageIndex
                ? "active"
                : ""
                }`}
            />
          ))}

        </div>

      </div>

      <div className="card-info">

        <div className="card-title-row">

          <p className="card-title">
            {property.title}
          </p>

          <span className="card-rating">
            ★ {property.rating}
          </span>

        </div>

        <p className="card-location">
          {property.location}
        </p>

        <p className="card-price">
          <strong>
            {property.price.toLocaleString()} ج.م
          </strong>{" "}
          for {property.nights} nights
        </p>

      </div>

    </Link>
  );
}

function GuestRow({
  title,
  subtitle,
  value,
  onDecrease,
  onIncrease,
}) {
  return (
    <div className="guest-row">

      <div>
        <p className="guest-title">
          {title}
        </p>

        <p className="guest-subtitle">
          {subtitle}
        </p>
      </div>

      <div className="stepper">

        <button
          type="button"
          onClick={onDecrease}
          disabled={value === 0}
        >
          −
        </button>

        <span>{value}</span>

        <button
          type="button"
          onClick={onIncrease}
        >
          +
        </button>

      </div>

    </div>
  );
}

export default Home;