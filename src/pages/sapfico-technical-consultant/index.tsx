import FotterComponent from '@/components/molecules/Fotter'
import Navbar from '@/components/molecules/navbar'
import React from 'react'
import Slider from 'react-slick'

const TechnicalConsultantPage = () => {
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
                                    <h3> Our focus is on hiring skilled SAP FICO Technical Consultants to drive business success.</h3>
                                    <p>We are committed to cultivating collaboration and innovation. Our aim is to foster an environment where teamwork thrives and creativity flourishes.</p>

                                    {/* <!-- <div className="hireSap"><a className="hire" href"#">Search SAP Talent</a><a className="hire" href"#">Explore Talent Pool</a></div> --> */}

                                </div>

                            </div>
                            <div className="col-md-5">
                                <div className="bannerImg">
                                    <img src="images/sapTechCon.jpg" style={{ borderRadius: "5px" }} alt="ELEVATE YOUR TECH CAPABILITIES" className="img-fluid" />

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
                                    <div className="superchargeHeading"><h3>Integration Specialist</h3></div>
                                    <div className="superchargeText">Ensure seamless integration of financial and controlling processes, bridging gaps between various SAP modules and other enterprise systems.</div>

                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="superchargeCont">
                                    <span className="number">2</span>
                                    <div className="superchargeHeading"><h3>Customization Expert</h3></div>
                                    <div className="superchargeText">Tailor SAP FICO modules to meet specific business needs, creating customized solutions that address unique organizational challenges.</div>

                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="superchargeCont">
                                    <span className="number">3</span>
                                    <div className="superchargeHeading"><h3>Support and Maintenance</h3></div>
                                    <div className="superchargeText">Provide ongoing support and troubleshooting for SAP FICO systems, ensuring system reliability and performance.</div>

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
                                    <p> Set up and configure SAP FICO modules according to client requirements, ensuring alignment with business processes and goals. This involves defining organizational structures, setting up general ledger accounts, configuring accounts payable/receivable, and establishing controlling areas.</p>
                                </div>
                                <div className="col-md-4 Initiatives">
                                    <img src="images/icon27.png" alt="On-Demand Expertise" className="img-fluid" /><br />
                                    <h5>Process Optimization</h5>
                                    <p>Enhance financial processes and workflows through SAP FICO, identifying areas for improvement and implementing best practices. You will analyze existing processes to pinpoint inefficiencies and bottlenecks, recommending and implementing solutions that streamline operations and enhance productivity. </p>
                                </div>


                                <div className="col-md-4 Initiatives">
                                    <img src="images/icon29.png" alt="On-Demand Expertise" className="img-fluid" /><br />
                                    <h5>User Training</h5>
                                    <p>Develop and deliver training programs for end-users, ensuring they are proficient in using SAP FICO systems effectively. This includes designing comprehensive training materials and conducting workshops tailored to different user groups. </p>
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
                                        <h5>Technical Proficiency</h5>
                                        <p>In-depth knowledge of SAP FICO modules and integration points, with hands-on experience in configuring and customizing the system. You should be familiar with SAP S/4HANA and have a strong understanding of SAP architecture and data flows.</p>
                                    </div>
                                    <div className="col-md-4 unleashing color02 ">
                                        <img src="images/icon12.png" alt="Certified" className="img-fluid" /><br />
                                        <h5>Analytical Skills</h5>
                                        <p>Strong problem-solving abilities and analytical mindset, capable of analyzing complex financial data and translating it into actionable insights. You will use your analytical skills to identify trends, detect anomalies, and make data-driven decisions that improve financial performance.</p>
                                    </div>
                                    <div className="col-md-4 unleashing color03 ">
                                        <img src="images/icon13.png" alt="Accomplished" className="img-fluid" /><br />
                                        <h5>Project Management</h5>
                                        <p>Experience in managing SAP FICO projects, including planning, execution, and delivery. You should be adept at coordinating multiple tasks, managing deadlines, and ensuring that all project milestones are achieved.</p>
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
                                        <div className="superchargeText">Lead the implementation of SAP FICO solutions, ensuring they meet business requirements and deliver value. You will oversee the entire implementation lifecycle, from initial planning and design through to deployment and post-go-live support.
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="col-md-4 ">
                                    <div className="superchargeCont">
                                        {/* <!-- <span className="number">EI</span> --> */}
                                        <div className="superchargeHeading superchargeHeading2 ">Training and Documentation</div>
                                        <div className="superchargeText"> Conduct user training sessions and prepare technical documentation, ensuring users are well-equipped to utilize SAP FICO systems effectively. You will create comprehensive user guides, training manuals, and support materials that facilitate user adoption and proficiency.</div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="col-md-4 ">
                                    <div className="superchargeCont">
                                        {/* <!-- <span className="number">HI</span> --> */}
                                        <div className="superchargeHeading superchargeHeading3 ">Business Process Analysis</div>
                                        <div className="superchargeText">Analyze and map business processes to SAP FICO functionalities, identifying gaps and opportunities for improvement. You will conduct workshops with stakeholders to gather requirements, document current processes, and design optimized workflows that leverage SAP capabilities.</div>
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
                                        <p>Attractive salary and benefits package, ensuring you are rewarded for your expertise and contributions. Our compensation packages are designed to attract and retain top talent, offering competitive salaries, performance bonuses, and comprehensive benefits.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="assessingCont">
                                        <h5>Innovative Environment</h5>
                                        <img src="images/icon44.png" alt="Professional Experience" className="img-fluid" /><br />
                                        <p>Work with cutting-edge technologies and AI-driven insights, staying ahead of industry trends and driving innovation. Our platform leverages the latest advancements in AI and machine learning to enhance your capabilities and provide you with tools that drive efficiency and accuracy.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="assessingCont">
                                        <h5>Professional Growth</h5>
                                        <img src="images/icon45.png" alt="Cultural Fit" className="img-fluid" /><br />
                                        <p>Opportunities for professional development and career advancement, with access to training programs and mentorship. We invest in your growth by providing access to industry certifications, professional development workshops, and mentorship programs that help you advance your career.</p>
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
                                        <p>Opportunities to advance to senior consultant or project manager roles. As you gain experience and demonstrate your capabilities, we provide clear pathways for career advancement. Our structured career progression plans are designed to help you move up the ranks, from junior roles to senior positions.</p>

                                    </div>
                                </div>
                                <div className="col-md-6  ">
                                    <div className="solutionText">
                                        <img src="images/sol021.png" alt="Skill Development and Enhancement" />
                                        <h3>Specialization</h3>
                                        <p>Option to specialize in areas like SAP S/4HANA, integration, or industry-specific solutions. We support your desire to deepen your expertise in specific SAP domains or industry verticals. Through targeted training programs, certifications, and real-world project experiences, you can develop a niche skill set. </p>

                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-6  ">
                                    <div className="solutionText">
                                        <img src="images/soultionimg011.png" alt="Talent Matching and Connection" />
                                        <h3>Leadership</h3>
                                        <p>Potential to move into leadership positions within the SAP consulting practice. Our platform provides numerous opportunities for leadership development. Whether you&apos;re aiming to lead a team of consultants or manage large-scale SAP projects, we equip you with the necessary skills and experiences.</p>

                                    </div>
                                </div>
                                <div className="col-md-6  ">
                                    <div className="solutionText">
                                        <img src="images/sol021.png" alt="Skill Development and Enhancement" />
                                        <h3>Skill Development</h3>
                                        <p>Continuous learning opportunities to enhance your technical and professional skills. We prioritize your growth by offering a variety of training programs, workshops, and certifications. Our learning resources cover the latest SAP technologies, project management methodologies, and soft skills needed for effective communication and leadership.</p>

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

export default TechnicalConsultantPage
