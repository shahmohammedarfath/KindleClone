"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function page() {
  const router = useRouter();
  return (
    <div className="bg-gray-900 overflow-hidden min-h-screen">
      <div className="static isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Book Haven
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              "Book Haven" is your go-to app for discovering and sharing your
              favorite books. Explore a vast library across genres. With curated
              reading lists and book clubs, "Book Haven" enhances your reading
              experience. Find your next great read today!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={() => {
                  router.push("/signup");
                }}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Account
              </button>
              <button
                onClick={() => {
                  router.push("/login");
                }}
                className="text-sm font-semibold leading-6 text-white"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="min-h-screen flex justify-center bg-gray-900 gap-1">
  //     <div>
  //       <button
  //         className="border rounded-md bg-yellow-400 hover:bg-yellow-500 p-3 font-bold "
  //         onClick={() => {
  //           router.push("/signup");
  //         }}
  //       >
  //         Create an Amazon account
  //       </button>
  //     </div>
  //     <div>
  //       <button
  //         className="border rounded-md bg-slate-200 hover:bg-slate-300 p-3 font-bold"
  //         onClick={() => {
  //           router.push("/login");
  //         }}
  //       >
  //         Sign in with your account
  //       </button>
  //     </div>
  //   </div>
  // );
}

export default page;
