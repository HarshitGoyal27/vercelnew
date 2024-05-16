import FotterComponent from '@/components/molecules/Fotter'
import Navbar from '@/components/molecules/navbar'
import { dividerClasses } from '@mui/material'
import React, { useState } from 'react'

const SapEliteConsultingPage = () => {
    const [select,setSelect] = useState("imp");
    return (
        <div>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            <link href="css/fonts.css" rel="stylesheet" />
            <link href="css/reset.css" rel="stylesheet" />
            <link href="css/style.css" rel="stylesheet" />
            <link href="css/responsive.css" rel="stylesheet" />
            <div>
                <Navbar />
                <div className="wrapper serviceOffering">
                    {/* <!-- capabilitiesSection --> */}
                    <div className="capabilitiesSection">
                        <section className="container mt-4 ">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="homesapExpertise">
                                        <h2>SAP Consulting<br />Services</h2>
                                        <p>Transforming Enterprise Systems with AI-Driven Solutions</p>
                                        <div className="hireSap"><a className="hire" href="#">Book a Free Consultation</a><a className="hire" href="#">Learn
                                            More</a></div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="bannerImg">
                                        <img src="images/consulting-services01.jpg" alt="SAP Consulting Services" className="img-fluid" />

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="ventureSection">
                        <section className="container mt-4 ">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Revolutionize Your SAP Systems<br />with AI-Powered Expertise</h2>
                                    <h3>Where Tradition Meets Innovation</h3>
                                </div>
                                <div className="col-md-6">
                                    <div className="bannerImg">
                                        <img src="images/our-services01.jpg" alt="Next Venture" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="venturCont">

                                        <p>Unlock the full potential of your SAP systems with our AI-Powered Talent Cloud. Combining traditional
                                            SAP consulting expertise with advanced AI-driven insights, we provide enhanced precision in project
                                            execution, from planning and implementation to customization and support. Our approach ensures you not
                                            only keep pace with industry changes but stay ahead of them, harnessing the power of SAP to drive
                                            significant business transformations.</p>

                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>


                    <div className="transformSection ">
                        <section className="container mt-4 ">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <h2>Tailored SAP Services to Meet Your Strategic Needs</h2>
                                </div>
                            </div>
                            <div className="row transformCont">
                                <div className="col-md-4 transformHeadCont">
                                    <div className="transformHead">
                                        <ul>
                                            <li className={select==="imp"?"active":""} onClick={()=>setSelect("imp")}>
                                                <h5>SAP Implementation</h5>
                                            </li>
                                            <li className={select==="cus"?"active":""} onClick={()=>setSelect("cus")}>
                                                <h5>SAP Customization and Configuration</h5>
                                            </li>
                                            <li className={select==="int"?"active":""} onClick={()=>setSelect("int")}>
                                                <h5>SAP Integration</h5>
                                            </li>
                                            <li className={select==="up"?"active":""} onClick={()=>setSelect("up")}>
                                                <h5>SAP Upgrade and Migration</h5>
                                            </li>
                                            <li className={select==="tra"?"active":""} onClick={()=>setSelect("tra")}>
                                                <h5>SAP Training and Support</h5>
                                            </li>

                                        </ul>
                                    </div>

                                </div>
                                <div className="col-md-8 transformBodyCont ">
                                    <div className="transformBody">
                                        <ul>
                                            <li className={select==="imp"?"active":""}>
                                                <h3>SAP Implementation</h3>
                                                <p>Deploy the latest SAP solutions with confidence. Tailored implementation plans that align with your
                                                    business objectives.</p>
                                                <p><a href="#">Read More</a></p>
                                            </li>
                                            <li className={select==="cus"?"active":""}>
                                                <h3>SAP Customization and Configuration</h3>
                                                <p>Customize and configure SAP solutions to fit your business perfectly, enhancing functionality and
                                                    user experience.</p>
                                                <p><a href="#">Read More</a></p>
                                            </li>
                                            <li className={select==="int"?"active":""}>
                                                <h3>SAP Integration</h3>
                                                <p>Seamlessly integrate SAP with other systems and data sources to create a cohesive IT environment.
                                                </p>
                                                <p><a href="#">Read More</a></p>
                                            </li>
                                            <li className={select==="up"?"active":""}>
                                                <h3>SAP Upgrade and Migration</h3>
                                                <p>Ensure your SAP environments stay up-to-date with the latest features and enhancements.</p>
                                                <p><a href="#">Read More</a></p>
                                            </li>
                                            <li className={select==="tra"?"active":""}>
                                                <h3>SAP Training and Support</h3>
                                                <p>Equip your staff with the knowledge and skills they need to maximize the benefits of your SAP
                                                    investment.</p>
                                                <p><a href="#">Read More</a></p>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </section>
                    </div>

                    <div className="sixthSection advSapSection ">
                        <section className="container mt-4 ">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>Advanced AI Integration<br />in SAP Consulting</h2>
                                    <h4>Leveraging AI to Enhance Every Aspect of SAP Consulting</h4>
                                    <div className="Initiatives">

                                        <h5>Intelligent Resource Allocation</h5>
                                        <p>Use AI to match the best SAP professionals to your projects based on their expertise, experience, and
                                            past performance insights.</p>
                                    </div>
                                    <div className="Initiatives">

                                        <h5>Predictive Analytics</h5>
                                        <p>Apply AI tools to predict challenges and outcomes, allowing for proactive decision-making and strategy
                                            adjustments.</p>
                                    </div>
                                    <div className="Initiatives">

                                        <h5>Automated Processes</h5>
                                        <p>Streamline operations with AI-automated tasks, from data entry to complex system analyses, increasing
                                            efficiency and accuracy.</p>
                                    </div>
                                </div>

                                <div className="col-md-6 ">
                                    <div className="advSapImg"><img src="images/sapcons01.png" alt="SAP Consulting Services" className="img-fluid" />
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>

                    {/* <!-- scalableSection section  --> */}
                    <div className=" unleashingSection">
                        <section className="container mt-4 ">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Specialized SAP Solutions<br />Across Industries</h2>
                                    <h4>Industry-Specific Expertise for Tailored Results. <br />Each solution leverages our deep industry
                                        knowledge and <br />technological expertise to ensure you stay ahead in your field</h4>

                                </div>

                                <div className="col-md-3 unleashing color01 ">

                                    <h5>Manufacturing</h5>
                                    <p>Streamline production processes, enhance supply chain management, and improve efficiency through
                                        customized SAP manufacturing solutions.</p>
                                </div>
                                <div className="col-md-3 unleashing color02 ">

                                    <h5>Retail</h5>
                                    <p>Gain real-time insights into customer behavior, manage inventory more effectively, and enhance the
                                        shopping experience with SAP retail solutions.</p>
                                </div>
                                <div className="col-md-3 unleashing color03 ">

                                    <h5>Healthcare</h5>
                                    <p>Improve patient outcomes and optimize operations with SAP solutions that ensure compliance and enhance
                                        data management.</p>
                                </div>
                                <div className="col-md-3 unleashing color04 ">

                                    <h5>Finance: </h5>
                                    <p>Enhance financial reporting, risk management, and compliance with robust SAP financial solutions that
                                        provide deep insights and secure data handling.</p>
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
                                    <h2>Flexible Engagement Models to Suit Your Business</h2>
                                    <p>We offer a variety of engagement models to fit every business need and ensure flexibility in
                                        collaboration. Whether you’re looking to fully outsource your SAP operations or require expert consultants
                                        to manage specific projects, we have a model to support your goals</p>
                                </div>
                                <div className="col-md-8">
                                    <ul className="demandInitiatives">
                                        <li>
                                            <span className="imgCont"><img src="images/icon03.png" alt=" Unmatched Quality" /></span>
                                            <h5>Project-Based Delivery</h5>
                                            <p>Ideal for specific, time-bound projects requiring specialized SAP expertise.</p>
                                        </li>
                                        <li>
                                            <span className="imgCont"><img src="images/icon04.png" alt=" Immediate Impact" /></span>
                                            <h5>Managed SAP Services</h5>
                                            <p>Outsource your SAP operations to us and focus on your core business activities. We manage everything
                                                from system maintenance to complete SAP upgrades.</p>
                                        </li>
                                        <li>
                                            <span className="imgCont"><img src="images/icon05.png" alt="Comprehensive Solutions" /></span>
                                            <h5>Complete Outsourcing</h5>
                                            <p>Let us handle all your SAP needs, including system implementation, customization, and ongoing
                                                support, freeing up your internal resources for strategic tasks.</p>
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </section>
                    </div>

                    <div className="assessingSection">
                        <section className="container mt-4 ">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Why Partner with Us <br />for SAP Consulting?</h2>
                                    <h4>Experience Meets Innovation</h4>
                                </div>
                                <div className="col-md-4">
                                    <div className="assessingCont">
                                        <h5>Experienced Consultants</h5>
                                        <img src="images/icon43.png" alt="Technical Competency" className="img-fluid" /><br />
                                        <p>Our team consists of certified SAP experts with extensive real-world experience across various
                                            industries.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="assessingCont">
                                        <h5>AI-Enhanced Processes</h5>
                                        <img src="images/icon44.png" alt="Professional Experience" className="img-fluid" /><br />
                                        <p>Leverage our AI-Powered Talent Cloud for more accurate project scoping, faster consultant matching, and
                                            enhanced risk management.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="assessingCont">
                                        <h5>Proven Track Record</h5>
                                        <img src="images/icon45.png" alt="Cultural Fit" className="img-fluid" /><br />
                                        <p>Highlight success stories and testimonials from satisfied clients who have transformed their operations
                                            with our SAP consulting services.</p>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>

                    <div className="empowerSection specializedCont">
                        <section className="container mt-4 ">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Ready to Transform Your <br />SAP Landscape?</h2>
                                    <h4>Contact Us Today to Get Started</h4>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-4">
                                    <div className="preBoxExplore">
                                        <h5>Personalized Consultation</h5>
                                        <img src="images/mvp-icon-global-partner-1.png" alt="MVP Development" className="img-fluid" />
                                        <p>Reach out to us with your SAP challenges and objectives. Our team is ready to listen, understand, and
                                            propose solutions that align with your business goals.</p>

                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="preBoxExplore">
                                        <h5>Expert Guidance</h5>
                                        <img src="images/technology-migration-home-icon.png" alt="Technology Migration" className="img-fluid" />
                                        <p>With years of industry experience and a deep understanding of SAP systems, we offer guidance that
                                            simplifies complex processes and maximizes your SAP investment.</p>

                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="preBoxExplore">
                                        <h5>Flexible Engagement</h5>
                                        <img src="images/product-advisory-icon-home.png" alt="Product Advisory" className="img-fluid" />
                                        <p>From full-scale implementations to targeted optimizations, we tailor our approach to meet your specific
                                            needs. Let us know how we can assist you, and we will configure the best engagement model for your
                                            project.</p>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <FotterComponent/>
            </div>
        </div>
    )
}

export default SapEliteConsultingPage
