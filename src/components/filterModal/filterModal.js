import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./filterModal.css";
import { yellow } from "@mui/material/colors";

const category = [
  "IT",
  "Marketing",
  "Sales",
  "Graphic Design",
  "Content Writing",
  "Human Resources",
];
const skills = [
  "ReactJS",
  "NodeJS",
  "ExpressJs",
  "Redux",
  "MongoDB",
  "SQL",
  "Adobe",
  "Figma",
  "Blender",
  "C++",
  "Photoshop",
];
const location = [
  "Mumbai",
  "Noida",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Pune",
  "Hyderabad",
  "Delhi",
  "Gurgaon",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Patna",
];

function calculateValue(value) {
  switch (value) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    case 5:
      return 5;
    case "6+":
      return 6;
    default:
      return "6+";
  }
}
const duration = [1, 2, 3, 4, 5, 6].map((value) => ({
  value: value,
  label: calculateValue(value),
}));

function valuetext(value) {
  return `${value} Months`;
}

const Card = ({ filterModalHandle, filterQueryValues }) => {
  const [FilterModal, setFilterModal] = useState(false);
  const [sliderValue, setSliderValue] = useState([1, 6]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [skillsFilter, setSkillsFilter] = useState([]);
  // const [timingsFilter, setTimingsFilter] = useState([]);
  const [locationFilter, setLocationFilter] = useState([]);
  const [timingsArray, setTimingsArray] = useState({
    partTime: false,
    fullTime: false,
  });
  const [typesArray, setTypesArray] = useState({
    workFromHome: false,
    inOffice: false,
  });

  const onChangeAutoComplete = (event, value) => {
    setCategoryFilter(value);
  };
  const onChangeSkillsComplete = (event, value) => {
    setSkillsFilter(value);
  };
  const locationFilterHandler = (event, value) => {
    setLocationFilter(value);
  };

  const handletimingsChange = (event) => {
    setTimingsArray({
      ...timingsArray,
      [event.target.name]: event.target.checked,
    });
  };

  const handleTypesChange = (event) => {
    setTypesArray({
      ...typesArray,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const closeModal = () => {
    setFilterModal(!FilterModal);
    filterModalHandle(FilterModal);
  };
  const clearHandler = () => {
    console.log("clear");
    console.log(
      categoryFilter,
      skillsFilter,
      locationFilter,
      timingsArray,
      typesArray
    );
    setCategoryFilter([]);
    setSkillsFilter([]);
    setLocationFilter([]);
    setTimingsArray({
      partTime: false,
      fullTime: false,
    });
    setTypesArray({
      workFromHome: false,
      inOffice: false,
    });
    setSliderValue([1, 6]);
  };
  const applyHandler = () => {
    console.log("apply");
    const obj = {
      category: categoryFilter,
      skills: skillsFilter,
      location: locationFilter,
      timings: timingsArray,
      duration: sliderValue,
      types: typesArray,
    };
    console.log(obj);
    setFilterModal(!FilterModal);
    filterModalHandle(FilterModal);
    filterQueryValues(obj);
  };
  return (
    <div className="main-card">
      <div className="heading">
        <h2 className="heading-main">Filters</h2>
        <div className="close-icon" onClick={closeModal}>
          <CloseIcon />
        </div>
      </div>
      <div className="topItems">
        <div className="categoryCompany">
          <h4>Category</h4>
          <Autocomplete
            multiple
            limitTags={2}
            value={categoryFilter}
            onChange={onChangeAutoComplete}
            id="multiple-limit-tags"
            options={category}
            freeSolo
            disableClearable
            defaultValue={[category[0]]}
            renderInput={(params) => (
              <TextField
                {...params}
                label=""
                placeholder=""
                style={{ backgroundColor: yellow }}
              />
            )}
            sx={{ width: "300px" }}
          />
        </div>
        <div className="categoryCompany">
          <h4>Skills</h4>
          <Autocomplete
            multiple
            limitTags={2}
            id="multiple-limit-tags"
            onChange={onChangeSkillsComplete}
            value={skillsFilter}
            options={skills}
            freeSolo
            disableClearable
            defaultValue={[skills[0]]}
            renderInput={(params) => (
              <TextField {...params} label="" placeholder="" />
            )}
            sx={{ width: "300px" }}
          />
        </div>
      </div>
      <div className="checkItems">
        <div className="filter">
          <div className="filter-heading">Timings</div>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={timingsArray.partTime}
                  onChange={handletimingsChange}
                  name="partTime"
                />
              }
              label="Part Time"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={timingsArray.fullTime}
                  onChange={handletimingsChange}
                  name="fullTime"
                />
              }
              label="Full Time"
            />
          </FormGroup>
        </div>
        <div className="filter">
          <div className="filter-heading">Type</div>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={typesArray.workFromHome}
                  onChange={handleTypesChange}
                  name="workFromHome"
                />
              }
              label="Work From Home"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={typesArray.inOffice}
                  onChange={handleTypesChange}
                  name="inOffice"
                />
              }
              label="In Office"
            />
          </FormGroup>
        </div>
      </div>
      <div className="MidLastItems">
        <div className="filter">
          <div className="filter-heading">Duration(Months)</div>
          <Box sx={{ width: 250 }}>
            {/* <Typography id="track-inverted-range-slider" gutterBottom>
              Inverted track range
            </Typography> */}
            <Slider
              getAriaLabel={() => "Duration"}
              value={sliderValue}
              marks={duration}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={1}
              max={6}
              sx={{
                "& .MuiSlider-thumb": {
                  color: "rgba(105, 56, 239, 1)",
                },
                "& .MuiSlider-track": {
                  color: "rgba(105, 56, 239, 1)",
                },
                "& .MuiSlider-rail": {
                  color: "grey",
                },
                "& .MuiSlider-active": {
                  color: "rgba(105, 56, 239, 1) ",
                },
              }}
            />
          </Box>
        </div>
        <div className="categoryCompany skillsSet">
          <h4>Location</h4>
          <Autocomplete
            multiple
            limitTags={2}
            value={locationFilter}
            onChange={locationFilterHandler}
            id="multiple-limit-tags"
            options={location}
            freeSolo
            disableClearable
            defaultValue={[location[0]]}
            renderInput={(params) => (
              <TextField {...params} label="" placeholder="" />
            )}
            sx={{ width: "300px" }}
          />
        </div>
      </div>
      <div className="footer">
        <div className="footer-container">
          <button className="clear-button" onClick={clearHandler}>
            Clear All
          </button>
          <button className="apply-button" onClick={applyHandler}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
