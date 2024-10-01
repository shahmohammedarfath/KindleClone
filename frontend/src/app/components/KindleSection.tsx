"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { MdBook } from "react-icons/md";

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

function KindleSection() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/books/all`)

        if(!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setAllBooks(data);
        setLoading(false);
      }
      catch (err) {
        console.error(err);
        setError("Error fetching books", err.message);
        setLoading(false);
      }
    }
    fetchAllBooks()  
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
    <div className="w-full h-full flex bg-gray-200">
      <div className="w-1/4 h-full bg-white overflow-y-auto">
        <div className="main flex items-center ml-2 mt-2">
          <FaBookOpen className="w-6 h-6" />
          <p className="text-lg ml-2 mr-1">Library</p>
          {show ? (
            <FaChevronDown onClick={() => setShow(!show)} />
          ) : (
            <FaChevronRight onClick={() => setShow(!show)} />
          )}
        </div>
        {show && (
          <div className="items flex flex-col items-center">
            <span className="py-3">All Titles</span>
            <span className="py-3">Books</span>
            <span className="py-3">Comics</span>
            <span className="py-3">Samples</span>
          </div>
        )}
        <div className="flex items-center ml-2 mt-4">
          <MdBook className="w-6 h-6" />
          <p className="text-lg ml-2">Notes & Highlights</p>
        </div>
      </div>
      <div className="w-3/4 h-full">
        <h1 className="m-3 font-bold">Trending</h1>
        <div className="flex flex-wrap gap-5">
          {allBooks.map((book: any) => (
            <div
              onClick={() => router.push(`/book/${book._id}`)}
              key={book._id}
              className=""
            >
              <img src={book.image} alt="book-image" className="object-cover" />
              <div>
                <h3 className="font-bold">{book.title}</h3>
                <p>{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KindleSection;
