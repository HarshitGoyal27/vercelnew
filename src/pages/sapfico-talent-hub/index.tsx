import FotterComponent from "@/components/molecules/Fotter";
import Navbar from "@/components/molecules/navbar";
import { useState } from "react";

const SapficoTalentHubPage = () => {
    const [muduleSelect, setModuleSelect] = useState("SAPModules");
    const [selected, setSelected] = useState("AI-Vetted");
    return (

        <div>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="css/fonts.css" rel="stylesheet"/>
  <link href="css/reset.css" rel="stylesheet"/>
  <link href="css/style.css" rel="stylesheet"/>
  <link href="css/responsive.css" rel="stylesheet"/>
            <Navbar />
            <div className="wrapper sapfico">
                {/* <!-- welcome Section  --> */}
                <div className="aboutusSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Welcome to the SAP FICO Talent Hub</h2>
                                <p className="welcomeText">Your Central Resource for SAP Financials and Controlling Expertise</p>

                            </div>
                        </div>
                    </section>
                </div>

                {/* <!-- mission Section  --> */}
                <div className="missionSection">
                    <section className="container mt-4 ">
                        <div className="row">

                            <div className="col-md-4">
                                <div className="missionSectionText">
                                    <span className="missionImg"><img src="images/icon23.png" alt="About Us" /> </span>
                                    <h3>About Us</h3>
                                    <p>Learn about the purpose and mission of the SAP FICO Talent Hub, highlighting our commitment to providing valuable resources and expertise in the SAP FICO domain.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="missionSectionText">
                                    <span className="missionImg"><img src="images/icon24.png" alt="Why Choose Us" /> </span>
                                    <h3>Why Choose Us</h3>
                                    <p>Explore the unique features and benefits of the SAP FICO Talent Hub, including our extensive talent pool, industry expertise, and customer-centric approach.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="missionSectionText">
                                    <span className="missionImg"><img src="images/icon25.png" alt="How It Works" /> </span>
                                    <h3>How It Works</h3>
                                    <p>Understand the process of engaging with the SAP FICO Talent Hub, from exploring talent profiles to project matchmaking and deployment.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* <!-- empowerSection  --> */}
                <div className="empowerSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Exploring the SAP FICO Landscape</h2>
                                <h4>Modules, Solutions, and Best Practices</h4>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-4">
                                <div className="preBoxExplore">
                                    <h5>Overview of SAP FICO</h5>
                                    <img src="images/icon26.png" alt="Overview of SAP FICO" />
                                    <p>Dive into the foundational concepts of SAP Financial Accounting and Controlling, including key modules, solutions, and integration points.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="preBoxExplore">
                                    <h5>Implementation Methodologies</h5>
                                    <img src="images/icon27.png" alt="mplementation Methodologies" />
                                    <p>Explore common methodologies for SAP FICO implementation, such as SAP Activate, ASAP, and Agile, highlighting their key features and benefits.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="preBoxExplore">
                                    <h5>Best Practices</h5>
                                    <img src="images/icon28.png" alt="Best Practices" />
                                    <p>Discover industry best practices for SAP FICO projects, including requirements gathering, configuration, testing, and post-implementation support.</p>

                                </div>
                            </div>

                        </div>
                    </section>
                </div>


                {/* <!-- demandSection  --> */}
                <div className="demandSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">


                            </div>
                            <div className="col-md-4">
                                <h2>Unveiling SAP FICO Talent Expertise</h2>
                                <p>Key Skills, Roles, and Industry Insights</p>
                            </div>
                            <div className="col-md-8">
                                <ul className="demandInitiatives">
                                    <li>
                                        <span className="imgCont"><img src="images/icon03.png" alt=" Unmatched Quality" /></span>
                                        <h5>Key Skills and Roles</h5>
                                        <p>Explore the essential skills and roles within the SAP FICO domain, including functional consultants, technical developers, project managers, and solution architects.</p>
                                    </li>
                                    <li>
                                        <span className="imgCont"><img src="images/icon04.png" alt=" Immediate Impact" /></span>
                                        <h5>Project Type and Stages</h5>
                                        <p>Industry Insights: Gain valuable insights into industry trends, challenges, and opportunities shaping the SAP FICO landscape, supported by real-world examples and case studies.</p>
                                    </li>
                                    <li>
                                        <span className="imgCont"><img src="images/icon05.png" alt="Comprehensive Solutions" /></span>
                                        <h5>Professional Development</h5>
                                        <p>Learn about professional development opportunities for SAP FICO professionals, including certifications, training programs, and career advancement paths.</p>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </section>
                </div>



                <div className="sapProjectCont">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-4 sapProjectTextCont ">
                                <h4>Talent Profiles</h4>
                                <p >Explore profiles of certified SAP FICO professionals within our talent pool, showcasing their expertise, experience, and project successes.</p>

                            </div>
                            <div className="col-md-4 sapProjectHead">
                                <h2>Meet Our SAP FICO Talent Pool</h2>
                                <h3>Quality-Assured Professionals for Your Projects</h3>
                            </div>
                            <div className="col-md-4 sapProjectTextCont">
                                <h4>Vetting Process</h4>
                                <p >Understand our rigorous vetting process for SAP FICO talent, ensuring the quality and reliability of professionals available for project deployment.</p>
                            </div>
                            <div className="col-md-6 sapProjectTextCont morepadding">
                                <h4>Client Testimonials</h4>
                                <p>Hear from satisfied clients who have benefited from the expertise of our SAP FICO professionals, highlighting successful project outcomes and value delivered.</p>
                            </div>
                            <div className="col-md-6 sapProjectTextCont morepadding">
                                <h4>Global Reach</h4>
                                <p >Discover how our SAP FICO talent pool spans across regions and industries, providing clients with access to diverse expertise and local market insights.</p>
                            </div>

                        </div>
                    </section>
                </div>


                {/* <!-- scalableSection section  --> */}
                <div className="sixthSection scalableSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Empowering SAP FICO Professionals</h2>
                                <h4>Training, Certifications, and Real-World Applications</h4>

                            </div>

                            <div className="col-md-4 Initiatives">
                                <img src="images/icon29.png" alt="Training and Certifications" className="img-fluid" /><br />
                                <h5>Training and Certifications</h5>
                                <p>Access resources and programs designed to enhance SAP FICO skills and knowledge, including certification paths, training courses, and learning materials.</p>
                            </div>
                            <div className="col-md-4 Initiatives">
                                <img src="images/icon30.png" alt="Real-World Applications" className="img-fluid" /><br />
                                <h5>Real-World Applications</h5>
                                <p>Explore case studies, success stories, and industry-specific use cases demonstrating the practical applications of SAP FICO solutions in diverse business environments.</p>
                            </div>
                            <div className="col-md-4 Initiatives">
                                <img src="images/icon31.png" alt="Knowledge Center" className="img-fluid" /><br />
                                <h5>Knowledge Center</h5>
                                <p>Access a comprehensive knowledge center with articles, whitepapers, and thought leadership content on SAP FICO trends, best practices, and innovations.</p>
                            </div>

                        </div>
                    </section>
                </div>


                {/* <!-- mission Section  --> */}
                <div className="missionSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Innovating with SAP FICO</h2>
                                <h4>Trends, Strategies, and Success Stories</h4>
                            </div>
                            <div className="col-md-3 aprtSectionText color01">
                                <div className="">
                                    <h3>Emerging Trends</h3>
                                    <p>Stay informed about the latest trends and innovations in SAP FICO, including intelligent automation, machine learning, and predictive analytics, and their implications for business transformation.</p>
                                </div>
                            </div>
                            <div className="col-md-3 aprtSectionText color02">
                                <div className="">
                                    <h3>Optimization Strategies</h3>
                                    <p>Discover strategies and best practices for optimizing SAP FICO performance, improving efficiency, and driving continuous improvement across financial processes.</p>
                                </div>
                            </div>
                            <div className="col-md-3 aprtSectionText color04">
                                <div className="">
                                    <h3>Success Stories</h3>
                                    <p>Learn from real-world success stories of organizations that have leveraged SAP FICO innovations to achieve business objectives, reduce costs, and enhance decision-making capabilities.</p>
                                </div>
                            </div>
                            <div className="col-md-3 aprtSectionText color05">
                                <div className="">
                                    <h3>Future Outlook</h3>
                                    <p>Explore the future outlook of SAP FICO, including upcoming technologies, market trends, and opportunities for growth and innovation.</p>
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

export default SapficoTalentHubPage;
