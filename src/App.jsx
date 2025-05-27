import React from "react";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Leetcode from "./components/leetcode/Leetcode";

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Portfolio />
            <Leetcode />
            <Experience />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
