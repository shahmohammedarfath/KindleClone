"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

function CreateAccount() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await fetch(`${apiUrl}/api/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        alert("Account created successfully");
        router.push("/login");
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error("Error creating account:", error);
      alert("Failed to create account");
    }
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900">
      <div>
        <h1 className="text-4xl font-bold mb-8 text-white mt-4">
          Create Account
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-gray-800 p-8 rounded-lg shadow-md text-white"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Your name
          </label>
          <input
            className="w-full rounded-lg px-3 py-2 border border-gray-700 focus:outline-none focus:border-blue-600 text-black"
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
            placeholder="First and Last name"
            required
            autoComplete="name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            className="w-full rounded-lg px-3 py-2 border border-gray-700 focus:outline-none focus:border-blue-600 text-black"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            name="email"
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
            value={formData.password}
            onChange={handleChange}
            placeholder="Atleast 6 characters"
            required
            autoComplete="new-password"
            name="password"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password-again"
            className="block text-sm font-medium mb-2"
          >
            Password Again
          </label>
          <input
            className="w-full rounded-lg px-3 py-2 border border-gray-700 focus:outline-none focus:border-blue-600 text-black"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            autoComplete="new-password"
            name="confirmPassword"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Create your Amazon account
        </button>
        <p className="m-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600">
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
}

export default CreateAccount;
