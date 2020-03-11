import React from "react";

export default ({ experiences }) => (

    <div className="container-fluid text-center">

        <h3 className="margin">Experiences</h3>

        <table class="table">

            <thead>

            <tr>

                <th scope="col">#</th>

                <th scope="col">Company Name</th>

                <th scope="col">Start Date</th>

                <th scope="col">End Date</th>

                <th scope="col">Responsibilities</th>

            </tr>

            </thead>

            <tbody>

            {

                experiences.map((item, i) => {

                    return <tr index={i}>

                        <th scope="row">{i + 1}</th>

                        <td>{item.companyName}</td>

                        <td>{item.startDate}</td>

                        <td>{item.endDate}</td>

                        <td>{item.resp}</td>

                    </tr>

                })

            }

            </tbody>

        </table>

    </div>

);