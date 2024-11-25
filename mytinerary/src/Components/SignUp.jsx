import React, { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    photoURL: "",
    country: "",
  });
  const [error, setError] = useState(null);

  const countries = ["USA", "Canada", "España", "Tailandia", "Turquía", "China", "Portugal", "Egipto", "Argentina", "Grecia", "Corea del sur", "Francia", "Mónaco"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      return "All fields are required.";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return "Invalid email address.";
    }
    if (formData.password.length < 6) {
      return "Password must be at least 6 characters.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setError(error);
      return;
    }

    // Simulate API call
    try {
      const response = await fetch("http://localhost:8080/api/auth/signUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Sign up successful! Redirecting...");
      } else {
        setError(data.message || "An error occurred.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          className="block w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          className="block w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="block w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="block w-full p-2 mb-4 border rounded"
        />
        <input
          type="url"
          name="photoURL"
          placeholder="Photo URL"
          value={formData.photoURL}
          onChange={handleInputChange}
          className="block w-full p-2 mb-4 border rounded"
        />
        <select
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          className="block w-full p-2 mb-4 border rounded"
        >
          <option value="">Select Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
      <p className="text-sm mt-4">
        Already have an account?{" "}
        <a href="/sign-in" className="text-blue-500 underline">
          Sign In
        </a>
      </p>
    </div>
  );
}
