import React, { useState, useEffect, useRef } from "react";
import { TextField, Select, MenuItem, InputLabel } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { DEV_PUBLIC_URL } from "../../../../configs/auth";
import Chip from "@mui/material/Chip";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from "@mui/material/FormControl";
import Navbar from "../navbar";
import CloseIcon from '@mui/icons-material/Close';

interface Profile {
  Skill_Set: string;
  Experience_in_Years: string;
  Current_Location: string;
  Current_Timezone: string | null;
  Skill_Name_Version: string;
  Certification: string;
  Preferred_Industry_Domain: string;
  minExp: string;
  maxExp: string;
}
interface Candidates {
  Name: string;
  Email: string;
  Skills: string;
  id: string;
  Experience: string;
  PreviousRole: string;
  CurrentRole: string;
  CandidateProfile: string;
  Salary: string;
  PrefferedLocation: string;
  CurrentLocation: string;
  MayAlsoKnow: string;
  Education: string;
}
interface Option {
  id: number;
  label: string;
}
interface CustomAutocompleteProps {
  setSelectedValue: Function;
  touched: boolean;
  handleSubmit: Function;
  profiles:Profile;
}
interface RecentSearchItem {
  Skill_Set: string;
  Experience_in_Years: string;
  minExp: string;
  maxExp: string;
}

function CustomAutocompleteFromAPI({ setSelectedValue, handleSubmit, profiles }: CustomAutocompleteProps) {
  const [dynamicSkill, setDynamicSkill] = useState("");
  const [skillSuggestions, setSkillSuggesions] = useState([]);
  const [locationSuggestions, setLocationSuggetions] = useState([]);
  const [dynamicLocation, setDynamicLocation] = useState("");
  const [click, setClick] = useState("");
  const [value, setValue] = useState({});
  const [recentSearch, setRecentSearch] = useState<RecentSearchItem[]>([]);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      if (dynamicSkill.length > 0) {
        try {
          const response = await axios.post(
            `${DEV_PUBLIC_URL}searchbar/candidates`,
            { search: dynamicSkill }
          );
          let data = response.data.data;
          console.log("resp", data);
          setSkillSuggesions(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        setSkillSuggesions([]);
      }
    };
    fetchData();
  }, [dynamicSkill]);

  useEffect(() => {
    const fetchData = async () => {
      if (dynamicLocation.length > 0) {
        try {
          const response = await axios.post(
            `${DEV_PUBLIC_URL}location/candidates`,
            { searchLocation: dynamicLocation }
          );
          let data = response.data.data;
          console.log("resp", data);
          setLocationSuggetions(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        setLocationSuggetions([]);
      }
    };
    fetchData();
  }, [dynamicLocation]);

  
  useEffect(() => {
    setSelectedValue({ ...value }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  useEffect(() => {
    let data = localStorage.getItem("RecentSearch");
    if (data) {
      data = JSON.parse(data);
      typeof (data) === 'object' && data && setRecentSearch(data);
    }
    console.log('Reached here', data);
  }, [])
  useEffect(() => {
    var profilesJSON = localStorage.getItem("SearchDeveloperProfiles");
    if (profilesJSON !== null) {
      var storedProfiles = JSON.parse(profilesJSON);
      console.log("storedProfiles", storedProfiles.profiles);
      setSelectedValue({ ...storedProfiles.profiles });

    } else {
      console.log("No profiles found in localStorage");
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  const handleInputChangeSearch = (event: any) => {
    // setProfile({ ...profiles, Skill_Set: event.target.value });
    console.log("vvv", event.target.value);
    setInputValue(event.target.value)
    setSelectedValue({ ...profiles, Skill_Set: event.target.value });
    setDynamicSkill(event.target.value);
  };

  const handleInputChangeLocation = (event: any) => {
    // setProfile({ ...profiles, Current_Location: event.target.value });
    console.log(event.target.value);
    setSelectedValue({ ...profiles, Current_Location: event.target.value });
    setDynamicLocation(event.target.value);
  };

  const handleInputChangeMinExp = (event: any) => {
    // console.log(event.target.value);
    setValue({ ...value, minExp: event.target.value });
    // setDynamicSkill(event.target.value);
  };

  const handleInputChangeMaxExp = (event: any) => {
    // console.log(event.target.value);
    setValue({ ...value, maxExp: event.target.value });
    // setDynamicSkill(event.target.value);
  };

  const handleInputChangeTimeZone = (event: any) => {
    // console.log(event.target.value);
    // setSelectedValue({ Skill_Set: event.target.value });
    // setDynamicSkill(event.target.value);
  };

  const handleClick1 = (event: any) => {
    console.log('CLICK--->', event);
    
    let ele = event.target;
    let elem = document.getElementById('first') as HTMLInputElement;
    console.log("ooooooooooooooo",event.target)
    if (elem) {
      elem.value = ele.textContent;
      setInputValue(elem.value)
    } else {
      console.error("Element with id 'first' not found.");
    }

    setValue({ ...value, Skill_Set: ele.textContent });
    setDynamicSkill("");
  }

  const handleClick2 = (event: any) => {
    console.log('CLICK--->', event.target);
    let ele = event.target;
    let elem = document.getElementById('second') as HTMLInputElement;
    if (elem) {
      elem.value = ele.textContent;
    } else {
      console.error("Element with id 'second' not found.");
    }
    setValue({ ...value, Current_Location: ele.textContent });
    setDynamicLocation("");
  }

  const handleClickRecent = (search: any) => {
    console.log('Inside function', search);
    let skillElem = document.getElementById("first") as HTMLInputElement;
    let LocElem = document.getElementById("second") as HTMLInputElement;
    let MinExpElem = document.getElementById("third") as HTMLInputElement;
    let MaxExpElem = document.getElementById("fourth") as HTMLInputElement;
    let TimeZoneElem = document.getElementById("fifth") as HTMLInputElement;
    if (skillElem) {
      skillElem.value = search.Skill_Set;
    }
    if (LocElem) {
      if (search.Current_Location) {
        LocElem.value = search.Current_Location;
      }
    }
    if (MinExpElem) {
      if (search.minExp) {
        MinExpElem.value = search.minExp;
      }
    }
    if (MaxExpElem) {
      if (search.maxExp) {
        MaxExpElem.value = search.maxExp;
      }
    }
    console.log('ABCEFGH');
  }
  const [apiResponse, setApiResponse] = useState<Candidates[]>([]);
  const [apiDummyResponse, setApiDummyResponse] = useState<Candidates[]>([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setpageNumber] = useState(1);
  const [disablePrevButton, setDisablePrevButton] = useState(false);
  const [disableNextButton, setDisableNextButton] = useState(false);
  const [eliteButtonClicked, setEliteButtonClicked] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedId, setSelectedId] = useState<string[]>([]);
  const [getAllCandidate, setGetAllCandidate] = useState(false);
  const [youSelect, setYouSelect] = useState(false);
  const [showAskClient, setShowAskClient] = useState(false);
  const [pluseOpen, setPluseOpen] = useState(false);
  const [locationOption, setLocationOption] = useState("");
  const [expOption, setexpOption] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [filterOption, setFilterOption] = useState("");
  const [touched, setTouched] = useState(false);
  const [salary, setSalary] = useState<string>();
  const [recent, setRecent] = useState(false);
  const [expandedRow, setExpandedRow] = useState(null);
  // const [profiles, setProfile] = useState<Profile>({
  //   Skill_Set: "",
  //   Experience_in_Years: "",
  //   minExp: "",
  //   maxExp: "",
  //   Current_Location: "",
  //   Current_Timezone: "",
  //   Skill_Name_Version: "",
  //   Certification: "",
  //   Preferred_Industry_Domain: "",
  // });
  // const handleSubmit = async (e: any) => {
  //   setLoading(true);
  //   console.log("AAAA", profiles);
  //   if (profiles.Skill_Set) {
  //     setShowAskClient(true);
  //     setGetAllCandidate(true);
  //   }
  //   e.preventDefault();
  //   if (profiles.Skill_Set === "") {
  //     setTouched(true);
  //     return;
  //   }

  //   try {
  //     console.log("-------->", profiles, pageNumber);
  //     let localData = localStorage.getItem("RecentSearch");
  //     if (localData) localData = JSON.parse(localData);
  //     let jsonArr: any[] = [];
  //     if (typeof localData === 'object' && Array.isArray(localData)) {
  //       jsonArr = [profiles, ...localData]; // Concatenate localData array with profiles array
  //     } else {
  //       jsonArr.push(profiles); // Push profiles into jsonArr
  //     }
  //     const jsonString = JSON.stringify(jsonArr);
  //     localStorage.setItem('RecentSearch', jsonString);
  //     setRecent(true);
  //     const resp = await axios.post(`${DEV_PUBLIC_URL}form/candidates`, {
  //       profiles,
  //       pageNumber,
  //     });
  //     const candidates = resp.data.data.candidatesData;
  //     let arr = [
  //       candidates[0],
  //       candidates[1],
  //       candidates[2],
  //       candidates[3],
  //       candidates[4],
  //       candidates[5],
  //       candidates[6],
  //       candidates[7],
  //       candidates[8],
  //       candidates[9]
  //     ];
  //     console.log("yoyo", candidates);
  //     setLoading(false);
  //     setEliteButtonClicked(true);
  //     if (candidates.length === 0) {
  //       setApiResponse([]);
  //       setApiDummyResponse([]);
  //     } else if (candidates.length !== 0) {
  //       setApiResponse(arr);
  //       setApiDummyResponse(arr);
  //     } else {
  //       setApiResponse([]);
  //       setApiDummyResponse([]);
  //     }
  //   } catch (error) {
  //     console.log("object");
  //     console.error("Error fetching data:", error);
  //   }
  // };
  const suggestionsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setSkillSuggesions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [suggestionsRef]);
  useEffect(()=>{
    console.log("profiles", profiles)
  },[profiles])
  const handleClose = (index: any) => {
    console.log('hiii')
    let data = localStorage.getItem("RecentSearch");
    if (data) {
      data = JSON.parse(data);
      let arr = Array.isArray(data) ? data.filter((ele, idx) => idx !== index) : [];
      // Update local storage with the filtered data
      localStorage.setItem("RecentSearch", JSON.stringify(arr));
      setRecentSearch(arr);
    }
  }

  return (
    <div>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
      <link href="css/fonts.css" rel="stylesheet" />
      <link href="css/reset.css" rel="stylesheet" />
      <link href="css/style.css" rel="stylesheet" />
      <link href="css/responsive.css" rel="stylesheet" />
      <Navbar />
      <div className="wrapper searchForm ">
        {/* <!-- welcome Section  --> */}
        <div className="searchFormSection ">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">
                <h2>Standard Search Form</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8   ">
                <div className="searchBoxLeft">
                  <h3>Search Candidate</h3>
                  <div className="searchCondidateForm">
                    <ul>
                      <li className="keywordBox">
                        <p className="leftSide keywordsText">Keywords</p>
                        <div className="rightSide booleanText ">
                          <div className="switch-field ">
                            <input type="radio" id="keywords-one"  name="keywords-one" value="yes" checked />
                            <label htmlFor="keywords-one">Yes</label>
                            <input type="radio" id="keywords-two" name="keywords-one" value="no" />
                            <label htmlFor="keywords-two">No</label>
                            <p>Boolean off</p>
                          </div>
                        </div>
                        <div className="clear"></div>
                        <div className="">
                          <input className="form-control" id="first"
                            placeholder="Enter Keywords like, designation and company"
                            onChange={handleInputChangeSearch}
                            value={profiles.Skill_Set}
                          />
                            {skillSuggestions.length > 0 &&
                              <div ref={suggestionsRef} style={{ backgroundColor: '#f7f7f7', borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 7px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px' }}>
                                {
                                  skillSuggestions.map((ele: any, idx: any) => (
                                    <ul key={idx} className="suggestionPoints">
                                      <li style={{cursor:"pointer",margin:"5px 0px",padding:"10px 5px 5px 10px"}} onClick={handleClick1}>{ele}</li>
                                    </ul>
                                    // <option value="" onClick={handleClick1}>{ele}</option>
                                  ))
                                }
                              </div>
                            }
                          
                        </div>
                        <div className="leftSide widthfull">
                          <input type="checkbox" /> <label>Mark all keywords as mandatory</label>
                        </div>
                        <div className="rightSide resumeSelect">
                          <select name="" id="">
                            <option value="Search keyword in Entire resume">Search keyword in Entire resume</option>
                            <option value="">option 01</option>
                            <option value="">option 02</option>
                            <option value="">option 03</option>
                          </select>

                        </div>
                        <div className="clear"></div>
                      </li>

                      <li>

                      </li>
                      <li>
                        <input type="text" className="form-control excludeKeywords" id="" placeholder="+ Add Exclude Keywords" />
                      </li>
                      <li>
                        <input type="text" className="form-control excludeKeywords" id="keywords" placeholder="+ Add IT Skills" />
                      </li>
                      <li>
                        <p>Experience</p>
                        <div className="candidateExpbox">
                          <input type="text" className="form-control " id="" placeholder="Min Experience" onChange={handleInputChangeMinExp} />
                          <span>to</span>
                          <input type="text" className="form-control " id="" placeholder="Max Experience" onChange={handleInputChangeMaxExp} />
                          <span>Years</span>
                        </div>
                      </li>
                      <li className="candidateLocation">
                        <p>Current location of candidate</p>
                        <input type="text" className="form-control " id="" placeholder="Add location" />
                        <div>
                          <input type="checkbox" /> <label>Include Candidates who prefer to relocate to above
                            location</label><span className="blueColor">Change preferred location</span>
                        </div>
                        <div>
                          <input type="checkbox" /> <label>Exclude candidates who have mentioned anywhere in </label>
                        </div>
                      </li>
                      <li>
                        <p>Annual Salary</p>
                        <div className="candidatesalaryBox">
                          <select name="" id="">
                            <option value="INR">INR</option>
                            <option value="">USD</option>
                            <option value="">EUR</option>
                            {/* <option value="">option 03</option> */}
                          </select>
                          <input type="text" className="form-control " id="" placeholder="Min Salary" />
                          <span>to</span>
                          <input type="text" className="form-control " id="" placeholder="Max Salary" />
                          
                        </div>
                        <div><input type="checkbox" /> <label>Include candidates who did not mention their current
                          salary</label></div>
                      </li>
                      <li className="">
                        <p>Department and Role</p>
                        <input type="text" className="form-control " id="" placeholder="Add Department/Role" />
                      </li>
                      <li className="">
                        <p>Industry</p>
                        <input type="text" className="form-control " id="" placeholder="Add Industry" />
                      </li>
                      {/* <li className="keywordBox">
                        <p className="leftSide keywordsText">Company</p>
                        <div className="rightSide booleanText ">
                          <div className="switch-field ">
                            <input type="radio" id="company-one" name="company-one" value="yes" checked />
                            <label htmlFor="company-one">Yes</label>
                            <input type="radio" id="company-two" name="company-one" value="no" />
                            <label htmlFor="company-two">No</label>
                            <p>Boolean off</p>
                          </div>
                        </div>
                        <div className="clear"></div>
                        <div className="">
                          <input type="text" className="form-control" id="" placeholder="Add company name " />
                          <br />
                          <select name="" id="">
                            <option value="0">Search in Current company</option>
                            <option value="">option 01</option>
                            <option value="">option 02</option>
                            <option value="">option 03</option>
                          </select>
                        </div>
                      </li> */}
                      <li>
                        <input type="text" className="form-control excludeKeywords" id="" placeholder="+ Add Exclude Company" />
                      </li>
                      <li className="keywordBox">
                        <p className="leftSide keywordsText">Designation </p>
                        <div className="rightSide booleanText ">
                          <div className="switch-field ">
                            <input type="radio" id="designation-one" name="designation-one" value="yes" checked />
                            <label htmlFor="designation-one">Yes</label>
                            <input type="radio" id="designation-two" name="designation-one" value="no" />
                            <label htmlFor="designation-two">No</label>
                            <p>Boolean off</p>
                          </div>
                        </div>
                        <div className="clear"></div>
                        <div className="">
                          <input type="text" className="form-control" id="" placeholder="Add designation " />
                          <br />
                          {/* <select name="" id="">
                            <option value="0">Search in Current designation</option>
                            <option value="">option 01</option>
                            <option value="">option 02</option>
                            <option value="">option 03</option>
                          </select> */}
                        </div>
                      </li>
                      {/* <li>
                        <h3>Work details</h3>
                      </li> */}
                      {/* <li>
                        <p>Show candidates seeking</p>
                        <div className="jobtypeBox">
                          <select name="" id="">
                            <option value="INR">Job Type</option>
                            <option value="">option 01</option>
                            <option value="">option 02</option>
                            <option value="">option 03</option>
                          </select>
                          <select name="" id="">
                            <option value="INR">Employment type</option>
                            <option value="">option 01</option>
                            <option value="">option 02</option>
                            <option value="">option 03</option>
                          </select>
                        </div>

                      </li>
                      <li className="">
                        <p>Work permit for</p>
                        <input type="text" className="form-control " id="" placeholder="Choose category" />
                      </li> */}

                      <li>
                        <button className="searchBtn" onClick={(e) => handleSubmit(e)}>Get elite candidates now</button>
                      </li>


                    </ul>


                  </div>


                </div>
              </div>
              <div className="col-md-4 searchBoxRight ">
                <div className="recentSearch">
                  <h3>Recent Searchs</h3>
                  {
                    recentSearch.length > 0 && recentSearch.map((ele, idx) => (
                      <div className="recentSearchCont" key={idx}>
                        <div><CloseIcon style={{ fontSize: '16', color: 'grey', cursor: 'pointer' }} onClick={() => handleClose(idx)} /></div>

                        <p>{ele.Skill_Set}</p>
                        <p><span onClick={(event) => handleClickRecent(ele)}>Fill this sreach</span><span> Search profiles</span></p>
                      </div>
                    ))
                  }
                  {/* <div className="recentSearchCont">
                    <p>SAP and OTC and Hana 10-20 years</p>
                    <p><span>Fill this sreach</span><span> Sreach profiles</span></p>

                  </div>
                  <div className="recentSearchCont">
                    <p>9309929809</p>
                    <p><span>Fill this sreach</span><span> Sreach profiles</span></p>

                  </div>
                  <div className="recentSearchCont">
                    <p>SAP and EWM 10-20 yeaers</p>
                    <p><span>Fill this sreach</span><span> Sreach profiles</span></p>

                  </div> */}


                </div>


              </div>
            </div>
          </section>
        </div>


      </div>
    </div>

  );
}

export default CustomAutocompleteFromAPI;
