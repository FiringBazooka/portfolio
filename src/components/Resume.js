import React from "react";
import Skills from "./Skills";
import { Element } from "react-scroll";
import Projects from "./Projects";
import Education from "./Education";

function exp() {
  var msDiff = new Date().getTime() - new Date("August 25, 2014").getTime();
  var days = msDiff / (1000 * 60 * 60 * 24 * 365);
  return days.toFixed(2);
}

const Resume = () => {
  return (
    <div>
      <Element id="About">
        <div className="ui header floated">Career Objective</div>
        <div className="ui clearing divider"></div>
        <div>
          <p>
            Seek to obtain a challenging role in an organization, where my
            skills and abilities as a Software professional would help in
            striking a balance between my career aspirations and organizational
            expectations.
          </p>
        </div>

        <div className="ui header floated">Work Experience</div>
        <div className="ui clearing divider"></div>
        <div>
          <ul>
            <li>
              {exp()} years of diverse experience in Information Technology with
              emphasize on Application Development to build and deployment.
            </li>
            <li>
              Working as Developer for ANZ on behalf of Edge Verve since May
              2019 in Melbourne.
            </li>
            <li>
              Working as a Senior Systems Engineer for Edge Verve Systems from
              Aug-2015 to till date.
            </li>
            <li>
              Worked as a Systems Engineer for Infosys Limited from Aug-2014 to
              Jul-2015.
            </li>
          </ul>
        </div>

        <div className="ui header floated">Snapshot</div>
        <div className="ui clearing divider"></div>
        <div>
          <ul>
            <li>
              Extensive experience and expertise in building API’s using Java,
              J2EE, and Restful JAX-RS.
            </li>
            <li>
              Experience in developing and consuming Web Services using WSDL,
              SOAP and HTTP.
            </li>
            <li>
              I have experience on Spring basics DSL and Apache camel middleware
              framework.
            </li>
            <li>Knowledge on Spring boot.</li>
            <li>Expert experience on the version control system GIT.</li>
            <li>
              Hands on experience on build and automation tools like Atlassian
              Bitbucket, Atlassian Bamboo and Jenkins.
            </li>
            <li>
              Knowledge in administrating different kinds of servers like Tomcat
              & WebSphere.
            </li>
            <li>Knowledge to work on Database MSSQL.</li>
            <li>
              Self learnt React JS with concepts including Redux and Reducers of
              ES2015.
            </li>
            <li>
              Experience in Software Development Life Cycle – Analysis, Design,
              Develop, Test, Deploy and Support.
            </li>
            <li>
              Extensive experience in different IDE’s like Eclipse, RAD and STS.
            </li>
            <li>Good knowledge in Object Oriented Programming Concepts.</li>
            <li>
              Flexible, able to work effectively in a team environment or as an
              individual contributor.
            </li>
            <li>
              Flexible to work on different kinds of API’s and Technologies.
            </li>
          </ul>
        </div>
      </Element>
      <br />

      <Skills />
      <br />

      <Projects />
      <br />

      <Education />
      <br />

      <div class="ui top attached tabular menu">
        <div class="ui header floated active item">Personal Info</div>
      </div>
      <div class="ui bottom attached active tab segment">
        <a href="https://www.linkedin.com/in/suryadeepak/" target="_blank">
          <i className="linkedin icon large"></i>
        </a>
        <a
          href="https://github.com/FiringBazooka?tab=repositories"
          target="_blank"
        >
          <i className="github icon large"></i>
        </a>
        <a href="mailto:bpls.deepak@gmail.com" target="_blank">
          <i className="mail icon large"></i>
        </a>
        <a href="https://www.hackerrank.com/FiringBazooka" target="_blank">
          <i className="hack icon large">H</i>
        </a>
      </div>
    </div>
  );
};

export default Resume;
