import Navbar from "@/components/molecules/navbar";
import React from "react";
import aboutPageStyles from "./../../styles/aboutPageStyles.module.css";
import {
  AboutUsText,
} from "@/constants/texts";
import Image from "next/image";
import talentPoolStyles from "./../../styles/talentPoolStyles.module.css";
import HireDevSectionWithImageAndIcon from "@/components/molecules/HireDevSectionWithImageAndIcon";
import FotterComponent from "@/components/molecules/Fotter";

const AboutUs = () => {
  return (
    <>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
      <link href="css/fonts.css" rel="stylesheet" />
      <link href="css/reset.css" rel="stylesheet" />
      <link href="css/style.css" rel="stylesheet" />
      <link href="css/responsive.css" rel="stylesheet" />
      <Navbar />
      <div className="wrapper">
        {/* <!-- welcome Section  --> */}
        <div className="aboutusSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">
                <h2>Welcome to <span>Skills Capital</span></h2>
                <p className="welcomeText">where we revolutionize the tech talent landscape with our AI-powered solutions. At SkillsCapital, we are passionate about connecting businesses with top-notch SAP and specialized tech professionals to drive innovation and success.</p>

              </div>
            </div>
          </section>
        </div>

        {/* <!-- mission Section  --> */}
        <div className="missionSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">
                {/* <!--<h2>Mission &amp; Vision</h2> --> */}
              </div>
              <div className="col-md-5">
                <div className="missionSectionText">
                  <span className="missionImg"><img src="images/icon21.png" alt="Our Mission" /> </span>
                  <h3>Our Mission</h3>
                  <p>At SkillsCapital, our mission is to empower businesses with access to curated talent pools, streamline talent acquisition processes, and foster a thriving tech community that fuels growth and innovation.</p>
                </div>
              </div>
              <div className="col-md-1">

              </div>
              <div className="col-md-5">
                <div className="missionSectionText">
                  <span className="missionImg"><img src="images/icon22.png" alt="Our Vision" /> </span>
                  <h3>Our Vision</h3>
                  <p>We envision a future where businesses can easily tap into a diverse pool of skilled professionals, seamlessly matching their project requirements with the right talent, and achieving remarkable outcomes.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <!-- mission Section  --> */}
        <div className="missionSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">
                <h2>What Sets Us Apart</h2>
              </div>
              <div className="col-md-3 aprtSectionText color01">
                <div className="">
                  <h3>AI-Powered Talent Solutions</h3>
                  <p>Leveraging cutting-edge AI algorithms, we deliver precise talent matches tailored to your project needs, ensuring efficiency and effectiveness.</p>
                </div>
              </div>
              <div className="col-md-3 aprtSectionText color02">
                <div className="">
                  <h3>Curated Talent Pools</h3>
                  <p>Our talent pools consist of pre-vetted and certified SAP and specialized tech professionals, enabling businesses to access top-tier talent seamlessly.</p>
                </div>
              </div>
              <div className="col-md-3 aprtSectionText color04">
                <div className="">
                  <h3>Industry Expertise</h3>
                  <p>With years of experience in the tech industry, our team understands the unique challenges and requirements of businesses across various sectors, providing customized solutions that drive results.</p>
                </div>
              </div>
              <div className="col-md-3 aprtSectionText color05">
                <div className="">
                  <h3>Commitment to Quality</h3>
                  <p>We are committed to delivering excellence in every aspect of our services, from talent acquisition to ongoing support, ensuring unparalleled satisfaction for our clients.</p>
                </div>
              </div>
            </div>
          </section>
        </div>


        {/* <!-- solutions Section  --> */}
        <div className="solutionsSection">
          <section className="container mt-4 ">
            <div className="row ">
              <div className="col-md-12">
                <h2>Our Solutions</h2>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-6  ">
                <div className="solutionText">
                  <img src="images/soultionimg011.png" alt="Talent Matching and Connection" />
                  <h3>Talent Matching and Connection</h3>
                  <p>We connect businesses with the right talent through advanced algorithms and personalized matchmaking services.</p>

                </div>
              </div>
              <div className="col-md-6  ">
                <div className="solutionText">
                  <img src="images/sol021.png" alt="Skill Development and Enhancement" />
                  <h3>Skill Development and Enhancement</h3>
                  <p>We provide learning resources and mentorship opportunities to help professionals enhance their skills and stay competitive in the ever-evolving tech landscape.</p>

                </div>
              </div>
            </div>


          </section>
        </div>


        {/* <!-- scalableSection section  --> */}
        <div className="assessingSection ourvalue">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">
                <h2>Our Values</h2>

              </div>
              <div className="col-md-4">
                <div className="assessingCont">
                  <h5>Innovation-Driven</h5>
                  <img src="images/icon51.png" alt="Innovation-Driven" className="img-fluid" /><br />
                  <p>Commitment to pioneering solutions that redefine industry standards and foster growth.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="assessingCont">
                  <h5>Integrity and Transparency</h5>
                  <img src="images/icon52.png" alt="Integrity and Transparency" className="img-fluid" /><br />
                  <p>Building trust through honesty, transparency and clear communication in all our actions.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="assessingCont">
                  <h5>Customer Centricity</h5>
                  <img src="images/icon53.png" alt="Customer Centricity" className="img-fluid" /><br />
                  <p>Tailoring our approach to meet unique customer needs, ensuring satisfaction and success.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="assessingCont">
                  <h5>Adaptability and Agility</h5>
                  <img src="images/icon54.png" alt="Adaptability and Agility" className="img-fluid" /><br />
                  <p>Navigating market changes with flexibility, ensuring responsive and timely solutions.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="assessingCont">
                  <h5>Excellence and Quality</h5>
                  <img src="images/icon55.png" alt="Excellence and Quality" className="img-fluid" /><br />
                  <p>Committing to highest standards in every aspect of our work to deliver exceptional value.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="assessingCont">
                  <h5>Empowerment and Leadership</h5>
                  <img src="images/icon56.png" alt="Empowerment and Leadership" className="img-fluid" /><br />
                  <p>Fostering an environment where every team member is empowered and encouraged to lead and innovate.</p>
                </div>
              </div>
            </div>
          </section>
        </div>


        {/* <!-- mission Section  --> */}
        <div className="quantifiedSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-3">
                <h2>Excellence Quantified</h2>
                <h3>Empowering Your Vision with Unmatched Expertise and Dedicated Success</h3>
              </div>

              <div className=" col-md-3 lineleft quantifiedCont">
                <img src="images/excellenceicon011.png" alt="Tech Leadership Exeperience" />
                <h4>100+ Years </h4>
                <p>of SAP &amp; Specialized Tech Leadership Exeperience</p>
              </div>
              <div className=" col-md-3 lineleft quantifiedCont">
                <img src="images/excellenceicon021.png" alt="Leaership's Client Experience" />
                <h4>20+ Numbers </h4>
                <p>of Fortune 500 Leaership&apos;s Client Experience</p>
              </div>
              <div className=" col-md-3 lineleft quantifiedCont">
                <img src="images/excellenceicon031.png" alt="Elite Pre-Vetted Tech Talent" />
                <h4>1000+ Profiles </h4>
                <p>of On-Demand Ready to Deploy Elite Pre-Vetted Tech Talent</p>
              </div>


            </div>
          </section>
        </div>

        {/* <!-- mission Section  --> */}
        <div className="teamSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">
                <h2>Our Executive Team</h2>
              </div>
              <div className="col-md-4 ">
                <div className="teamCont">
                  <div className="teamImg"><img src="images/vince.png" alt="Vince Ostrosky" className="img-fluid" /> </div>
                  <div className="teamText">
                    <h4>Vince Ostrosky</h4>
                    <h5>Executive VP (Strategy)</h5>
                    <p>MBA - Wharton Business School</p>
                    <p className="exwork">Ex-IBM, PwC, Deloitte, Hewlett Packard, Alorica</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="teamCont">
                  <div className="teamImg"><img src="images/dan.png" alt="Vince Ostrosky" className="img-fluid" /> </div>
                  <div className="teamText">
                    <h4>Dan Schwartz</h4>
                    <h5>Executive VP (Sales)</h5>
                    <p>MBA - Loyola University, Maryland</p>
                    <p className="exwork">Ex-Trilogy, Ignite Technologies, Gensym, ARINC Inc.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="teamCont">
                  <div className="teamImg"><img src="images/WilliamShin.png" alt="Vince Ostrosky" className="img-fluid" /> </div>
                  <div className="teamText">
                    <h4>William Shin</h4>
                    <h5>Executive VP (Transformation)</h5>
                    <p>MS Operations Research - University of California, Berkley</p>
                    <p className="exwork">Ex-HP, Infosys, DXC, PwC, IBM</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>





        {/* <!-- client Section  --> */}
        <div className="clientCont mediaCont">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">
                <h2>Our Coverage by Leading Media</h2>
                <h4>SkillsCapital Revolutionizes SAP and Specialized Talent Landscape</h4>
              </div>

            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="images/media01.png" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="images/media02.png" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="images/media03.png" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="images/media04.png" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="images/media05.png" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="images/media06.png" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="images/media07.png" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="images/media08.png" alt="logo" className="img-fluid" />
                </div>
              </div>
            </div>
          </section>
        </div>





        {/* <!-- client Section  --> */}
        <div className="clientCont">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">
                <h2>Our Leadership&apos;s Client Work<br />A Chronicle of Success</h2>
              </div>

            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="images/logo01.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="images/logo02.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="images/logo03.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="images/logo04.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="images/logo05.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="images/logo06.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="images/logo07.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="images/logo08.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>

              <div className="col-md-3">
                <div className="logoCont">
                  <img src="images/logo09.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="images/logo10.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="images/logo11.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="images/logo12.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>


            </div>
          </section>
        </div>

      </div>
      <FotterComponent />
    </>
  );
};

export default AboutUs;