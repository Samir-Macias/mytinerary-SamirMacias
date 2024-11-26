import React, { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    photoUrl: "",
    country: "",
  });
  const [error, setError] = useState(null);

  const countries = [
    "USA", "Canada", "España", "Tailandia", "Turquía", "China",
    "Portugal", "Egipto", "Argentina", "Grecia", "Corea del sur",
    "Francia", "Mónaco"
  ];

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

    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Create an Account</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="url"
            name="photoUrl"
            placeholder="Photo URL"
            value={formData.photoUrl}
            onChange={handleInputChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/sign-in" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
