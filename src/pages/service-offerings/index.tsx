import FotterComponent from '@/components/molecules/Fotter'
import Navbar from '@/components/molecules/navbar'
import React, { useState } from 'react'

const ServiceOfferingsPage = () => {
    const [select, setSelect] = useState("Precision");
    return (
        <div>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            <link href="css/fonts.css" rel="stylesheet" />
            <link href="css/reset.css" rel="stylesheet" />
            <link href="css/style.css" rel="stylesheet" />
            <link href="css/responsive.css" rel="stylesheet" />
            <Navbar />
            <div className="wrapper serviceOffering">
                {/* <!-- capabilitiesSection --> */}
                <div className="capabilitiesSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="homesapExpertise" >
                                    <h2>Transform Your Technology Strategy</h2>
                                    <p>With Our AI-Powered Talent Cloud Solutions</p>
                                    <div className="hireSap"><a className="hire" href="#">Contact Us Today</a><a className="hire" href="#">Learn More</a></div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="bannerImg">
                                    <img src="images/banner02.png" alt="ELEVATE YOUR TECH CAPABILITIES" className="img-fluid" />

                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="ventureSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Our Services</h2>
                                <h3>Tailored to Meet Your Every Tech Need</h3>
                            </div>
                            <div className="col-md-6">
                                <div className="bannerImg">
                                    <img src="images/our-services01.jpg" alt="Next Venture" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="venturCont" >

                                    <p>Discover a range of specialized tech services designed to meet diverse business needs, all enhanced by our AI-driven approach. From individual tech expert placements to complete project deliveries, our services are crafted to enhance precision, efficiency, and customization, helping you achieve optimal outcomes.</p>

                                </div>
                            </div>

                        </div>
                    </section>
                </div>


                <div className="transformSection ">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12 ">
                                <h2>Individual Tech Experts</h2>
                            </div>
                        </div>
                        <div className="row transformCont">
                            <div className="col-md-4 transformHeadCont">
                                <div className="transformHead">
                                    <ul>
                                        <li className={select === "Precision" ? "active" : ""} onClick={() => setSelect("Precision")}><h5>Precision Matching</h5></li>
                                        <li className={select === "Speed" ? "active" : ""} onClick={() => setSelect("Speed")}><h5>Speed and Efficiency</h5></li>
                                        <li className={select === "Flexibility" ? "active" : ""} onClick={() => setSelect("Flexibility")}><h5>Flexibility</h5></li>
                                        <li className={select === "AI" ? "active" : ""} onClick={() => setSelect("AI")}><h5>AI-Driven Precision Matching</h5></li>
                                        <li className={select === "Automated" ? "active" : ""} onClick={() => setSelect("Automated")}><h5>Automated Vetting Process</h5></li>

                                    </ul>
                                </div>

                            </div>
                            <div className="col-md-8 transformBodyCont ">
                                <div className="transformBody">
                                    <ul>
                                        <li className={select === "Precision" ? "active" : ""} >
                                            <h3>Precision Matching</h3>
                                            <p>Harness our AI-powered platform to connect with tech experts perfectly matched to your project requirements.</p>
                                            <p><a href="#">Read More</a></p>
                                        </li>
                                        <li className={select === "Speed" ? "active" : ""}>
                                            <h3>Speed and Efficiency</h3>
                                            <p>Benefit from the rapid deployment of pre-vetted professionals ready to integrate swiftly into your projects.</p>
                                            <p><a href="#">Read More</a></p>
                                        </li>
                                        <li className={select === "Flexibility" ? "active" : ""}>
                                            <h3>Flexibility</h3>
                                            <p>Access a range of engagement models, from short-term to long-term placements, to meet your project demands.</p>
                                            <p><a href="#">Read More</a></p>
                                        </li>
                                        <li className={select === "AI" ? "active" : ""}>
                                            <h3>AI-Driven Precision Matching</h3>
                                            <p>Sophisticated AI algorithms analyze project requirements and candidate profiles to ensure a fit that goes beyond skills to include work style and project goals.</p>
                                            <p><a href="#">Read More</a></p>
                                        </li>
                                        <li className={select === "Automated" ? "active" : ""}>
                                            <h3>Automated Vetting Process</h3>
                                            <p>AI streamlines the vetting process, rapidly verifying credentials, experience, and compatibility, accelerating the deployment timeline and enhancing reliability.</p>
                                            <p><a href="#">Read More</a></p>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </section>
                </div>

                {/* <!-- scalableSection section  --> */}
                <div className="sixthSection scalableSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Global Elastic Teams</h2>
                                <h4>Scalable and Flexible Teams for Global Projects</h4>

                            </div>

                            <div className="col-md-4 Initiatives">
                                <img src="images/icon26.png" alt="Agile Team Composition" className="img-fluid" /><br />
                                <h5>Custom Configuration</h5>
                                <p>Employ AI-driven solutions to form the perfect team composition tailored to your project’s needs.</p>
                            </div>
                            <div className="col-md-4 Initiatives">
                                <img src="images/icon27.png" alt="On-Demand Expertise" className="img-fluid" /><br />
                                <h5>Dynamic Adaptability</h5>
                                <p>Adjust team size and skill mix as your project evolves, with ease.</p>
                            </div>
                            <div className="col-md-4 Initiatives">
                                <img src="images/icon28.png" alt="Customized Solutions" className="img-fluid" /><br />
                                <h5>Engagement Models</h5>
                                <p>Choose from fully remote, hybrid, or onsite-offshore models to optimize efficiency and interaction.</p>
                            </div>

                            <div className="col-md-2 Initiatives">

                            </div>
                            <div className="col-md-4 Initiatives">
                                <img src="images/icon29.png" alt="On-Demand Expertise" className="img-fluid" /><br />
                                <h5>Dynamic Team Assembly</h5>
                                <p>AI systems assess project scope and dynamically configure teams with the optimal mix of skills and experience, tailored to project specifics and client cultural fit.</p>
                            </div>
                            <div className="col-md-4 Initiatives">
                                <img src="images/icon30.png" alt="Customized Solutions" className="img-fluid" /><br />
                                <h5>Global Team Coordination</h5>
                                <p>AI tools facilitate seamless communication and collaboration across different time zones and locations, optimizing workflow and enhancing productivity through smart scheduling and resource allocation.</p>
                            </div>
                            <div className="col-md-2 Initiatives">

                            </div>

                        </div>
                    </section>
                </div>

                {/* <!-- scalableSection section  --> */}
                <div className=" unleashingSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Project Based Delivery</h2>
                                <h4>Efficiently Structured Solutions for Precise Outcomes</h4>

                            </div>

                            <div className="col-md-4 unleashing color01 ">
                                <img src="images/icon11.png" alt="AI-Vetted" className="img-fluid" /><br />
                                <h5>Defined Scope and Deliverables</h5>
                                <p>Execute projects based on a comprehensive Statement of Work that outlines all phases and requirements</p>
                            </div>
                            <div className="col-md-4 unleashing color02 ">
                                <img src="images/icon12.png" alt="Certified" className="img-fluid" /><br />
                                <h5>Managed Milestones</h5>
                                <p>Benefit from expert project management to ensure your project remains on track and adheres to budget constraints.</p>
                            </div>
                            <div className="col-md-4 unleashing color03 ">
                                <img src="images/icon13.png" alt="Accomplished" className="img-fluid" /><br />
                                <h5>Resource Readiness</h5>
                                <p>Our AI-Powered Talent Cloud ensures the immediate availability of the most relevant and skilled resources tailored to the specific needs of your project.</p>
                            </div>
                            <div className="col-md-4 unleashing color04 ">
                                <img src="images/icon14.png" alt="On-Demand" className="img-fluid" /><br />
                                <h5>AI-Enhanced Project Planning</h5>
                                <p>Utilize AI to forecast project timelines and allocate resources with unparalleled accuracy, minimizing downtime and optimizing project momentum.</p>
                            </div>
                            <div className="col-md-4 unleashing color05 ">
                                <img src="images/icon15.png" alt="Versatile" className="img-fluid" /><br />
                                <h5>Risk Management</h5>
                                <p>AI algorithms proactively identify and mitigate potential risks, ensuring smooth project execution.</p>
                            </div>
                            <div className="col-md-4 unleashing color06 ">
                                <img src="images/icon16.png" alt="Future-Ready" className="img-fluid" /><br />
                                <h5>Visuals</h5>
                                <p>Need Flowchat</p>
                            </div>

                        </div>
                    </section>
                </div>

                <div className="demandSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">


                            </div>
                            <div className="col-md-4">
                                <h2>Custom Software Development</h2>
                                <p>Tailored Software Solutions Designed to Innovate and Transform</p>
                            </div>
                            <div className="col-md-8">
                                <ul className="demandInitiatives">
                                    <li>
                                        <span className="imgCont"><img src="images/icon03.png" alt=" Unmatched Quality" /></span>
                                        <h5>Bespoke Development</h5>
                                        <p>Create custom software solutions designed from the ground up, perfectly aligned to your operational needs and strategic goals.</p>
                                    </li>
                                    <li>
                                        <span className="imgCont"><img src="images/icon04.png" alt=" Immediate Impact" /></span>
                                        <h5>System Integration and Modernization</h5>
                                        <p>Integrate and modernize your systems with the latest technology frameworks to enhance functionality and business agility.</p>
                                    </li>
                                    <li>
                                        <span className="imgCont"><img src="images/icon05.png" alt="Comprehensive Solutions" /></span>
                                        <h5>Resource Availability</h5>
                                        <p>Leverage our AI-Powered Talent Cloud to quickly mobilize the most skilled developers and engineers who specialize in cutting-edge technologies and innovative software solutions.</p>
                                    </li>
                                    <li>
                                        <span className="imgCont"><img src="images/icon061.png" alt=" Immediate Impact" /></span>
                                        <h5>Requirements Analysis</h5>
                                        <p>AI tools provide deep insights into project requirements by analyzing vast data sets, ensuring that all aspects of the custom software align with your business objectives.</p>
                                    </li>
                                    <li>
                                        <span className="imgCont"><img src="images/icon071.png" alt="Comprehensive Solutions" /></span>
                                        <h5>Automated Testing and Quality Assurance</h5>
                                        <p>Employ AI-driven testing protocols that not only speed up the testing process but also enhance the detection of potential flaws or performance issues.</p>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </section>
                </div>



                {/* <!-- scalableSection section  --> */}
                <div className="assessingSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Why Partner with Us</h2>
                                <h4>Your Success Is Our Commitment</h4>
                            </div>
                            <div className="col-md-4">
                                <div className="assessingCont">
                                    <h5>Client-Centric Approach</h5>
                                    <img src="images/icon43.png" alt="Technical Competency" className="img-fluid" /><br />
                                    <p>Tailoring solutions to fit your specific business needs and objectives.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="assessingCont">
                                    <h5>Innovative AI Technology</h5>
                                    <img src="images/icon44.png" alt="Professional Experience" className="img-fluid" /><br />
                                    <p>Leveraging cutting-edge AI to deliver precision, efficiency, and customization.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="assessingCont">
                                    <h5>Proven Track Record</h5>
                                    <img src="images/icon45.png" alt="Cultural Fit" className="img-fluid" /><br />
                                    <p>Trusted by industry leaders and innovators worldwide.</p>
                                </div>
                            </div>
                            <div className="col-md-2">

                            </div>
                            <div className="col-md-4">
                                <div className="assessingCont">
                                    <h5>Commitment to Innovation</h5>
                                    <img src="images/icon46.png" alt="Certifications and Credentials" className="img-fluid" /><br />
                                    <p>Emphasize how AI not only enhances operational efficiency but also drives innovation, allowing your company to deliver cutting-edge solutions</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="assessingCont">
                                    <h5>Tailored AI Solutions</h5>
                                    <img src="images/icon47.png" alt="Background Check" className="img-fluid" /><br />
                                    <p>Highlight customization of AI technologies to meet specific client needs across various industries, enhancing solution relevance and impact.</p>
                                </div>
                            </div>
                            <div className="col-md-2">

                            </div>
                        </div>
                    </section>
                </div>





            </div>
            <FotterComponent />
        </div>
    )
}

export default ServiceOfferingsPage
