import React from "react";

export default ({ title, dataSet }) => (

    <div className="container-fluid text-center">

        <h3>{title}</h3>

        <p>

            {

                dataSet.map((item, i) => {

                    let data = item + ", ";

                    if(i+1 === dataSet.length)

                        data = item

                    return <span index={i}>{data}</span>

                })

            }

        </p>

    </div>

);