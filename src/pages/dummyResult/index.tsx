import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { DEV_PUBLIC_SAPURL } from '../../../configs/auth';
import Navbar from '@/components/molecules/navbar';
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
const DummyResult = () => {
    const [profiles, setProfile] = useState<Profile>({
        keyword: '',
        primary_module: '',
        secondary_module: '',
        role_type: '',
        technical_skills: '',
        country: '',
        experience: ''
    });
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
  const [disableBackward, setDisableBackward] = useState(true);
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectAll(e.target.checked);
    const allIDs = allCandidates.map((item) => item.id);
    if (!selectAll) {
      setSelectedId((prevSelectedId) => {
        const uniqueIDs = new Set([...prevSelectedId, ...allIDs]);
        return Array.from(uniqueIDs);
      });
    } else {
      setSelectedId(selectedId.filter((item) => !allIDs.includes(item)));
    }
  };
  const handleSubmit = async () => {
    try {
      console.log(profiles);
      setArrLoad(true);
      localStorage.setItem("profiles", JSON.stringify(profiles));
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
    // useEffect(() => {
    //     const storedProfiles = localStorage.getItem("profiles");
    //     if (storedProfiles) {
    //         const profilesData = JSON.parse(storedProfiles);
    //         setProfile(profilesData);
    //         handleSubmit();
    //     } else {
            
    //     }
    // },[])
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
      const router = useRouter();
      const handleSubreqButton = () => {
        localStorage.setItem("selectedId", JSON.stringify({ selectedId }));
    
        router.push(`/subreq`);
      };
      const handleMeetButton = () => {
        localStorage.setItem("selectedId", JSON.stringify({ selectedId }));
        localStorage.setItem("meeting", "true");
        router.push(`/subreqMeeting`);
      };
    return (
        <div>
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
                                      //   value={filterOption}
                                      //   onChange={handleChangefilter}
                                      >
                                        <option value="volvo">Filter By</option>
                                        <option value="searchLocation">Location</option>
                                        <option value="Current_Timezone">TimeZone</option>
                                        <option value="College">College</option>
                                        <option value="Company">Company</option>
                                        <option value="None">None</option>
                                      </select>
                                      {/* {filterOption && filterOption === "searchLocation" && (
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
                        {filterOption && filterOption === "College" && (
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
                                                <h3 className="listName">{ele.Name}</h3>
                                                <h4 className="currentLocation">{ele.CurrentLocation}</h4>
                                                <h5><span>Years of Exp : {ele.Experience}</span> <strong>| </strong> <span>Current Salary : {ele.Salary}</span></h5>
                                                <h6 className="listTitle"></h6>
                                              </div>
                                              <div className="otherDesc">
                                                <p>{ele.CandidateProfile}</p>
                                                <p><span>Current Position </span>{ele.CurrentRole}</p>
                                                <p><span>Current Company </span>Larsen &amp; Toubro InfoTech Limited</p>
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
        </div>
    )
}

export default DummyResult
