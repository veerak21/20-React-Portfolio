import React, { useState } from "react";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Footer from "../src/components/Footer";
// import { Helmet } from 'react-helmet-async';
import { HelmetProvider } from 'react-helmet-async';


import './App.css';

function App() {
  const [currentTab, handleTabChange] = useState("React App");
  const helmetContext = {};


  // This method is checking to see what the value of `currentTab` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderTab = () => {
    if (currentTab === "About") {
      return <About />;
    }
    if (currentTab === "Contact") {
      return <Contact />;
    }
    if (currentTab === "Portfolio") {
      return <Portfolio />;
    }
    if (currentTab === "Resume") {
      return <Resume />;
    }
    // return <About />;
  };

  return (
    <>
      {/* <Helmet>
        <title>VeeraK. Pagadala's Portfolio |  </title>
        <meta name="description" content="From Helmet"></meta>

      </Helmet> */}
      <HelmetProvider context={helmetContext}>


        <Header
          currentTab={currentTab}
          handleTabChange={handleTabChange}
        ></Header>
        <main>{renderTab()}</main>
        <Footer></Footer>
      </HelmetProvider>
    </>
  );
}

export default App;