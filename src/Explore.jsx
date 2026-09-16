import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

const properties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    title: "Modern Luxury Apartment",
    location: "Cairo, Egypt",
    rating: 4.9,
    price: 120,
    type: "Apartment",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    amenities: ["WiFi", "Pool", "Kitchen", "AC"],
    category: "Trending",
    lat: 30.0444,
    lng: 31.2357,
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
    title: "Beautiful Beach Villa",
    location: "North Coast, Egypt",
    rating: 4.8,
    price: 250,
    type: "Villa",
    guests: 8,
    bedrooms: 4,
    beds: 5,
    bathrooms: 3,
    amenities: ["WiFi", "Pool", "Beachfront", "Kitchen", "AC"],
    category: "Beachfront",
    lat: 30.95,
    lng: 28.82,
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=80",
    title: "Cozy Mountain Cabin",
    location: "Sinai, Egypt",
    rating: 4.7,
    price: 95,
    type: "Cabin",
    guests: 3,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    amenities: ["WiFi", "Kitchen", "AC"],
    category: "Cabins",
    lat: 28.55,
    lng: 33.95,
  },

  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    title: "Elegant Downtown Home",
    location: "Cairo, Egypt",
    rating: 4.6,
    price: 140,
    type: "House",
    guests: 5,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    amenities: ["WiFi", "Kitchen", "AC"],
    category: "Trending",
    lat: 30.0444,
    lng: 31.2357,
  },

  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",
    title: "Luxury Private Mansion",
    location: "New Cairo, Egypt",
    rating: 5.0,
    price: 450,
    type: "Mansion",
    guests: 10,
    bedrooms: 5,
    beds: 7,
    bathrooms: 4,
    amenities: ["WiFi", "Pool", "Kitchen", "AC", "Parking"],
    category: "Mansions",
    lat: 30.0074,
    lng: 31.4913,
  },

  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?auto=format&fit=crop&w=900&q=80",
    title: "Sea View Apartment",
    location: "Alexandria, Egypt",
    rating: 4.8,
    price: 180,
    type: "Apartment",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: ["WiFi", "Beachfront", "Kitchen", "AC"],
    category: "Beachfront",
    lat: 31.2001,
    lng: 29.9187,
  },

  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
    title: "Amazing Pool House",
    location: "Giza, Egypt",
    rating: 4.9,
    price: 210,
    type: "House",
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    amenities: ["WiFi", "Pool", "Kitchen", "AC", "Parking"],
    category: "Trending",
    lat: 30.0131,
    lng: 31.2089,
  },

  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
    title: "Luxury Villa With Pool",
    location: "Hurghada, Egypt",
    rating: 4.9,
    price: 320,
    type: "Villa",
    guests: 7,
    bedrooms: 4,
    beds: 5,
    bathrooms: 3,
    amenities: ["WiFi", "Pool", "Beachfront", "Kitchen", "AC"],
    category: "Beachfront",
    lat: 27.2579,
    lng: 33.8116,
  },
   {
    id: 9,
    image:
      "src/assets/images.jpeg",
    title: "Luxury Sea View Apartment",
    location: "Sharm El Sheikh, Egypt",
    rating: 4.9,
    price: 220,
    type: "Apartment",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: ["WiFi", "Pool", "Beachfront", "Kitchen", "AC"],
    category: "Beachfront",
    lat: 27.9158,
    lng: 34.3299,
  },

  {
    id: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3A-FySAfiMVyP0G2p2uGrEIpKZNkQekdAFlfaBKyyjg&s=10",
    title: "Modern Sharm Villa",
    location: "Sharm El Sheikh, Egypt",
    rating: 4.8,
    price: 350,
    type: "Villa",
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 3,
    amenities: ["WiFi", "Pool", "Beachfront", "Kitchen", "AC", "Parking"],
    category: "Beachfront",
    lat: 27.9158,
    lng: 34.3299,
  },

  {
    id: 11,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHtbyO-67akEJ_VVNHCS0PAW1rYn1Dn8JS1Leb5cVW7Q&s=10",
    title: "Elegant Resort Apartment",
    location: "Sharm El Sheikh, Egypt",
    rating: 4.9,
    price: 280,
    type: "Apartment",
    guests: 5,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    amenities: ["WiFi", "Pool", "AC", "Kitchen"],
    category: "Trending",
    lat: 27.9158,
    lng: 34.3299,
  },

  {
    id: 12,
    image:
      "https://th.bing.com/th/id/OIP.NUj4GY05JXBDTnbDdeTiwQHaDy?w=219&h=150&c=6&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    title: "Private Pool Villa",
    location: "Sharm El Sheikh, Egypt",
    rating: 5.0,
    price: 420,
    type: "Villa",
    guests: 8,
    bedrooms: 4,
    beds: 5,
    bathrooms: 3,
    amenities: ["WiFi", "Pool", "Beachfront", "Kitchen", "AC", "Parking"],
    category: "Beachfront",
    lat: 27.9158,
    lng: 34.3299,
  },

  {
    id: 13,
    image:
      "https://th.bing.com/th/id/OIP.iV9oFWXkuOF-cQkLWKGCWQHaEK?w=333&h=187&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    title: "Cozy Sharm Retreat",
    location: "Sharm El Sheikh, Egypt",
    rating: 4.7,
    price: 190,
    type: "House",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    amenities: ["WiFi", "Kitchen", "AC"],
    category: "Trending",
    lat: 27.9158,
    lng: 34.3299,
  },

  {
    id: 14,
    image:
      "https://th.bing.com/th/id/OIP.2-RX_q6Iz44d7LqpyXhi_AHaEK?w=296&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    title: "Luxury Resort Stay",
    location: "Sharm El Sheikh, Egypt",
    rating: 4.9,
    price: 310,
    type: "Resort",
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    amenities: ["WiFi", "Pool", "Beachfront", "AC"],
    category: "Beachfront",
    lat: 27.9158,
    lng: 34.3299,
  },

  {
    id: 15,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ftnNdkRQld2Y6AOo3W5cO_qKq9wssvh00LPAZhgmw&s=10",
    title: "Beautiful Red Sea Villa",
    location: "Sharm El Sheikh, Egypt",
    rating: 4.8,
    price: 390,
    type: "Villa",
    guests: 8,
    bedrooms: 4,
    beds: 5,
    bathrooms: 3,
    amenities: ["WiFi", "Pool", "Beachfront", "Kitchen", "AC"],
    category: "Mansions",
    lat: 27.9158,
    lng: 34.3299,
  },

  {
    id: 16,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTake0-ewqmJqKqeDVcBwgH3XBxo8WtLDGDXhIkcg_8dw&s=10",
    title: "Stylish Sharm Apartment",
    location: "Sharm El Sheikh, Egypt",
    rating: 4.6,
    price: 200,
    type: "Apartment",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    amenities: ["WiFi", "Kitchen", "AC", "Pool"],
    category: "Trending",
    lat: 27.9158,
    lng: 34.3299,
  },

  {
    id: 17,
    image:
      "https://th.bing.com/th/id/OIP.Tg8LXPpgoXbPEaq_SxdPywHaE8?w=265&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    title: "Relaxing Beach House",
    location: "Sharm El Sheikh, Egypt",
    rating: 4.9,
    price: 330,
    type: "House",
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    amenities: ["WiFi", "Beachfront", "Kitchen", "AC", "Parking"],
    category: "Beachfront",
    lat: 27.9158,
    lng: 34.3299,
  },

  {
    id: 18,
    image:
      "https://th.bing.com/th/id/OIP.DgipGLKtCDEfdssCVeRrKQHaE8?w=268&h=183&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    title: "Premium Sharm Getaway",
    location: "Sharm El Sheikh, Egypt",
    rating: 5.0,
    price: 450,
    type: "Villa",
    guests: 10,
    bedrooms: 5,
    beds: 7,
    bathrooms: 4,
    amenities: ["WiFi", "Pool", "Beachfront", "Kitchen", "AC", "Parking"],
    category: "Mansions",
    lat: 27.9158,
    lng: 34.3299,
  },

  {
    id: 19,
    image:
      "https://th.bing.com/th/id/OIP.orz0gYtvkqCJzn_tXuogFwHaE8?w=278&h=185&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    title: "Modern Alexandria Apartment",
    location: "Alexandria, Egypt",
    rating: 4.8,
    price: 160,
    type: "Apartment",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: ["WiFi", "Beachfront", "Kitchen", "AC"],
    category: "Beachfront",
    lat: 31.2001,
    lng: 29.9187,
  },

  {
    id: 20,
    image:
      "https://th.bing.com/th/id/OIP.Ne2cWMJ7QgVxwzSBOOitmwHaED?w=300&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    title: "Sea View Home",
    location: "Alexandria, Egypt",
    rating: 4.9,
    price: 190,
    type: "Apartment",
    guests: 5,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    amenities: ["WiFi", "Beachfront", "Kitchen", "AC"],
    category: "Trending",
    lat: 31.2001,
    lng: 29.9187,
  },

  {
    id: 21,
    image:
      "https://th.bing.com/th/id/OIP.v77Ef0bW2ENLtp2Yd8bY-gHaFj?w=218&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    title: "Luxury Alexandria Villa",
    location: "Alexandria, Egypt",
    rating: 4.9,
    price: 300,
    type: "Villa",
    guests: 7,
    bedrooms: 4,
    beds: 5,
    bathrooms: 3,
    amenities: ["WiFi", "Pool", "Beachfront", "Kitchen", "AC"],
    category: "Beachfront",
    lat: 31.2001,
    lng: 29.9187,
  },

  {
    id: 22,
    image:
      "https://th.bing.com/th/id/OIP.oBhTGc5d9oOhexDL5Z7GrwHaE6?w=277&h=184&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    title: "Elegant Alexandria House",
    location: "Alexandria, Egypt",
    rating: 4.7,
    price: 175,
    type: "House",
    guests: 5,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    amenities: ["WiFi", "Kitchen", "AC"],
    category: "Trending",
    lat: 31.2001,
    lng: 29.9187,
  },

  {
    id: 23,
    image:
      "https://th.bing.com/th/id/OIP.8Q-lK3PNZeCNR9MOfdvqGgHaEh?w=270&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    title: "Bright Sea View Apartment",
    location: "Alexandria, Egypt",
    rating: 4.8,
    price: 145,
    type: "Apartment",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    amenities: ["WiFi", "Beachfront", "Kitchen", "AC"],
    category: "Beachfront",
    lat: 31.2001,
    lng: 29.9187,
  },

  {
    id: 24,
    image:
      "https://th.bing.com/th/id/OIP.lvFHccuYc3TDo3wopERk5AHaE7?w=260&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    title: "Modern Alexandria Villa",
    location: "Alexandria, Egypt",
    rating: 4.9,
    price: 340,
    type: "Villa",
    guests: 8,
    bedrooms: 4,
    beds: 5,
    bathrooms: 3,
    amenities: ["WiFi", "Pool", "Beachfront", "Kitchen", "AC", "Parking"],
    category: "Mansions",
    lat: 31.2001,
    lng: 29.9187,
  },

  {
    id: 25,
    image:
      "https://th.bing.com/th/id/OIP.Ne2cWMJ7QgVxwzSBOOitmwHaED?w=300&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    title: "Cozy Alexandria Stay",
    location: "Alexandria, Egypt",
    rating: 4.6,
    price: 130,
    type: "Apartment",
    guests: 3,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    amenities: ["WiFi", "Kitchen", "AC"],
    category: "Trending",
    lat: 31.2001,
    lng: 29.9187,
  },

  {
    id: 26,
    image:
      "https://th.bing.com/th/id/OIP.87XQIrp-9HQ-5A3mi2-irgHaFj?w=223&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    title: "Luxury Corniche Apartment",
    location: "Alexandria, Egypt",
    rating: 5.0,
    price: 230,
    type: "Apartment",
    guests: 5,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    amenities: ["WiFi", "Beachfront", "Kitchen", "AC", "Parking"],
    category: "Beachfront",
    lat: 31.2001,
    lng: 29.9187,
  },

  {
    id: 27,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.qTAckOsRugDa3-Zn2gumJwHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Alexandria Resort Villa",
    location: "Alexandria, Egypt",
    rating: 4.9,
    price: 360,
    type: "Villa",
    guests: 8,
    bedrooms: 4,
    beds: 5,
    bathrooms: 3,
    amenities: ["WiFi", "Pool", "Beachfront", "Kitchen", "AC"],
    category: "Beachfront",
    lat: 31.2001,
    lng: 29.9187,
  },

  {
    id: 28,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.mDw9v28VbCFgWNINdYzGcgHaFj?r=0&pid=ImgDet&w=178&h=133&c=7&dpr=1.5&o=7&rm=3",
    title: "Premium Alexandria Home",
    location: "Alexandria, Egypt",
    rating: 4.8,
    price: 210,
    type: "House",
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    amenities: ["WiFi", "WiFi", "Kitchen", "AC", "Parking"],
    category: "Trending",
    lat: 31.2001,
    lng: 29.9187,
  },
];

const homeCategories = [
  { id: "all", label: "All", icon: "🌍" },
  { id: "pools", label: "Amazing pools", icon: "🏊" },
  { id: "beach", label: "Beachfront", icon: "🏖️" },
  { id: "cabins", label: "Cabins", icon: "🏕️" },
  { id: "trending", label: "Trending", icon: "🔥" },
  { id: "mansions", label: "Mansions", icon: "🏰" },
];

function Explore() {
  const navigate = useNavigate();
  const location = useLocation();

  const searchData = location.state || {};

  const [search, setSearch] = useState(searchData.destination || "");
  const [guests, setGuests] = useState(searchData.guests || 0);

  const [category, setCategory] = useState("All");

  const [activeHomeCategory, setActiveHomeCategory] = useState(
    searchData.homeCategory || "all"
  );

  const [maxPrice, setMaxPrice] = useState(500);
  const [bedrooms, setBedrooms] = useState("All");
  const [beds, setBeds] = useState("All");
  const [bathrooms, setBathrooms] = useState("All");
  const [amenity, setAmenity] = useState("All");
  const [sortBy, setSortBy] = useState("Recommended");

  const [view, setView] = useState("list");

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    try {
      const saved =
        JSON.parse(localStorage.getItem("wishlist")) || [];

      setWishlist(saved);
    } catch {
      setWishlist([]);
    }
  }, []);

  const isWishlisted = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  function toggleWishlist(property) {
    let updated;

    if (isWishlisted(property.id)) {
      updated = wishlist.filter(
        (item) => item.id !== property.id
      );
    } else {
      updated = [...wishlist, property];
    }

    setWishlist(updated);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updated)
    );
  }

  function handleHomeCategory(categoryId) {
    setActiveHomeCategory(categoryId);

    setCategory("All");

    if (categoryId === "pools") {
      setAmenity("Pool");
    } else {
      setAmenity("All");
    }
  }

  const filteredProperties = useMemo(() => {
    let result = properties.filter((property) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        property.title.toLowerCase().includes(searchText) ||
        property.location.toLowerCase().includes(searchText);

      const matchesGuests =
        !guests || property.guests >= Number(guests);

      const matchesType =
        category === "All" ||
        property.type === category;

      const matchesPrice =
        property.price <= maxPrice;

      const matchesBedrooms =
        bedrooms === "All" ||
        property.bedrooms >= Number(bedrooms);

      const matchesBeds =
        beds === "All" ||
        property.beds >= Number(beds);

      const matchesBathrooms =
        bathrooms === "All" ||
        property.bathrooms >= Number(bathrooms);

      const matchesAmenity =
        amenity === "All" ||
        property.amenities.includes(amenity);

      const matchesHomeCategory =
        activeHomeCategory === "all" ||
        (activeHomeCategory === "pools" &&
          property.amenities.includes("Pool")) ||
        (activeHomeCategory === "beach" &&
          property.category === "Beachfront") ||
        (activeHomeCategory === "cabins" &&
          property.category === "Cabins") ||
        (activeHomeCategory === "trending" &&
          property.category === "Trending") ||
        (activeHomeCategory === "mansions" &&
          property.category === "Mansions");

      return (
        matchesSearch &&
        matchesGuests &&
        matchesType &&
        matchesPrice &&
        matchesBedrooms &&
        matchesBeds &&
        matchesBathrooms &&
        matchesAmenity &&
        matchesHomeCategory
      );
    });

    if (sortBy === "Top Rated") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "Price low-high") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "Price high-low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [
    search,
    guests,
    category,
    maxPrice,
    bedrooms,
    beds,
    bathrooms,
    amenity,
    sortBy,
    activeHomeCategory,
  ]);

  return (
    
    <div className="container-fluid bg-white min-vh-100 px-0">
<button
  onClick={() => navigate("/")}
  className="btn btn-light rounded-circle shadow-sm m-3"
  style={{ width: "45px", height: "45px" }}
>
  ←
</button>
      {/* CATEGORIES */}
      <div className="container-fluid px-3 px-lg-5">

        <div className="d-flex align-items-center gap-4 gap-lg-5 overflow-auto py-3 border-bottom">

          {homeCategories.map((item) => (
            <button
              key={item.id}
              className={`btn border-0 flex-shrink-0 d-flex flex-column align-items-center gap-2 px-3 py-2 ${
                activeHomeCategory === item.id
                  ? "fw-bold border-bottom border-dark rounded-0"
                  : "text-secondary"
              }`}
              onClick={() =>
                handleHomeCategory(item.id)
              }
            >

              <span className="fs-4">
                {item.icon}
              </span>

              <small>
                {item.label}
              </small>

            </button>
          ))}

        </div>

      </div>

      {/* FILTERS */}
      <div className="container-fluid px-3 px-lg-5 py-3">

        <div className="d-flex flex-wrap align-items-center gap-2">

          <select
            className="form-select w-auto rounded-pill"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setActiveHomeCategory("all");
            }}
          >

            <option value="All">
              Property type
            </option>

            <option value="Apartment">
              Apartment
            </option>

            <option value="Villa">
              Villa
            </option>

            <option value="House">
              House
            </option>

            <option value="Cabin">
              Cabin
            </option>

            <option value="Mansion">
              Mansion
            </option>

          </select>

          <select
            className="form-select w-auto rounded-pill"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(Number(e.target.value))
            }
          >

            <option value={500}>
              Any price
            </option>

            <option value={100}>
              Up to $100
            </option>

            <option value={150}>
              Up to $150
            </option>

            <option value={200}>
              Up to $200
            </option>

            <option value={300}>
              Up to $300
            </option>

            <option value={500}>
              Up to $500
            </option>

          </select>

          <select
            className="form-select w-auto rounded-pill"
            value={bedrooms}
            onChange={(e) =>
              setBedrooms(e.target.value)
            }
          >

            <option value="All">
              Bedrooms
            </option>

            <option value="1">
              1+ bedroom
            </option>

            <option value="2">
              2+ bedrooms
            </option>

            <option value="3">
              3+ bedrooms
            </option>

            <option value="4">
              4+ bedrooms
            </option>

          </select>

          <select
            className="form-select w-auto rounded-pill"
            value={beds}
            onChange={(e) =>
              setBeds(e.target.value)
            }
          >

            <option value="All">
              Beds
            </option>

            <option value="1">
              1+ bed
            </option>

            <option value="2">
              2+ beds
            </option>

            <option value="3">
              3+ beds
            </option>

            <option value="4">
              4+ beds
            </option>

            <option value="5">
              5+ beds
            </option>

          </select>

          <select
            className="form-select w-auto rounded-pill"
            value={bathrooms}
            onChange={(e) =>
              setBathrooms(e.target.value)
            }
          >

            <option value="All">
              Bathrooms
            </option>

            <option value="1">
              1+ bathroom
            </option>

            <option value="2">
              2+ bathrooms
            </option>

            <option value="3">
              3+ bathrooms
            </option>

          </select>

          <select
            className="form-select w-auto rounded-pill"
            value={amenity}
            onChange={(e) =>
              setAmenity(e.target.value)
            }
          >

            <option value="All">
              Amenities
            </option>

            <option value="Pool">
              Pool
            </option>

            <option value="WiFi">
              WiFi
            </option>

            <option value="Kitchen">
              Kitchen
            </option>

            <option value="AC">
              AC
            </option>

            <option value="Beachfront">
              Beachfront
            </option>

            <option value="Parking">
              Parking
            </option>

          </select>

          <select
            className="form-select w-auto rounded-pill"
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
          >

            <option>
              Recommended
            </option>

            <option>
              Top Rated
            </option>

            <option>
              Price low-high
            </option>

            <option>
              Price high-low
            </option>

          </select>

          <button
            className="btn btn-outline-dark rounded-pill ms-lg-auto"
            onClick={() => navigate("/wishlist")}
          >
            ♡ Wishlist
          </button>

        </div>

      </div>

      {/* RESULT HEADER */}
      <div className="container-fluid px-3 px-lg-5 py-3">

        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">

          <div>

            <h2 className="h3 mb-1">
              {filteredProperties.length} stays available
            </h2>

            {search && (
              <p className="text-secondary mb-0">
                Results for <strong>{search}</strong>
              </p>
            )}

          </div>

          <div className="btn-group">

            <button
              className={`btn ${
                view === "list"
                  ? "btn-dark"
                  : "btn-outline-dark"
              }`}
              onClick={() => setView("list")}
            >
              ☷ List
            </button>

            <button
              className={`btn ${
                view === "map"
                  ? "btn-dark"
                  : "btn-outline-dark"
              }`}
              onClick={() => setView("map")}
            >
              🗺️ Map
            </button>

          </div>

        </div>

      </div>

      {/* CONTENT */}

      {view === "list" ? (

        <main className="container-fluid px-3 px-lg-5 pb-5">

          <div className="row g-4">

            {filteredProperties.map((property) => (

              <div
                className="col-12 col-sm-6 col-lg-4 col-xl-3"
                key={property.id}
              >

                <article className="card border-0 h-100">

                  {/* IMAGE */}

                  <div
                    className="position-relative"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate(
                        `/property/${property.id}`,
                        {
                          state: { property },
                        }
                      )
                    }
                  >

                    <img
                      src={property.image}
                      alt={property.title}
                      className="card-img-top rounded-4"
                      style={{
                        height: "260px",
                        objectFit: "cover",
                      }}
                    />

                    {/* HEART */}

                    <button
                      className={`btn btn-light position-absolute top-0 end-0 m-3 rounded-circle shadow-sm ${
                        isWishlisted(property.id)
                          ? "text-danger"
                          : ""
                      }`}
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(property);
                      }}
                    >
                      {isWishlisted(property.id)
                        ? "♥"
                        : "♡"}
                    </button>

                  </div>

                  {/* INFO */}

                  <div className="card-body px-0">

                    <div className="d-flex justify-content-between align-items-start gap-2">

                      <h3 className="h6 fw-semibold mb-2">
                        {property.title}
                      </h3>

                      <span className="small text-nowrap">
                        ★ {property.rating}
                      </span>

                    </div>

                    <p className="text-secondary small mb-1">
                      {property.location}
                    </p>

                    <small className="text-secondary d-block mb-3">
                      {property.guests} guests ·{" "}
                      {property.bedrooms} bedrooms ·{" "}
                      {property.beds} beds ·{" "}
                      {property.bathrooms} bathrooms
                    </small>

                    <div className="d-flex justify-content-between align-items-center">

                      <strong>
                        ${property.price}

                        <span className="fw-normal text-secondary">
                          {" "}night
                        </span>
                      </strong>

                      <button
                        className="btn btn-outline-dark btn-sm rounded-pill"
                        onClick={() =>
                          navigate(
                            `/property/${property.id}`,
                            {
                              state: { property },
                            }
                          )
                        }
                      >
                        View details
                      </button>

                    </div>

                  </div>

                </article>

              </div>

            ))}

          </div>

          {/* NO RESULTS */}

          {filteredProperties.length === 0 && (

            <div className="text-center py-5">

              <div className="fs-1 mb-3">
                🔎
              </div>

              <h2 className="h4">
                No stays found
              </h2>

              <p className="text-secondary">
                Try changing your search or filters.
              </p>

              <button
                className="btn btn-dark rounded-pill px-4"
                onClick={() => {
                  setSearch("");
                  setGuests(0);
                  setCategory("All");
                  setMaxPrice(500);
                  setBedrooms("All");
                  setBeds("All");
                  setBathrooms("All");
                  setAmenity("All");
                  setActiveHomeCategory("all");
                }}
              >
                Clear all filters
              </button>

            </div>

          )}

        </main>

      ) : (

        /* REAL MAP */

        <div className="container-fluid px-3 px-lg-5 pb-5">

          <div
            className="position-relative rounded-4 overflow-hidden shadow-sm"
            style={{
              height: "600px",
            }}
          >

            {/* MAP TITLE */}

            <div
              className="position-absolute bg-white rounded-pill px-4 py-2 shadow"
              style={{
                top: "20px",
                left: "20px",
                zIndex: 1000,
                fontWeight: "600",
              }}
            >
              Explore stays on map
            </div>

            {/* REAL MAP */}

            <MapContainer
              center={[26.8206, 30.8025]}
              zoom={6}
              scrollWheelZoom={true}
              style={{
                width: "100%",
                height: "100%",
              }}
            >

              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {filteredProperties.map((property) => (

                <Marker
                  key={property.id}
                  position={[
                    property.lat,
                    property.lng,
                  ]}
                >

                  <Popup>

                    <div
                      style={{
                        width: "220px",
                      }}
                    >

                      <img
                        src={property.image}
                        alt={property.title}
                        style={{
                          width: "100%",
                          height: "120px",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />

                      <h6 className="mt-2 mb-1">
                        {property.title}
                      </h6>

                      <p className="text-secondary small mb-1">
                        {property.location}
                      </p>

                      <strong>
                        ${property.price} / night
                      </strong>

                      <button
                        className="btn btn-dark w-100 mt-3 rounded-pill"
                        onClick={() =>
                          navigate(
                            `/property/${property.id}`,
                            {
                              state: {
                                property: property,
                              },
                            }
                          )
                        }
                      >
                        View property
                      </button>

                    </div>

                  </Popup>

                </Marker>

              ))}

            </MapContainer>

          </div>

        </div>

      )}

    </div>
  );
}

export default Explore;