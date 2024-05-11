import FotterComponent from '@/components/molecules/Fotter'
import Navbar from '@/components/molecules/navbar'
import Image from 'next/image'
import React from 'react'
import style from "../../styles/vettingStyles.module.css";
import CardComponent from '@/components/atoms/card';
import commonStyle, { accordianStylingHomePage, cardsStyling } from '@/constants/commonStyle';
import { VettingPageText } from '@/constants/texts';
import homePageStyle from "../../styles/homePageStyles.module.css"
import hireDevStyles from "../../styles/hireDevStyles.module.css"
import CustomButton2 from '@/components/atoms/CustomButton2';
import HourglassEmptyRoundedIcon from "@mui/icons-material/HourglassEmptyRounded";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import Link from 'next/link';
import { useRouter } from "next/router";
import AccordionComponent from '@/components/atoms/accodion';
import ContentComponent from '@/components/molecules/sectionWithImageAndIcon';

const Vetting = () => {
  const router = useRouter();
  const handleButtonExplore = () => {

  }
  const launchCareerJourneyClicked = () => {
    router.push("/sap-talent-pool");
  };
  return (
    <div>
      <Navbar />
      <div className="wrapper vettingProcess">

        <div className="capabilitiesSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-8">
                <div className="homesapExpertise" >
                  <h2>Unlock <span>Precision</span> Matches with AI, EL and HI</h2>
                  <h3>Our Unique Combination of AI, EI and HI Ensures Ideal Candidate Matches Every Time</h3>
                  <p>Experience unparalleled accuracy in candidate selection through our unique blend of cutting-edge AI technology, rigorous external assessments, and invaluable human insights. Our meticulous vetting process guarantees that you&apos;re presented with candidates perfectly tailored to your project requirements.</p>

                  <div className="hireSap"><a className="hire" href="#">Hire Elite Talent</a><a className="hire" href="#">Explore Talent Pool</a></div>
                  <div className="deepVetted"><span><img src="images/icon03.jpg" alt="Deep Vetted" />Advanced AI</span><span><img src="images/icon02.jpg" alt="Culturally Fit" />Integrated Assessments</span><span><img src="images/icon01.jpg" alt="Deploy Ready" />Automated Insights</span></div>
                </div>

              </div>
              <div className="col-md-4">
                <div className="bannerImg">
                  <img src="images/vetting1.jpg" alt="Vetting Process" className="img-fluid" />

                </div>
              </div>
            </div>
          </section>
        </div >

        {/* <!-- Second Section  --> */}
        <div className="specializedSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">
                <h2><span>AI + EI + HI</span>  = Most Precise Match</h2>
              </div>
            </div>
            <div className="row mt-4 ">
              <div className="col-md-4">
                <div className="boxExcellence">

                  <h5>Advanced AI</h5>
                  <img src="images/icon11.png" alt="Cloud & DevOps Excellence" className="img-fluid" />
                  <span className="number">AI</span>
                  <p>Harnessing the power of AI algorithms to analyze candidate data and assess technical proficiency.</p>
                  <div><a href="">Explore Now</a> </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="boxExcellence">

                  <h5>External Assessments</h5>
                  <img src="images/icon48.png" alt="Legacy Modernization Specialists" className="img-fluid" />
                  <span className="number">EL</span>
                  <p>Utilizing third-party evaluations and industry-standard tests to verify skill sets and expertise.</p>
                  <a href="">Explore Now</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="boxExcellence">

                  <h5>Human Insights</h5>
                  <img src="images/icon43.png" alt="I/ML/LLM Powered Innovators" className="img-fluid" />
                  <span className="number">HI</span>
                  <p>Leveraging human expertise to provide subjective evaluations and ensure cultural fit and soft skills alignment.</p>
                  <a href="">Explore Now</a>
                </div>
              </div>

            </div>
          </section>
        </div>

        {/* <!-- Supercharge Section --> */}
        <div className="superchargeSection precisionSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12 ">
                <div className="">
                  <h2><span>Revolutionizing</span> Vetting<br />with Advanced AI</h2>
                  <h3 >Harnessing Cutting-Edge Technology for Unmatched Precision</h3>

                </div>
              </div>
              <div className="col-md-4 ">
                <div className="superchargeCont">
                  <span className="number">ML</span>
                  <div className="superchargeHeading superchargeHeading1  ">Machine Learning Algorithms</div>
                  <div className="superchargeText">Our AI-powered algorithms continuously learn and adapt, refining candidate evaluations based on evolving data sets and feedback loops.</div>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="superchargeCont">
                  <span className="number">NL</span>
                  <div className="superchargeHeading superchargeHeading2 ">Natural Language Processing (NLP)</div>
                  <div className="superchargeText">Using NLP techniques, we analyze candidate communications to gauge communication skills, problem-solving abilities, and cultural alignment.</div>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="superchargeCont">
                  <span className="number">PA</span>
                  <div className="superchargeHeading superchargeHeading3 ">Predictive<br />Analytics</div>
                  <div className="superchargeText">By analyzing past performance data, we predict future success rates, ensuring candidates are matched with roles where they&apos;re likely to excel.</div>
                  <div className="clear"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- Supercharge Section --> */}
        <div className="superchargeSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12 ">
                <div className="">
                  <h2>Enhancing <span>Vetting</span> with<br />External Assessments</h2>
                  <h3 >Rigorous Evaluations for Unbiased Insights</h3>

                </div>
              </div>
              <div className="col-md-4 ">
                <div className="superchargeCont">
                  <span className="number">1</span>
                  <div className="superchargeHeading">Technical Proficiency Tests</div>
                  <div className="superchargeText">We prioritize a swift 4-hour turnaround, ensuring you can deploy top-tier talent when you need it.</div>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="superchargeCont">
                  <span className="number">2</span>
                  <div className="superchargeHeading">Automated Skills Assessments</div>
                  <div className="superchargeText">Our AI technology meticulously vets each developer, assuring you of their qualifications and expertise.</div>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="superchargeCont">
                  <span className="number">3</span>
                  <div className="superchargeHeading">Online Competency<br />Tests</div>
                  <div className="superchargeText">With a diverse skill set ranging from SAP and Cloud to Legacy systems, our developers can address an array of technical challenges.</div>
                  <div className="clear"></div>
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
                <h2>Elevate <span>Vetting</span> through<br/> Human Insights</h2>
                <h4>The Human Touch in Precision Candidate Evaluation</h4>

              </div>

              <div className="col-md-4 Initiatives">
                <img src="images/icon61.png" alt="Behavioral Interviews" className="img-fluid"/><br/>
                  <h5>Behavioral Interviews</h5>
                  <p>Conducting in-depth interviews to evaluate candidates soft skills, communication abilities, and problem-solving approaches, providing valuable insights beyond technical qualifications.</p>
                </div>
                  <div className="col-md-4 Initiatives">
                    <img src="images/icon62.png" alt="Cultural Fit Assessments" className="img-fluid"/><br/>
                      <h5>Cultural Fit Assessments</h5>
                      <p>Assessing candidates compatibility with your organization&apos;s values, work environment, and team dynamics to ensure alignment and cohesion within the company culture.</p>
                    </div>
                      <div className="col-md-4 Initiatives">
                        <img src="images/icon61.png" alt="Expert Feedback" className="img-fluid"/><br/>
                          <h5>Expert Feedback</h5>
                          <p>Leveraging experienced professionals and industry experts to provide subjective evaluations and recommendations based on their expertise and insights, enriching the vetting process with diverse perspectives and nuanced judgments.</p>
                        </div>

                      </div>
                    </section>
                  </div>

                  <div className="TurnaroundSection">
                    <section className="container mt-4 ">
                      <div className="row ">
                        <div className="col-md-12">
                          <h3>How it works?</h3>
                        </div>
                        <div className="col-md-4 turnacoundCont  ">
                          <div className="turnheader">
                            <h2>STEP</h2>
                            <h4>1</h4>
                          </div>
                          <div className="trunaroundText">
                            <img src="images/vetting12.jpg" alt="vetting12" className="img-fluid" />
                            <p>Client Submits Job Requirements on Client Portal or Shares with their Account Manager</p>
                          </div>
                        </div>
                        <div className="col-md-4 turnacoundCont  ">
                          <div className="turnheader">
                            <h2>STEP</h2>
                            <h4>2</h4>
                          </div>
                          <div className="trunaroundText">
                            <img src="images/vetting13.jpg" alt=" vetting12" className="img-fluid" />
                            <p>Al Talent Cloud Shares the Most Suitable Pre- Vetted Matching Profiles with the Client</p>
                          </div>
                        </div>
                        <div className="col-md-4 turnacoundCont  ">
                          <div className="turnheader">
                            <h2>STEP</h2>
                            <h4>3</h4>

                          </div>
                          <div className="trunaroundText">
                            <img src="images/vetting14.jpg" alt=" vetting12" className="img-fluid" />
                            <p>Profiles for Further & Assessment and Selects the Final Tarent/Team</p>
                          </div>
                        </div>
                        <div className="col-md-12 hireNow">
                          <a className="hire" href="#">Hire Now</a>
                        </div>
                      </div>
                    </section>
                  </div>
                  {/* <!-- scalableSection section  --> */}
                  <div className="assessingSection">
                    <section className="container mt-4 ">
                      <div className="row">
                        <div className="col-md-12">
                          <h2>Ensuring Excellence:<br />Assessing SAP Talent</h2>
                          <h4>Meticulous assessment to ensure the proficiency, compatibility, and overall suitability of our SAP talent.</h4>
                        </div>
                        <div className="col-md-4">
                          <div className="assessingCont">
                            <h5>Technical Competency</h5>
                            <img src="images/icon43.png" alt="Technical Competency" className="img-fluid" /><br />
                            <p>Thorough assessment of SAP skills and knowledge</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="assessingCont">
                            <h5>Professional Experience</h5>
                            <img src="images/icon44.png" alt="Technical Competency" className="img-fluid" /><br />
                            <p>Verification of past work experience and project achievements.</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="assessingCont">
                            <h5>Cultural Fit</h5>
                            <img src="images/icon45.png" alt="Technical Competency" className="img-fluid" /><br />
                            <p>Evaluation of alignment with company values and team dynamics.</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="assessingCont">
                            <h5>Certifications and Credentials</h5>
                            <img src="images/icon46.png" alt="Technical Competency" className="img-fluid" /><br />
                            <p>Validation of relevant certifications and qualifications.</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="assessingCont">
                            <h5>Background Check</h5>
                            <img src="images/icon47.png" alt="Technical Competency" className="img-fluid" /><br />
                            <p>Verification of educational and employment backgrounds.</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="assessingCont">
                            <h5>Soft Skills Assessment</h5>
                            <img src="images/icon48.png" alt="Technical Competency" className="img-fluid" /><br />
                            <p>Evaluation of communication, teamwork, and adaptability.</p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
              </div >

              <FotterComponent />
            </div >
            )
}

            export default Vetting
