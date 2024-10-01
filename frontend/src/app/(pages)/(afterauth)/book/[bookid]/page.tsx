"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

interface Book {
  _id: string;
  image: string;
  title: string;
  author: string;
  description: string;
  price: string;
  amazonLink: string;
  pdf: string;
}

function page() {
  const { bookid } = useParams();
  console.log(bookid);
  
  const router = useRouter();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/books/${bookid}`);
        if(!response.ok) {
          throw new Error('Failed to fetch book data')
        }
        const data = await response.json()
        setBook(data)
        setLoading(false)
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchBook()
  }, []);


  if(loading) {
    return <p>Loading...</p>
  }
  if(error) {
    return <p>Error: {error}</p>
  }
  const getData = () => {
    
  };

  return (
    <div className="main">
      <Navbar />
      <div className="container flex items-center justify-center m-12">
        <div className="imageContainer mr-8 w-80 border">
          <img src={book.image} alt="Book Image" className="object-cover " />
        </div>
        <div className="details ">
          <h1 className="font-bold mb-5">{book.title}</h1>
          <p className="mb-5">Author: By {book.author}</p>
          <p className="text-wrap mb-5">{book.description}</p>
          <p className="mb-5">Price: {book.price}</p>
          <button
            className="border p-2 bg-yellow-300 rounded-md mb-5"
            onClick={() => {
              router.push(`/read/${bookid}`);
            }}
          >
            Start Reading
          </button>
          <button>Buy on Amazon</button>
        </div>
      </div>
    </div>
  );
}

export default page;
