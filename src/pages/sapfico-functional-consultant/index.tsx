import FotterComponent from '@/components/molecules/Fotter'
import Navbar from '@/components/molecules/navbar'
import React from 'react'

const FunctionalConsultantPage = () => {
    return (
        <div>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            <link href="css/fonts.css" rel="stylesheet" />
            <link href="css/reset.css" rel="stylesheet" />
            <link href="css/style.css" rel="stylesheet" />
            <link href="css/responsive.css" rel="stylesheet" />
            <Navbar />
            <div>
                <div className="capabilitiesSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="homesapExpertise">
                                    <h2>We connect <span>top SAP talent</span> with leading organizations.</h2>
                                    <h3> Focused on hiring skilled SAP FICO Functional Consultants to drive business success.</h3>
                                    <p>We are dedicated to fostering a collaborative and innovative work environment that supports professional growth and excellence.</p>

                                    {/* <!-- <div className="hireSap"><a className="hire" href"#">Search SAP Talent</a><a className="hire" href"#">Explore Talent Pool</a></div> --> */}

                                </div>

                            </div>
                            <div className="col-md-5">
                                <div className="bannerImg">
                                    <img src="images/sapfun.jpg" style={{borderRadius:"5px"}} alt="ELEVATE YOUR TECH CAPABILITIES" className="img-fluid" />

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="wrapper hjd">
                <div className="superchargeSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="">
                                    <h2>Role Overview</h2>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="superchargeCont">
                                    <span className="number">1</span>
                                    <div className="superchargeHeading"><h3>Responsibilities</h3></div>
                                    <div className="superchargeText">Design, configure, and implement SAP Finance (FI) and Controlling (CO) modules.</div>

                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="superchargeCont">
                                    <span className="number">2</span>
                                    <div className="superchargeHeading"><h3>Client Interaction</h3></div>
                                    <div className="superchargeText">Work closely with business stakeholders to gather requirements and provide solutions.</div>

                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="superchargeCont">
                                    <span className="number">3</span>
                                    <div className="superchargeHeading"><h3>Solution Delivery</h3></div>
                                    <div className="superchargeText">Translate business needs into effective SAP configurations and functionalities.</div>

                                </div>
                            </div>
                        </div>

                    </section>
                </div></div>
                <div style={{marginTop:"-150px"}}>
            <div className="wrapper serviceOffering">
                <div className="sixthSection scalableSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Key Responsibilities</h2>
                                <h4></h4>

                            </div>

                            <div className="col-md-4 Initiatives">
                                <img src="images/icon26.png" alt="Agile Team Composition" className="img-fluid" /><br />
                                <h5>System Configuration</h5>
                                <p> Configure SAP FICO modules to meet business requirements.</p>
                            </div>
                            <div className="col-md-4 Initiatives">
                                <img src="images/icon27.png" alt="On-Demand Expertise" className="img-fluid" /><br />
                                <h5>Process Improvement</h5>
                                <p>Identify and implement process improvements within the SAP environment.</p>
                            </div>


                            <div className="col-md-4 Initiatives">
                                <img src="images/icon29.png" alt="On-Demand Expertise" className="img-fluid" /><br />
                                <h5>End-User Support</h5>
                                <p>Provide training and support to end-users to ensure effective utilization of SAP systems.</p>
                            </div>


                        </div>
                    </section>

                    <div className=" unleashingSection">
                        <section className="container mt-4 ">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Preferred Skills and Experience</h2>
                                    <h4></h4>

                                </div>

                                <div className="col-md-4 unleashing color01 ">
                                    <img src="images/icon11.png" alt="AI-Vetted" className="img-fluid" /><br />
                                    <h5>Integration Knowledge</h5>
                                    <p>Experience with SAP integration with other modules (MM, SD, PP).</p>
                                </div>
                                <div className="col-md-4 unleashing color02 ">
                                    <img src="images/icon12.png" alt="Certified" className="img-fluid" /><br />
                                    <h5>Project Experience</h5>
                                    <p>Hands-on experience in SAP implementation projects.</p>
                                </div>
                                <div className="col-md-4 unleashing color03 ">
                                    <img src="images/icon13.png" alt="Accomplished" className="img-fluid" /><br />
                                    <h5>Certifications</h5>
                                    <p>SAP FICO certification is a plus.</p>
                                </div>


                            </div>
                        </section>
                    </div>
                </div>
                <div className="superchargeSection precisionSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="">
                                    <h2>Role of an <span>SAP FICO</span> Consultant</h2>
                                    <h3></h3>

                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="superchargeCont">
                                    {/* <!-- <span className="number">AI</span> --> */}
                                    <div className="superchargeHeading superchargeHeading1  ">Implementation</div>
                                    <div className="superchargeText">Leading the design and implementation of SAP FICO solutions.
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="superchargeCont">
                                    {/* <!-- <span className="number">EI</span> --> */}
                                    <div className="superchargeHeading superchargeHeading2 ">Support</div>
                                    <div className="superchargeText"> Providing ongoing support and optimization for existing SAP systems.</div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="superchargeCont">
                                    {/* <!-- <span className="number">HI</span> --> */}
                                    <div className="superchargeHeading superchargeHeading3 ">Consultation</div>
                                    <div className="superchargeText">Advising clients on best practices and process improvements within the SAP ecosystem.</div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            
                            
                        </div>

                    </section>
                </div>
                <div className="assessingSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Benefits of Working With Us</h2>
                                <h4></h4>
                            </div>
                            <div className="col-md-4">
                                <div className="assessingCont">
                                    <h5>Competitive Compensation</h5>
                                    <img src="images/icon43.png" alt="Technical Competency" className="img-fluid" /><br />
                                    <p>Attractive salary and comprehensive benefits package.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="assessingCont">
                                    <h5>Work Environment</h5>
                                    <img src="images/icon44.png" alt="Professional Experience" className="img-fluid" /><br />
                                    <p>Flexible working hours and remote work options.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="assessingCont">
                                    <h5>Professional Growth</h5>
                                    <img src="images/icon45.png" alt="Cultural Fit" className="img-fluid" /><br />
                                    <p>Opportunities for continuous learning and development.</p>
                                </div>
                            </div>
                            <div className="col-md-2">

                            </div>

                        </div>
                    </section>
                </div>
                <div className="solutionsSection">
                    <section className="container mt-4 ">
                        <div className="row ">
                            <div className="col-md-12">
                                <h2>Expert SAP Consulting Services</h2>
                                <div style={{textAlign:"center"}}>
                                    <div style={{fontSize:"22px"}}>From Strategy to Implementation – Tailored Guidance Every Step of
                                        the Way</div>
                                </div>
                            </div>

                        </div>
                        <div className="row ">
                            <div className="col-md-6  ">
                                <div className="solutionText">
                                    <img src="images/soultionimg011.png" alt="Talent Matching and Connection"/>
                                        <h3>Advancement</h3>
                                        <p>Opportunities to advance to senior consultant or project manager roles.</p>

                                </div>
                            </div>
                            <div className="col-md-6  ">
                                <div className="solutionText">
                                    <img src="images/sol021.png" alt="Skill Development and Enhancement"/>
                                        <h3>Specialization</h3>
                                        <p>Option to specialize in areas like SAP S/4HANA, integration, or industry-specific solutions.</p>

                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6  ">
                                <div className="solutionText">
                                    <img src="images/soultionimg011.png" alt="Talent Matching and Connection"/>
                                        <h3>Leadership</h3>
                                        <p>Potential to move into leadership positions within the SAP consulting practice.</p>

                                </div>
                            </div>
                            <div className="col-md-6  ">
                                <div className="solutionText">
                                    <img src="images/sol021.png" alt="Skill Development and Enhancement"/>
                                        <h3>Skill Development</h3>
                                        <p>Continuous learning opportunities to enhance your technical and professional skills.</p>

                                </div>
                            </div>
                        </div>
                        

                    </section>

                </div>
                
            </div></div>
            <FotterComponent/>
        </div>
    )
}

export default FunctionalConsultantPage
