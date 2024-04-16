import FotterComponent from '@/components/molecules/Fotter'
import Navbar from '@/components/molecules/navbar'
import React, { useState } from 'react'
import sapStyle from "../../styles/sapTalentStyle.module.css"
import hireDevStyles from "./../../styles/hireDevStyles.module.css";
import { cardsStyling } from '@/constants/commonStyle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import sapficoStyle from "../../styles/sapficoTalentHubStyle.module.css";
import css from "../../styles/sapTalentStyle.module.css"
import CustomButton2 from '@/components/atoms/CustomButton2';
import Image from 'next/image';
const SapficoTalentHubPage = () => {
    const [muduleSelect, setModuleSelect] = useState("SAPModules");
    const [selected, setSelected] = useState("AI-Vetted");
    return (
        <div>
            <Navbar />
            <section id={css.outerSectionMost} >
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div id={css.topsection}>
                        <div style={{ fontSize: "48px", width: "300px", fontWeight: "600", lineHeight: "59px" }}>SAP-FICO Talent Hub</div>
                        <div style={{ fontSize: "20px" }}>Find a transformation consultant to achieve meaningful change.</div>
                        <div>
                            <CustomButton2
                                label="FIND OVERVIEW"
                                // onClick={hirenowClick}
                                buttonStyle={{
                                    width: "272px",
                                    height: "51.6px",
                                    border: "1px solid #2871ff",
                                    color: "#fff",
                                    fontSize: "20px",
                                    backgroundColor: "#2871ff",
                                }}
                                hoverStyle={{
                                    backgroundColor: "lightblue",
                                    color: "#2871ff",
                                }}
                            />
                        </div>
                    </div>
                    <Image style={{borderRadius:"10px"}} src="/TalentPoolImages/sapfico.png" height={330} width={330} alt="" />
                </div>
            </section>
            
            <section>
                <div className={hireDevStyles.headingunleash} >
                    {/* <br />
                    <br /> */}
                    {/* <h2 style={cardsStyling.sapCloudLegacyMainHeading}>
                        Unleashing the Power of Tech Talent Expertise
                    </h2> */}
                    {/* <br /> */}
                    {/* <h3 style={cardsStyling.sapCloudLegacySubHeading}>Elevate Your Projects with Our Talent Experience, Versatility, and Collaboration at Your Service</h3> */}


                </div>
                <section id={hireDevStyles.fontpopBelow}>
                    <div id={hireDevStyles.selectbar}>
                        <div style={selected === "AI-Vetted" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px" }} onClick={() => setSelected("AI-Vetted")}>SAP Solutions</div>
                        </div>
                        <div style={selected === "Certified" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px" }} onClick={() => setSelected("Certified")}>Migration Expertise</div>
                        </div>
                        <div style={selected === "Accomplished" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px" }} onClick={() => setSelected("Accomplished")}>Industry-Specific SAP Solutions</div>
                        </div>
                        <div style={selected === "On-Demand" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px" }} onClick={() => setSelected("On-Demand")}>Integration Services</div>
                        </div>
                        <div style={selected === "Versatile" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px" }} onClick={() => setSelected("Versatile")}>SAP Support</div>
                        </div>
                        
                    </div>
                </section>
            </section>
            {selected === "AI-Vetted" && <section id={hireDevStyles.fontpop2}>
                <div id={hireDevStyles.scalableGrowth2}>
                    <div id={hireDevStyles.scalableGrowthInner}>

                        <Image src="/HireDevImages/sapSolution.jpg" style={{ padding: "0px" }} alt="" height={300} width={300} />
                    </div>
                    <div id={hireDevStyles.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div id={hireDevStyles.mosteinnerContainer}>
                                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                                <div className={hireDevStyles.scalableSubheading}>Highlight the consulting firm&apos;s ability to provide comprehensive SAP solutions, covering various modules such as Finance, Supply Chain Management, Human Resources, and Customer Relationship Management.</div>
                            </div>
                        </div>
                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More - SAP consulting</span></div>

                    </div>
                </div>
            </section>}
            {selected === "Certified" && <section id={hireDevStyles.fontpop2}>
                <div id={hireDevStyles.scalableGrowth2}>
                    <div id={hireDevStyles.scalableGrowthInner}>

                        <Image src="/HireDevImages/migration.jpg" style={{ padding: "0px" }} alt="" height={300} width={350} />
                    </div>
                    <div id={hireDevStyles.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div id={hireDevStyles.mosteinnerContainer}>
                                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                                <div className={hireDevStyles.scalableSubheading}>Showcase proficiency in assisting organizations with migrating to SAP S/4HANA, the next-generation ERP suite. Highlight the benefits of S/4HANA, such as real-time analytics, simplified data models, and improved user experience, and discuss the consulting firm&apos;s approach to ensuring a smooth transition while maximizing ROI.</div>
                            </div>
                        </div>
                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                    </div>
                </div>
            </section>}
            {selected === "Accomplished" && <section id={hireDevStyles.fontpop2}>
                <div id={hireDevStyles.scalableGrowth2}>
                    <div id={hireDevStyles.scalableGrowthInner}>

                        <Image src="/HireDevImages/industrySap.webp" style={{ padding: "0px" }} alt="" height={200} width={300} />
                    </div>
                    <div id={hireDevStyles.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div id={hireDevStyles.mosteinnerContainer}>
                                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                                <div className={hireDevStyles.scalableSubheading}>Emphasize experience in delivering industry-specific SAP solutions tailored to the unique requirements of different sectors such as manufacturing, retail, healthcare, and utilities. Highlight success stories and case studies demonstrating how the consulting firm has helped organizations within specific industries leverage SAP to drive innovation and competitive advantage.</div>
                            </div>
                        </div>
                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                    </div>
                </div>
            </section>}
            {selected === "On-Demand" && <section id={hireDevStyles.fontpop2}>
                <div id={hireDevStyles.scalableGrowth2}>
                    <div id={hireDevStyles.scalableGrowthInner}>

                        <Image src="/HireDevImages/integration.jpg" style={{ padding: "0px" }} alt="" height={300} width={300} />
                    </div>
                    <div id={hireDevStyles.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div id={hireDevStyles.mosteinnerContainer}>
                                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                                <div className={hireDevStyles.scalableSubheading}>Showcase expertise in implementing SAP Cloud solutions such as SAP S/4HANA Cloud, SAP SuccessFactors, and SAP Business ByDesign. Highlight the consulting firm&apos;s capabilities in cloud migration, integration with existing on-premises systems, and leveraging emerging technologies like AI and IoT to enhance business processes.</div>
                            </div>
                        </div>
                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                    </div>
                </div>
            </section>}
            {selected === "Versatile" && <section id={hireDevStyles.fontpop2}>
                <div id={hireDevStyles.scalableGrowth2}>
                    <div id={hireDevStyles.scalableGrowthInner}>

                        <Image src="/HireDevImages/sapSupport.webp" style={{ padding: "0px" }} alt="" height={300} width={300} />
                    </div>
                    <div id={hireDevStyles.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div id={hireDevStyles.mosteinnerContainer}>
                                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                                <div className={hireDevStyles.scalableSubheading}>Highlight ongoing support and managed services offerings to ensure the continued success of SAP deployments. Discuss services such as system monitoring, performance optimization, user training, and regular updates to keep SAP systems running smoothly and efficiently.</div>
                            </div>
                        </div>
                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                    </div>
                </div>
            </section>}
            <section>
                <div className={sapStyle.leftbuttonSection2}>
                    
                    <div className={sapStyle.buttonSection}>
                        <div style={{ marginTop: "50px" }}>
                            <div className={muduleSelect === "SAPModules" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("SAPModules")}>Implementation</div>
                            <div className={muduleSelect === "SAPSolutions" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("SAPSolutions")}>Latest Trends and Updates</div>
                            <div className={muduleSelect === "SAPFunctional" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("SAPFunctional")}>Training and Certification</div>
                            <div className={muduleSelect === "SAPTechnical" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("SAPTechnical")}>Networking Opportunities</div>
                            {/* <div className={muduleSelect === "ProjectType" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("ProjectType")}>SAP Project Types</div>
                            <div className={muduleSelect === "RoleType" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("RoleType")}>SAP Talent Roles</div> */}
                        </div>
                        {muduleSelect === "SAPModules" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600", color: "#2871FF" }}>SAP FICO Implementation Best Practices</div>
                            {/* <div style={{ fontSize: "19px", fontWeight: "600" }}>Explore Talent for a Diverse Array of 50+ SAP Modules and Sub-Modules</div> */}
                            <div style={{ fontSize: "16px", color: "#3C3C3C" }}>Provide insights into best practices for implementing SAP FICO modules, covering aspects such as project planning, configuration, data migration, and testing. Offer tips and strategies for ensuring successful SAP FICO implementations, based on industry standards and experiences from previous projects.</div>
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>50+</div> */}
                            {/* <div>sapfico-resource-hub</div> */}
                            <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More - sapfico-resource-hub</span></div>
                            

                        </div>}
                        {muduleSelect === "SAPSolutions" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600", color: "#2871FF" }}>Latest Trends and Updates in SAP FICO</div>
                            {/* <div style={{ fontSize: "19px", fontWeight: "600" }}>Discover Consultants for a Wide Range of 30+ SAP Solutions and Specializations</div> */}
                            <div style={{ fontSize: "16px", color: "#3C3C3C" }}>Keep users informed about the latest trends, updates, and innovations in SAP FICO. This could include information on new features introduced in SAP S/4HANA Finance, regulatory changes impacting financial accounting, and advancements in controlling and reporting functionalities. Regularly update this section to ensure visitors have access to current information.</div>
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>40+</div> */}
                            <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                        </div>}
                        {muduleSelect === "SAPFunctional" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600", color: "#2871FF" }}>SAP FICO Training and Certification Resources</div>
                            {/* <div style={{ fontSize: "19px", fontWeight: "600" }}>Figure out Our SAP Talent&apos;s Functional Proficiency Across 40+ Key Functional Areas</div> */}
                            <div style={{ fontSize: "16px", color: "#3C3C3C" }}>Provide a curated list of training courses, webinars, and certification programs related to SAP FICO. Include both online and offline learning resources offered by SAP Education, authorized training partners, and industry organizations. Offer guidance on selecting the most relevant training paths based on individual career goals and skill levels.</div>
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>20+</div> */}
                            <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                        </div>}
                        {muduleSelect === "SAPTechnical" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600", color: "#2871FF" }}>SAP FICO Community and Networking Opportunities</div>
                            {/* <div style={{ fontSize: "19px", fontWeight: "600" }}>Figure out Our SAP Talent&apos;s Functional Proficiency Across 40+ Key Functional Areas</div> */}
                            <div style={{ fontSize: "16px", color: "#3C3C3C" }}> Foster a sense of community among SAP FICO professionals by providing networking opportunities and access to discussion forums or user groups. Encourage knowledge sharing, collaboration, and peer-to-peer support among members of the SAP FICO community. Promote relevant events, conferences, and meetups where professionals can connect and exchange insights.</div>
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>20+</div> */}
                            <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                        </div>}

                    </div>
                </div>
            </section>
            <section id={hireDevStyles.fontpop}>
                {/* <div style={{ textAlign: "center" }}>
                    <div id={hireDevStyles.scalableGrowthHeading}>
                       Flexi bility and Scalability for Your SAP Projects
                    </div>
                    <div className={hireDevStyles.scalableSubheading}>Tailored Talent Solutions to Match Your Unique Business Needs, Project Size and Complexity</div>
                </div> */}
                <div id={hireDevStyles.scalableGrowth}>
                    <div id={hireDevStyles.scalableGrowthInner}>
                        <div id={hireDevStyles.scalableGrowthHeading}>Unlock Your Potential with Our SAP Talent Pool</div>
                        <div>Discover Certified Experts in SAP Modules for Flexible Engagement Models</div>
                        <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                    </div>
                    <div id={hireDevStyles.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px",alignItems:"center"  }}>
                            <div>
                                <Image src="/HireDevImages/skillset.png" alt="" height={50} width={50} />
                            </div>
                            <div id={hireDevStyles.mosteinnerContainer}>
                                <div id={hireDevStyles.scalableGrowthHeading}>Diverse Skill Sets</div>
                                <div className={hireDevStyles.scalableSubheading}>Highlight the diverse skill sets available within the SAP talent pool, including expertise in various SAP modules such as Finance (FICO), Supply Chain Management (SCM), Human Capital Management (HCM), and Customer Relationship Management (CRM). </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "10px",alignItems:"center"  }}>
                            <div>
                                <Image src="/HireDevImages/certified_exp.webp" alt="" height={50} width={50} />
                            </div>
                            <div id={hireDevStyles.mosteinnerContainer}>
                                <div id={hireDevStyles.scalableGrowthHeading}>Certified SAP Professionals</div>
                                <div className={hireDevStyles.scalableSubheading}>Emphasize that the SAP talent pool consists of certified professionals who have undergone rigorous training and certification programs offered by SAP Education or authorized training partners. </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "10px",alignItems:"center" }}>
                            <div>
                                <Image src="/HireDevImages/engagement.jpg" alt="" height={50} width={50} />
                            </div>
                            <div id={hireDevStyles.mosteinnerContainerLast}>
                                <div id={hireDevStyles.scalableGrowthHeading}>Flexible Engagement Models</div>
                                <div className={hireDevStyles.scalableSubheading}>Our SAP talent pool offers flexible engagement models, from contract to full-time arrangements. Scale resources based on project needs for short-term projects, long-term engagements, or ongoing support. We ensure agility and responsiveness to meet client&apos;s changing business demands.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={sapficoStyle.transsection}>
                <div className={sapficoStyle.transsectionHeading}>
                    <div style={{fontSize:"20px",marginBottom:"10px",fontWeight:"600"}}>SAP-FICO Expertise</div>
                    <div>SAP FICO professionals encompass Functional, Technical, and Techno-Functional Consultants, each with distinct responsibilities. </div>
                    <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>
                </div>
                <div className={sapficoStyle.transsectionBoxOuter}>
                <div className={sapficoStyle.transsectionBox}>
                    <div style={{fontSize:"18px",marginBottom:"10px",fontWeight:"600"}}>Function Type</div>
                    <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>
                </div>
                <div className={sapficoStyle.transsectionBox}>
                    <div style={{fontSize:"18px",marginBottom:"10px",fontWeight:"600"}}>Role Type</div>
                    <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>
                </div>
                <div className={sapficoStyle.transsectionBox}>
                    <div style={{fontSize:"18px",marginBottom:"10px",fontWeight:"600"}}>Project Type</div>
                    <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>
                </div>
                </div>
            </section>
            <FotterComponent />
        </div>
    )
}

export default SapficoTalentHubPage
