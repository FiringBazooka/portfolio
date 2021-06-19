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
              Consume external services and integrate via REST, SOAP communication with Apache Camel middleware.
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
              RESTful WebServices with JAX-RS, Spring boot
            </h5>
            <p>
              Produce API's using JAX-RS and spring boot, JUNIT and PowerMockito
              unit testing with clover code coverage.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(10, 99, 12)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              #5 Microservices
            </h3>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{ paddingTop: "10px" }}
            >
              RESTful WebServices with JAX-RS, Spring Boot microservices
            </h5>
            <p>
              To create a microservice that handles a specific module in payments managing the limits a user can utilize for a payment.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(10, 10, 99)", color: "#ggg" }}
          >
            <h3 className="vertical-timeline-element-title">
              #6 Batches
            </h3>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{ paddingTop: "10px" }}
            >
               Java and Spring Boot batches 
            </h5>
            <p>
            To create Java batches that are responsible for scheduling and processing payments including Funds transfer, pay Anyone, Bill payments and Tax payments etc.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </Element>
  );
};

export default Projects;
