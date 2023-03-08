// Import the Head component from the "next/head" module.
import Head from "next/head";

// Import the useViewerConnection and useViewerRecord hooks from the "@self.id/react" library.
import { useViewerConnection, useViewerRecord } from "@self.id/react";

// Import the EthereumAuthProvider component from the "@self.id/web" library.
import { EthereumAuthProvider } from "@self.id/web";

// Import the useState hook from the "react" module.
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Decentralized Identity: Build a Profile with NextJs, Ethereum &
          Ceramic Network
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-200">
        <div className="bg-gray-600 py-4 px-4 sm:px-6 lg:px-8 lg:py-6 shadow-lg text-white">
          <div className="container mx-auto px-6 md:px-0">
            <h1 className="text-2xl font-bold text-white text-center">
              Decentralized Identity: Build a Profile with NextJs, Ethereum &
              Ceramic Network
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-center pt-20 font-sans overflow-hidden">
          <div className="max-w-md w-full mx-auto">
            <div className="bg-white p-10 rounded-lg shadow-lg">
              <form>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="border border-gray-300 p-2 w-full rounded-lg"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="bio"
                  >
                    Bio
                  </label>
                  <textarea
                    className="border border-gray-300 p-2 w-full rounded-lg"
                    name="bio"
                    id="bio"
                    rows="5"
                    placeholder="Write something about yourself"
                  ></textarea>
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="border border-gray-300 p-2 w-full rounded-lg"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Your username"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Update Profile
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    Connect Wallet
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
