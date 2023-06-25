import React from "react";
import "./navbar.css";
import Logo from "../../Assets/InternBrand.svg";
import notifications from "../../Assets/Vector.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppHistory from "../../Assets/AppHistory.png";
import ListingsImg from "../../Assets/clipboardtext.png";
import ContactImg from "../../Assets/messagequestion.png";
import BlogImg from "../../Assets/edit.png";

const Navbar = () => {
  return (
    <div className="navbarWrapper">
      <div className="left">
        <img src={Logo} alt="logo" />
      </div>
      <div className="middle">
        <div className="middleEl Listings">
          <img src={ListingsImg} alt="AppHistory" />
          <h3>Browse Listings</h3>
        </div>
        <div className="middleEl Application">
          <img src={AppHistory} alt="AppHistory" />
          <h3>Application History</h3>
        </div>
        <div className="middleEl Blog">
          <img src={BlogImg} alt="AppHistory" />
          <h3>Blog</h3>
        </div>
        <div className="middleEl Contact us">
          <img src={ContactImg} alt="AppHistory" />
          <h3>Contact us</h3>
        </div>
      </div>
      <div className="right">
        <img src={notifications} alt="notifications" />
        <span>
          <AccountCircleIcon />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
