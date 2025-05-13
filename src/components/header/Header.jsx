import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <div className="header_left">
                    <h1>Heyyy </h1>
                    <h2>This is Saher Afrin Khan</h2>
                    <h5 className="text-light">An aspiring Software Engineer</h5>
                    <CTA />
                    <HeaderSocials />
                </div>

                <div className="header_right">
                    <div className="me">
                        <img src={ME} alt="Saher" />
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;
