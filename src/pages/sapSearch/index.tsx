import React, { useState, useEffect, ChangeEvent, useRef } from 'react'
import css1 from "../../styles/sapSearchStyle.module.css";
import css2 from "../../styles/search.module.css";
import CustomAutocompleteFromAPI from '@/components/molecules/AutoComplete';
import { Button, Input, MenuItem, Select, TextField } from '@mui/material';

import { Box, Paper } from "@mui/material";
import Image from "next/image";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CloseIcon from '@mui/icons-material/Close';
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CircularProgress from '@mui/material/CircularProgress';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from 'axios';
import { DEV_PUBLIC_SAPURL, DEV_PUBLIC_URL } from '../../../configs/auth';
import Navbar from '@/components/molecules/navbar';
import FotterComponent from '@/components/molecules/Fotter';
import { useRouter } from 'next/router';

interface Profile {
  keyword: string;
  primary_module: string;
  secondary_module: string;
  functional_expertise: string;
  technical_skills: string;
  role_type: string;
  position_type: string;
  sap_project: string;
  Certified: boolean;
  minExperience: string;
  maxExperience: string;
  project_type: string;
  description: string;
  HANAECC: string;
  // ecc:boolean;
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
const SapSearch = () => {
  const [profiles, setProfile] = useState<Profile>({
    keyword: "",
    primary_module: "",
    secondary_module: "",
    functional_expertise: "",
    technical_skills: "",
    role_type: "",
    position_type: "",
    sap_project: "",
    Certified: false,
    minExperience: "",
    maxExperience: "",
    project_type: "",
    description: "",
    HANAECC: "",
    // ecc:false
  });
  const [selectedId, setSelectedId] = useState<string[]>([]);
  const [candidates, setCandidates] = useState<Response[]>([]);
  const [loading, setLoading] = useState(false);
  const [zero, setZero] = useState(false);
  const [pageArr, setPageArr] = useState<Response[]>([]);
  const [pageNoDisplay, setPageNoDisplay] = useState(1);
  const [pageNoAxios, setPageNoAxios] = useState(1);
  const [disableForward, setDisableForward] = useState(false);
  const [filterOption, setFilterOption] = useState("");
  const [disableBackward, setDisableBackward] = useState(true);
  const [arrLoad, setArrLoad] = useState(false);
  const [pageMap, setPageMap] = useState<{ [key: number]: Response[] }>({});
  const [sortOption, setSortOption] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [allCandidates, setALLCandidates] = useState<Response[]>([]);
  const [skillSuggestions, setSkillSuggesions] = useState([]);
  const [primaryskillSuggestions, setPrimarySkillSuggesions] = useState([]);
  const [secondaryskillSuggestions, setSecondarySkillSuggesions] = useState([]);
  const [locationSuggestion, setLocationSuggestion] = useState([]);
  const [modify, setModify] = useState(false);
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

  const handleChangeProfile = (ele: any) => {
    // console.log(ele)
    const name = ele.target.name;
    // setProfile({ ...profiles, [name]: ele.target.value });
    if (name === "Certified") {
      if (ele.target.value === "on") {
        setProfile({ ...profiles, [name]: true });
      } else {
        setProfile({ ...profiles, [name]: false });
      }

    } else {
      setProfile({ ...profiles, [name]: ele.target.value });
    }
  }
  const handleRadio = (ele: any) => {
    const name = ele.target.name;
    if (name === "hana") {
      setProfile({ ...profiles, HANAECC: "HANA" });
    } else {
      setProfile({ ...profiles, HANAECC: "ECC" });
    }
  }
  const handleChangeDesc = (name: any, ele: any) => {
    // console.log(ele)
    // const name = ele.target.name;
    setProfile({ ...profiles, [name]: ele });
  }
  const handleChangeKeyword = (ele: any) => {
    console.log(ele.target.value);
    setProfile({ ...profiles, keyword: ele.target.value });
    setDynamicSkill(ele.target.value);
  }
  const handleChangePrimary = (ele: any) => {
    console.log(ele.target.value);
    setProfile({ ...profiles, primary_module: ele.target.value });
    setDynamicPrimarySkill(ele.target.value);
  }
  const handleChangeSecondary = (ele: any) => {
    console.log(ele.target.value);
    setProfile({ ...profiles, secondary_module: ele.target.value });
    setDynamicSecondarySkill(ele.target.value);
  }
  const handleChangeLocation = (ele: any) => {
    console.log(ele.target.value);
    // setProfile({ ...profiles, loca: ele.target.value });
    setDynamicSecondarySkill(ele.target.value);
  }
  const handleChangeRoleType = (ele: any) => {
    console.log(ele.target.value);
    setProfile({ ...profiles, role_type: ele.target.value });
  }
  const handleChangeTechnical = (ele: any) => {
    console.log(ele.target.value);
    setProfile({ ...profiles, technical_skills: ele.target.value });
  }
  // const handleOption1 = (ele: any) => {
  //   console.log(ele);
  //   setProfile({ ...profiles, role_type: ele });
  // }
  // const handleCountry = (ele: any) => {
  //   setProfile({ ...profiles, country: ele.target.value });
  // }
  // const handleExperience = (ele: any) => {
  //   setProfile({ ...profiles, experience: ele.target.value });
  // }
  // const handleChange = (ele: any) => {
  //     // setProfile({ ...profiles, country: ele.target.value });
  //   }
  useEffect(() => {
    console.log("lll", profiles);

  }, [profiles])
  const handleSubmit = async () => {
    try {
      console.log("profiles", profiles);
      localStorage.setItem("profiles", JSON.stringify({ profiles }));
      setArrLoad(true);
      let resp = await axios.post(`${DEV_PUBLIC_SAPURL}sap/candidates`, { profiles, pageNoAxios });
      let { finalCandidates } = resp.data.data;
      console.log('LENGTH OF DATA IS ', finalCandidates.length);
      if (finalCandidates.length < 10) {
        console.log('Length is less than 10');
        if (finalCandidates.length === 0) {
          setZero(true);
        } else {
          setCandidates([...finalCandidates]);
          setALLCandidates([...finalCandidates]);
          let ans: { [key: number]: Response[] } = {};
          let len = Math.ceil(finalCandidates.length / 10);
          for (let i = 0; i < len; i++) {
            let arr = finalCandidates.slice(10 * i, 10 * i + 10);
            ans[i + 1] = arr;
          }
          console.log('ANS:===>', candidates);
          setPageMap({ ...ans });
        }
        setDisableForward(true);
        setLoading(!loading);
        setArrLoad(false);
      } else {
        let ans: { [key: number]: Response[] } = {};
        let len = Math.ceil(finalCandidates.length / 10);
        for (let i = 0; i < len; i++) {
          let arr = finalCandidates.slice(10 * i, 10 * i + 10);
          ans[i + 1] = arr;
        }
        console.log('ANS:===>', candidates);
        setALLCandidates([...finalCandidates]);
        setPageMap({ ...ans });
        setLoading(!loading);
        setArrLoad(false);
      }
    } catch (err) {
      console.log(err);
    }
  }
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState({});
  const [dynamicSkill, setDynamicSkill] = useState("");
  const [dynamicPrimarySkill, setDynamicPrimarySkill] = useState("");
  const [dynamicSecondarySkill, setDynamicSecondarySkill] = useState("");
  const [dynamicLocation, setDynamicLocation] = useState("");
  const handleClickKeyword = (event: any) => {
    console.log('CLICK--->', event);

    let ele = event.target;
    let elem = document.getElementById('first') as HTMLInputElement;
    console.log("ooooooooooooooo", event.target)
    if (elem) {
      elem.value = ele.textContent;
      setInputValue(elem.value)
      setProfile({ ...profiles, keyword: elem.value });
    } else {
      console.error("Element with id 'first' not found.");
    }

    setValue({ ...value, Skill_Set: ele.textContent });
    setDynamicSkill("");
  }
  const handleClickPrimary = (event: any) => {
    console.log('CLICK--->', event);

    let ele = event.target;
    let elem = document.getElementById('second') as HTMLInputElement;
    console.log("ooooooooooooooo", event.target)
    if (elem) {
      elem.value = ele.textContent;
      setInputValue(elem.value);
      setProfile({ ...profiles, primary_module: elem.value });
    } else {
      console.error("Element with id 'first' not found.");
    }

    setValue({ ...value, Skill_Set: ele.textContent });
    setDynamicPrimarySkill("");
  }
  const handleLocationAutocomplete = (event: any) => {
    // console.log('CLICK--->', event);

    // let ele = event.target;
    // let elem = document.getElementById('location') as HTMLInputElement;
    // console.log("ooooooooooooooo", event.target)
    // if (elem) {
    //   elem.value = ele.textContent;
    //   setInputValue(elem.value);
    //   setProfile({ ...profiles, primary_module: elem.value });
    // } else {
    //   console.error("Element with id 'first' not found.");
    // }

    // setValue({ ...value, Skill_Set: ele.textContent });
    // setDynamicLocation("");
  }
  const handleClickSecondary = (event: any) => {
    console.log('CLICK--->', event);

    let ele = event.target;
    let elem = document.getElementById('third') as HTMLInputElement;
    console.log("ooooooooooooooo", event.target)
    if (elem) {
      elem.value = ele.textContent;
      setInputValue(elem.value);
      setProfile({ ...profiles, secondary_module: elem.value });
    } else {
      console.error("Element with id 'first' not found.");
    }

    setValue({ ...value, Skill_Set: ele.textContent });
    setDynamicSecondarySkill("");
  }
  useEffect(() => {
    console.log("allCandidates", allCandidates)
  }, [allCandidates])
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
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value)
    setSortOption(event.target.value);
    if (event.target.value === "salary") {
      const sortedProfiles = [...candidates].sort(
        (a, b) => parseFloat(a.Salary) - parseFloat(b.Salary)
      );
      setCandidates(sortedProfiles);
    } else if (event.target.value === "Exp") {
      const sortedProfiles = [...candidates].sort(
        (a, b) => parseFloat(a.Experience) - parseFloat(b.Experience)
      );
      setCandidates(sortedProfiles);
    } else if (event.target.value === "name") {
      const sortedProfiles = [...candidates].sort((a, b) =>
        a.Name.localeCompare(b.Name)
      );
      setCandidates(sortedProfiles);
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
  const router = useRouter();
  const handleMeetButton = () => {
    localStorage.setItem("selectedId", JSON.stringify({ selectedId }));
    const selectedProfiles = allCandidates?.filter(item => selectedId.includes(item.id));
    console.log("selectedProfiles", selectedProfiles)
    localStorage.setItem("selectedProfiles", JSON.stringify({ selectedProfiles }));
    router.push(`/subreqMeeting`);
  };
  const handleSubreqButton = () => {
    localStorage.setItem("selectedId", JSON.stringify({ selectedId }));
    const selectedProfiles = allCandidates?.filter(item => selectedId.includes(item.id));
    console.log("selectedProfiles", selectedProfiles)
    localStorage.setItem("selectedProfiles", JSON.stringify({ selectedProfiles }));
    router.push(`/subreq`);
  };
  useEffect(() => {
    console.log("ids", selectedId)
  }, [selectedId])
  useEffect(() => {
    var profilesJSON = localStorage.getItem("profiles");
    // localStorage.clear();
    if (profilesJSON !== null) {
      var storedProfiles = JSON.parse(profilesJSON);
      console.log("storedProfiles", storedProfiles.profiles);
      setProfile({ ...storedProfiles.profiles });

    } else {
      console.log("No profiles found in localStorage");
    }
  }, [])
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
      if (dynamicPrimarySkill.length > 0) {
        try {
          const response = await axios.post(
            `${DEV_PUBLIC_URL}searchbar/candidates`,
            { search: dynamicPrimarySkill }
          );
          let data = response.data.data;
          console.log("resp", data);
          setPrimarySkillSuggesions(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        setPrimarySkillSuggesions([]);
      }
    };
    fetchData();
  }, [dynamicPrimarySkill]);
  useEffect(() => {
    const fetchData = async () => {
      if (dynamicSecondarySkill.length > 0) {
        try {
          const response = await axios.post(
            `${DEV_PUBLIC_URL}searchbar/candidates`,
            { search: dynamicSecondarySkill }
          );
          let data = response.data.data;
          console.log("resp", data);
          setSecondarySkillSuggesions(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        setSecondarySkillSuggesions([]);
      }
    };
    fetchData();
  }, [dynamicSecondarySkill]);
  useEffect(() => {
    const fetchData = async () => {
      if (dynamicLocation.length > 0) {
        try {
          const response = await axios.post(
            `${DEV_PUBLIC_URL}location/candidates`,
            { search: dynamicLocation }
          );
          let data = response.data.data;
          console.log("resp", data);
          setLocationSuggestion(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        setSecondarySkillSuggesions([]);
      }
    };
    fetchData();
  }, [dynamicLocation]);
  useEffect(() => {
    console.log("zero", zero);
    console.log("loading", loading);
  }, [zero, loading])
  const handleModify = () => {
    setZero(false);
    setLoading(false);
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
  const primarySuggestionsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (primarySuggestionsRef.current && !primarySuggestionsRef.current.contains(event.target as Node)) {
        setPrimarySkillSuggesions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [primarySuggestionsRef]);

  const secondarySuggestionsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (secondarySuggestionsRef.current && !secondarySuggestionsRef.current.contains(event.target as Node)) {
        setSecondarySkillSuggesions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [secondarySuggestionsRef]);

  return (
    <>
      {
        arrLoad === false ?
          <div>
            {
              !loading ?
                <div>
                  <Navbar />
                  <div className="wrapper searchForm ">
                    {/* <!-- welcome Section  --> */}
                    <div className="searchFormSection ">
                      <section className="container mt-4 ">
                        <div className="row">
                          <div className="col-md-12">
                            <h2>Search sap talent</h2>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="specificSearchForm">
                              <div className="oneCol">
                                <label>Keywords</label>
                                <input type="text" id="first" className="form-control" value={profiles.keyword} onChange={(ele: any) => handleChangeKeyword(ele)} />
                                {skillSuggestions.length > 0 &&
                                  <div ref={suggestionsRef} style={{ backgroundColor: '#f7f7f7', borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 7px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px' }}>
                                    {
                                      skillSuggestions.map((ele: any, idx: any) => (
                                        <ul key={idx} className="suggestionPoints">
                                          <li style={{ cursor: "pointer", margin: "5px 0px", padding: "10px 5px 5px 10px" }} onClick={handleClickKeyword}>{ele}</li>
                                        </ul>
                                        // <option value="" onClick={handleClick1}>{ele}</option>
                                      ))
                                    }
                                  </div>
                                }
                              </div>
                              <div className="twoCol">
                                <div className="leftCol">
                                  <label>Primary SAP Module</label>
                                  <input type="text" className="form-control" id="second" value={profiles.primary_module} onChange={(ele: any) => handleChangePrimary(ele)} />
                                  {primaryskillSuggestions.length > 0 &&
                                    <div ref={primarySuggestionsRef} style={{ backgroundColor: '#f7f7f7', borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 7px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px' }}>
                                      {
                                        primaryskillSuggestions.map((ele: any, idx: any) => (
                                          <ul key={idx} className="suggestionPoints">
                                            <li style={{ cursor: "pointer", margin: "5px 0px", padding: "10px 5px 5px 10px" }} onClick={handleClickPrimary}>{ele}</li>
                                          </ul>
                                          // <option value="" onClick={handleClick1}>{ele}</option>
                                        ))
                                      }
                                    </div>
                                  }
                                </div>
                                <div className="rightCol">
                                  <label>Secondary SAP Module</label>
                                  <input type="text" className="form-control" id="third" value={profiles.secondary_module} onChange={(ele: any) => handleChangeSecondary(ele)} />
                                  {secondaryskillSuggestions.length > 0 &&
                                    <div ref={secondarySuggestionsRef} style={{ backgroundColor: '#f7f7f7', borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 7px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px' }}>
                                      {
                                        secondaryskillSuggestions.map((ele: any, idx: any) => (
                                          <ul key={idx} className="suggestionPoints">
                                            <li style={{ cursor: "pointer", margin: "5px 0px", padding: "10px 5px 5px 10px" }} onClick={handleClickSecondary}>{ele}</li>
                                          </ul>
                                          // <option value="" onClick={handleClick1}>{ele}</option>
                                        ))
                                      }
                                    </div>
                                  }
                                </div>
                                <div className="clear"></div>
                              </div>
                              <div className="twoCol">
                                <div className="leftCol">
                                  <label>Functional Expertise</label>
                                  <input type="text" name="functional_expertise" className="form-control" id="" onChange={(ele: any) => handleChangeProfile(ele)} />
                                </div>
                                <div className="rightCol">
                                  <label>Technical / Integration Skills</label>
                                  <input type="text" className="form-control" id="" onChange={(ele: any) => handleChangeTechnical(ele)} />
                                </div>
                                <div className="clear"></div>
                              </div>
                            </div>

                            <div className="specificSearchForm">
                              <div className="twoCol">
                                <div className="leftCol">
                                  <label>Role Type</label>
                                  <select name="role_type" id="" onChange={(e) => handleChangeProfile(e)}>
                                    <option >Select an option</option>
                                    <option value="Technical">Technical</option>
                                    <option value="Functional">Functional</option>
                                    <option value="Techno-Functional">Techno-Functional</option>
                                  </select>
                                </div>
                                <div className="rightCol">
                                  <label>Position Type</label>
                                  <select name="position_type" id="" onChange={(e) => handleChangeProfile(e)}>
                                    <option >Select an option</option>
                                    <option value="Consultant">Consultant</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Architect">Architect</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Support">Support</option>
                                    <option value="Tester">Tester</option>
                                  </select>
                                </div>
                                <div className="clear"></div>
                              </div>
                              <div className="twoCol">
                                <div className="leftCol">
                                  <label>SAP Project:</label>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="hana" id="flexRadioDefault1" checked={profiles.HANAECC === "HANA"} onChange={(e) => handleRadio(e)} />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                      S/4 Hana
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="ecc" id="flexRadioDefault2" checked={profiles.HANAECC === "ECC"} onChange={(e) => handleRadio(e)} />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                      ECC 6
                                    </label>
                                  </div>
                                </div>
                                <div className="rightCol">
                                  <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" name="Certified" onChange={(e) => handleChangeProfile(e)} />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">SAP Certified </label>
                                  </div>
                                </div>
                                <div className="clear"></div>
                              </div>
                              {/* <div className="oneCol">
                                <label>Version-Specific Experties</label>
                                <input type="text" className="form-control" id="" />
                              </div> */}
                            </div>
                            <div className="specificSearchForm">
                              <div className="twoCol">
                                {/* <p>Experience</p> */}
                                <div className="leftCol">
                                  <label htmlFor="Experience">Experience</label>
                                  <div className="candidateExpbox">
                                    <input type="text" className="form-control " id="" placeholder="Min" name='minExperience' onChange={(e) => handleChangeProfile(e)} />
                                    <span>to</span>
                                    <input type="text" className="form-control " id="" placeholder="Max" name='maxExperience' onChange={(e) => handleChangeProfile(e)} />
                                    <span>Years</span>
                                  </div>
                                </div>
                                <div className="rightCol">
                                  <label>Project Type</label>
                                  <select name="project_type" id="" onChange={(e) => handleChangeProfile(e)}>
                                    <option >Select an option</option>
                                    <option value="Implementation">Implementation</option>
                                    <option value="Enhancement">Enhancement</option>
                                    <option value="Migration">Migration</option>
                                    <option value="Upgrade">Upgrade</option>
                                    <option value="Support">Support</option>
                                    <option value="Testing">Testing</option>
                                    <option value="Hypercare">Hypercare</option>
                                    <option value="AMS">AMS</option>
                                  </select>
                                </div>
                              </div>
                              <div className="oneCol">
                                <label htmlFor="Description">Description</label>
                                <textarea className="form-control" id="message" rows={5} placeholder="Write description" name='description' onChange={(e) => handleChangeProfile(e)}></textarea>
                              </div>
                              {/* <div className="twoCol">
                                <div className="leftCol">
                                  <p>Experience</p>
                                  <div className="candidateExpbox">
                                    <input type="text" className="form-control " id="" placeholder="Min Experience" />
                                    <span>to</span>
                                    <input type="text" className="form-control " id="" placeholder="Max Experience" />
                                    <span>Years</span>
                                  </div>
                                </div>
                                <div className="rightCol">
                                  <label>Position Type</label>
                                  <select name="" id="">
                                    <option >Select an option</option>
                                    <option value="Consultant">Consultant</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Architect">Architect</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Support">Support</option>
                                    <option value="Tester">Tester</option>
                                  </select>
                                </div>
                                <div className="clear"></div>
                              </div> */}
                              {/* <div className="twoCol">
                                <div className="leftCol">
                                  <label>Industry-Specific Solution</label>
                                  <input type="text" className="form-control" id="" />
                                </div>
                                <div className="rightCol">
                                  <label>Experience level</label>
                                  <input type="text" className="form-control" id="" onChange={(e: any) => handleExperience(e)} />
                                </div>
                                <div className="clear"></div>
                              </div> */}

                            </div>
                            {/* <div className="specificSearchForm">
                              <div className="twoCol">
                                <div className="leftCol">
                                  <label>Country</label>
                                  <input type="text" className="form-control" id="" onChange={(e: any) => handleCountry(e)} />
                                </div>
                                <div className="rightCol">
                                  <label>State</label>
                                  <input type="text" className="form-control" id="" />
                                </div>
                                <div className="clear"></div>
                              </div>
                              <div className="twoCol">
                                <div className="leftCol">
                                  <label>City</label>
                                  <input type="text" className="form-control" id="" />
                                </div>
                                <div className="rightCol">
                                  <label>Availability</label>
                                  <input type="text" className="form-control" id="" />
                                </div>
                                <div className="clear"></div>
                              </div>
                              <div className="twoCol">
                                <div className="leftCol">
                                  <label>Employee Type</label>
                                  <select name="" id="">
                                    <option >Select an option</option>
                                    <option value="fulltime">Full Time</option>
                                    <option value="parttime">Part Time</option>
                                    <option value="Contract">Contract</option>

                                  </select>
                                </div>
                                <div className="rightCol">
                                  <label>Sap project Type</label>
                                  <input type="text" className="form-control" id="" />
                                </div>
                                <div className="clear"></div>
                              </div>

                            </div> */}
                            <div className="sapSearchBtn">
                              <button className="searchBtn" onClick={handleSubmit}>Search</button>

                            </div>


                          </div>

                        </div>
                      </section>
                    </div>


                  </div>
                  <FotterComponent />
                </div> :
                <section>
                  <Navbar />
                  <div>
                    {
                      zero ? <div>NO CANDIDATES FOUND</div> :
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
                                        onChange={(e) => setFilterOption(e.target.value)}
                                      >
                                        <option value="volvo">Filter By</option>
                                        <option value="searchLocation">Location</option>
                                        <option value="Current_Timezone">TimeZone</option>
                                        <option value="College">College</option>
                                        <option value="Company">Company</option>
                                        <option value="None">None</option>
                                      </select>
                                      {filterOption && filterOption === "searchLocation" && (
                                        <div className="twoCol">
                                          <div className="leftCol">
                                            {/* <label>Primary Module</label> */}
                                            <input type="text" id="location" onChange={(ele: any) => handleChangePrimary(ele)} />
                                            {locationSuggestion.length > 0 &&
                                              <div style={{ backgroundColor: '#f7f7f7', borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 7px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px' }}>
                                                {
                                                  locationSuggestion.map((ele: any, idx: any) => (
                                                    <ul key={idx} className="suggestionPoints">
                                                      <li style={{ cursor: "pointer", margin: "5px 0px", padding: "10px 5px 5px 10px" }} onClick={handleLocationAutocomplete}>{ele}</li>
                                                    </ul>
                                                    // <option value="" onClick={handleClick1}>{ele}</option>
                                                  ))
                                                }
                                              </div>
                                            }
                                          </div>
                                        </div>
                                      )}
                                      {/* {filterOption && filterOption === "Company" && (
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
                                      )} */}
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
                                      <div style={{ color: "#007FFF", cursor: "pointer" }} onClick={handleModify}>Modify</div>
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
                                        {pageMap[pageNoDisplay]?.map((ele, idx) => (
                                          <li className="listingPanel" key={idx}>
                                            <div className="listTopSection">
                                              <div className="selectOption">
                                                <input
                                                  className=""
                                                  type="checkbox"
                                                  value={ele.id}
                                                  checked={selectedId.includes(ele.id)}
                                                  onChange={handleCheckBox}
                                                />

                                              </div>
                                              <div className="ListImg">
                                                <img src="images/avatar1.png" alt="avatar1" />
                                              </div>
                                              <div className="listDecs">
                                                <h3 className="listName">{(ele.Name).split(" ")[0]} {(ele.Name).split(" ")[1]&&(ele.Name).split(" ")[1][0]}</h3>
                                                <h4 className="currentLocation">{ele.CurrentLocation}</h4>
                                                <h5><span>Years of Exp : {ele.Experience}</span> <strong>| </strong> <span>{ele.CurrentRole && (ele.CurrentRole).split(" at ")[0]}</span></h5>
                                                <h6 className="listTitle"></h6>
                                              </div>
                                              <div className="otherDesc">
                                                <p>{ele.CandidateProfile}</p>
                                                <p><span>Current Title </span>{ele.CurrentRole && (ele.CurrentRole).split(" at ")[0]}</p>
                                                <p><span>Past Title </span>{ele.PreviousRole && (ele.PreviousRole).split(" at ")[0]}</p>
                                                <p><span>Education </span>{ele.Education}</p>
                                                <p><span>Key Skills: </span>{ele.Skills}</p>
                                              </div>


                                            </div>
                                          </li>
                                        ))
                                        }


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
                    }
                  </div>
                  {/* <div style={{width:'50px',marginLeft:'auto',marginRight:'auto'}}>
                                {
                                    <div style={{width:'100px',display:'flex',justifyContent:'space-around'}}>
                                        <Button variant="contained" onClick={handlePrevPage} disabled={disableBackward} color="secondary">
                                            <ArrowBackIosNewIcon/>
                                        </Button>
                                        <div style={{fontWeight:800,color:'red',fontSize:'50px'}}>{pageNoDisplay}</div>
                                        <Button variant="contained" onClick={handleNextPage} disabled={disableForward} color="secondary">
                                            <ArrowForwardIosIcon/>
                                        </Button> 
                                    </div>
                                }
                            </div>         */}
                </section>
            }
          </div> :
          <div style={{ width: '50px', marginLeft: 'auto', marginRight: 'auto', marginTop: '30vh' }}>
            <CircularProgress size={50} color="secondary" />
          </div>

      }
    </>

  )
}

export default SapSearch