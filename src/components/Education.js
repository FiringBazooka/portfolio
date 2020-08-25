import React from "react";
import { Element } from "react-scroll";

const Education = () => {
  return (
    <Element id="Education">
      <h2>Educational Qualifications</h2>
      <div className="ui clearing divider"></div>
      <table className="ui celled striped table">
        <tr>
          <div className="ui four" style={{ textAlign: "center" }}>
            <div className="ui mini statistic">
              <div className="label">Degree</div>
              <div className="value">Graduation</div>
            </div>
            <div className="ui mini statistic">
              <div className="label">Education</div>
              <div className="value">B.Tech</div>
            </div>
            <div className="ui mini statistic">
              <div className="label">Year</div>
              <div className="value">2014</div>
            </div>
            <div className="ui mini statistic">
              <div className="label">Percentage</div>
              <div className="value">73.48</div>
            </div>
          </div>
        </tr>
      </table>

      <table className="ui celled striped table">
        <tr>
          <div className="ui four" style={{ textAlign: "center" }}>
            <div className="ui mini statistic">
              <div className="label">Degree</div>
              <div className="value">Intermediate</div>
            </div>
            <div className="ui mini statistic">
              <div className="label">Education</div>
              <div className="value">MPC</div>
            </div>
            <div className="ui mini statistic">
              <div className="label">Year</div>
              <div className="value">2010</div>
            </div>
            <div className="ui mini statistic">
              <div className="label">Percentage</div>
              <div className="value">93.1</div>
            </div>
          </div>
        </tr>
      </table>

      <table className="ui celled striped table">
        <tr>
          <div className="ui four" style={{ textAlign: "center" }}>
            <div className="ui mini statistic">
              <div className="label">Degree</div>
              <div className="value">10th</div>
            </div>
            <div className="ui mini statistic">
              <div className="label">Education</div>
              <div className="value">ICSE</div>
            </div>
            <div className="ui mini statistic">
              <div className="label">Year</div>
              <div className="value">2008</div>
            </div>
            <div className="ui mini statistic">
              <div className="label">Percentage</div>
              <div className="value">83.1</div>
            </div>
          </div>
        </tr>
      </table>
    </Element>
  );
};

export default Education;
