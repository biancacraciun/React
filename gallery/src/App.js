import React, { Component } from 'react';

import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Job from './Components/Job/Job';
import Title from './Components/Resume/Title';
import KnowledgeAndSkills from './Components/Knowledge-and-skills/Knowledge-and-skills';
import Contact from './Components/Contact/Contact';
import Social from './Components/Social/Social';

import './Gallery.scss'; 

class App extends Component {
  state = {
    name: "Craciun Bianca",
    occupation: "Beginner Front-End Developer",
    about: ["Moxie - determination", "Tyro - a beginner in learning anything"],
    portofolio: "https://github.com/biancacraciun",
    linkedin: "https://www.linkedin.com/in/bianca-craciun-5701bb19a/",
    facebook: "https://www.facebook.com/craciunbiancaaa/",
    download: '/Files/Craciun Bianca fe dev.pdf',
    education: [
      {
        name: "National College Mihail Sadoveanu, Pascani",
        profile: "Theoretical program: natural sciences",
        period: "2011-2015"
      },
      {
        name: "University Alexandru-Ioan Cuza, Iasi",
        profile: "Faculty of Pshychology and Education Science",
        period: "2015-2018"
      },
      {
        name: "Frond-end programming at Wantsome IT Academy, Iasi",
        period: "september 2019 - february 2020",
        program: "https://wantsome.ro/curs-programare-front-end-iasi",
      }
    ],
    hobbiesAndPassions: ["Running", "Reading", "Coffee", "Travel", "Photography"],
    job: {
      job: "Sales Assistant",
      company: "Genco Trade SRL",
      period: "july 2018 - september 2019",
    },
    contact: {
      email: "craciunbiancas@yahoo.com",
      phone: "0764373761",
    },
    knowledge: [
      "a short introduction about software development lifecycles and working methodologies within teams",
      "a short introduction about work coordination across teams - Git",
      "used Visual Studio Code for perform (code) and organizing the tasks",
      "putting in place the base structure of a web User Interface using HTML5 and semantic elements and styling it using CSS (basic SASS features also)",
      "learnt and practiced Responsive Web Design principles (media queries, screen resolutions, cross-browser compatibility)",
      "used Chrome Developer Tools to inspect the structure of User Interfaces and debug JavaScript code",
      "knowledge about basics JavaScript coding language and how the browser runs the JavaScript (variables and scoping, statements, functions, operators, data types)",
      "basic knowledge (intro) about advanced JavaScript features (promise, callback, events)",
      "learnt how to work with the DOM (DOM Manipulation)",
      "basic JavaScript algorithms (different types of programming paradigms - functional, OOP)",
      "learnt about existent tools for transpiling unsuported JavaScript features for cross-browser compatibility",
      "introduction to HTTP basics - HTTP protocol that allows client - server communication (methods, status codes, requests, using AJAX techniques existent in JavaScript (XMLHttpRequest, fetch)",
      "basic knowledge about JSON objects and types of storing data (localStorage, sessionStorage, cookies)",
      "intro in JavaScript frameworks - ReactJS: props, state, setState, useEffect(), useState()"
    ]
  }

  render() {

    return (
      <div className="App">
        <div className="header-and-menu">
          <Header 
            name={this.state.name} 
            occupation={this.state.occupation}
          />
          <Menu />
          <Social 
            className="social"
            facebook={this.state.facebook}
            github={this.state.portofolio}
            linkedin={this.state.linkedin}
          />
        </div>

        <div className="pages">
          <About 
            className="about" 
            aboutMe={this.state.about}
          />

          <div className="resume"> 
            <Title id="title" />

            <div className="education-and-job">
              <div id="education">
                {this.state.education.map(education => 
                  <Resume
                    name={education.name}
                    period={education.period}
                    profile={education.profile}
                    program={education.program}
                  />
                )}
              </div>

              <Job 
                job={this.state.job.job}
                company={this.state.job.company}
                period={this.state.job.period}
              />
            </div>
          </div>
        
          <KnowledgeAndSkills className="knowledge" knowledge={this.state.knowledge}/>
          <Contact 
            className="contact"
            email={this.state.contact.email}
            phoneNr={this.state.contact.phone}
            github={this.state.portofolio}
            linkedin={this.state.linkedin}
            cv={this.state.download}
          />
        </div>
      </div> 
    );
  }
}

export default App;