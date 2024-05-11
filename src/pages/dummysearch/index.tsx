import FotterComponent from '@/components/molecules/Fotter'
import Navbar from '@/components/molecules/navbar'
import React, { useEffect, useState } from 'react'
import { DEV_PUBLIC_SAPURL, DEV_PUBLIC_URL } from '../../../configs/auth';
import axios from 'axios';
import { useRouter } from 'next/router';
interface Profile {
    keyword: string;
    primary_module: string;
    secondary_module: string;
    role_type: string;
    technical_skills: string;
    country: string;
    experience: string;
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
const DummyPage = () => {
    const [profiles, setProfile] = useState<Profile>({
        keyword: '',
        primary_module: '',
        secondary_module: '',
        role_type: '',
        technical_skills: '',
        country: '',
        experience: ''
      });
      const [dynamicSkill, setDynamicSkill] = useState("");
  const [dynamicPrimarySkill,setDynamicPrimarySkill] = useState("");
  const [dynamicSecondarySkill,setDynamicSecondarySkill] = useState("");
    const [skillSuggestions, setSkillSuggesions] = useState([]);
  const [primaryskillSuggestions, setPrimarySkillSuggesions] = useState([]);
  const [secondaryskillSuggestions, setSecondarySkillSuggesions] = useState([]);
  const [value, setValue] = useState({});
  const [inputValue, setInputValue] = useState('');
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
  const handleOption1 = (ele: any) => {
    console.log(ele);
    setProfile({ ...profiles, role_type: ele });
  }
  const handleChangeTechnical = (ele: any) => {
    console.log(ele.target.value);
    setProfile({ ...profiles, technical_skills: ele.target.value });
  }
  const handleExperience = (ele: any) => {
    setProfile({ ...profiles, experience: ele.target.value });
  }
  const handleCountry = (ele: any) => {
    setProfile({ ...profiles, country: ele.target.value });
  }
  const [selectedId, setSelectedId] = useState<string[]>([]);
  const [candidates, setCandidates] = useState<Response[]>([]);
  const [loading, setLoading] = useState(false);
  const [zero, setZero] = useState(false);
  const [pageArr, setPageArr] = useState<Response[]>([]);
  const [pageNoDisplay, setPageNoDisplay] = useState(1);
  const [pageNoAxios, setPageNoAxios] = useState(1);
  const [disableForward, setDisableForward] = useState(false);
  const [arrLoad, setArrLoad] = useState(false);
  const [pageMap, setPageMap] = useState<{ [key: number]: Response[] }>({});
  const [sortOption, setSortOption] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [allCandidates, setALLCandidates] = useState<Response[]>([]);
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      console.log(profiles);
      setArrLoad(true);
      localStorage.setItem("profiles", JSON.stringify(profiles));
      router.push(`/dummyResult`);
      let resp = await axios.post(`${DEV_PUBLIC_SAPURL}sap/candidates`, { profiles, pageNoAxios });
      let { finalCandidates } = resp.data.data;
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
    return (
        <div>
            <Navbar />
            <div className="wrapper searchForm ">
                {/* <!-- welcome Section  --> */}
                <div className="searchFormSection ">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>SAP Specific Search Form</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="specificSearchForm">
                                    <div className="oneCol">
                                        <label>Key word</label>
                                        <input type="text" id="first" className="form-control" onChange={(ele: any) => handleChangeKeyword(ele)} />
                                        {skillSuggestions.length > 0 &&
                                            <div style={{ backgroundColor: '#f7f7f7', borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 7px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px' }}>
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
                                            <label>Primary Module</label>
                                            <input type="text" className="form-control" id="second" onChange={(ele: any) => handleChangePrimary(ele)} />
                                            {primaryskillSuggestions.length > 0 &&
                                                <div style={{ backgroundColor: '#f7f7f7', borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 7px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px' }}>
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
                                            <label>Secondary Module</label>
                                            <input type="text" className="form-control" id="third" onChange={(ele: any) => handleChangeSecondary(ele)} />
                                            {secondaryskillSuggestions.length > 0 &&
                                                <div style={{ backgroundColor: '#f7f7f7', borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 7px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px' }}>
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
                                            <label>Role Type</label>
                                            <select name="" id="" onChange={(e) => handleOption1(e.target.value)}>
                                                <option >Select an option</option>
                                                <option value="Technical">Technical</option>
                                                <option value="Functional">Functional</option>
                                                <option value="Techno-Functional">Techno-Functional</option>
                                            </select>
                                        </div>
                                        <div className="rightCol">
                                            <label>Technical Skills</label>
                                            <input type="text" className="form-control" id="" onChange={(ele: any) => handleChangeTechnical(ele)} />
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>

                                <div className="specificSearchForm">
                                    <div className="twoCol">
                                        <div className="leftCol">
                                            <label>Functional Experties</label>
                                            <input type="text" className="form-control" id="" />
                                        </div>
                                        <div className="rightCol">
                                            <label>Integration Skills</label>
                                            <input type="text" className="form-control" id="" />
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="twoCol">
                                        <div className="leftCol">
                                            <label>SAP S/4HANA Experties</label>
                                            <input type="text" className="form-control" id="" />
                                        </div>
                                        <div className="rightCol">
                                            <label>Certifications</label>
                                            <input type="text" className="form-control" id="" />
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="oneCol">
                                        <label>Version-Specific Experties</label>
                                        <input type="text" className="form-control" id="" />
                                    </div>
                                </div>
                                <div className="specificSearchForm">
                                    <div className="twoCol">
                                        <div className="leftCol">
                                            <label>Project Type</label>
                                            <select name="" id="">
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
                                    </div>
                                    <div className="twoCol">
                                        <div className="leftCol">
                                            <label>Industry-Specific Solution</label>
                                            <input type="text" className="form-control" id="" />
                                        </div>
                                        <div className="rightCol">
                                            <label>Experience level</label>
                                            <input type="text" className="form-control" id="" onChange={(e: any) => handleExperience(e)} />
                                        </div>
                                        <div className="clear"></div>
                                    </div>

                                </div>
                                <div className="specificSearchForm">
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

                                </div>
                                <div className="sapSearchBtn">
                                    <button className="searchBtn" onClick={handleSubmit}>Click Me</button>

                                </div>


                            </div>

                        </div>
                    </section>
                </div>


            </div>
            <FotterComponent />
        </div>
    )
}

export default DummyPage
