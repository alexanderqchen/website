import React from "react";
import { Link } from "react-router-dom";
import Headshot from "../../images/headshot.jpeg";
import Design from "../../images/design.svg";
import Architecture from "../../images/architecture.svg";
import Construction from "../../images/construction.svg";

import JavaScript from "../../images/technologies/javascript.svg";
import Python from "../../images/technologies/python.png";

import ReactIMG from "../../images/technologies/react.png";
import Node from "../../images/technologies/node.png";
import Django from "../../images/technologies/django.png";
import Flask from "../../images/technologies/flask.png";

import MySQL from "../../images/technologies/mysql.svg";
import PostgreSQL from "../../images/technologies/postgresql.png";
import MongoDB from "../../images/technologies/mongodb.png";
import Firebase from "../../images/technologies/firebase.png";

import Aws from "../../images/technologies/aws.png";
import Gcp from "../../images/technologies/gcp.png";
import Azure from "../../images/technologies/azure.png";
import Heroku from "../../images/technologies/heroku.svg";
import Github from "../../images/technologies/github.svg";

import "./styles.scss";

const About = () => {
  return (
    <div id="about">
      <h1>Who am I?</h1>
      <div className="introduction">
        <img src={Headshot} />
        <p>Hi, I'm Alex!</p>
        <p>
          I'm a freelance full-stack web developer and generalist software
          engineer. I have a passion for building things and making projects
          come to life.
        </p>
        <p>
          I attended UCLA as a CS major and have industry experience at Amazon
          and various unicorns.
        </p>
        <p>
          For more information, check out{" "}
          <a href="https://www.linkedin.com/in/alexanderqchen/" target="_blank">
            my LinkedIn
          </a>{" "}
          or{" "}
          <a
            href="https://drive.google.com/file/d/1qiRgSmRsBMxbmHc1dxJfFQK4oAQfeXJj/view?usp=sharing"
            target="_blank"
          >
            my resume
          </a>
          .
        </p>
      </div>

      <h1>What I can do</h1>
      <div className="services">
        <div className="service">
          <img src={Design} />
          <p>Design</p>
        </div>
        <div className="service spacing">
          <img src={Architecture} />
          <p>Architecture</p>
        </div>
        <div className="service">
          <img src={Construction} />
          <p>Construction</p>
        </div>
      </div>

      <p>My services will be useful if you:</p>
      <ul>
        <li>
          Have an app idea, but either not enough time or technical experience
          to build it.
        </li>
        <li>Want a website to showcase your business or yourself.</li>
        <li>
          Want to optimize your or your employees' workflow with a customized
          web application.
        </li>
        <li>Have existing software, but want it to be modified in some way.</li>
        <li>Want to outsource your software development.</li>
        <li>
          Want anything done related to software engineering and web
          development.
        </li>
      </ul>

      <p>My services will NOT be useful if you:</p>
      <ul>
        <li>
          Want a designer
          <p>
            While I do consider design to be an essential part of my workflow, I
            am primarily a technical developer and suggest you find a designer
            for strictly design work.
          </p>
        </li>
        <li>
          Want to hire for a full-time role
          <p>
            While I really do appreciate your interest, I'm only taking
            freelance projects at this time.
          </p>
        </li>
      </ul>

      <h1>Technologies I typically use</h1>

      <div className="technologies">
        <div className="technology">
          <img src={JavaScript} />
          <p>JavaScript</p>
        </div>
        <div className="technology">
          <img src={Python} />
          <p>Python</p>
        </div>
      </div>

      <div className="technologies">
        <div className="technology">
          <img src={ReactIMG} />
          <p>React</p>
        </div>
        <div className="technology">
          <img src={Node} />
          <p>Node</p>
        </div>
        <div className="technology">
          <img src={Django} />
          <p>Django</p>
        </div>
        <div className="technology">
          <img src={Flask} />
          <p>Node</p>
        </div>
      </div>

      <div className="technologies">
        <div className="technology">
          <img src={MySQL} className="large" />
          <p>MySQL</p>
        </div>
        <div className="technology">
          <img src={PostgreSQL} />
          <p>PostgreSQL</p>
        </div>
        <div className="technology">
          <img src={MongoDB} className="small" />
          <p>MongoDB</p>
        </div>
        <div className="technology">
          <img src={Firebase} />
          <p>Firebase</p>
        </div>
      </div>

      <div className="technologies">
        <div className="technology">
          <img src={Aws} />
          <p>Amazon Web Services</p>
        </div>
        <div className="technology">
          <img src={Gcp} />
          <p>Google Cloud Platform</p>
        </div>
        <div className="technology">
          <img src={Azure} />
          <p>Microsoft Azure</p>
        </div>
        <div className="technology">
          <img src={Heroku} className="small" />
          <p>Heroku</p>
        </div>
        <div className="technology">
          <img src={Github} />
          <p>Github</p>
        </div>
      </div>

      <br />
      <p>
        Have a task, project, or an idea that's just starting to brew?{" "}
        <a href="mailto:alexander.qili.chen@gmail.com" target="_blank">
          Let's get in touch.
        </a>
      </p>
    </div>
  );
};

export default About;
