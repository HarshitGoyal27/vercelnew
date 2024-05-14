"use client";
import { useState, useEffect, ChangeEvent } from "react";
import {
  Autocomplete,
  Checkbox,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import { Box, Paper } from "@mui/material";
import { DEV_PUBLIC_SAPURL, DEV_PUBLIC_URL } from "../../../../configs/auth";
import Image from "next/image";
import CustomAutocompleteFromAPI from "../AutoComplete";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import css from "../../../styles/search.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AskClient from "../../AskClient";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SmallAutocompleteFromAPI from "../smallAutoComplete";
import { useGlobalContext } from "../../../../context/store";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CloseIcon from '@mui/icons-material/Close';
import Navbar from "../navbar";
import FotterComponent from "../Fotter";
interface Option {
  id: number;
  label: string;
}

interface RecentSearchItem {
  Skill_Set: string;
  Experience_in_Years: string;
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
interface Skill_Info {
  skill_name: string;
  last_used: string;
}
interface Response {
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
function truncateSentence(sentence: string, maxLength = 215) {
  if (sentence != undefined && sentence.length > maxLength) {
    return sentence.substring(0, maxLength) + "...";
  } else {
    return sentence;
  }
}
const Form: React.FC = () => {
  const router = useRouter();
  const [profiles, setProfile] = useState<Profile>({
    Skill_Set: "",
    Experience_in_Years: "",
    minExp: "",
    maxExp: "",
    Current_Location: "",
    Current_Timezone: "",
    Skill_Name_Version: "",
    Certification: "",
    Preferred_Industry_Domain: "",
  });
  const [skillInfo, setSkillInfo] = useState<Skill_Info>({
    skill_name: "",
    last_used: "",
  });
  // const {selectedId,setSelectedId} = useGlobalContext();
  const [pageNoDisplay, setPageNoDisplay] = useState(1);
  const [AllskillInfo, setAllSkillInfo] = useState<Skill_Info[]>([]);
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
  const [recentSearch, setRecentSearch] = useState<RecentSearchItem[]>([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [arrLoad, setArrLoad] = useState(false);
  const [zero, setZero] = useState(false);
  const [candidates, setCandidates] = useState<Response[]>([]);
  const [allCandidates, setALLCandidates] = useState<Response[]>([]);
  const [disableForward, setDisableForward] = useState(false);
  const [pageMap, setPageMap] = useState<{ [key: number]: Response[] }>({});
  const [pageNoAxios, setPageNoAxios] = useState(1);
  const [disableBackward, setDisableBackward] = useState(true);
  const toggleRow = (index: any) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const handleMinExperienceChange = async (event: any) => {
    console.log('Min expericene', event.target.value);
    setProfile({ ...profiles, minExp: event.target.value });

  }

  const handleMaxExperienceChange = async (event: any) => {
    console.log('Max expericene', event.target.value);
    setProfile({ ...profiles, maxExp: event.target.value });
  }

  const handleSubmit = async (e: any) => {
    setLoading(true);
    console.log("AAAA", profiles);
    if (profiles.Skill_Set) {
      setShowAskClient(true);
      setGetAllCandidate(true);
    }
    e.preventDefault();
    if (profiles.Skill_Set === "") {
      setTouched(true);
      return;
    }
    localStorage.setItem("SearchDeveloperProfiles", JSON.stringify({ profiles }));
    try {
      let localData = localStorage.getItem("RecentSearch");
      if (localData) localData = JSON.parse(localData);
      let jsonArr: any[] = [];
      if (typeof localData === 'object' && Array.isArray(localData)) {
        jsonArr = [profiles, ...localData]; // Concatenate localData array with profiles array
      } else {
        jsonArr.push(profiles); // Push profiles into jsonArr
      }
      const jsonString = JSON.stringify(jsonArr);
      localStorage.setItem('RecentSearch', jsonString);
      setRecent(true);
      console.log("profiles", profiles);
      // localStorage.setItem("profiles", JSON.stringify({ profiles }));
      setArrLoad(true);
      let resp = await axios.post(`${DEV_PUBLIC_URL}form/candidates`, {
        profiles,
        pageNoAxios,
      });
      let finalCandidates = resp.data.data.candidatesData;
      console.log('LENGTH OF DATA IS ', finalCandidates);
      if (finalCandidates.length < 10) {
        console.log('Length is less than 10');
        if (finalCandidates.length === 0) {
          setZero(true);
        } else {
          setCandidates([...finalCandidates]);
          setALLCandidates([...finalCandidates]);
        }
        setDisableForward(true);
        setLoading(!loading);
        setArrLoad(false);
      } else {
        console.log('Length is greated than 10');
        let ans: { [key: number]: Response[] } = {};
        let len = Math.ceil(finalCandidates.length / 10);
        for (let i = 0; i < len; i++) {
          let arr = finalCandidates.slice(10 * i, 10 * i + 10);
          ans[i + 1] = arr;
        }
        console.log('ANS:===>', candidates);
        setALLCandidates([...finalCandidates]);
        setPageMap({ ...ans });
        setLoading(false);
        setArrLoad(false);
      }
    } catch (err) {
      console.log(err);
    }


  };
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setProfile({ ...profiles, [name]: value });
    console.log("profiles", profiles);
  };
  const handleExpChange = (e: SelectChangeEvent): void => {
    const { name, value } = e.target;
    setProfile({ ...profiles, Experience_in_Years: value });
    console.log("profiles", profiles);
  };
  useEffect(() => {
    console.log(selectedId);
  }, [selectedId]);
  const handlesalary = (e: SelectChangeEvent): void => {
    // const { name, value } = e.target;
    // setProfile({ ...profiles, Experience_in_Years: value });
    // console.log("profiles", profiles);
    setSalary(e.target.value);
  };

  const handleButtonClick = (profileId: string) => {
    router.push(`/talent/${profileId}`);
    setLoading(true);
  };

  const prevHandle = async () => {
    if (pageNumber === 1) {
      setDisablePrevButton(true);
    } else {
      setDisableNextButton(false);
      setDisablePrevButton(false);
      setpageNumber(pageNumber - 1);
      setLoading(true);
    }
  };
  const nextFun = async () => {
    setpageNumber(pageNumber + 1);
    setLoading(true);
    setSelectAll(false);
  };
  // useEffect(() => {
  //   const nextHandle = async () => {
  //     console.log("object->", profiles.Skill_Set);
  //     if (profiles.Skill_Set === "") {
  //       return;
  //     }
  //     try {
  //       const resp = await axios.post(`${DEV_PUBLIC_URL}form/candidates`, {
  //         profiles,
  //         pageNumber,
  //       });
  //       const candidates = resp.data.data.candidatesData;
  //       console.log("next", candidates)
  //       setDisablePrevButton(false);
  //       setLoading(false);
  //       if (candidates === "Data not present") {
  //         setApiResponse([]);
  //         setApiDummyResponse([]);
  //         setDisableNextButton(true);
  //       } else if (candidates.length !== 0) {
  //         setApiResponse(candidates);
  //         setApiDummyResponse(candidates);
  //       } else {
  //         setApiResponse([]);
  //         setApiDummyResponse([]);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   nextHandle();
  // }, [pageNumber]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleFilter = async (
    event: React.ChangeEvent<{}>,
    value: Option | null
  ) => {
    const key = filterOption;
    // const value = event.target.value;
    let prof = {};
    if (key === "searchLocation") {
      prof = { ...prof, Current_Location: `${value}` };
      setLocationOption(`${value}`);
    }
    try {
      const resp = await axios.post(`${DEV_PUBLIC_URL}filter/candidates`, {
        prof,
        pageNumber,
      });
      const candidates = resp.data.data.candidatesData;
      console.log("candidates1", candidates);
      setDisablePrevButton(false);
      setLoading(false);
      if (candidates === "Data not present") {
        setApiResponse([]);
        setApiDummyResponse([]);
        setDisableNextButton(true);
      } else if (candidates.length !== 0) {
        setApiResponse(candidates);
        setApiDummyResponse(candidates);
      } else {
        setApiResponse([]);
        setApiDummyResponse([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleFilterExperience = async (event: SelectChangeEvent) => {
    const key = filterOption;
    const value = event.target.value;
    let prof = {};
    const payload = { [key]: value };
    prof = { ...prof, ...payload };
    if (key === "searchLocation") {
      setLocationOption(value);
    } else if (key === "Current_Timezone") {
      setTimeZone(value);
    } else if (key === "Experience_in_Years") {
      setexpOption(value);
    }
    try {
      const resp = await axios.post(`${DEV_PUBLIC_URL}filter/candidates`, {
        prof,
        pageNumber,
      });
      const candidates = resp.data.data.candidatesData;
      console.log("candidates2", candidates);
      setDisablePrevButton(false);
      setLoading(false);
      if (candidates === "Data not present") {
        setApiResponse([]);
        setApiDummyResponse([]);
        setDisableNextButton(true);
      } else if (candidates.length !== 0) {
        setApiResponse(candidates);
        setApiDummyResponse(candidates);
      } else {
        setApiResponse([]);
        setApiDummyResponse([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleSort = async (event: SelectChangeEvent) => {
    const key = sortOption;
    const value = event.target.value;
    const payload = { [key]: value, pageNumber };

    try {
      const resp = await axios.post(
        `${DEV_PUBLIC_URL}sort/candidates`,
        payload
      );
      const candidates = resp.data.data.candidatesData;
      setDisablePrevButton(false);
      setLoading(false);
      if (candidates === "Data not present") {
        setApiResponse([]);
        setApiDummyResponse([]);
        setDisableNextButton(true);
      } else if (candidates.length !== 0) {
        setApiResponse(candidates);
        setApiDummyResponse(candidates);
      } else {
        setApiResponse([]);
        setApiDummyResponse([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleTimeZone = (
    event: React.ChangeEvent<{}>,
    value: string | null
  ) => {
    if (value === "none") {
      setProfile({ ...profiles, Current_Timezone: "" });
    } else {
      setProfile({ ...profiles, Current_Timezone: value });
    }
  };

  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    const valueData = e.target.value;
    setSelectedId(
      checked
        ? [...selectedId, e.target.value]
        : selectedId.filter((item) => item !== valueData)
    );
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectAll(e.target.checked);
    const allIDs = pageMap[pageNoDisplay].map((item) => item.id);
    if (!selectAll) {
      setSelectedId((prevSelectedId) => {
        const uniqueIDs = new Set([...prevSelectedId, ...allIDs]);
        return Array.from(uniqueIDs);
      });
    } else {
      setSelectedId(selectedId.filter((item) => !allIDs.includes(item)));
    }
  };

  // useEffect(() => {
  //   console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', apiResponse);
  //   const allIDs = apiResponse.map((item) => item.id);
  //   const allNumbersPresent = allIDs.every((id) => selectedId.includes(id));
  //   if (allNumbersPresent) {
  //     setSelectAll(true);
  //   } else {
  //     setSelectAll(false);
  //   }
  // }, [apiResponse, selectedId]);

  useEffect(() => {
    console.log("profiles--->", selectedId);
  }, [selectedId]);

  const handleMeetButton = () => {
    localStorage.setItem("selectedId", JSON.stringify({ selectedId }));
    localStorage.setItem("meeting", "true");
    router.push(`/subreqMeeting`);
  };
  const handleYouSelect = () => {
    setShowAskClient(false);
    setYouSelect(true);
  };
  const [sortOption, setSortOption] = useState("");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value)
    setSortOption(event.target.value);
    if (event.target.value === "salary") {
      const sortedProfiles = [...apiResponse].sort(
        (a, b) => parseFloat(a.Salary) - parseFloat(b.Salary)
      );
      setApiDummyResponse(sortedProfiles);
    } else if (event.target.value === "Exp") {
      const sortedProfiles = [...apiResponse].sort(
        (a, b) => parseFloat(a.Experience) - parseFloat(b.Experience)
      );
      setApiDummyResponse(sortedProfiles);
    } else if (event.target.value === "name") {
      const sortedProfiles = [...apiResponse].sort((a, b) =>
        a.Name.localeCompare(b.Name)
      );
      setApiDummyResponse(sortedProfiles);
    }
  };

  useEffect(() => {
    console.log("mymy", apiDummyResponse);
  }, [apiDummyResponse]);

  const handleChangefilter = async (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterOption(event.target.value);
    console.log("object", event.target.value);
    if (event.target.value === "None") {
      setpageNumber(2);
    }
  };
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSkillInfo({ ...skillInfo, last_used: e.target.value });
    setSelectedMonth(e.target.value);
  };
  const handleOk = () => {
    setPluseOpen(!pluseOpen);
    setAllSkillInfo((prevSkills) => [...prevSkills, skillInfo]);
    setSelectedMonth("");
  };
  useEffect(() => {
    let data = localStorage.getItem("RecentSearch");
    if (data) {
      data = JSON.parse(data);
      typeof (data) === 'object' && data && setRecentSearch(data);
    }
    console.log('Reached here', data);
  }, [])

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
    console.log('abcdefg', search, profiles);
    setProfile({ ...search })
    // if(TimeZoneElem){
    //   if(search.Current_Location.length>0){
    //     TimeZoneElem.value=search.Current_Location
    //   }
    // }
  }
  const handleSubreqButton = () => {
    localStorage.setItem("selectedId", JSON.stringify({ selectedId }));

    router.push(`/subreq`);
  };
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
  const handleNextPage = async (pageNo: number | null) => {
    try {
      if (pageNo === null) {
        const len_of_next_page = pageMap[pageNoDisplay + 1] ? pageMap[pageNoDisplay + 1].length : 0;
        let obj = pageMap;
        if (len_of_next_page < 10) {
          const resp = await axios.post(`${DEV_PUBLIC_SAPURL}sap/candidates`, { profiles, pageNoAxios });
          const { finalCandidates } = resp.data.data;
        } else {
          setPageNoDisplay(pageNoDisplay + 1);
          setDisableBackward(false);
        }
      } else {
        const len_of_next_page = pageMap[pageNo] ? pageMap[pageNo].length : 0;
        let obj = pageMap;
        if (len_of_next_page < 10) {
          const resp = await axios.post(`${DEV_PUBLIC_SAPURL}sap/candidates`, { profiles, pageNoAxios });
          const { finalCandidates } = resp.data.data;
        } else {
          setPageNoDisplay(pageNo);
          setDisableBackward(false);
        }
      }

    }
    catch (err) {
      console.log('errrrr');
    }
  }
  const handlePrevPage = async () => {
    if (pageNoDisplay === 2) {
      setDisableBackward(true);
    }
    setPageNoDisplay(pageNoDisplay - 1);
  }
  useEffect(() => {
    const allIDs = pageMap[pageNoDisplay]?.map((item) => item.id);

    // Check if all selectedIds are present in allIDs
    const allIdsSelected = allIDs?.every(id => selectedId.includes(id));
    console.log("allIdsSelected", allIdsSelected)
    console.log("selectedId", selectedId);
    console.log("allIDs", allIDs);
    console.log("pageMap[pageNoDisplay]", pageMap[pageNoDisplay])
    if (allIdsSelected && allIDs !== undefined) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [pageNoDisplay]) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      {!getAllCandidate && (
        <div>
          {/* <h1 className={css.homeWrapper}>Search Elite Developers</h1> */}
          {/* <div className={css.formStyle}> */}
          {/* <div style={{ width: '60%' }}> */}
          <CustomAutocompleteFromAPI
            setSelectedValue={setProfile}
            touched={touched}
            profiles={profiles}
            handleSubmit={handleSubmit}
          />
          {/* </div> */}
          {/* <div style={{ width: '30%', height: '70vh', backgroundColor: '#f7f7f7', marginRight: '2%', padding: '1.2vw', overflow: 'auto' }}>
              <div style={{ fontWeight: '500', fontSize: '2rem' }}>RECENT SEARCHES</div>
              <div>
                {
                  recentSearch.length > 0 && recentSearch.map((ele, idx) => (
                    <div style={{ display: 'flex', marginTop: '4vh' }} key={idx}>
                      <div><CloseIcon style={{ fontSize: '16', color: 'grey', cursor: 'pointer' }} onClick={() => handleClose(idx)} /></div>
                      <div style={{ marginTop: '2.5vh', backgroundColor: '#f7f7f7', fontSize: '1.5rem' }}>
                        <div>{ele.Skill_Set}</div>
                        <div style={{ marginTop: '-0.4rem' }}>
                          <span onClick={(event) => handleClickRecent(ele)} style={{ fontSize: '0.9rem', cursor: 'pointer', color: 'blue', width: 'auto' }}>Fill this Search</span>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div> */}
          {/* </div> */}
          {/* <Button type="submit" variant="contained" color="primary" onClick={(e) => handleSubmit(e)}>
            Get elite candidates now
          </Button> */}
          {/* <li>
            <button className="searchBtn" onClick={(e) => handleSubmit(e)}>Get elite candidates now</button>
          </li> */}
        </div>
      )}

      {showAskClient && <AskClient handleYouSelect={handleYouSelect} />}
      {youSelect && (
        <div>
          <Navbar />

          <div className="wrapper searchResult ">
            {/* <!-- welcome Section  --> */}
            <div className="searchResultSection ">
              <section className="container mt-4 ">
                <div className="row">
                  <div className="col-md-12">
                    <h2>Search Result</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 ">
                    <div className="filterBox">
                      <div className="filterBoxLeft">
                        <select id="sortby" name="" onChange={handleChange}>
                          <option value="volvo">Sort By</option>
                          <option value="salary">Salary</option>
                          <option value="Experience_in_Years">Experience</option>
                          <option value="name">Name</option>
                        </select>
                        <select
                          id="filterby"
                          name=""
                          value={filterOption}
                          onChange={handleChangefilter}
                        >
                          <option value="volvo">Filter By</option>
                          <option value="searchLocation">Location</option>
                          <option value="Current_Timezone">TimeZone</option>
                          <option value="College">College</option>
                          <option value="Company">Company</option>
                          <option value="None">None</option>
                        </select>
                        {filterOption && filterOption === "searchLocation" && (
                          <select
                            id="filterby"
                            name=""
                            value={filterOption}
                            onChange={handleChangefilter}
                          >
                            <option value="volvo">Filter By</option>
                            <option value="searchLocation">Location</option>
                            <option value="Current_Timezone">TimeZone</option>
                            <option value="College">College</option>
                            <option value="Company">Company</option>
                            <option value="None">None</option>
                          </select>
                        )}
                        {filterOption && filterOption === "Company" && (
                          <SmallAutocompleteFromAPI
                            handleFilter={handleFilter}
                            setAllSkills={null}
                            setFinalTotalSkills={null}
                            widtha="200px"
                            name="Company Name"
                            imageurl=""
                            fieldName="CompanyName"
                            setSelectedValue={setSkillInfo}
                            url={`${DEV_PUBLIC_URL}searchbar/candidates`}
                          />
                        )}
                        {/* {filterOption && filterOption === "College" && (
                          <SmallAutocompleteFromAPI
                            handleFilter={handleFilter}
                            setAllSkills={null}
                            setFinalTotalSkills={null}
                            widtha="200px"
                            name="College Name"
                            imageurl=""
                            fieldName="CollegeName"
                            setSelectedValue={setSkillInfo}
                            url={`${DEV_PUBLIC_URL}searchbar/candidates`}
                          />
                        )} */}

                      </div>
                      <div className="filterBoxRight">
                      <div style={{color:"#007FFF", cursor:"pointer"}}>Modify</div>
                        <label htmlFor="selectall">Select All: </label>
                        <input
                          className=""
                          type="checkbox"
                          checked={selectAll}
                          onChange={handleSelectAll}
                        />

                      </div>
                      <div className="clear"></div>
                    </div>
                  </div>
                  <div className="col-md-12 ">
                    <div className="resultSection">
                      <div className="resultCont">
                        <ul>
                          {loading ? (
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <CircularProgress />
                            </Box>
                          ) :
                            pageMap[pageNoDisplay]?.map((profile, index) => (
                              <li className="listingPanel" key={index}>
                                <div className="listTopSection">
                                  <div className="selectOption">
                                    <input
                                      className=""
                                      type="checkbox"
                                      value={profile.id}
                                      checked={selectedId.includes(profile.id)}
                                      onChange={handleCheckBox}
                                    />

                                  </div>
                                  <div className="ListImg">
                                    <img src="images/avatar1.png" alt="avatar1" />
                                  </div>
                                  <div className="listDecs">
                                    <h3 className="listName">{profile.Name}</h3>
                                    <h4 className="currentLocation">{profile.CurrentLocation}</h4>
                                    <h5><span>Years of Exp : {profile.Experience}</span> <strong>| </strong> <span>Current Salary : {profile.Salary}</span></h5>
                                    <h6 className="listTitle"></h6>
                                  </div>
                                  <div className="otherDesc">
                                    <p>{profile.CandidateProfile}</p>
                                    <p><span>Current Position </span>{profile.CurrentRole}</p>
                                    <p><span>Current Company </span>Larsen &amp; Toubro InfoTech Limited</p>
                                    <p><span>Education </span>{profile.Education}</p>
                                    <p><span>Key Skills: </span>{profile.Skills}</p>
                                  </div>


                                </div>
                              </li>
                            ))
                          }


                          {/* <li className="listingPanel">
                            <div className="listTopSection">
                              <div className="selectOption">
                                <input className="" type="checkbox" />

                              </div>
                              <div className="ListImg">
                                <img src="images/avatar1.png" alt="avatar1" />
                              </div>
                              <div className="listDecs">
                                <h3 className="listName">John Doe</h3>
                                <h4 className="currentLocation">New York, NY 20188</h4>
                                <h5>Years of Exp : 10 Years <strong>| </strong> Current Salary : $6626.51</h5>
                                <h6 className="listTitle"></h6>
                              </div>
                              <div className="otherDesc">
                                <p>SAP FICO Functional Senior Consultant - MBA - Finance with 8+ years of Experience in SAP and 10+ years of expertise in Finance / Accounts domain. SAP ECC & S4HANA FICO Certified professional, SAP S4HANA Certified Associate - CO and Treasury</p>
                                <p><span>Current Position: </span>Senior Finance Executive</p>
                                <p><span>Current Company: </span>Larsen &amp; Toubro InfoTech Limited</p>
                                <p><span>Education: </span>MBA/PGDM Institute of Management in Kerala, 2012</p>
                                <p><span>Key Skills: </span>SAP R3,SAP FICO,Accounting,Bank Reconciliation,TDS,VAT,Service Tax,Central Excise,Tally ERP9,GST</p>
                              </div>


                            </div>
                          </li>
                          <li className="listingPanel">
                            <div className="listTopSection">
                              <div className="selectOption">
                                <input className="" type="checkbox" />

                              </div>
                              <div className="ListImg">
                                <img src="images/avatar1.png" alt="avatar1" />
                              </div>
                              <div className="listDecs">
                                <h3 className="listName">John Doe</h3>
                                <h4 className="currentLocation">New York, NY 20188</h4>
                                <h5>Years of Exp : 10 Years <strong>| </strong> Current Salary : $6626.51</h5>
                                <h6 className="listTitle"></h6>
                              </div>
                              <div className="otherDesc">
                                <p>SAP FICO Functional Senior Consultant - MBA - Finance with 8+ years of Experience in SAP and 10+ years of expertise in Finance / Accounts domain. SAP ECC & S4HANA FICO Certified professional, SAP S4HANA Certified Associate - CO and Treasury</p>
                                <p><span>Current Position: </span>Senior Finance Executive</p>
                                <p><span>Current Company: </span>Larsen &amp; Toubro InfoTech Limited</p>
                                <p><span>Education: </span>MBA/PGDM Institute of Management in Kerala, 2012</p>
                                <p><span>Key Skills: </span>SAP R3,SAP FICO,Accounting,Bank Reconciliation,TDS,VAT,Service Tax,Central Excise,Tally ERP9,GST</p>
                              </div>


                            </div>
                          </li>
                          <li className="listingPanel">
                            <div className="listTopSection">
                              <div className="selectOption">
                                <input className="" type="checkbox" />

                              </div>
                              <div className="ListImg">
                                <img src="images/avatar1.png" alt="avatar1" />
                              </div>
                              <div className="listDecs">
                                <h3 className="listName">John Doe</h3>
                                <h4 className="currentLocation">New York, NY 20188</h4>
                                <h5>Years of Exp : 10 Years <strong>| </strong> Current Salary : $6626.51</h5>
                                <h6 className="listTitle"></h6>
                              </div>
                              <div className="otherDesc">
                                <p>SAP FICO Functional Senior Consultant - MBA - Finance with 8+ years of Experience in SAP and 10+ years of expertise in Finance / Accounts domain. SAP ECC & S4HANA FICO Certified professional, SAP S4HANA Certified Associate - CO and Treasury</p>
                                <p><span>Current Position: </span>Senior Finance Executive</p>
                                <p><span>Current Company: </span>Larsen &amp; Toubro InfoTech Limited</p>
                                <p><span>Education: </span>MBA/PGDM Institute of Management in Kerala, 2012</p>
                                <p><span>Key Skills: </span>SAP R3,SAP FICO,Accounting,Bank Reconciliation,TDS,VAT,Service Tax,Central Excise,Tally ERP9,GST</p>
                              </div>


                            </div>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 ">
                    <div className="paginationSection">
                      <ul className="pagination">
                        <li className="page-item">
                          <button
                            className="page-link"
                            onClick={handlePrevPage} disabled={disableBackward}
                          >
                            Previous
                          </button>
                        </li>
                        <li className="page-item" aria-current="page">
                          <a className="page-link" href="#" onClick={() => handleNextPage(pageNoDisplay > 5 ? pageNoDisplay - 5 : 1)}>{pageNoDisplay > 5 ? pageNoDisplay - 5 : 1}</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#" onClick={() => handleNextPage(pageNoDisplay > 5 ? pageNoDisplay - 4 : 2)}>{pageNoDisplay > 5 ? pageNoDisplay - 4 : 2}</a></li>
                        <li className="page-item"><a className="page-link" href="#" onClick={() => handleNextPage(pageNoDisplay > 5 ? pageNoDisplay - 3 : 3)}>{pageNoDisplay > 5 ? pageNoDisplay - 3 : 3}</a></li>
                        <li className="page-item"><a className="page-link" href="#" onClick={() => handleNextPage(pageNoDisplay > 5 ? pageNoDisplay - 2 : 4)}>{pageNoDisplay > 5 ? pageNoDisplay - 2 : 4}</a></li>
                        <li className="page-item"><a className="page-link" href="#" onClick={() => handleNextPage(pageNoDisplay > 5 ? pageNoDisplay - 1 : 5)}>{pageNoDisplay > 5 ? pageNoDisplay - 1 : 5}</a></li>
                        <li className="page-item">
                          <button className="page-link" onClick={() => handleNextPage(null)} disabled={disableForward}>Next</button>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
                <div style={{ textAlign: "center", marginBottom: "100px" }}>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={handleSubreqButton}
                    disabled={selectedId.length === 0}
                    style={{ marginRight: "10px" }}
                  >
                    Submit Requirement
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={handleMeetButton}
                    disabled={selectedId.length === 0}
                  >
                    Schedule Meeting
                  </button>
                </div>
              </section>

            </div>


          </div>
          <FotterComponent />
        </div>
      )}
    </>
  );
};

export default Form;