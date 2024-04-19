import Navbar from '@/components/molecules/navbar';
import React, { useState } from 'react'
import sapficoStyle from "../../styles/sapficoTalentHubStyle.module.css";
import CustomButton2 from '@/components/atoms/CustomButton2';
import Image from 'next/image';
import FotterComponent from '@/components/molecules/Fotter';
import hireDevStyles from "./../../styles/hireDevStyles.module.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';
const Sapfico = () => {
    const [muduleSelect, setModuleSelect] = useState("SAPModules");
    const [selected, setSelected] = useState("AI-Vetted");
  return (
    
    <div>
      <Navbar/>
      <section className={sapficoStyle.outerSectionMost} >
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div className={sapficoStyle.topsection}>
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
                            <div style={{ padding: "30px" }} onClick={() => setSelected("AI-Vetted")}>Expertise Showcase</div>
                        </div>
                        <div style={selected === "Certified" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px" }} onClick={() => setSelected("Certified")}>Client Testimonials</div>
                        </div>
                        <div style={selected === "Accomplished" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px" }} onClick={() => setSelected("Accomplished")}>Solution Offerings</div>
                        </div>
                        <div style={selected === "On-Demand" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px" }} onClick={() => setSelected("On-Demand")}>Partnership Opportunities</div>
                        </div>
                        <div style={selected === "Versatile" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px" }} onClick={() => setSelected("Versatile")}>Contact Information</div>
                        </div>
                        
                    </div>
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
                                <div className={hireDevStyles.scalableSubheading}>Our seasoned SAP FICO consultants bring years of hands-on experience in financial management, accounting, and controlling. With deep knowledge of SAP solutions, they excel in optimizing processes and driving business growth.</div>
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
                                <div className={hireDevStyles.scalableSubheading}>Hear from satisfied clients who have witnessed tangible results and transformational changes through our consulting services. Their feedback underscores our commitment to delivering exceptional value and exceeding expectations.</div>
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
                                <div className={hireDevStyles.scalableSubheading}>From seamless system implementations to tailored customization and ongoing support, our comprehensive suite of consulting services caters to every aspect of SAP FICO requirements. We empower businesses to leverage technology for strategic advantage.</div>
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
                                <div className={hireDevStyles.scalableSubheading}>Collaborate with us to leverage our expertise and resources in SAP FICO for mutual success. Whether you&apos;re a business seeking consultancy or a fellow consultancy firm, let&apos;s explore synergies and create value together.</div>
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
                                <div className={hireDevStyles.scalableSubheading}>Ready to unlock the full potential of SAP FICO for your business? Reach out to us today for expert insights, personalized consultations, and bespoke solutions. Connect with our team via phone, email, or through our online inquiry form.</div>
                            </div>
                        </div>
                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                    </div>
                </div>
            </section>}
            
            </section>
            <FotterComponent/>
    </div>
  )
}

export default Sapfico;
