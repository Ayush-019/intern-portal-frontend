import React from "react";
import "./CompanyPage.css";
import DaysImg from "../../Assets/Days.png";
import Durationimg from "../../Assets/duration.png";
import LocationImg from "../../Assets/location.png";
import StipendImg from "../../Assets/stipend.png";
import EXPImg from "../../Assets/exp.png";
import OpeningsImg from "../../Assets/usertick.png";
import ApplicantsImg from "../../Assets/profile2user.png";
import PostedImg from "../../Assets/calendar.png";

const CompanyPage = ({ data }) => {
  console.log("companyPageData", data);
  return (
    <div className="companyPageWrapper">
      <div className="companyPageHeader">
        <img src={data.companyLogo} alt="company logo" />
        <div className="titles">
          <h3>{data.title}</h3>
          <h5>{data.companyName}</h5>
        </div>
        <div className="service">
          <span>IT Services</span>
        </div>
      </div>
      <div className="detailsWrapper">
        <div className="topDetails">
          <div className="durationDetail">
            <img src={Durationimg} alt=""></img>
            <div className="durationValue">
              <h4>{data.duration} Months</h4>
              <h5>Duration</h5>
            </div>
            <div className="verticalBr"></div>
          </div>
          <div className="durationDetail">
            <img src={EXPImg} alt=""></img>
            <div className="durationValue">
              <h4>{data.experience}</h4>
              <h5>Experience</h5>
            </div>
            <div className="verticalBr"></div>
          </div>
          <div className="durationDetail">
            <img src={StipendImg} alt=""></img>
            <div className="durationValue">
              <h4>
                {data.stipendStart} - {data.stipendEnd}
              </h4>
              <h5>Stipend</h5>
            </div>
            <div className="verticalBr"></div>
          </div>
          <div className="durationDetail">
            <img src={LocationImg} alt=""></img>
            <div className="durationValue">
              <h4>{data.location}</h4>
              <h5>Location</h5>
            </div>
          </div>
        </div>
        <div className="bottomDetails">
          <div className="durationDetail">
            <img src={PostedImg} alt=""></img>
            <div className="durationValue">
              <h4>
                {Math.ceil(
                  (new Date().getTime() - new Date(data.createdOn).getTime()) /
                    86400000
                )}{" "}
                Day ago
              </h4>
              <h5>Posted</h5>
            </div>
            <div className="verticalBr"></div>
          </div>
          <div className="durationDetail">
            <img src={OpeningsImg} alt=""></img>
            <div className="durationValue">
              <h4>{data.openings} Months</h4>
              <h5>Open Positions</h5>
            </div>
            <div className="verticalBr"></div>
          </div>
          <div className="durationDetail">
            <img src={ApplicantsImg} alt=""></img>
            <div className="durationValue">
              <h4>{data.applicants}</h4>
              <h5>Total Applicants</h5>
            </div>
            <div className="verticalBr"></div>
          </div>
          <div className="durationDetail">
            <img src={DaysImg} alt=""></img>
            <div className="durationValue">
              <h4>{data.endsIn} Day</h4>
              <h5>Ends In</h5>
            </div>
          </div>
        </div>
        <div className="allSkillsTag">
          {data.skills.map((skill, i) => (
            <p key={i} className="skillNameValue">
              {skill}
            </p>
          ))}
        </div>
        <div className="AboutSection">
          <h4>About Us</h4>
          <p>{data.aboutUs}</p>
        </div>
        <div className="RequirementsSection">
          <h4>Requirements</h4>
          {data.requirements.map((requirement, i) => (
            <p key={i} className="reqName">
              {`\u2022 ${requirement}`}
            </p>
          ))}
        </div>
        <div className="ResponsibilitiesSection">
          <h4>Responsibilities</h4>
          {data.responsibilities.map((responsibility, i) => (
            <p key={i} className="reqName">
              {`\u2022 ${responsibility}`}
            </p>
          ))}
        </div>

        <button className="visitWeb">Visit Website</button>
      </div>
    </div>
  );
};

export default CompanyPage;
