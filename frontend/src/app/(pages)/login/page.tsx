"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

function page() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const { email, password } = formData;
    try {
      const response = await fetch(`${apiUrl}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password}),
      });
      if (response.ok) {
        const data = await response.json();
        alert("Login successful");
        console.log('Token', data.token);
        router.push("/kindle-library");
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error logging in", error);
      alert("Failed to login");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900">
      <div>
        <h1 className="text-4xl font-bold mb-8 text-white mt-4">Sign In</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-gray-800 p-8 rounded-lg shadow-md text-white"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            className="w-full rounded-lg px-3 py-2 border border-gray-700 focus:outline-none focus:border-blue-600 text-black"
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="username"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            className="w-full rounded-lg px-3 py-2 border border-gray-700 focus:outline-none focus:border-blue-600 text-black"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Create your Amazon account
        </button>
        <p className="m-4 text-center">
          New to Amazon?{" "}
          <a href="/signup" className="text-blue-600">
            Create your Amazon account
          </a>
        </p>
      </form>
    </div>
  );
}

export default page;
