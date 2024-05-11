import FotterComponent from '@/components/molecules/Fotter'
import Navbar from '@/components/molecules/navbar'
import React from 'react'

const SapPortalHubPage = () => {
    return (
        <div>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            <link href="css/fonts.css" rel="stylesheet" />
            <link href="css/reset.css" rel="stylesheet" />
            <link href="css/style.css" rel="stylesheet" />
            <link href="css/responsive.css" rel="stylesheet" />
            <div>
                <Navbar />

                <div className="capabilitiesSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="homesapExpertise">
                                    <h2>Empowering Your <span>SAP Journey</span></h2>
                                    <h3> Explore, Learn, and Transform with Our Comprehensive SAP Resources</h3>
                                    <p>Welcome to the SAP Portal Hub, your ultimate destination for all things SAP. Whether you&apos;re
                                        new to SAP or looking to enhance your existing systems, our hub offers tailored resources
                                        across a range of SAP functionalities and industries</p>

                                    {/* <!-- <div className="hireSap"><a className="hire" href"#">Search SAP Talent</a><a className="hire" href"#">Explore Talent Pool</a></div> --> */}

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
                <div className="discoverSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Discover the Depth and Diversity of Expertise<br />in Our SAP Talent Community</h2>
                                <h4>We&apos;ve curated a premier SAP talent pool comprising top-tier professionals with diverse skills
                                    and expertise.<br />Explore the wealth of talent waiting to elevate your SAP initiatives to new
                                    heights of success.</h4>
                            </div>
                            <div className="col-md-3   ">
                                <div className="discoverCont">
                                    <h5>Exertise in<br />SAP Solutions</h5>
                                    <ul>
                                        <li>SAP S/4HANA</li>
                                        <li>SAP ECC6</li>
                                        <li>SAP Business One</li>
                                        <li>SAP SuccessFactors</li>
                                        <li>SAP Ariba</li>
                                        <li>SAP CRM</li>
                                        <li>SAP Analytics Cloud</li>
                                        <li>SAP BW/4HANA</li>

                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3   ">
                                <div className="discoverCont">
                                    <h5>Proficiency in<br />Technology Stack</h5>
                                    <ul>
                                        <li>SAP ABAP</li>
                                        <li>SAP Basis</li>
                                        <li>SAP HANA</li>
                                        <li>SAP Fiori/UI5</li>
                                        <li>SAP BW/BI</li>
                                        <li>SAP NetWeaver</li>
                                        <li>SAP Cloud Platform</li>
                                        <li>SAP Integration (PI/PO)</li>

                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 discoverCont  ">
                                <div className="discoverCont">
                                    <h5>Competence in<br />Functional Modules</h5>
                                    <ul>
                                        <li>SAP S/SAP FI/CO</li>
                                        <li>SAP TM</li>
                                        <li>SAP MM</li>
                                        <li>SAP SD</li>
                                        <li>SAP PP/PS</li>
                                        <li>SAP EWM</li>
                                        <li>SAP GTS</li>
                                        <li>SAP HCM</li>

                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 discoverCont  ">
                                <div className="discoverCont">
                                    <h5>Knowledge in<br />Industry Domains</h5>
                                    <ul>
                                        <li>Manufacturing</li>
                                        <li>Healthcare</li>
                                        <li>inancial Services</li>
                                        <li>Telecommunications</li>
                                        <li>Utilities</li>
                                        <li>Public Sector</li>
                                        <li>Automotive</li>
                                        <li>Pharmaceuticals</li>

                                    </ul>
                                </div>
                            </div>


                        </div>
                    </section>
                </div>
                <div className="specializedSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Master <span>SAP</span> Functional Modules</h2>

                                <h4>Dive Deep into Core SAP Functionalities to Drive Business Efficiency</h4>
                            </div>
                        </div>
                        <div className="row mt-4 ">
                            <div className="col-md-4">
                                <div className="boxExcellence">

                                    <h5>SAP FI (Financial Accounting)</h5>
                                    <img src="images/finance.png" alt="Cloud & DevOps Excellence" className="img-fluid" />
                                        {/* <!-- <span className="number">6400+</span>  --> */}
                                        <p>Explore tools for financial reporting and management.</p>
                                        {/* <!-- <div><a href="">Explore Now</a> </div>     --> */}

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="boxExcellence">

                                    <h5>SAP SD (Sales And Distribution)</h5>
                                    <img src="images/Sales.jpg" alt="Legacy Modernization Specialists" className="img-fluid"/>
                                        {/* <!-- <span className="number">4600+</span>  --> */}
                                        <p>Enhance sales order processing and distribution.</p>
                                        {/* <!-- <a href="">Explore Now</a>    --> */}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="boxExcellence">

                                    <h5>SAP MM (Materials Management)</h5>
                                    <img src="images/material.png" alt="I/ML/LLM Powered Innovators" className="img-fluid"/>
                                        {/* <!-- <span className="number">400+</span>  --> */}
                                        <p>Streamline procurement and inventory operations.</p>
                                        {/* <!-- <a href="">Explore Now</a>   --> */}
                                </div>
                            </div>

                        </div>
                    </section>
                </div>

                <div className="assessingSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Strengthen Your<br /> SAP Foundation</h2>
                                <h4>Enhance Security, Performance, and Compliance Across Your SAP Systems</h4>
                            </div>
                            <div className="col-md-4">
                                <div className="assessingCont">
                                    <h5>SAP Security Suite</h5>
                                    {/* <!-- <img src="images/icon43.png" alt="Technical Competency" className="img-fluid"><br /> --> */}
                                        <p>Safeguard your SAP data and processes.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="assessingCont">
                                    <h5>SAP Performance Portal</h5>
                                    {/* <!-- <img src="images/icon44.png" alt="Technical Competency" className="img-fluid"><br /> --> */}
                                        <p>Optimize system performance and scalability.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="assessingCont">
                                    <h5>SAP Management Pavilion</h5>
                                    {/* <!-- <img src="images/icon45.png" alt="Technical Competency" className="img-fluid"><br /> --> */}
                                        <p>Ensure smooth operation and administration.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="assessingCont">
                                    <h5>SAP Infrastructure Studio</h5>
                                    {/* <!-- <img src="images/icon46.png" alt="Technical Competency" className="img-fluid"><br /> --> */}
                                        <p>Build robust SAP infrastructure.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="assessingCont">
                                    <h5>SAP Compliance Vault</h5>
                                    {/* <!-- <img src="images/icon47.png" alt="Technical Competency" className="img-fluid"><br /> --> */}
                                        <p>Meet regulatory requirements and maintain compliance.</p>
                                </div>
                            </div>
                            {/* <!-- <div className="col-md-4">
                                <div className="assessingCont">
                                    <h5>Soft Skills Assessment</h5>
                                    <img src="images/icon48.png" alt="Technical Competency" className="img-fluid"><br />
                                        <p>Evaluation of communication, teamwork, and adaptability.</p>
                                </div>
                            </div> --> */}
                        </div>
                    </section>
                </div>
                <div className="sixthSection scalableSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Industry-Specific SAP Expertise</h2>
                                <h4>Custom SAP Solutions to Meet Unique Industry Demands</h4>

                            </div>

                            <div className="col-md-4 Initiatives">
                                <img src="images/icon08.png" alt="Agile Team Composition" className="img-fluid"/><br />
                                    <h5>SAP for Retail</h5>
                                    <p>Optimize retail processes from supply chain to customer experience.</p>
                            </div>
                            <div className="col-md-4 Initiatives">
                                <img src="images/icon091.png" alt="On-Demand Expertise" className="img-fluid"/><br />
                                    <h5>SAP for Manufacturing</h5>
                                    <p>Streamline production and increase efficiency.</p>
                            </div>
                            <div className="col-md-4 Initiatives">
                                <img src="images/icon101.png" alt="Customized Solutions" className="img-fluid"/><br />
                                    <h5>SAP for Healthcare</h5>
                                    <p>Enhance patient care with integrated solutions.</p>
                            </div>

                        </div>
                    </section>
                </div>
                <div className="missionSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Innovative SAP Solutions Tailored for Your Business</h2>
                                <div style={{textAlign:"center"}}>
                                    <h3>Harness Cutting-Edge SAP Technologies and Services</h3>
                                </div>
                                <br />
                            </div>
                            <div className="col-md-3 aprtSectionText color01">
                                <div className="">
                                    <h3>SAP HANA Center</h3>
                                    <p>Leverage real-time analytics and insights.</p>
                                </div>
                            </div>
                            <div className="col-md-3 aprtSectionText color02">
                                <div className="">
                                    <h3>SAP S/4HANA Transformation</h3>
                                    <p>Simplify and upgrade your enterprise management.</p>
                                </div>
                            </div>
                            <div className="col-md-3 aprtSectionText color04">
                                <div className="">
                                    <h3>SAP Cloud Solutions</h3>
                                    <p>Adopt cloud-based solutions for flexibility and efficiency.</p>
                                </div>
                            </div>
                            <div className="col-md-3 aprtSectionText color05">
                                <div className="">
                                    <h3>SAP IoT Integration</h3>
                                    <p>Integrate IoT with SAP for enhanced data-driven decisions.</p>
                                </div>
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
                                        <h3>SAP Strategic Consulting</h3>
                                        <p>Visionary approaches for SAP implementation and digitization.</p>

                                </div>
                            </div>
                            <div className="col-md-6  ">
                                <div className="solutionText">
                                    <img src="images/sol021.png" alt="Skill Development and Enhancement"/>
                                        <h3>SAP Implementation Services</h3>
                                        <p>Comprehensive support from setup to go-live.</p>

                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6  ">
                                <div className="solutionText">
                                    <img src="images/soultionimg011.png" alt="Talent Matching and Connection"/>
                                        <h3>SAP Optimization and Enhancement</h3>
                                        <p>Extend functionality and improve performance.</p>

                                </div>
                            </div>
                            <div className="col-md-6  ">
                                <div className="solutionText">
                                    <img src="images/sol021.png" alt="Skill Development and Enhancement"/>
                                        <h3>SAP Training and Enablement</h3>
                                        <p>Empower your team with expert SAP knowledge.</p>

                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6  ">
                                <div className="solutionText">
                                    <img src="images/soultionimg011.png" alt="Talent Matching and Connection"/>
                                        <h3>SAP Support and Maintenance</h3>
                                        <p>Ensure continuous system reliability and effectiveness.</p>

                                </div>
                            </div>
                        </div>

                    </section>

                </div>
                <div className=" unleashingSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Ready to Transform Your<br /> Business with SAP?</h2>
                                <h4>Let&apos;s Make It Happen Together</h4>

                            </div>

                            <div className="col-md-4 unleashing color01 ">
                                <img src="images/icon11.png" alt="AI-Vetted" className="img-fluid"/><br />
                                    <h5>Engage with Experts</h5>
                                    <p>Connect with our seasoned SAP consultants who can provide personalized advice and strategies tailored to your business needs.</p>
                            </div>
                            <div className="col-md-4 unleashing color02 ">
                                <img src="images/icon12.png" alt="Certified" className="img-fluid"/><br />
                                    <h5>Enhance Your Skills</h5>
                                    <p>Sign up for our comprehensive training programs to stay ahead in the fast-evolving world of SAP technologies.</p>
                            </div>
                            <div className="col-md-4 unleashing color03 ">
                                <img src="images/icon13.png" alt="Accomplished" className="img-fluid"/><br />
                                    <h5>Explore New Solutions</h5>
                                    <p>Discover how our latest SAP innovations can streamline your operations and drive business growth.</p>
                            </div>
                            <div className="col-md-4 unleashing color04 ">
                                <img src="images/icon14.png" alt="On-Demand" className="img-fluid"/><br />
                                    <h5>Subscribe for Updates</h5>
                                    <p>Stay informed about new insights and opportunities in the world of SAP.
                                    </p>
                            </div>
                            <div className="col-md-4 unleashing color05 ">
                                <img src="images/icon15.png" alt="Versatile" className="img-fluid"/><br />
                                    <h5>Contact Us Today</h5>
                                    <p>Reach out to discuss how we can support your SAP projects and initiatives.</p>
                            </div>
                            <div className="col-md-4 unleashing color06 ">
                                <img src="images/icon16.png" alt="Future-Ready" className="img-fluid"/><br />
                                    <h5>Schedule a Consultation</h5>
                                    <p>Book a personalized session to dive deeper into your specific SAP needs.</p>
                            </div>

                        </div>
                    </section>
                </div>

                <div className="superchargeSection precisionSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="">
                                    <h2>Leverage Our Global Network of <span>SAP Experts</span></h2>
                                    <h3>Connecting You with the Talent You Need to Succeed</h3>

                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="superchargeCont">
                                    {/* <!-- <span className="number">AI</span> --> */}
                                    <div className="superchargeHeading superchargeHeading1  ">3,000+ SAP Consultants</div>
                                    <div className="superchargeText">From strategic planners to hands-on implementers, our diverse consultants are ready to assist.
                                        Certified Professionals Across All Major SAP Modules: 85% of our consultants are certified in modules like SAP FI, CO, SD, and HCM.
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="superchargeCont">
                                    {/* <!-- <span className="number">EI</span> --> */}
                                    <div className="superchargeHeading superchargeHeading2 ">Global Reach, Local Expertise</div>
                                    <div className="superchargeText">With experts in over 50 countries, we deliver localized insights with global best practices.
                                        Proven Track Record: Our consultants have collectively completed over 1,000 successful SAP projects, driving transformation in numerous industries.</div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="superchargeCont">
                                    {/* <!-- <span className="number">HI</span> --> */}
                                    <div className="superchargeHeading superchargeHeading3 ">Continual Learning</div>
                                    <div className="superchargeText">Over 200 hours of annual training per consultant to stay ahead of the latest SAP developments and techniques.</div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="superchargeCont">
                                    {/* <!-- <span className="number">HI</span> --> */}
                                    <div className="superchargeHeading superchargeHeading3 ">Discover Our Talent</div>
                                    <div className="superchargeText">Dive into our consultant profiles to find the right expertise for your project.</div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="superchargeCont">
                                    {/* <!-- <span className="number">AI</span> --> */}
                                    <div className="superchargeHeading superchargeHeading1  ">Join Our Community</div>
                                    <div className="superchargeText">If you’re an SAP professional looking to take your career to the next level, connect with us today.
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>

                <FotterComponent />
            </div>
        </div>
    )
}

export default SapPortalHubPage
