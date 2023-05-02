
import Head from 'next/head';
import React from "react";
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Layout = ({ children, title = "Mediatools" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav className="fixed top-0 left-0 right-0 z-30">
        <Header />
      </nav>
      <main>{children}</main>
      <footer>
        <div className="">
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default Layout;