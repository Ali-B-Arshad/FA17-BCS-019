import React from "react";

export default ({ educations }) => (

    <div className="container-fluid text-center">

        <h3 className="margin">Education</h3>

        <table class="table">

            <thead>

            <tr>

                <th scope="col">#</th>

                <th scope="col">Institute</th>

                <th scope="col">Degree Name</th>

                <th scope="col">Start Date</th>

                <th scope="col">End Date</th>

                <th scope="col">Description</th>

            </tr>

            </thead>

            <tbody>

            {

                educations.map((item, i) => {

                    return <tr index={i}>

                        <th scope="row">{i + 1}</th>

                        <td>{item.institute}</td>

                        <td>{item.degree}</td>

                        <td>{item.startDate}</td>

                        <td>{item.endDate}</td>

                        <td>{item.desc}</td>

                    </tr>

                })

            }

            </tbody>

        </table>

    </div>

);