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
                                    <div className="superchargeText">As a SAP FICO Functional Consultant, your primary responsibility lies in designing, configuring, and implementing SAP Finance (FI) and Controlling (CO) modules. This involves a deep understanding of financial processes and requirements, as well as the technical expertise to tailor SAP solutions to meet those needs.</div>

                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="superchargeCont">
                                    <span className="number">2</span>
                                    <div className="superchargeHeading"><h3>Client Interaction</h3></div>
                                    <div className="superchargeText">Effective communication and collaboration with clients are essential aspects of your role. You will engage closely with business stakeholders to understand their requirements, pain points, and strategic goals. </div>

                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="superchargeCont">
                                    <span className="number">3</span>
                                    <div className="superchargeHeading"><h3>Solution Delivery</h3></div>
                                    <div className="superchargeText">Your task involves translating complex business needs into actionable SAP configurations and functionalities. This requires a blend of analytical thinking, problem-solving skills, and a comprehensive understanding of both business processes and SAP capabilities.</div>

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
                                <p>Your expertise lies in configuring SAP FICO modules to precisely match the specific needs of the business. This involves thorough analysis of business processes, understanding intricate financial workflows, and implementing configurations that optimize system performance.</p>
                            </div>
                            <div className="col-md-4 Initiatives">
                                <img src="images/icon27.png" alt="On-Demand Expertise" className="img-fluid" /><br />
                                <h5>Process Improvement</h5>
                                <p>As an adept SAP FICO consultant, you possess the skills to identify areas for process enhancement within the SAP landscape. Through comprehensive analysis and evaluation of existing processes, you propose and implement improvements that streamline operations.</p>
                            </div>


                            <div className="col-md-4 Initiatives">
                                <img src="images/icon29.png" alt="On-Demand Expertise" className="img-fluid" /><br />
                                <h5>End-User Support</h5>
                                <p>Your role extends beyond system configuration and process improvement to encompass providing invaluable support and training to end-users. You serve as a resource for troubleshooting, resolving queries, and guiding users on best practices for utilizing SAP FICO functionalities effectively.</p>
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
                                    <p>AI-Vetted Integration Knowledge is essential for SAP FICO functional consultants, as it enables seamless communication between various SAP modules. Experience with SAP integration with other modules such as MM, SD, and PP is highly valued, as it ensures smooth data flow and process synchronization across the organization&apos;s operations. </p>
                                </div>
                                <div className="col-md-4 unleashing color02 ">
                                    <img src="images/icon12.png" alt="Certified" className="img-fluid" /><br />
                                    <h5>Project Experience</h5>
                                    <p>Certified Project Experience demonstrates a consultant&apos;sability to apply their SAP FICO expertise in real-world scenarios. Hands-on experience in SAP implementation projects allows consultants to navigate complexities, troubleshoot issues, and deliver solutions that meet the organization&apos;sspecific requirements.</p>
                                </div>
                                <div className="col-md-4 unleashing color03 ">
                                    <img src="images/icon13.png" alt="Accomplished" className="img-fluid" /><br />
                                    <h5>Certifications</h5>
                                    <p>Accomplished Certifications, such as SAP FICO certification, further validate a consultant&apos;sproficiency in SAP financial and controlling modules. Holding relevant certifications showcases a consultant&apos;sdedication to continuous learning and mastery of SAP technologies. </p>
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
                                    <div className="superchargeText">As an SAP FICO consultant, your primary responsibility during implementation phases involves leading the design and implementation of SAP FICO solutions. This includes analyzing client requirements, configuring SAP modules to meet business needs, and ensuring smooth integration with existing systems.
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="superchargeCont">
                                    {/* <!-- <span className="number">EI</span> --> */}
                                    <div className="superchargeHeading superchargeHeading2 ">Support</div>
                                    <div className="superchargeText">In the support phase, you play a vital role in providing ongoing support and optimization for existing SAP systems. This entails troubleshooting issues, resolving user queries, and implementing enhancements to improve system performance. </div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="superchargeCont">
                                    {/* <!-- <span className="number">HI</span> --> */}
                                    <div className="superchargeHeading superchargeHeading3 ">Consultation</div>
                                    <div className="superchargeText">As an SAP FICO consultant, you serve as a trusted advisor to clients, offering valuable insights and recommendations on best practices and process improvements within the SAP ecosystem. By staying updated on industry trends and emerging technologies, you can identify opportunities for innovation and efficiency gains.</div>
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
                                    <p>We understand the value of your expertise as a SAP FICO Functional Consultant, and we ensure that it is duly recognized with a competitive compensation package. Your hard work and dedication deserve to be rewarded, and we strive to offer remuneration that reflects your skills and contributions to the team. </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="assessingCont">
                                    <h5>Work Environment</h5>
                                    <img src="images/icon44.png" alt="Professional Experience" className="img-fluid" /><br />
                                    <p>Our work environment is designed to foster collaboration, innovation, and productivity. As a SAP FICO Functional Consultant, you&apos;ll thrive in an atmosphere that encourages creativity and problem-solving. Whether you prefer a traditional office setting or remote work, we provide the flexibility and support you need to excel. </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="assessingCont">
                                    <h5>Professional Growth</h5>
                                    <img src="images/icon45.png" alt="Cultural Fit" className="img-fluid" /><br />
                                    <p>At our company, we prioritize your professional growth and development. As a SAP FICO Functional Consultant, you&apos;ll have access to a range of opportunities for continuous learning and skill enhancement. Whether it&apos;sthrough training programs, certifications, or mentorship, we&apos;re committed to helping you expand your expertise and advance your career. </p>
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
                                        <p>As a SAP FICO Techno-Functional Consultant, you have a clear trajectory for advancement. With dedication and expertise, you can progress to senior consultant roles where you&apos;ll take on more complex projects and responsibilities. </p>

                                    </div>
                                </div>
                                <div className="col-md-6  ">
                                    <div className="solutionText">
                                        <img src="images/sol021.png" alt="Skill Development and Enhancement" />
                                        <h3>Specialization</h3>
                                        <p>One of the exciting aspects of being a SAP FICO Techno-Functional Consultant is the opportunity to specialize. Whether it&apos;sdelving into the intricacies of SAP S/4HANA, mastering integration solutions, or focusing on industry-specific challenges, specialization allows you to deepen your expertise and become a go-to resource in your chosen area.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-6  ">
                                    <div className="solutionText">
                                        <img src="images/soultionimg011.png" alt="Talent Matching and Connection" />
                                        <h3>Leadership</h3>
                                        <p>As you progress in your career, the path to leadership positions within the SAP consulting practice becomes increasingly accessible. With demonstrated expertise, effective communication skills, and a knack for problem-solving, you can transition into leadership roles where you&apos;ll guide teams, shape project strategies, and drive business outcomes.</p>

                                    </div>
                                </div>
                                <div className="col-md-6  ">
                                    <div className="solutionText">
                                        <img src="images/sol021.png" alt="Skill Development and Enhancement" />
                                        <h3>Skill Development</h3>
                                        <p> In the dynamic world of SAP consulting, skill development is paramount. Continuous learning opportunities abound, allowing you to stay ahead of the curve and adapt to evolving technologies and methodologies. Whether it&apos;sthrough formal training programs, hands-on project experiences.</p>

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
