import FotterComponent from "@/components/molecules/Fotter";
import Navbar from "@/components/molecules/navbar";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { DEV_PUBLIC_URL } from "../../../configs/auth";
import { CandidateProfileData } from "@/constants/profileData";
const apiUrl = `${DEV_PUBLIC_URL}form/candidates`;
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
    buttonText: string;
    Education:string;
}
function truncateSentence(sentence: string, maxLength = 195) {
    if (sentence != undefined && sentence.length > maxLength) {
        return sentence.substring(0, maxLength) + "...";
    } else {
        return sentence;
    }
}
const SapTalentPool = () => {
    const router = useRouter();

    useEffect(() => {
        const loadScripts = async () => {

            const jqueryScript = document.createElement('script');
            jqueryScript.src = 'https://code.jquery.com/jquery-3.5.1.slim.min.js';
            jqueryScript.onload = loadSlickScript; // Load slick.min.js after jQuery is loaded
            document.body.appendChild(jqueryScript);

            // Load Popper.js
            const popperScript = document.createElement('script');
            popperScript.src = 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js';
            document.body.appendChild(popperScript);

            // Load Bootstrap
            const bootstrapScript = document.createElement('script');
            bootstrapScript.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js';
            document.body.appendChild(bootstrapScript);

            // // Load Slick
            // const slickScript = document.createElement('script');
            // slickScript.src = '/scripts/slick.min.js'; // Assuming slick.min.js is in the public/scripts directory
            // document.body.appendChild(slickScript);

            // Load main.js
            const mainScript = document.createElement('script');
            mainScript.src = '/scripts/main.js'; // Assuming main.js is in the public/scripts directory
            mainScript.async = true;
            document.body.appendChild(mainScript);
        };
        const loadSlickScript = () => {
            // Load slick.min.js after jQuery is loaded
            const slickScript = document.createElement('script');
            slickScript.src = '/scripts/slick.min.js'; // Assuming slick.min.js is in the public/scripts directory
            document.body.appendChild(slickScript);
        };
        loadScripts();

        // Clean up function to remove the dynamically added script tags
        // return () => {
        //   // Remove all script tags that were added
        //   document.querySelectorAll('script').forEach(script => {
        //     if (script.src.includes('/scripts/')) {
        //       script.remove();
        //     }
        //   });
        // };
    }, []);
    const [apiResponse, setApiResponse] = useState<Candidates[]>([]);
    const [loading, setLoading] = useState(true);
    const [skills, setSkills] = useState("SAP")
    const [profileType, setProfileType] = useState("")
    const fetchData = async (skills: string) => {
        try {
            console.log("Fetching data for skills:", skills);

            let resp = await axios.post(`${apiUrl}`, {
                profiles: { Skill_Set: skills }, pageNumber: Math.floor(Math.random() * 10) + 1
            });
            let candidates = resp.data.data.candidatesData;
            setApiResponse(candidates);
            console.log(candidates)
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    try {
        useEffect(() => {
            fetchData(skills);

        }, [skills]);
    } catch (error) {
        alert(error);
    }

    const setting = {
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        mobileFirst: true,
        // infinite: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet" />
            <link href="css/fonts.css" rel="stylesheet" />
            <link href="css/reset.css" rel="stylesheet" />
            <link href="css/style.css" rel="stylesheet" />
            <link href="css/responsive.css" rel="stylesheet" />
            <Navbar />

            <div className="wrapper">
                {/* <!-- first Section --> */}
                <div className="firstSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="sapExpertise" >
                                    <h2>Unlock the <span>Power</span> of SAP Expertise</h2>
                                    <h3>Discover Your Gateway to Elite SAP Talent</h3>
                                    <p>Welcome to our SAP Talent Pool, where you&apos;ll find a curated selection of top-tier professionals ready to elevate your SAP projects to new heights. Our talent pool is meticulously vetted and certified, ensuring that you have access to the best SAP expertise available</p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="bannerImg">
                                    <img src="images/banner02.png" alt=" SAP Expertise" className="img-fluid" />

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* <!-- Second Section  --> */}
                <div className="secSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Explore <span>Specialized</span> SAP Skills</h2>
                                <h4>Dive Into a Spectrum of SAP Expertise</h4>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <div className="boxExplore">
                                    <h5>Explore Our Comprehensive Range of SAP Modules and Submodules</h5>
                                    <h6>Covering Every Aspect of SAP Expertise</h6>
                                    <span className="number">50+</span>
                                    <ul>
                                        <li>SAP ECC (Enterprise Core Components)</li>
                                        <li>SAP BW (Business Warehouse)</li>
                                        <li>SAP CRM (Customer Relationship Management)</li>
                                        <li>SAP SCM (Supply Chain Management)</li>

                                    </ul>
                                    <a href="">View All</a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="boxExplore">
                                    <h5>Discover Specialized SAP Solutions and Expertise</h5>
                                    <h6>Tailored Solutions for Every Business Need</h6>
                                    <span className="number">30+</span>
                                    <ul>
                                        <li>SAP Business One</li>
                                        <li>SAP Ariba (Procurement Solutions)</li>
                                        <li>SAP SuccessFactors (Human Capital Management)</li>
                                        <li>SAP Hybris (E-commerce Solutions)</li>

                                    </ul>
                                    <a href="">View All</a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="boxExplore">
                                    <h5>Unlock Expertise Across Various SAP Functional Areas</h5>
                                    <h6>Functional Expertise to Drive Business Processes</h6>
                                    <span className="number">40+</span>
                                    <ul>
                                        <li>SAP FI (Financial Accounting)</li>
                                        <li>SAP CO (Controlling)</li>
                                        <li>SAP SD (Sales and Distribution)</li>
                                        <li>SAP MM (Material Management)</li>
                                        <li>SAP HCM (Human Capital Management)</li>
                                    </ul>
                                    <a href="">View All</a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="boxExplore">
                                    <h5>Harness Technical Prowess with Our SAP Specialists</h5>
                                    <h6>Technical Skills to Optimize System Performance</h6>
                                    <span className="number">50+</span>
                                    <ul>
                                        <li>SAP ABAP (Advanced Business Application Programming)</li>
                                        <li>SAP BASIS (Business Application Systems Integrated Solutions)</li>
                                        <li>SAP BW/BI (Business Warehouse / Business Intelligence)</li>
                                        <li>SAP HANA (High-Performance Analytic Appliance)</li>
                                        <li>SAP Fiori (User Experience)</li>
                                    </ul>
                                    <a href="">View All</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* <!-- third section  --> */}
                <div className="thirdSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Key Metrics of Our SAP Talent Pool</h2>
                                <h4>Discover the Magnitude of Our SAP Expertise in Numbers</h4>

                            </div>
                            <div className="col-md-7">
                                <ul className="keyMetrics">
                                    <li><span className="keyNumber">14,000+</span><span className="keyHeading">Pre-Vetted SAP Experts:</span></li>
                                    <li><span className="keyNumber">3000+</span><span className="keyHeading">SAP Category Combinations:</span></li>
                                    <li><span className="keyNumber">1200+</span><span className="keyHeading">Ready-to-Deploy Consultants:</span></li>
                                    <li><span className="keyNumber">40+</span><span className="keyHeading">SAP Modules and Submodules:</span> </li>
                                    <li><span className="keyNumber">20+</span><span className="keyHeading">SAP Solutions and Specializations:</span></li>
                                    <li><span className="keyNumber">10+</span><span className="keyHeading">SAP Industry Domains:</span></li>
                                </ul>
                            </div>
                            <div className="col-md-5">
                                <div className="keyImg">
                                    <img src="images/about5.png" alt=" SAP Expertise" className="img-fluid" />

                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* <!-- fourth Section  --> */}
                <div className="fourthSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Matching Talent for Diverse<br />Project and Role Requirements</h2>
                                <h4>Customized Solutions to Meet Your Unique Project and Role Specifications</h4>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <div className="talentText">
                                    <img src="images/icon01.png" alt=" Project Type Specialization" />
                                    <h5>Project Type Specialization</h5>
                                    <p>Our talent pool encompasses experts skilled in various project types. Whether you require assistance with launching a new project or optimizing existing systems, our professionals are equipped to handle diverse project requirements.</p>
                                    <ul className="talentTextList">
                                        <li>Design</li>
                                        <li>Implementation</li>
                                        <li>Enhancements</li>
                                        <li>Migration </li>
                                        <li>Support</li>
                                        <li>Application Management Services (AMS)</li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="talentText">
                                    <img src="images/icon02.png" alt=" Role Type Expertise" />
                                    <h5>Role Type Expertise</h5>
                                    <p>We offer a comprehensive range of role types for your specific project needs. Our talent pool is meticulously curated to ensure each role is filled by an experienced and qualified professional, enabling seamless project execution and delivery.</p>
                                    <ul className="talentTextList">
                                        <li>Functional Consultant</li>
                                        <li>Technical Architect</li>
                                        <li>Techno-Functional Expert</li>
                                        <li>Project Manager </li>

                                    </ul>

                                </div>
                            </div>


                        </div>
                    </section>
                </div>
                {/* <!-- fifth Section --> */}
                <div className="sapProjectCont">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-4 sapProjectTextCont ">
                                <h4> Diverse Industry Focus</h4>
                                <p >Our SAP talent pool boasts experts with extensive experience across various industries, including manufacturing, healthcare, finance, retail, and more. Whatever your industry, we have the specialized expertise to drive your SAP projects forward.</p>

                            </div>
                            <div className="col-md-4 sapProjectHead">
                                <h2>Elevate Your SAP Projects with Industry-Specific Talent</h2>
                                <h3>Unleashing the Power of SAP Specialists Tailored to Your Industry</h3>
                            </div>
                            <div className="col-md-4 sapProjectTextCont">
                                <h4>Vertical Specializations</h4>
                                <p >Within each industry, we have SAP professionals specializing in key verticals and sub-sectors, ensuring that you work with experts who have a comprehensive understanding of your industry&apos;s nuances and best practices.</p>
                            </div>
                            <div className="col-md-6 sapProjectTextCont morepadding">
                                <h4>Industry Insights</h4>
                                <p> Gain access to professionals who understand the unique challenges and opportunities within your industry. Our experts bring valuable insights and best practices to the table, ensuring your SAP solutions are aligned with industry standards and requirements.</p>
                            </div>
                            <div className="col-md-6 sapProjectTextCont morepadding">
                                <h4>Customized Solutions</h4>
                                <p >We tailor our SAP talent solutions to address the specific needs and nuances of your industry. Whether you require compliance expertise, industry-specific modules, or sector-specific optimizations, we deliver customized solutions that add value to your business.</p>
                            </div>

                        </div>
                    </section>
                </div>

                {/* <!-- sixth section  --> */}
                <div className="sixthSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Accelerate Your SAP Initiatives<br />with <span>Data-Driven</span> Insights</h2>
                                <h4>Quantifying the Impact of Our SAP Talent Pool on Project Success</h4>

                            </div>

                            <div className="col-md-4 Initiatives">
                                <img src="images/icon031.png" alt=" 10X Faster Deployment" className="img-fluid" /><br />
                                <h5>10X Faster Deployment</h5>
                                <p>Experience rapid project kick-off with our swift deployment process, accelerating your time-to-market and ROI.</p>
                            </div>
                            <div className="col-md-4 Initiatives">
                                <img src="images/icon041.png" alt="95% Precision Match" className="img-fluid" /><br />
                                <h5>95% Precision Match</h5>
                                <p>Achieve unparalleled accuracy in talent selection with our precise matching algorithm, ensuring optimal resource allocation for your projects.</p>
                            </div>
                            <div className="col-md-4 Initiatives">
                                <img src="images/icon051.png" alt="24/7 Access to Expertise" className="img-fluid" /><br />
                                <h5>24/7 Access to Expertise</h5>
                                <p>Seamlessly access our SAP talent pool round-the-clock, enabling you to address project needs promptly and efficiently.</p>
                            </div>
                            <div className="col-md-2 Initiatives">

                            </div>
                            <div className="col-md-4 Initiatives">
                                <img src="images/icon06.png" alt="4-Hour Turnaround Time" className="img-fluid" /><br />
                                <h5>4-Hour Turnaround Time</h5>
                                <p>Respond swiftly to project requirements with our quick turnaround time, ensuring agility and responsiveness in resource allocation.</p>
                            </div>
                            <div className="col-md-4 Initiatives">
                                <img src="images/icon07.png" alt="100% Satisfaction Guarantee" className="img-fluid" /><br />
                                <h5>100% Satisfaction Guarantee</h5>
                                <p>Rest assured of project success with our unwavering commitment to delivering high-quality, client-centric solutions that exceed expectations.</p>
                            </div>
                            <div className="col-md-2 Initiatives">

                            </div>



                        </div>
                    </section>
                </div>


                {/* <!-- client Section  --> */}
                <div className="clientCont">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Our Leadership&apos;s Client Work<br />A Chronicle of Success</h2>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="logoCont">
                                    <img src="images/logo01.jpg" alt="logo" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="logoCont">
                                    <img src="images/logo02.jpg" alt="logo" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="logoCont">
                                    <img src="images/logo03.jpg" alt="logo" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="logoCont">
                                    <img src="images/logo04.jpg" alt="logo" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="logoCont">
                                    <img src="images/logo05.jpg" alt="logo" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="logoCont">
                                    <img src="images/logo06.jpg" alt="logo" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="logoCont">
                                    <img src="images/logo07.jpg" alt="logo" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="logoCont">
                                    <img src="images/logo08.jpg" alt="logo" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="logoCont">
                                    <img src="images/logo09.jpg" alt="logo" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="logoCont">
                                    <img src="images/logo10.jpg" alt="logo" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="logoCont">
                                    <img src="images/logo11.jpg" alt="logo" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="logoCont">
                                    <img src="images/logo12.jpg" alt="logo" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


            </div>
            <div className="searchSliderCont">
                <section className="container mt-4 ">
                    <div className="row ">
                        <div className="col-md-12   ">
                            <h2>Best Developers</h2>
                            <h4>They are some of the best developers we have and they have tested and worked with several client</h4>
                            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", gap: "20px" }}>
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <button type="button" className="btn btn-outline-primary" onClick={() => { setProfileType("Functional") }}>Functional</button>
                                    <button type="button" className="btn btn-outline-primary" onClick={() => { setProfileType("Technical") }}>Technical</button>
                                    <button type="button" className="btn btn-outline-primary" onClick={() => { setProfileType("Techno-Functional") }}>Techno-Functional</button>
                                </div>
                                {profileType === "Functional" && <div style={{ display: "flex", gap: "10px" }}>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => { setSkills("SD") }}>SAP SD</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => { setSkills("TM") }}>SAP TM</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => { setSkills("MM") }}>SAP MM</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => { setSkills("CO") }}>SAP CO</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => { setSkills("PP") }}>SAP PP</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => { setSkills("SD") }}>SAP SD</button>
                                </div>}
                                {profileType === "Technical" && <div style={{ display: "flex", gap: "10px" }}>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => { setSkills("SAP_Basis") }}>SAP Basis</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => { setSkills("SAP_HANA") }}>SAP HANA</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => { setSkills("SAP_Fiori") }}>SAP Fiori</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => { setSkills("SAP_BW") }}>SAP BW/BI</button>
                                    {/* <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => { setSkills("SAP PO/PI") }}>SAP PO/PI</button> */}
                                </div>}
                                {profileType === "Techno-Functional" && <div style={{ display: "flex", gap: "10px" }}>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => { setSkills("SD") }}>SAP SD</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => { setSkills("TM") }}>SAP TM</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => { setSkills("MM") }}>SAP MM</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => { setSkills("CO") }}>SAP CO</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => { setSkills("PP") }}>SAP PP</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => { setSkills("FI") }}>SAP FI</button>
                                </div>}
                            </div>
                            <Slider {...setting} className="searchSlider">
                                {(CandidateProfileData[skills as keyof typeof CandidateProfileData].map((item: any, index: any) => (
                                    <div className="slide " key={index}>
                                        <div className="slideCont">
                                            <div className="SlideImg"><img src="images/dummyImage.jpg" alt="name" /></div>
                                            <div className="slideText">
                                                <h3>{(item.CurrentRole).split(" at ")[0]}</h3>
                                                <p className="DepText">{truncateSentence(item.CandidateProfile)}</p>
                                                <p className="salaryText">Education: <span>{(item.Education).split(",")[0]}</span></p>
                                                <p className="salaryText">Experience: <span>{item.Experience}</span></p>
                                                {/* <p className="salaryText">Education: <span>{item.Experience}</span></p> */}
                                                <p className="timeText">Available: 6 month </p>
                                                <p className="cityText">Location: {item.CurrentLocation}</p>
                                                <p className="salaryText">Top skills: <span>{(item.Skills).split(",")[0]}, {(item.Skills).split(",")[1]}, {(item.Skills).split(",")[2]}, {(item.Skills).split(",")[3]}</span></p>
                                                {/* <a href="#">Chat</a> <a href="#">hire</a> */}
                                            </div>
                                        </div>
                                    </div>
                                )))}
                            </Slider>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div className="hireSap"><a className="hire" href="/sap-talent-pool">Explore Talent Pool</a><a className="hire"
                                href="/sapSearch">Hire Elite Talent</a></div>
                        </div>

                    </div>
                </section>
            </div>
            {/* <ProfileCorousel/> */}
            <FotterComponent />
        </>
    );
}
export default SapTalentPool  