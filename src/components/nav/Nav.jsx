/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {BiSolidUserPin} from "react-icons/bi";
import {BiBookReader} from "react-icons/bi";
import {SiCodeproject} from "react-icons/si";
import {MdOutlineContactSupport} from "react-icons/md";
import { useState } from "react";
const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href ="#" onClick={() => setActiveNav('#')} className={activeNav==="#" ? 'active' : ''}><AiOutlineHome/></a>
            <a href ="#about" onClick={() => setActiveNav('#about')} className={activeNav==="#about" ? 'active' : ''}><BiSolidUserPin/></a>
            <a href ="#experience" onClick={() => setActiveNav('#experience')} className={activeNav==="#experience" ? 'active' : ''}><BiBookReader/></a>
            <a href ="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav==="#portfolio" ? 'active' : ''}><SiCodeproject/></a>
            <a href ="#contact" onClick={() => setActiveNav('#contact')} className={activeNav==="#contact" ? 'active' : ''}><MdOutlineContactSupport/></a>
        </nav>
    );
    }

export default Nav;