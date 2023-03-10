import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
    return (
        <main className="Missing">
            <h2>Page not found</h2>
            <p>Well, that's disapointing.</p>
            <p>
                <Link to="/">Visit Out Homepage.</Link>
            </p>
        </main>
    );
};

export default Missing;
