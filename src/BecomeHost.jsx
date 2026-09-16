
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AMENITIES = [
  "Wi-Fi",
  "Air conditioning",
  "Kitchen",
  "Pool",
  "Parking",
  "Washer",
  "TV",
  "Workspace",
];

function BecomeHost() {
  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [createdProperty, setCreatedProperty] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    location: "",
    property: "Apartment",
    price: "",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    description: "",
    amenities: ["Wi-Fi"],
    images: [],
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function changeNumber(name, amount) {
    setForm((current) => ({
      ...current,
      [name]: Math.max(name === "guests" ? 1 : 0, Number(current[name]) + amount),
    }));
  }

  function toggleAmenity(amenity) {
    setForm((current) => ({
      ...current,
      amenities: current.amenities.includes(amenity)
        ? current.amenities.filter((item) => item !== amenity)
        : [...current.amenities, amenity],
    }));
  }

  function compressImage(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const image = new Image();
        image.onload = () => {
          const maxSize = 1200;
          let width = image.width;
          let height = image.height;

          if (width > height && width > maxSize) {
            height = Math.round((height * maxSize) / width);
            width = maxSize;
          } else if (height > maxSize) {
            width = Math.round((width * maxSize) / height);
            height = maxSize;
          }

          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0, width, height);
          resolve(canvas.toDataURL("image/jpeg", 0.72));
        };
        image.onerror = reject;
        image.src = reader.result;
      };

      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function handleImages(e) {
    const files = Array.from(e.target.files || []).slice(0, 5);
    if (!files.length) return;

    setSaving(true);
    setError("");

    try {
      const compressed = await Promise.all(files.map(compressImage));
      setForm((current) => ({
        ...current,
        images: [...current.images, ...compressed].slice(0, 5),
      }));
    } catch {
      setError("One of the images could not be loaded. Please try another image.");
    } finally {
      setSaving(false);
      e.target.value = "";
    }
  }

  function removeImage(index) {
    setForm((current) => ({
      ...current,
      images: current.images.filter((_, i) => i !== index),
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.images.length) {
      setError("Please add at least one photo for your listing.");
      return;
    }

    const newProperty = {
      id: `host-${Date.now()}`,
      title: form.title.trim(),
      location: form.location.trim(),
      price: Number(form.price),
      rating: 5.0,
      nights: 1,
      badge: "New",
      type: form.property,
      guests: Number(form.guests),
      bedrooms: Number(form.bedrooms),
      beds: Number(form.beds),
      bathrooms: Number(form.bathrooms),
      amenities: form.amenities,
      description: form.description.trim(),
      host: form.name.trim(),
      hostYears: 0,
      images: form.images,
      hostEmail: form.email.trim(),
      createdAt: new Date().toISOString(),
      isHostedListing: true,
    };

    try {
      const oldListings = JSON.parse(localStorage.getItem("hostProperties") || "[]");
      const listings = Array.isArray(oldListings) ? oldListings : [];

      localStorage.setItem(
        "hostProperties",
        JSON.stringify([newProperty, ...listings])
      );

      setCreatedProperty(newProperty);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError(
        "The listing could not be saved. Local storage may be full; try using fewer or smaller photos."
      );
    }
  }

  return (
    <div className="bg-light min-vh-100">
      <nav className="navbar bg-white border-bottom sticky-top">
        <div className="container py-2 d-flex justify-content-between">
          <button
            className="btn btn-link text-decoration-none fw-bold fs-4 p-0"
            onClick={() => navigate("/")}
            style={{ color: "#ff385c" }}
          >
            airbnb
          </button>

          <button className="btn btn-light rounded-pill px-3" onClick={() => navigate("/")}>
            Exit
          </button>
        </div>
      </nav>

      <section className="py-5">
        <div className="container">
          {!submitted ? (
            <div className="row g-5 align-items-start">
              <div className="col-lg-5">
                <div className="position-sticky" style={{ top: 110 }}>
                  <span
                    className="badge rounded-pill px-3 py-2 mb-3"
                    style={{ backgroundColor: "#ffe4e9", color: "#d90429" }}
                  >
                    Airbnb your home
                  </span>
                  <h1 className="display-5 fw-bold mb-3">Create your listing</h1>
                  <p className="lead text-secondary">
                    Add the information guests need, choose your price, upload photos,
                    and publish your place on the home page.
                  </p>

                  <div className="bg-white rounded-4 border p-4 mt-4">
                    <h5 className="fw-bold">What happens after publishing?</h5>
                    <p className="text-secondary mb-0">
                      Your listing is saved in this browser and appears on the Home page.
                      Guests can open its details, add it to a wishlist, and continue to booking.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <form onSubmit={handleSubmit} className="bg-white rounded-4 shadow-sm border p-4 p-md-5">
                  <h3 className="fw-bold mb-1">Tell us about your place</h3>
                  <p className="text-secondary mb-4">Fields marked as required must be completed.</p>

                  {error && <div className="alert alert-danger">{error}</div>}

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Host name</label>
                      <input className="form-control form-control-lg" name="name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Email</label>
                      <input className="form-control form-control-lg" type="email" name="email" value={form.email} onChange={handleChange} required />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold">Listing title</label>
                      <input className="form-control form-control-lg" name="title" value={form.title} onChange={handleChange} placeholder="Cozy apartment with a great view" required />
                    </div>

                    <div className="col-md-7">
                      <label className="form-label fw-semibold">Location</label>
                      <input className="form-control form-control-lg" name="location" value={form.location} onChange={handleChange} placeholder="Cairo, Egypt" required />
                    </div>
                    <div className="col-md-5">
                      <label className="form-label fw-semibold">Property type</label>
                      <select className="form-select form-select-lg" name="property" value={form.property} onChange={handleChange}>
                        <option>Apartment</option>
                        <option>House</option>
                        <option>Villa</option>
                        <option>Room</option>
                        <option>Hotel</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Price per night (EGP)</label>
                      <input className="form-control form-control-lg" type="number" min="1" name="price" value={form.price} onChange={handleChange} placeholder="1500" required />
                    </div>
                  </div>

                  <hr className="my-4" />
                  <h5 className="fw-bold mb-3">Place basics</h5>

                  <div className="row g-3">
                    {[
                      ["guests", "Guests"],
                      ["bedrooms", "Bedrooms"],
                      ["beds", "Beds"],
                      ["bathrooms", "Bathrooms"],
                    ].map(([name, label]) => (
                      <div className="col-sm-6" key={name}>
                        <div className="border rounded-3 p-3 d-flex justify-content-between align-items-center">
                          <span className="fw-semibold">{label}</span>
                          <div className="d-flex align-items-center gap-3">
                            <button type="button" className="btn btn-outline-secondary rounded-circle" onClick={() => changeNumber(name, -1)}>−</button>
                            <strong>{form[name]}</strong>
                            <button type="button" className="btn btn-outline-secondary rounded-circle" onClick={() => changeNumber(name, 1)}>+</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <hr className="my-4" />
                  <h5 className="fw-bold mb-3">Amenities</h5>
                  <div className="row g-2">
                    {AMENITIES.map((amenity) => (
                      <div className="col-sm-6 col-md-4" key={amenity}>
                        <button
                          type="button"
                          className={`btn w-100 text-start border rounded-3 py-3 ${form.amenities.includes(amenity) ? "btn-dark" : "btn-light"}`}
                          onClick={() => toggleAmenity(amenity)}
                        >
                          {form.amenities.includes(amenity) ? "✓ " : "+ "}{amenity}
                        </button>
                      </div>
                    ))}
                  </div>

                  <hr className="my-4" />
                  <h5 className="fw-bold mb-3">Description</h5>
                  <textarea
                    className="form-control"
                    rows="5"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Tell guests what makes your place special..."
                    required
                  />

                  <hr className="my-4" />
                  <h5 className="fw-bold mb-2">Photos</h5>
                  <p className="text-secondary">Add up to 5 photos. They are compressed before being saved locally.</p>

                  <label className="border border-2 border-dashed rounded-4 p-4 text-center w-100 bg-light" style={{ cursor: "pointer" }}>
                    <div className="fs-1">📷</div>
                    <strong>{saving ? "Preparing photos..." : "Add photos"}</strong>
                    <div className="small text-secondary mt-1">JPG, PNG or WEBP</div>
                    <input type="file" accept="image/*" multiple hidden onChange={handleImages} disabled={saving || form.images.length >= 5} />
                  </label>

                  {form.images.length > 0 && (
                    <div className="row g-2 mt-2">
                      {form.images.map((src, index) => (
                        <div className="col-6 col-md-4" key={index}>
                          <div className="position-relative">
                            <img src={src} alt={`Listing ${index + 1}`} className="w-100 rounded-3 object-fit-cover" style={{ height: 150 }} />
                            <button type="button" className="btn btn-dark btn-sm rounded-circle position-absolute top-0 end-0 m-2" onClick={() => removeImage(index)}>×</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={saving}
                    className="btn btn-lg w-100 rounded-pill fw-semibold text-white mt-5"
                    style={{ backgroundColor: "#ff385c", border: "none" }}
                  >
                    Publish listing
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="bg-white rounded-4 shadow-sm border p-5 text-center">
                  <div className="fs-1 mb-3">🎉</div>
                  <h2 className="fw-bold">Your home is now listed</h2>
                  <p className="text-secondary mb-4">
                    <strong>{createdProperty?.title}</strong> was saved successfully and is ready to appear on the Home page.
                  </p>

                  {createdProperty?.images?.[0] && (
                    <img src={createdProperty.images[0]} alt={createdProperty.title} className="w-100 rounded-4 object-fit-cover mb-4" style={{ maxHeight: 340 }} />
                  )}

                  <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center">
                    <button className="btn btn-dark rounded-pill px-4" onClick={() => navigate(`/property/${createdProperty.id}`, { state: { property: createdProperty } })}>
                      View listing
                    </button>
                    <button className="btn btn-outline-dark rounded-pill px-4" onClick={() => navigate("/")}>
                      Go to Home
                    </button>
                    <button className="btn btn-light rounded-pill px-4" onClick={() => window.location.reload()}>
                      Add another place
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default BecomeHost;
