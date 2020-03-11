import React from "react";

export default ({ address, contact }) => (

    <div className="container-fluid text-center">

        <div className="col-md-6">

            <h3 className="">Address</h3>

            <p>{address}</p>

        </div>

        <div className="col-md-6">

            <h3>Contact</h3>

            {

                contact.map(function (item, i) {

                    return <p>{item}</p>

                })

            }

        </div>

    </div>

);