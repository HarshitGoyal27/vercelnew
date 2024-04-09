import { HireDeveloperPageText, HomePageText } from '@/constants/texts'
import React, { useState } from 'react'
import hireDevStyles from "./../../styles/hireDevStyles.module.css";
import IconTextButton from '@/components/atoms/ButtonWithIcon';
import CustomButton2 from '@/components/atoms/CustomButton2';
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import Navbar from '@/components/molecules/navbar';
import Image from 'next/image';
import homePageStyle from "../../styles/homePageStyles.module.css";
import Link from 'next/link';
import commonStyle from '@/constants/commonStyle';
import css from "../../styles/sapTalentStyle.module.css"
import HireDevSectionWithImageAndIcon from '@/components/molecules/HireDevSectionWithImageAndIcon';
import FotterComponent from '@/components/molecules/Fotter';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import LensIcon from '@mui/icons-material/Lens';
const Hire = () => {
  const HireDeveloperClicked = () => {
    // router.push("/search-developers");
  };
  const [selected, setSelected] = useState("Comprehensive");
  const [selectedtwo, setSelectedtwo] = useState("AI-Vetted");
  return (
    <div>
      <Navbar />
      <section id={homePageStyle.avideoContainer} >
        <div className={homePageStyle.flexCenter}>
          <div className={homePageStyle.topContentSection}>
            <h1 className={`${hireDevStyles.mainHeadingHireDev}`}>
              {HireDeveloperPageText.HireDeveloperHeroHeading}
              {/* <div>{HomePageText.heading_4}</div> */}
            </h1>

            <h2 className={`${hireDevStyles.mainSubHeadingHireDev}`}>
              {HireDeveloperPageText.HireDeveloperHeroPara}

            </h2>


            <div style={{ display: "flex", gap: "15px" }}>
              <CustomButton2
                label={HireDeveloperPageText.HireDeveloperHeroButton1}
                onClick={HireDeveloperClicked}
                buttonStyle={{
                  color: "white",
                  borderRadius: "5px",
                  background: "#424241",
                  fontSize: "18px",
                  padding: "10px 25px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  margin: "0px 15px 0px 30px",
                  boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                }}
                hoverStyle={{
                  color: "black",
                  borderRadius: "5px",
                  background: "white",
                  fontSize: "18px",
                  padding: "10px 25px",
                  border: "1px solid black",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  margin: "0px 15px 0px 30px",
                  boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                }}
              />
              <br />
              <br />
              <IconTextButton
                icon={<PlayCircleFilledWhiteOutlinedIcon />}
                text="Watch Video"
                onClick={HireDeveloperClicked}
              />
            </div>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                gap: "50px",
                margin: "0px 0px 0px 20px",
              }}
            >
              <div>
                <div className={`${hireDevStyles.hireDevNumberTitle}`}>
                  {HireDeveloperPageText.HireDeveloperHeroNum1}
                </div>
                <span className={`${hireDevStyles.hireDevNumberContent}`}>
                  {HireDeveloperPageText.HireDeveloperHeroNum1Title}
                </span>
              </div>
              <div>
                <div className={`${hireDevStyles.hireDevNumberTitle}`}>
                  {HireDeveloperPageText.HireDeveloperHeroNum2}
                </div>
                <span className={`${hireDevStyles.hireDevNumberContent}`}>
                  {HireDeveloperPageText.HireDeveloperHeroNum2Title}
                </span>
              </div>
              <div>
                <div className={`${hireDevStyles.hireDevNumberTitle}`}>
                  {HireDeveloperPageText.HireDeveloperHeroNum3}
                </div>
                <span className={`${hireDevStyles.hireDevNumberContent}`}>
                  {HireDeveloperPageText.HireDeveloperHeroNum3Title}
                </span>
              </div>

              <br />
            </div>

          </div>

          <div>
            {/* <VideoComponent
                videoSrc={"/HomePageImages/HomePageVideo.mp4"}
                videoWidth={"500"}
                videoHeight={"600"} */}
            <Image src="/HireDeveloperImages/hiring3.png" alt="" height={300} width={400} />

          </div>
        </div>
      </section>
      <section style={commonStyle.sectionMargin}>
        <div className={hireDevStyles.TrustedCompaniesSection}>
          <div className={hireDevStyles.TrustedCompaniesContainer}>
            {HireDeveloperPageText.BottomImagesHeading}
          </div>
          <div className={hireDevStyles.trusedCompanies}>
            <Image
              className={hireDevStyles.amazon}
              src={`/HireDeveloperImages/company_1.png`}
              alt="Logo"
              height={20}
              width={70}
            // style={{marginTop:"0px", borderRadius: "10px" }}
            />
            <Image
              className={hireDevStyles.amazon}
              src={`/HireDeveloperImages/company_4.jpeg`}
              alt="Logo"
              height={20}
              width={60}
            // style={{ borderRadius: "10px" }}
            />
            <Image
              className={hireDevStyles.amazon}
              src={`/HireDeveloperImages/company_5.jpg`}
              alt="Logo"
              height={20}
              width={70}
            // style={{ borderRadius: "10px" }}
            />
            {/* <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_6.png`}
                  alt="Logo"
                  height={20}
                  width={70}
                style={{ marginTop:"-0px" }}
                />
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_8.jpeg`}
                  alt="Logo"
                  height={20}
                  width={70}
                  style={{ marginTop:"-0px" }}
                /> */}
            <Image
              className={hireDevStyles.amazon}
              src={`/HireDeveloperImages/company_9.jpg`}
              alt="Logo"
              height={20}
              width={70}
            // style={{ borderRadius: "10px" }}
            />
            <Image
              className={hireDevStyles.amazon}
              src={`/HireDeveloperImages/company_11.jpg`}
              alt="Logo"
              height={20}
              width={50}
            // style={{ borderRadius: "10px" }}
            />
            <Image
              className={hireDevStyles.amazon}
              src={`/HireDeveloperImages/company_12.jpeg`}
              alt="Logo"
              height={20}
              width={60}
            // style={{ borderRadius: "10px" }}
            />
            <Image
              className={hireDevStyles.amazon}
              src={`/HireDeveloperImages/company_13.jpg`}
              alt="Logo"
              height={20}
              width={70}
            // style={{ borderRadius: "10px" }}
            />
            <Image
              className={hireDevStyles.amazon}
              src={`/HireDeveloperImages/company_10.jpeg`}
              alt="Logo"
              height={20}
              width={50}
            // style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </section>
      <main>
        <section id={hireDevStyles.wholeContainer}>
          <section id={hireDevStyles.superchargeContainer} >
            {/* <div style={{ width: "80vw", margin: "auto" }}> */}
            <HireDevSectionWithImageAndIcon
              imageUrl={"/HireDevImages/superCharge.png"}
              altText={"WhySkillsCapitalDev"}
              Imgheight={550}
              Imgwidth={520}
              order="imageRight"
              pointsIcons={HireDeveloperPageText.superChargePointsIcons}
              heading={HireDeveloperPageText.superchargeHiringHeading}
              subHeading={HireDeveloperPageText.superchargeHiringSubHeading}
              noOfPoints={3}
              points={[
                HireDeveloperPageText.superchargeHiringPoint1,
                HireDeveloperPageText.superchargeHiringPoint2,
                HireDeveloperPageText.superchargeHiringPoint3,
              ]}
              paraPoints={HireDeveloperPageText.superChargeParaPoints}
              noOflogoImages={3}
              logoImagesUrl={[`1`, "2", "3"]}
              buttonEnable={false}
            />
            {/* </div> */}
          </section>
          <section id={hireDevStyles.LaserFocusContainer}>
            <HireDevSectionWithImageAndIcon
              imageUrl={"/HireDevImages/TeamGood.png"}
              altText={"WhySkillsCapitalDev"}
              Imgheight={600}
              Imgwidth={550}
              order="imageLeft"
              pointsIcons={HireDeveloperPageText.perfectMatchPointsIcons}
              heading={HireDeveloperPageText.perfectMatchHeading}
              subHeading={HireDeveloperPageText.superchargeHiringSubHeading}
              noOfPoints={3}
              points={[
                HireDeveloperPageText.perfectMatchPoint1,
                HireDeveloperPageText.perfectMatchPoint2,
                HireDeveloperPageText.perfectMatchPoint3,
              ]}
              paraPoints={HireDeveloperPageText.perfectMatchParaPoints}
              noOflogoImages={3}
              logoImagesUrl={[`1`, "2", "3"]}
              buttonEnable={false}
            />
          </section>
        </section>
      </main>
      <section id={hireDevStyles.fontpop}>
        <div style={{textAlign:"center"}}> 
          <div id={hireDevStyles.scalableGrowthHeading}>
            Flexibility and Scalability for Your SAP Projects
          </div>
          <div className={hireDevStyles.scalableSubheading}>Tailored Talent Solutions to Match Your Unique Business Needs, Project Size and Complexity</div>
        </div>
        <div id={hireDevStyles.scalableGrowth}>
          <div id={hireDevStyles.scalableGrowthInner}>
          </div>
          <div id={hireDevStyles.scalableGrowthInner2}>
            <div style={{ display: "flex", gap: "10px" }}>
              <div>
                <Image src="/HireDevImages/team.png" alt="" height={50} width={50} />
              </div>
              <div id={hireDevStyles.mosteinnerContainer}>
                <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div>
                <div className={hireDevStyles.scalableSubheading}>Whether you&apos;re embarking on a small-scale SAP implementation or a large-scale transformation, we offer flexible team compositions to suit your project scope. From solo consultants to cross-functional teams, we adapt to meet your needs.</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <div>
                <Image src="/HireDevImages/expertise.jpg" alt="" height={50} width={50} />
              </div>
              <div id={hireDevStyles.mosteinnerContainer}>
                <div id={hireDevStyles.scalableGrowthHeading}>On-Demand Expertise</div>
                <div className={hireDevStyles.scalableSubheading}>Scale your SAP initiatives dynamically with our on-demand talent pool. Need additional resources for a specific phase of your project? We&apos;ve got you covered. Our flexible hiring model allows you to access expertise precisely when you need it.</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <div>
                <Image src="/HireDevImages/engagement.jpg" alt="" height={50} width={50} />
              </div>
              <div id={hireDevStyles.mosteinnerContainer}>
                <div id={hireDevStyles.scalableGrowthHeading}>Customized Engagement Models</div>
                <div className={hireDevStyles.scalableSubheading}>Choose from range of engagement models that align with your project requirements and budget. Whether you prefer project-based engagements, dedicated resources, or outcome-driven model, we offer solutions to ensure project&apos;s success.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={hireDevStyles.fontpopBelow}>
        <div id={hireDevStyles.selectbar}>
          <div style={selected === "Comprehensive" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
            <div style={{ padding: "30px" }} onClick={() => setSelected("Comprehensive")}>Comprehensive Onboarding</div>
          </div>
          <div style={selected === "Continuous" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
            <div style={{ padding: "30px" }} onClick={() => setSelected("Continuous")}>Continuous Collaboration</div>
          </div>
          <div style={selected === "Proactive" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
            <div style={{ padding: "30px" }} onClick={() => setSelected("Proactive")}>Proactive Support</div>
          </div>
          <div style={selected === "Knowledge" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
            <div style={{ padding: "30px" }} onClick={() => setSelected("Knowledge")}>Knowledge Transfer</div>
          </div>
        </div>
      </section>
      {selected === "Comprehensive" && <section id={hireDevStyles.fontpop2}>
        <div id={hireDevStyles.scalableGrowth2}>
          <div id={hireDevStyles.scalableGrowthInner}>

            <Image src="/HireDevImages/onboarding.avif" style={{ padding: "80px" }} alt="" height={200} width={300} />
          </div>
          <div id={hireDevStyles.scalableGrowthInner2}>
            <div style={{ display: "flex", gap: "10px" }}>
              <div id={hireDevStyles.mosteinnerContainer}>
                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                <div className={hireDevStyles.scalableSubheading}>Benefit from a streamlined onboarding process that ensures our talent seamlessly integrates into your project environment. From initial setup to knowledge transfer, we handle all aspects to minimize disruptions and maximize productivity.</div>
              </div>
            </div>


          </div>
        </div>
      </section>}
      {selected === "Continuous" && <section id={hireDevStyles.fontpop2}>
        <div id={hireDevStyles.scalableGrowth2}>
          <div id={hireDevStyles.scalableGrowthInner}>

            <Image src="/HireDevImages/collaburation.avif" style={{ padding: "80px" }} alt="" height={200} width={200} />
          </div>
          <div id={hireDevStyles.scalableGrowthInner2}>
            <div style={{ display: "flex", gap: "10px" }}>
              <div id={hireDevStyles.mosteinnerContainer}>
                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                <div className={hireDevStyles.scalableSubheading}>Experience uninterrupted collaboration with our dedicated project managers and consultants. We maintain open communication channels to address any issues or concerns promptly and ensure alignment with your project goals.</div>
              </div>
            </div>


          </div>
        </div>
      </section>}
      {selected === "Proactive" && <section id={hireDevStyles.fontpop2}>
        <div id={hireDevStyles.scalableGrowth2}>
          <div id={hireDevStyles.scalableGrowthInner}>

            <Image src="/HireDevImages/supportHire.jpg" style={{ padding: "80px" }} alt="" height={200} width={200} />
          </div>
          <div id={hireDevStyles.scalableGrowthInner2}>
            <div style={{ display: "flex", gap: "10px" }}>
              <div id={hireDevStyles.mosteinnerContainer}>
                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                <div className={hireDevStyles.scalableSubheading}>Stay ahead of challenges with proactive support and regular check-ins from our team. We proactively identify potential bottlenecks and offer proactive solutions to keep your project on track and within budget.</div>
              </div>
            </div>


          </div>
        </div>
      </section>}
      {selected === "Knowledge" && <section id={hireDevStyles.fontpop2}>
        <div id={hireDevStyles.scalableGrowth2}>
          <div id={hireDevStyles.scalableGrowthInner}>

            <Image src="/HireDevImages/transfer.jpg" style={{ padding: "80px" }} alt="" height={200} width={200} />
          </div>
          <div id={hireDevStyles.scalableGrowthInner2}>
            <div style={{ display: "flex", gap: "10px" }}>
              <div id={hireDevStyles.mosteinnerContainer}>
                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                <div className={hireDevStyles.scalableSubheading}>Leverage our expertise not just for the duration of your project but for long-term knowledge transfer. We ensure that insights gained during the project are documented and shared with your internal team to foster ongoing learning and development.</div>
              </div>
            </div>


          </div>
        </div>
      </section>}

      <section id={hireDevStyles.insightsection}>
        <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>Attributes of Our Elite SAP Talent</div>
        <div id={css.insightOuter}>
          <div id={hireDevStyles.insight}>
            <div style={{ fontWeight: "600" }}>Expertise in SAP Modules</div>
            <div>Our talent possesses deep knowledge and hands-on experience in various SAP modules, including but not limited to SAP ECC, S/4HANA, SAP Business One, SAP CRM, SAP SCM, and SAP HR.</div>
          </div>
          <div id={hireDevStyles.insight}>
            <div style={{ fontWeight: "600" }}>Technical Proficiency</div>
            <div>Our SAP professionals are skilled in SAP technical areas such as ABAP development, SAP Basis, SAP Fiori/UI5, SAP BW/BI, SAP HANA, and more, ensuring smooth implementation and customization of SAP solutions.</div>
          </div>
          <div id={hireDevStyles.insight}>
            <div style={{ fontWeight: "600" }}>Functional Competence</div>
            <div>With expertise in functional areas like finance and controlling (FICO), materials management (MM), sales and distribution (SD), production planning (PP) etc., our talent can address diverse project requirements.</div>
          </div>

        </div>
        <div id={css.insightOuter}>
          <div id={hireDevStyles.insight}>
            <div style={{ fontWeight: "600" }}>Industry Knowledge</div>
            <div>Our SAP experts bring industry-specific knowledge and experience across sectors such as manufacturing, healthcare, retail, finance, and telecom, enabling tailored SAP solutions aligned with industry best practices.</div>
          </div>
          <div id={hireDevStyles.insight}>
            <div style={{ fontWeight: "600" }}>Role Types</div>
            <div>Our SAP talent encompasses wide range of roles, including developers, consultants, architects, project managers, and architects. Each role brings a unique set of skills and experience to cater to diverse project needs.</div>
          </div>
          <div id={hireDevStyles.insight}>
            <div style={{ fontWeight: "600" }}>Project Types</div>
            <div>Our professionals have hands-on experience in various types of SAP projects, including design, implementation, enhancements, migration, support etc., ensuring adaptability and proficiency to address varied requirements.</div>
          </div>

        </div>
      </section>
      {/* <section id={hireDevStyles.fontpop}>
        <div id={hireDevStyles.scalableGrowth3}>
          <div id={hireDevStyles.scalableGrowthInner2}>

            <div id={hireDevStyles.scalableGrowthHeading}>
              Ensuring Excellence: Assessing SAP Talent
            </div>
            <div className={hireDevStyles.scalableSubheading}>Meticulous assessment to ensure the proficiency, compatibility, and overall suitability of our SAP talent.</div>

          </div>
          <div >
            <div id={hireDevStyles.boxContainer}>
              <div id={hireDevStyles.boxes}>
                <Image src="/HireDevImages/transfer.jpg" style={{ padding: "80px" }} alt="" height={100} width={100} />
                <div>Technical Competency</div>
                <div>Thorough assessment of SAP skills and knowledge.</div>
              </div>
              <div id={hireDevStyles.boxes}>
                <Image src="/HireDevImages/transfer.jpg" style={{ padding: "80px" }} alt="" height={100} width={100} />
                <div>Professional Experience</div>
                <div>Verification of past work experience and project achievements.</div>
              </div>
              <div id={hireDevStyles.boxes}>
                <Image src="/HireDevImages/transfer.jpg" style={{ padding: "80px" }} alt="" height={100} width={100} />
                <div>Cultural Fit</div>
                <div>Evaluation of alignment with company values and team dynamics.</div>
              </div>
            </div>
            <div id={hireDevStyles.boxContainer}>
              <div id={hireDevStyles.boxes2}>
                <Image src="/HireDevImages/transfer.jpg" style={{ padding: "80px" }} alt="" height={100} width={100} />
                <div>Cultural Fit</div>
                <div>Evaluation of alignment with company values and team dynamics.</div>
              </div>
              <div id={hireDevStyles.boxes2}>
                <Image src="/HireDevImages/transfer.jpg" style={{ padding: "80px" }} alt="" height={100} width={100} />
                <div>Cultural Fit</div>
                <div>Evaluation of alignment with company values and team dynamics.</div>
              </div>
              <div id={hireDevStyles.boxes2}>
                <Image src="/HireDevImages/transfer.jpg" style={{ padding: "80px" }} alt="" height={100} width={100} />
                <div>Cultural Fit</div>
                <div>Evaluation of alignment with company values and team dynamics.</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section id={hireDevStyles.fontpop3}>

        <div id={hireDevStyles.OuterContainer}>
          <div id={hireDevStyles.boxSelector}>

            <section id={hireDevStyles.fontpopBelow}>
              <div id={hireDevStyles.selectbar}>
                <div className={hireDevStyles.eachbutton} >
                  <div style={{ padding: "30px" }} onClick={() => setSelectedtwo("AI-Vetted")}>AI-Vetted</div>
                  <LensIcon style={selectedtwo === "AI-Vetted" ? { color: "yellow" } : { color: "grey" }} />
                </div>
                <div className={hireDevStyles.eachbutton} >
                  <div style={{ padding: "30px" }} onClick={() => setSelectedtwo("Certified")}>Certified</div>
                  <LensIcon style={selectedtwo === "Certified" ? { color: "yellow" } : { color: "grey" }} />
                </div>
                <div className={hireDevStyles.eachbutton} >
                  <div style={{ padding: "30px" }} onClick={() => setSelectedtwo("Accomplished")}>Accomplished</div>
                  <LensIcon style={selectedtwo === "Accomplished" ? { color: "yellow" } : { color: "grey" }} />
                </div>
                <div className={hireDevStyles.eachbutton} >
                  <div style={{ padding: "30px" }} onClick={() => setSelectedtwo("On-Demand")}>On-Demand</div>
                  <LensIcon style={selectedtwo === "On-Demand" ? { color: "yellow" } : { color: "grey" }} />
                </div>
                <div className={hireDevStyles.eachbutton} >
                  <div style={{ padding: "30px" }} onClick={() => setSelectedtwo("Versatile")}>Versatile</div>
                  <LensIcon style={selectedtwo === "Versatile" ? { color: "yellow" } : { color: "grey" }} />
                </div>
                <div className={hireDevStyles.eachbutton} >
                  <div style={{ padding: "30px" }} onClick={() => setSelectedtwo("Future-Ready")}>Future-Ready</div>
                  <LensIcon style={selectedtwo === "Future-Ready" ? { color: "yellow" } : { color: "grey" }} />
                </div>
              </div>
            </section>
            {selectedtwo === "AI-Vetted" && <section id={hireDevStyles.selectboxContent}>
              <div>Our SAP professionals are meticulously vetted through advanced AI-driven processes. These procedures are designed to assess their technical proficiency with precision and thoroughness.</div>
              <div>We guarantee the expertise of our SAP professionals, ensuring they possess the requisite skills and knowledge to excel in their roles. Through AI-driven evaluations, we ascertain their proficiency and expertise, fostering confidence in their capabilities.</div>
            </section>}
            {selectedtwo === "Certified" && <section id={hireDevStyles.selectboxContent}>
              <div>Our talent possesses certifications from SAP, affirming their expertise and proficiency in the relevant domain.</div>
              <div>Additionally, they hold certifications from other reputable institutions, further substantiating their skill set and knowledge.</div>
            </section>}
            {selectedtwo === "Accomplished" && <section id={hireDevStyles.selectboxContent}>
              <div>Our consultants possess extensive practical knowledge gained through years of actively implementing, customizing, and supporting SAP systems, ensuring a deep understanding of the platform&apos;s nuances and capabilities.</div>
              <div>With their seasoned background, our consultants offer invaluable insights and solutions, leveraging their wealth of experience to tackle complex challenges and drive successful SAP implementations and support initiatives.</div>
            </section>}
            {selectedtwo === "On-Demand" && <section id={hireDevStyles.selectboxContent}>
              <div>Access our pool of SAP talent tailored to your project requirements. Whether you need short-term assistance or long-term collaboration, we offer customizable engagement models to suit your needs.</div>
              <div>Benefit from our swift deployment process. Our SAP experts are ready to integrate seamlessly into your project, ensuring timely delivery and efficient utilization of resources.</div>
            </section>}
            {selectedtwo === "Versatile" && <section id={hireDevStyles.selectboxContent}>
              <div>Our talent possesses a comprehensive range of skills encompassing various SAP modules and cutting-edge technologies, ensuring versatility in meeting diverse project needs effectively.</div>
              <div>With the ability to swiftly adapt to different requirements, our talent seamlessly integrates their expertise across various platforms and technologies, guaranteeing optimal performance and success in every endeavor.</div>
            </section>}
            {selectedtwo === "Future-Ready" && <section id={hireDevStyles.selectboxContent}>
              <div>Our team remains abreast of the latest SAP trends and innovations through ongoing education and training, ensuring they possess the skills necessary to navigate evolving technology landscapes effectively.</div>
              <div>By staying updated with emerging SAP trends and innovations, our talent cultivates the flexibility and proficiency needed to tackle dynamic technological environments, ensuring our readiness for future challenges.</div>
            </section>}

          </div>
        </div>
      </section>
      <FotterComponent />
    </div>
  )
}

export default Hire
