import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import React from "react";
import useWindowSize from "./hooks/useWindowSize";

const Header = ({ title }) => {
    // const { width } = useContext(DataContext);
    const { width } = useWindowSize();
    return (
        <header className="Header">
            <h1>{title}</h1>
            {width < 768 ? (
                <FaMobileAlt />
            ) : width < 992 ? (
                <FaTabletAlt />
            ) : (
                <FaLaptop />
            )}
        </header>
    );
};

export default Header;
