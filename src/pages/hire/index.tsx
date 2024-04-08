import { HireDeveloperPageText, HomePageText } from '@/constants/texts'
import React from 'react'
import hireDevStyles from "./../../styles/hireDevStyles.module.css";
import IconTextButton from '@/components/atoms/ButtonWithIcon';
import CustomButton2 from '@/components/atoms/CustomButton2';
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import Navbar from '@/components/molecules/navbar';
import Image from 'next/image';
import homePageStyle from "../../styles/homePageStyles.module.css";
import Link from 'next/link';
import commonStyle from '@/constants/commonStyle';
import HireDevSectionWithImageAndIcon from '@/components/molecules/HireDevSectionWithImageAndIcon';
import FotterComponent from '@/components/molecules/Fotter';
const Hire = () => {
    const HireDeveloperClicked = () => {
        // router.push("/search-developers");
      };
    return (
        <div>
            <Navbar/>
            <section id={homePageStyle.avideoContainer} >
          <div className={homePageStyle.flexCenter}>
            <div className={homePageStyle.topContentSection}>
              <h1 className={homePageStyle.homePageMainHeading}>
              {HireDeveloperPageText.HireDeveloperHeroHeading}
                {/* <div>{HomePageText.heading_4}</div> */}
              </h1>

              <h2 className={homePageStyle.homePageMainSubHeading}>
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
              <br/>
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
            <FotterComponent/>
        </div>
    )
}

export default Hire
