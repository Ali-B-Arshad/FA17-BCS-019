import React, { Component } from 'react';

import { render } from 'react-dom';

import Header from './components/Header';

import './style.css';

import img from './messi.jpg'

import Information from './components/Information';

import Education from './components/Education';

import Experience from './components/Experience';

import Extras from './components/Extras';

class App extends Component {

    constructor() {

        super();

        this.state = {

            name: 'Ali Bin Arshad',

            picture: img,

            address: "Comsats, Islamabad",

            contact: [

                "ali.b.arshadd@gmail.com",

                "+923181516869"

            ],

            educations: [

                {

                    institute: "CUI",

                    degree: "CS",

                    startDate: "Sep 2017",

                    endDate: "June 2021",

                    desc: "this is just some placeholder text."

                },

                {

                    institute: "OPF",

                    degree: "Pre-Engr",

                    startDate: "Aug 2015",

                    endDate: "May 2017",

                    desc: "this is just some placeholder text."

                }

            ],

            experiences: [

                {

                    companyName: "Libex Digital",

                    startDate: "June 2019",

                    endDate: "Jan 2020",

                    resp: "Graphic Designer Internee"

                },

                {

                    companyName: "Fiverr",

                    startDate: "Jan 2018",

                    endDate: "Currently Working",

                    resp: "Web and Graphic Designing"

                }

            ],

            skills:[

                "java", "c++", "testing","Python","JavaScript","Illustrator","Photoshop"

            ],

            hobbies:[

                "football","table tennis","Snooker","reading"

            ]

        };

    }

    render() {

        return (

            <div>

            <Header name={this.state.name} picture={this.state.picture} />

        <Information address={this.state.address} contact={this.state.contact} />

        <Education educations={this.state.educations} />

        <Experience experiences={this.state.experiences} />

        <Extras title="Skills" dataSet={this.state.skills} />

        <Extras title="Hobbies" dataSet={this.state.hobbies} />

        </div>

    );

    }

}

render(<App />, document.getElementById('root'));