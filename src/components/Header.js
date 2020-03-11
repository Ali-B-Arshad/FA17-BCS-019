import React from "react";

export default ({ name, picture }) => (

    <div className="container-fluid bg-1 text-center">

        <h3 className="margin">Looking to hire a web developer?</h3>

        <img

            src={picture}

            className="img-responsive img-circle margin"

            style={{ display: "inline" }}

            alt="Bird"

            width="350"

            height="350"

        />

        <h3>{name}</h3>

    </div>

);