import React, { ChangeEvent, useState } from 'react';
import Stepone from "../../components/subreq/step1";
import Steptwo from '../../components/subreq/step2';
import Stepthree from '../../components/subreq/step3';
import Stepfour from '../../components/subreq/step4';
import Thankyou from '../../components/subreq/thankyou';
import dayjs, { Dayjs } from 'dayjs';
import css1 from "../../styles/sapSearchStyle.module.css";
import Layout from '@/components/layout';
import { Button, Input, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import { DEV_PUBLIC_CALLURL } from '../../../configs/auth';
import FotterComponent from '@/components/molecules/Fotter';
import Navbar from '@/components/molecules/navbar';
interface ClientInfo {
    // Skills:string[];
    Name: string;
    Email: string;
    Company_name: string;
    contact_number: string;
    Start_Date: string | null;
    Job_Description: string;
    Budget: string;
    Openings: string;
    Role_Title: string;
    Designation: string;
    Current_Timezone: string | null;
    meetingDate:string|null;
}
const SubreqMeetingPage = () => {
    // const {selectedId,setSelectedId} = useGlobalContext();
    const [ClientData, setClientData] = useState<ClientInfo>({
        // Skills:[],
        Name: "",
        Email: "",
        // workEmail:"",
        Company_name: "",
        contact_number: "",
        Current_Timezone: '',
        Start_Date: "",
        Job_Description: "",
        Budget: "",
        Openings: "",
        Role_Title: "",
        Designation: "",
        meetingDate:""
    })
    const [errors, setErrors] = useState({
        workEmail: '',
        contact_number: '',
        Email: ''
    });
    
    const handleInputChange = (e: any): void => {
        const { name, value } = e.target;
        setClientData({ ...ClientData, [name]: value });
        console.log("profiles->", ClientData);
        validateField(name, value);
    };
    const validateField = (fieldName: string, value: string) => {
        let errorMessage = '';

        switch (fieldName) {
            case 'workEmail':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                errorMessage = !value.match(emailRegex) ? 'Invalid email address' : '';
                break;
            case 'Email':
                const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                errorMessage = !value.match(emailRe) ? 'Invalid email address' : '';
                break;
            case 'contact_number':
                const phoneRegex = /^[0-9]{10}$/;
                errorMessage = !value.match(phoneRegex) ? 'Invalid phone number (10 digits)' : '';
                break;
            default:
                break;
        }

        setErrors({ ...errors, [fieldName]: errorMessage });
    };
    
    const handleTimeZone = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "none") {
            setClientData({ ...ClientData, Current_Timezone: "" });
        } else {
            setClientData({ ...ClientData, Current_Timezone: e.target.value });
        }
        console.log("profiles->", ClientData);
    }
    const [steps, setSteps] = useState(1);
    const [datePage, setDatePage] = useState(false);
    const handleNextStep = async () => {
        setThankyouPage(true);
        setDatePage(false);
        const storedData = localStorage.getItem("selectedId");
        const parsedData = storedData ? JSON.parse(storedData) : null;
        const selectedId = parsedData ? parsedData.selectedId : null;
        console.log("id", ClientData, selectedId);
        try {
            const resp = await axios.post(`${DEV_PUBLIC_CALLURL}call`, { ClientData, selectedId });
            // const candidates = resp.data.data.candidatesData;
            // if (candidates === 'Data not present') {
            //   setApiResponse([]);
            // } else if (candidates.length !== 0) {
            //   setApiResponse(candidates);
            // } else {
            //   setApiResponse([]);
            // }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
        
    };
    const handledateTime = (data: Dayjs) => {
        const currentDate: Dayjs = dayjs();
        const futureDate: Dayjs = currentDate.add(1, 'day');
        const formattedDate: string = futureDate.format('YYYY-MM-DDTHH:mm:ss');
        const newDate = `${formattedDate}+05:30`
        setClientData({ ...ClientData, meetingDate: newDate });
        console.log("profiles->", ClientData);
    }
    // const handleRadioButton = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setClientData({ ...ClientData, workType: (event.target as HTMLInputElement).value });
    //     console.log("profiles->", ClientData);
    // }
    // const [yearofExpValue, setYearofExpValue] = useState<number>(0);
    // const handleYearofExp = (
    //     event: Event,
    //     newValue: number | number[],
    // ) => {
    //     setYearofExpValue(newValue as number);
    //     setClientData({ ...ClientData, yearOfExp: newValue as number | number[] });
    //     console.log("profiles->", ClientData);
    // }
    const handlesetClientData = (dataskill: string[]) => {
        setClientData((prevData) => ({
            ...prevData,
            Skills: dataskill,
        }));
    }
    const [thankyouPage, setThankyouPage] = useState<boolean>(false);
    const handleClick = async () => {
        setDatePage(true);
        // const storedData = localStorage.getItem("selectedId");
        // const parsedData = storedData ? JSON.parse(storedData) : null;
        // const selectedId = parsedData ? parsedData.selectedId : null;
        // console.log("id", ClientData, selectedId);
        // try {
        //     const resp = await axios.post(`${DEV_PUBLIC_CALLURL}call`, { ClientData, selectedId });
        //     // const candidates = resp.data.data.candidatesData;
        //     // if (candidates === 'Data not present') {
        //     //   setApiResponse([]);
        //     // } else if (candidates.length !== 0) {
        //     //   setApiResponse(candidates);
        //     // } else {
        //     //   setApiResponse([]);
        //     // }

        // } catch (error) {
        //     console.error('Error fetching data:', error);
        // }
    };
    return (
        <>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet" />
            <link href="css/fonts.css" rel="stylesheet" />
            <link href="css/reset.css" rel="stylesheet" />
            <link href="css/style.css" rel="stylesheet" />
            <link href="css/responsive.css" rel="stylesheet" />
            {/* {steps === 1 && (
            <Stepone
                ClientData={ClientData}
                handlesetClientData={handlesetClientData}
                handleInputChange={handleInputChange}
                onNextStep={handleNextStep}
                errors={errors}
            />
            )}
         {steps===2 && <Steptwo  ClientData={ClientData} handledateTime={handledateTime} handleTimeZone={handleTimeZone}  onNextStep={handleNextStep} />}
         {steps===3 && <Stepthree ClientData={ClientData} errors={errors} handleInputChange={handleInputChange} handleRadioButton={handleRadioButton}  onNextStep={handleNextStep} />}
         {steps===4 && <Stepfour yearofExpValue={yearofExpValue}  ClientData={ClientData} handleYearofExp={handleYearofExp} onNextStep={handleNextStep}/>}
         {steps===5 && <Thankyou ClientData={ClientData} />} */}
            {!thankyouPage&&!datePage &&
                <div>
                    <Navbar />
                    <div className="wrapper searchForm ">
                        {/* <!-- welcome Section  --> */}
                        <div className="searchFormSection ">
                            <section className="container mt-4 ">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2>Submit Requirement</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="specificSearchForm">
                                            <div className="oneCol">
                                                <label>Name</label>
                                                <input type="text" className="form-control" id="" name="Name" onChange={handleInputChange} />
                                            </div>
                                            <div className="twoCol">
                                                <div className="leftCol">
                                                    <label>Email</label>
                                                    <input type="text" className="form-control" id="" name="Email" onChange={handleInputChange} />
                                                </div>
                                                <div className="rightCol">
                                                    <label>Phone</label>
                                                    <input type="text" className="form-control" id="" name="contact_number" onChange={handleInputChange} />
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                            <div className="twoCol">
                                                <div className="leftCol">
                                                    <label>Company Name</label>
                                                    <input type="text" className="form-control" id="" name="Company_name" onChange={handleInputChange} />
                                                </div>
                                                <div className="rightCol">
                                                    <label>Designation / Title</label>
                                                    <input type="text" className="form-control" id="" name="Designation" onChange={handleInputChange} />
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>

                                        <div className="specificSearchForm">
                                            <div className="twoCol">
                                                <div className="leftCol">
                                                    <label>Role Title</label>
                                                    <input type="text" className="form-control" id="" name="Role_Title" onChange={handleInputChange} />
                                                </div>
                                                <div className="rightCol">
                                                    <label>Number of Openings</label>
                                                    <input type="text" className="form-control" id="" name="Openings" onChange={handleInputChange} />
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                            <div className="twoCol">
                                                <div className="leftCol">
                                                    <label>Budget</label>
                                                    <input type="text" className="form-control" id="" name="Budget" onChange={handleInputChange} />
                                                </div>
                                                <div className="rightCol">
                                                    <label>Duration</label>
                                                    <select id="" name="duration" onChange={handleInputChange} >
                                                        <option >Select an option</option>
                                                        <option value="3">3 Months</option>
                                                        <option value="6">6 Months</option>
                                                        <option value="12">12 Months</option>
                                                        {/* <option value="none">Indian Time</option> */}
                                                    </select>
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                            <div className="leftCol">
                                                <label>Timezone</label>
                                                <select id="" name="Current_Timezone" onChange={handleTimeZone}>
                                                    <option >Select an option</option>
                                                    <option value="IST">European Time</option>
                                                    <option value="CET">Eastern Time</option>
                                                    <option value="ET">Central Time</option>
                                                    <option value="none">Indian Time</option>
                                                </select>
                                            </div>
                                            <div className="rightCol">
                                                <label>Start Date</label>
                                                <input className="form-control" id="" type="date" name="Start_Date" onChange={handleInputChange} />
                                            </div>
                                            <div className="oneCol">
                                                <label htmlFor="Description">Job Description</label>
                                                <textarea className="form-control" id="message" rows={5} placeholder="Write description" name='description' onChange={handleInputChange}></textarea>
                                            </div>
                                            <div className="clear"></div>
                                        </div>

                                        <div className="sapSearchBtn">
                                            <button className="searchBtn" onClick={handleClick}>Submit</button>

                                        </div>

                                    </div>

                                </div>
                            </section>
                        </div>


                    </div>
                    <FotterComponent />
                </div>}
                {datePage && <Steptwo ClientData={ClientData} handledateTime={handledateTime} onNextStep={handleNextStep}/>}
            {thankyouPage && <Thankyou />}
        </>
    )
}

export default SubreqMeetingPage;
