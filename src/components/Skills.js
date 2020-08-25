import React from "react";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <Element id="skills">
      <table className="ui celled striped table">
        <thead>
          <tr>
            <td colSpan="2" className="header ui floated">
              Technical Skills
            </td>
          </tr>
        </thead>
        <tr>
          <td>Database</td>
          <td>MS SQL Server</td>
        </tr>
        <tr>
          <td>Technologies</td>
          <td>
            <tr>
              <td>Web</td>
              <td>HTML, CSS, JSP, React</td>
            </tr>
            <tr>
              <td>Core</td>
              <td>Java, JAX-RS, Spring</td>
            </tr>
            <tr>
              <td>Unit Testing</td>
              <td>Junit, PowerMockito</td>
            </tr>
          </td>
        </tr>
        <tr>
          <td>Devops</td>
          <td>Jenkins, Bamboo, GIT, batch scripting</td>
        </tr>
        <tr>
          <td>ORM</td>
          <td>JDBC, Hibernate, Spring data JPA</td>
        </tr>
        <tr>
          <td>Serves</td>
          <td>WAS 8.5.5, Tomcat</td>
        </tr>
        <tr>
          <td>IDE's</td>
          <td>Eclipse, RAD, STS</td>
        </tr>
        <tr>
          <td>Domain</td>
          <td>Internet Banking, Alerts</td>
        </tr>
      </table>
    </Element>
  );
};

export default Skills;
