import React from "react";
import "./BreifCard.css";
import BookmarkImg from "../../Assets/bookmark.svg";
import ProfileImg from "../../Assets/profile2user.svg";
// import data from "../../helper";
function BreifCard({ data, handlefallback, handlebookmarksFallback }) {
  const handleCompanyDetails = () => {
    handlefallback(data._id);
  };
  const handleBookmarks = () => {
    handlebookmarksFallback(data._id);
  };
  return (
    <div className="cardWrapper">
      <div className="cardContainer">
        <div className="headingsBookMarks">
          <div className="headingsContainer">
            <h3 onClick={handleCompanyDetails}>{data.title}</h3>
            <h5>{data.companyName}</h5>
          </div>
          <div className="bookMarks" onClick={handleBookmarks}>
            <img src={BookmarkImg} alt="Bookmarks" />
          </div>
        </div>
        <div className="skillsContainer">
          <img src={data.companyLogo} alt="company logo" />
          <div className="skills">
            <p className="skillName">
              {data.skills[0]} <span className="Separator"></span>
            </p>
            <p className="skillName">
              {data.skills[1]} <span className="Separator"></span>
            </p>
            <p className="skillName">
              {data.skills[2]} <span className="Separator"></span>
            </p>
            <p className="skillName totalSkills">+{data.skills.length - 3}</p>
          </div>
        </div>
        <div>
          <div className="detailsContainer">
            <div className="detailsTop">
              <div className="duration">
                <img src={ProfileImg} alt="company logo" />
                <p>{data.duration} Month</p>
              </div>
              <div className="duration">
                <img src={ProfileImg} alt="company logo" />
                <p>
                  ₹{data.stipendStart} - ₹{data.stipendEnd}
                </p>
              </div>
            </div>
            <div className="detailsBottom">
              <div className="duration">
                <img src={ProfileImg} alt="company logo" />
                <p>{data.applicants} Applicants</p>
              </div>
              <div className="duration">
                <img src={ProfileImg} alt="company logo" />
                <p>Ends in {data.endsIn} Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreifCard;
