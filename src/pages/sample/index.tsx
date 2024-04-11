import Image from 'next/image'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import css from "../../styles/sample.module.css";

import Head from 'next/head';
const Sample = () => {
    return (
        <div>
            {/* <Head>
                <link href="css/fonts.css" rel="stylesheet" />
                <link href="css/reset.css" rel="stylesheet" />
                <link href="css/style.css" rel="stylesheet" />
            </Head>
            <header className="navbar navbar-expand-lg navbar-light ">
                <div className="container">

                    <a className="navbar-brand" href="#">
                        <Image src="/images/SkillsCapitalLogo.png" alt="Logo" height={50} width={150} />
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Hire Developers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Vetting</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">select service mode</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="wrapper">

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
                                <div className="bannerImage">
                                    <Image src="/images/banner02.png" alt=" SAP Expertise" className="Image-fluid" width={350} height={300} />

                                </div>
                            </div>
                        </div>
                    </section>
                </div>

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
                                <div className="keyImage">
                                    <Image src="/images/about5.png" alt=" SAP Expertise" className="Image-fluid" width={350} height={300} />

                                </div>
                            </div>
                        </div>
                    </section>
                </div>


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
                                    <Image src="/images/icon01.png" alt=" Project Type Specialization" width={50} height={50} />
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
                                    <Image src="/images/icon02.png" alt=" Role Type Expertise" width={50} height={50} />
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

                <div className="fifthSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="sapProjects" >
                                    <h2>Elevate Your SAP Projects with Industry-Specific Talent</h2>
                                    <h3>Unleashing the Power of SAP Specialists Tailored to Your Industry</h3>
                                    <ul>
                                        <li>
                                            <h4 data-toggle="collapse" data-target="#toggleDiv1" aria-controls="toggleDiv">Diverse Industry Focus<span className="arrow-icon"></span></h4>
                                            <div className="collapse sapProjectsText" id="toggleDiv1">Our SAP talent pool boasts experts with extensive experience across various industries, including manufacturing, healthcare, finance, retail, and more. Whatever your industry, we have the specialized expertise to drive your SAP projects forward.</div>
                                        </li>
                                        <li>
                                            <h4 data-toggle="collapse" data-target="#toggleDiv2" aria-controls="toggleDiv">Vertical Specializations<span className="arrow-icon"></span></h4>
                                            <div className="collapse sapProjectsText" id="toggleDiv2"> Within each industry, we have SAP professionals specializing in key verticals and sub-sectors, ensuring that you work with experts who have a comprehensive understanding of your industry&apos;s nuances and best practices.</div>
                                        </li>
                                        <li>
                                            <h4 data-toggle="collapse" data-target="#toggleDiv3" aria-controls="toggleDiv">Industry Insights<span className="arrow-icon"></span></h4>
                                            <div className="collapse sapProjectsText" id="toggleDiv3">Gain access to professionals who understand the unique challenges and opportunities within your industry. Our experts bring valuable insights and best practices to the table, ensuring your SAP solutions are aligned with industry standards and requirements.</div>
                                        </li>
                                        <li>
                                            <h4 data-toggle="collapse" data-target="#toggleDiv4" aria-controls="toggleDiv">Customized Solutions<span className="arrow-icon"></span></h4>
                                            <div className="collapse sapProjectsText" id="toggleDiv4">We tailor our SAP talent solutions to address the specific needs and nuances of your industry. Whether you require compliance expertise, industry-specific modules, or sector-specific optimizations, we deliver customized solutions that add value to your business.</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="bannerImage">
                                    <Image src="/images/banner03.png" alt=" SAP Projects" className="Image-fluid" width={370} height={550} />

                                </div>
                            </div>
                        </div>
                    </section>
                </div>


                <div className="sixthSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Accelerate Your SAP Initiatives<br />with Data-Driven Insights</h2>
                                <h4>Quantifying the Impact of Our SAP Talent Pool on Project Success</h4>

                            </div>
                            <div className="col-md-5">
                                <div className="keyImage">
                                    <Image src="/images/about5.png" alt=" SAP Expertise" className="Image-fluid" width={390} height={320} />

                                </div>
                            </div>
                            <div className="col-md-7">
                                <ul className="Initiatives">
                                    <li>
                                        <h5>10X Faster Deployment</h5>
                                        <p>Experience rapid project kick-off with our swift deployment process, accelerating your time-to-market and ROI.</p>
                                    </li>
                                    <li>
                                        <h5>95% Precision Match</h5>
                                        <p>Achieve unparalleled accuracy in talent selection with our precise matching algorithm, ensuring optimal resource allocation for your projects.</p>
                                    </li>
                                    <li>
                                        <h5>24/7 Access to Expertise</h5>
                                        <p>Seamlessly access our SAP talent pool round-the-clock, enabling you to address project needs promptly and efficiently.</p>
                                    </li>
                                    <li>
                                        <h5>4-Hour Turnaround Time</h5>
                                        <p>Respond swiftly to project requirements with our quick turnaround time, ensuring agility and responsiveness in resource allocation.</p>
                                    </li>
                                    <li>
                                        <h5>100% Satisfaction Guarantee</h5>
                                        <p>Rest assured of project success with our unwavering commitment to delivering high-quality, client-centric solutions that exceed expectations.</p>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </section>
                </div>
            </div> */}
        </div>
    )
}

export default Sample
