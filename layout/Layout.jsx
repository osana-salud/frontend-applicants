import React from "react";
import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Osana Challenge</title>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-gray-100 min-h-screen">
        <Header />

        <div className="container mx-auto">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
