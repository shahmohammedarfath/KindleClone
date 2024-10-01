"use client";
import React, { useEffect, useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useParams } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

interface Book {
  _id: string;
  image: string;
  title: string;
  author: string;
}

function page() {
  const { bookid } = useParams();
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/books/${bookid}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch book data");
        }
        const data = await response.json();
        if (data.pdf) {
          let url = "http://localhost:5000/" + data.pdf;
          setPdfUrl(url);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchBook();
  }, []);

  // if(loading) {
  //   return <p>Loading...</p>
  // }
  // if(error) {
  //   return <p>Error: {error}</p>
  // }
  return (
    <div className="main">
      <div className="container">
        <div className="viewer">
          {pdfUrl ? (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
              <div style={{ height: "750px" }}>
                <Viewer
                  fileUrl={pdfUrl}
                  plugins={[defaultLayoutPluginInstance]}
                  theme="dark"
                />
              </div>
            </Worker>
          ) : (
            <p>Loading PDF...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default page;
