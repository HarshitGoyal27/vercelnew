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
                                    <img src="images/sapficos.jpg" style={{ borderRadius: "5px" }} alt="ELEVATE YOUR TECH CAPABILITIES" className="img-fluid" />

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="wrapper hjd">
                <div className="JobDescriptionSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="jobDescCont">
                                    <h2>Job description</h2>
                                    <h3>Job responsibilities</h3>
                                    <ul>
                                        {/* <li>{page_data?.Roles[0].slice(3)}</li>
                    <li>{page_data?.Roles[1].slice(3)}</li>
                    <li>{page_data?.Roles[2].slice(3)}</li>
                    <li>{page_data?.Roles[3].slice(3)}</li>
                    <li>{page_data?.Roles[4].slice(3)}</li> */}
                                        <li>Enhance applications performance, speed, and scalability</li>
                                        <li>Perform code analysis, requirements analysis, and software reliability analysis</li>
                                        <li>Coordinate with UI/UX designers to ensure technical feasibility</li>
                                        <li>Collaborate with other team members and stakeholders</li>

                                    </ul>
                                    <h3>Minimum requirements</h3>
                                    <ul>
                                        {/* <li>{page_data?.Requirements[0].slice(3)}</li>
                    <li>{page_data?.Requirements[1].slice(3)}</li>
                    <li>{page_data?.Requirements[2].slice(3)}</li>
                    <li>{page_data?.Requirements[3].slice(3)}</li>
                    <li>{page_data?.Requirements[4].slice(3)}</li> */}
                                        <li>Bachelor’s/Master’s degree in Computer Science (or equivalent experience)</li>
                                        <li>3+ years of experience as a JavaScript Developer (rare exceptions for highly skilled developers)</li>
                                        <li>Experience with other JS libraries like Backbone.js, Angular.js, Node.js, and other frameworks</li>
                                        <li>Familiar with web development tools, Git, jQuery, and Bootstrap</li>
                                        <li>Familiar with JavaScript module loaders, such as Require.js and AMD</li>
                                        <li>Proficient with HTML5 and CSS3</li>
                                    </ul>
                                    <h3>Preferred skills</h3>
                                    <ul>
                                        {/* <li>{page_data?.Preferred_Skills[0].slice(3)}</li>
                    <li>{page_data?.Preferred_Skills[1].slice(3)}</li>
                    <li>{page_data?.Preferred_Skills[2].slice(3)}</li>
                    <li>{page_data?.Preferred_Skills[3].slice(3)}</li>
                    <li>{page_data?.Preferred_Skills[4].slice(3)}</li> */}
                                        <li>Experience with asynchronous request handling, partial page updates, and AJAX</li>
                                        <li>Familiar with browser rendering behavior and performance</li>
                                        <li>Experience with responsive designs for desktop/mobile</li>
                                        <li>Ability to function individually and in a team</li>
                                        <li>In-depth understanding of the entire web development process</li>

                                    </ul>
                                    <div className="jobDescCtaBtnFrame">
                                        <div className="jobDescCtaCont">
                                            <h5>Interested in this job?</h5>
                                            <p>Apply to Turing today.</p>
                                        </div>
                                        <a href="#">Apply now</a>

                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div className="jobDescRight">
                                    {/* <Slider {...setting} className=" jobDescSlider ">
                    <div className="slide ">
                      <div className="slideCont">
                        <div className="imgCont"><img src="/images/avatar1.png" alt="avatar" className="img-fluid" /></div>
                        <h4>Ermal Kosovo</h4>
                        <h5>JavaScript developer </h5>
                        <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                      </div>
                    </div>
                    <div className="slide ">
                      <div className="slideCont">
                        <div className="imgCont"><img src="/images/avatar1.png" alt="avatar" className="img-fluid" /></div>
                        <h4>Ermal Kosovo</h4>
                        <h5>JavaScript developer </h5>
                        <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                      </div>
                    </div>
                    <div className="slide ">
                      <div className="slideCont">
                        <div className="imgCont"><img src="/images/avatar1.png" alt="avatar" className="img-fluid" /></div>
                        <h4>Ermal Kosovo</h4>
                        <h5>JavaScript developer </h5>
                        <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                      </div>
                    </div>
                  </Slider> */}

                                    <div className="rightBottom">
                                        <div className="baseSection">
                                            <h4>Based on your skills</h4>
                                            <ul className="skillList">
                                                <li>
                                                    <a href="#"> <img src="/images/skill-icon01.png" alt="Angular" /><span>Angular</span></a>
                                                </li>
                                                <li>
                                                    <a href="#"> <img src="/images/skill-icon01.png" alt="Angular" /><span>React Native</span></a>
                                                </li>
                                                <li>
                                                    <a href="#"> <img src="/images/skill-icon01.png" alt="Angular" /><span>HTML</span></a>
                                                </li>
                                                <li>
                                                    <a href="#"> <img src="/images/skill-icon01.png" alt="Angular" /><span>React/Node</span></a>
                                                </li>
                                                <li>
                                                    <a href="#"> <img src="/images/skill-icon01.png" alt="Angular" /><span>Bootstrap</span></a>
                                                </li>
                                                <li>
                                                    <a href="#"> <img src="/images/skill-icon01.png" alt="Angular" /><span>Angular/Node</span></a>
                                                </li>
                                                <li>
                                                    <a href="#"> <img src="/images/skill-icon01.png" alt="Angular" /><span>Angular/Node</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="baseSection">
                                            <h4>Based on your role</h4>
                                            <ul className="skillList">
                                                <li>
                                                    <a href="#"> <img src="/images/skill-icon01.png" alt="Angular" /><span>Mobile </span></a>
                                                </li>
                                                <li>
                                                    <a href="#"> <img src="/images/skill-icon01.png" alt="Angular" /><span>Data Scientist</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="baseSection">
                                            <h4>Based on your skills</h4>
                                            <ul className="skillList">
                                                <li>
                                                    <a href="#"> <img src="/images/skill-icon01.png" alt="Angular" /><span>Sr. Full-stack Developer</span></a>
                                                </li>
                                                <li>
                                                    <a href="#"> <img src="/images/skill-icon01.png" alt="Angular" /><span>Sr. Software Developer</span></a>
                                                </li>
                                                <li>
                                                    <a href="#"> <img src="/images/skill-icon01.png" alt="Angular" /><span>Sr. Java Developer</span></a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
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
                                    <div className="superchargeText">As a Techno-Functional Consultant, you will be responsible for designing and configuring the SAP FICO modules to meet specific business requirements. This includes setting up financial accounting (FI) structures such as general ledger, accounts payable/receivable, asset accounting, and controlling (CO) elements like cost centers, internal orders, and profitability analysis.</div>

                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="superchargeCont">
                                    <span className="number">2</span>
                                    <div className="superchargeHeading"><h3>Client Interaction</h3></div>
                                    <div className="superchargeText">Effective client interaction is key to the success of an SAP FICO Techno-Functional Consultant. You will engage with business stakeholders to understand their financial processes, challenges, and objectives. This involves conducting workshops, interviews, and meetings to gather detailed requirements.</div>

                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="superchargeCont">
                                    <span className="number">3</span>
                                    <div className="superchargeHeading"><h3>Solution Delivery</h3></div>
                                    <div className="superchargeText">In this role, you will be tasked with translating business requirements into practical SAP configurations and technical functionalities. This involves creating detailed functional specifications, configuring the SAP system, and developing custom enhancements where necessary. </div>

                                </div>
                            </div>
                        </div>

                    </section>
                </div></div>
            <div style={{ marginTop: "-150px" }}>
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
                                    <p> Configure SAP FICO modules to meet business requirements. This task involves translating business needs into technical specifications and configuring the system to meet these specifications. You will set up general ledger accounts, define company codes, configure controlling areas, and establish financial transactions that align with organizational goals.</p>
                                </div>
                                <div className="col-md-4 Initiatives">
                                    <img src="images/icon27.png" alt="On-Demand Expertise" className="img-fluid" /><br />
                                    <h5>Process Improvement</h5>
                                    <p>Identify and implement process improvements within the SAP environment. Leveraging your deep understanding of financial processes and SAP FICO capabilities, you will analyze existing workflows to identify inefficiencies and areas for enhancement. You will then design and implement solutions that streamline operations, reduce costs, and improve data accuracy. </p>
                                </div>
                                <div className="col-md-4 Initiatives">
                                    <img src="images/icon29.png" alt="On-Demand Expertise" className="img-fluid" /><br />
                                    <h5>End-User Support</h5>
                                    <p>Provide training and support to end-users to ensure effective utilization of SAP systems. You will develop comprehensive training programs that cover all aspects of the SAP FICO modules, from basic functionalities to advanced features. Conducting workshops and hands-on training sessions, you will empower users to leverage the system efficiently.</p>
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
                                        <p>Experience with SAP integration with other modules (MM, SD, PP) is crucial for a Techno-Functional Consultant. Your ability to seamlessly connect SAP FICO with modules like Material Management (MM), Sales and Distribution (SD), and Production Planning (PP) ensures comprehensive business solutions. </p>
                                    </div>
                                    <div className="col-md-4 unleashing color02 ">
                                        <img src="images/icon12.png" alt="Certified" className="img-fluid" /><br />
                                        <h5>Project Experience</h5>
                                        <p>Hands-on experience in SAP implementation projects is essential for demonstrating your practical skills and understanding of real-world applications. Being actively involved in end-to-end project lifecycles, from requirement gathering to go-live and support, showcases your ability to deliver successful SAP solutions.</p>
                                    </div>
                                    <div className="col-md-4 unleashing color03 ">
                                        <img src="images/icon13.png" alt="Accomplished" className="img-fluid" /><br />
                                        <h5>Certifications</h5>
                                        <p>Holding an SAP FICO certification is a significant advantage, reflecting your formal training and expertise in the field. Certified professionals are recognized for their proficiency in SAP FICO modules, enhancing their credibility and marketability. </p>
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
                                        <div className="superchargeText">Leading the design and implementation of SAP FICO solutions. As a consultant, you will spearhead the deployment of SAP FICO modules, ensuring that they are tailored to meet the specific needs of each client. This involves detailed planning, system configuration, testing, and go-live support.
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="col-md-4 ">
                                    <div className="superchargeCont">
                                        {/* <!-- <span className="number">EI</span> --> */}
                                        <div className="superchargeHeading superchargeHeading2 ">Support</div>
                                        <div className="superchargeText"> Providing ongoing support and optimization for existing SAP systems. Once the SAP FICO systems are live, your role extends to ensuring their continuous, smooth operation. This involves troubleshooting issues, performing regular system audits, and implementing updates and patches. </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="col-md-4 ">
                                    <div className="superchargeCont">
                                        {/* <!-- <span className="number">HI</span> --> */}
                                        <div className="superchargeHeading superchargeHeading3 ">Consultation</div>
                                        <div className="superchargeText">Advising clients on best practices and process improvements within the SAP ecosystem. Your in-depth knowledge of SAP FICO enables you to provide valuable insights and recommendations to clients. </div>
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
                                        <p>As a SAP FICO Techno-Functional Consultant, you&aposllhave access to cutting-edge technologies and tools that will enhance your technical skills and proficiency. Our company is committed to staying ahead of the curve in terms of technological advancements, providing you with ample opportunities to expand your knowledge and expertise in the field. </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="assessingCont">
                                        <h5>Work Environment</h5>
                                        <img src="images/icon44.png" alt="Professional Experience" className="img-fluid" /><br />
                                        <p>At our company, we prioritize creating a positive and supportive work environment where every employee feels valued and respected. Whether you prefer working in the office or from the comfort of your own home, we offer flexible working hours and remote work options to accommodate your needs.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="assessingCont">
                                        <h5>Professional Growth</h5>
                                        <img src="images/icon45.png" alt="Cultural Fit" className="img-fluid" /><br />
                                        <p>We are committed to investing in your professional growth and development, providing you with ample opportunities to expand your skill set and advance your career. Whether through on-the-job training, mentorship programs, or access to external learning resources, we offer a variety of avenues for continuous learning and development. </p>
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
                                    <div style={{ textAlign: "center" }}>
                                        <div style={{ fontSize: "22px" }}>From Strategy to Implementation – Tailored Guidance Every Step of
                                            the Way</div>
                                    </div>
                                </div>

                            </div>
                            <div className="row ">
                                <div className="col-md-6  ">
                                    <div className="solutionText">
                                        <img src="images/soultionimg011.png" alt="Talent Matching and Connection" />
                                        <h3>Advancement</h3>
                                        <p>As a SAP FICO Techno-Functional Consultant, you have a clear trajectory for advancement. With dedication and expertise, you can progress to senior consultant roles where you&aposlltake on more complex projects and responsibilities. </p>

                                    </div>
                                </div>
                                <div className="col-md-6  ">
                                    <div className="solutionText">
                                        <img src="images/sol021.png" alt="Skill Development and Enhancement" />
                                        <h3>Specialization</h3>
                                        <p>One of the exciting aspects of being a SAP FICO Techno-Functional Consultant is the opportunity to specialize. Whether it&apos;s delving into the intricacies of SAP S/4HANA, mastering integration solutions, or focusing on industry-specific challenges, specialization allows you to deepen your expertise and become a go-to resource in your chosen area.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-6  ">
                                    <div className="solutionText">
                                        <img src="images/soultionimg011.png" alt="Talent Matching and Connection" />
                                        <h3>Leadership</h3>
                                        <p>As you progress in your career, the path to leadership positions within the SAP consulting practice becomes increasingly accessible. With demonstrated expertise, effective communication skills, and a knack for problem-solving, you can transition into leadership roles where you&aposllguide teams, shape project strategies, and drive business outcomes.</p>

                                    </div>
                                </div>
                                <div className="col-md-6  ">
                                    <div className="solutionText">
                                        <img src="images/sol021.png" alt="Skill Development and Enhancement" />
                                        <h3>Skill Development</h3>
                                        <p> In the dynamic world of SAP consulting, skill development is paramount. Continuous learning opportunities abound, allowing you to stay ahead of the curve and adapt to evolving technologies and methodologies. Whether it&apos;s through formal training programs, hands-on project experiences.</p>

                                    </div>
                                </div>
                            </div>


                        </section>

                    </div>

                </div></div>
            <FotterComponent />
        </div>
    )
}

export default FunctionalConsultantPage
