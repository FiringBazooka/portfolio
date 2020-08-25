import React from "react";
import { Element } from "react-scroll";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Projects = () => {
  return (
    <Element id="Projects">
      <div>
        <h2>Projects</h2>
        <div className="ui clearing divider"></div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">#1 UI Redesign</h3>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{ paddingTop: "10px" }}
            >
              HTML, CSS, JSP
            </h5>
            <p>Model windows, rich UI, testing and big fixes.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(33, 150, 43)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              #2 Environment Engineer - DevOps
            </h3>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{ paddingTop: "10px" }}
            >
              IBM WebSphere, MSSQL, Atlassian Bitbucket, GIT, Atlassian Bamboo,
              Jenkins, Finacle Alert Server
            </h5>
            <p>
              New profiles in IBM WAS, automatic jobs using open source tools to
              fully build the code, Maintained database servers with
              administrative tasks.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(333, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              #3 Internet Banking Upgrade - Integration
            </h3>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{ paddingTop: "10px" }}
            >
              Spring DSL, Apache camel, core Java
            </h5>
            <p>
              Consume external services via REST, SOAP with JAX-WS and SAAJ
              frameworks.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(33, 50, 43)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              #4 Internet Banking Upgrade – Feature Migration
            </h3>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{ paddingTop: "10px" }}
            >
              RESTful WebServices with JAX-RS, Spring boot, NodeJS
            </h5>
            <p>
              Produce API's using JAX-RS and spring boot, JUNIT and PowerMockito
              unit testing with clover code coverage.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </Element>
  );
};

export default Projects;
