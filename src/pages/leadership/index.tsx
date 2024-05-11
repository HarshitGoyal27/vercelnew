import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { DEV_PUBLIC_URL } from "../../../configs/auth";
import Chip from "@mui/material/Chip";
import leadershipimg from "../../assets/images/Leadership/Leaderimg.webp";
import vince from "../../assets/images/Leadership/vince.jpeg";
import dan from "../../assets/images/Leadership/dan.jpeg";
import william from "../../assets/images/Leadership/William Shin.jpeg";
import uwe from "../../assets/images/Leadership/uwe.jpg";
import fedrico from "../../assets/images/Leadership/fedrico.jpeg";
import christope from "../../assets/images/Leadership/Christophe.jpeg";
import olaf from "../../assets/images/Leadership/Olaf Rabe.jpg";
import pradeep from "../../assets/images/Leadership/Pradeep Kumar Singh.jpeg";
import kamal from "../../assets/images/Leadership/kamal.jpeg";
import Abhishek from "../../assets/images/Leadership/abhishek.jpeg";
import rajiv from "../../assets/images/Leadership/Rajiv Talwar.jpeg";
import atul from "../../assets/images/Leadership/atul.jpg";
import ashish from "../../assets/images/Leadership/Ashish Jadhav.jpg";
import pawan from "../../assets/images/Leadership/pawangupta.jpg"
import css from "../../styles/leadershipPageStyle.module.css";
import Image from "next/image";
import { LeadershipText } from "../../constants/texts";
//import leadershipStyles from "./../../styles/leadershipStyles.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import CardActions from '@mui/material/CardActions';
import Navbar from "@/components/molecules/navbar";
import FotterComponent from "@/components/molecules/Fotter";

export default function Leadership() {
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
                <div className="aboutusSection ">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Leadership Team</h2>
                                <p className="leadershipText">Led by Industry Veterans, the leadership team has combined more than 100+ years of experience in Enterprise Software, having worked for top Fortune 500 Companies such as IBM, Accenture, PwC, Deloitte, Hewlett Packard etc. The team have worked with many of the top companies, including many Fortune 1000 as clients such as IBM, Trilogy, ESW Capital, J.P Morgan, British Telecom, Siemens, BNP Paribas, Nomura, Bank of America, Blackrock, British Telecom, BSkyB, Three etc. on SAP transformation, technology innovation, digital transformation and legacy modernization projects.</p>

                            </div>
                        </div>
                    </section>
                </div>



                {/* <!-- mission Section  --> */}
                <div className="teamSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Meet Our Executive Team</h2>
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
                                    <div className="teamImg"><img src="images/dan.png" alt="Dan Schwartz" className="img-fluid" /> </div>
                                    <div className="teamText">
                                        <h4>Dan Schwartz</h4>
                                        <h5>Executive VP (Sales)</h5>
                                        <p>MBA - Loyola University, Maryland</p>
                                        <p className="exwork">EEx-Trilogy, Ignite Technologies, Gensym, ARINC Inc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="teamCont">
                                    <div className="teamImg"><img src="images/WilliamShin.png" alt="William Shin" className="img-fluid" /> </div>
                                    <div className="teamText">
                                        <h4>William Shin</h4>
                                        <h5>Executive VP (Transformation)</h5>
                                        <p>MS Operations Research - University of California, Berkley</p>
                                        <p className="exwork">Ex-HP, Infosys, DXC, PwC, IBM</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-12 margin80">
                                <h2>Meet Our Execution Team</h2>
                            </div>
                            <div className="col-md-4 ">
                                <div className="teamCont">
                                    <div className="teamImg"><img src="images/uwe.png" alt="Uwe Utecht" className="img-fluid" /> </div>
                                    <div className="teamText">
                                        <h4>Uwe Utecht</h4>
                                        <h5>Director Innovation</h5>
                                        <p>Phd Neural Computer Science - Berlin Technical University</p>
                                        <p className="exwork">Ex-Siemens, NDR, BBC Technologies</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="teamCont">
                                    <div className="teamImg"><img src="images/fedrico.png" alt="Federico Yáñez" className="img-fluid" /> </div>
                                    <div className="teamText">
                                        <h4>Federico Yáñez</h4>
                                        <h5>Director Consulting</h5>
                                        <p>Master Degree - La Salle Int. Graduate School, Spain</p>
                                        <p className="exwork">Ex-Everis U.K, Accenture</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="teamCont">
                                    <div className="teamImg"><img src="images/Christophe.png" alt="Christophe Druet" className="img-fluid" /> </div>
                                    <div className="teamText">
                                        <h4>Christophe Druet</h4>
                                        <h5>Director Transformation</h5>
                                        <p>MBA - London Business School</p>
                                        <p className="exwork">x-Elia Group, ENTSO-E, La Miam, University of Liège</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 ">
                                <div className="teamCont">
                                    <div className="teamImg"><img src="images/OlafRabe.png" alt="Olaf Rabe" className="img-fluid" /> </div>
                                    <div className="teamText">
                                        <h4>Olaf Rabe</h4>
                                        <h5>Director Sales</h5>
                                        <p>MBA - University of Hamburg</p>
                                        <p className="exwork">Ex-Trilogy, Aurea, DuPoint</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="teamCont">
                                    <div className="teamImg"><img src="images/PradeepKumarSingh.png" alt="Pradeep Singh" className="img-fluid" /> </div>
                                    <div className="teamText">
                                        <h4>Pradeep Singh</h4>
                                        <h5>Director Engineering</h5>
                                        <p>B.Tech Computer Science - IIT Delhi</p>
                                        <p className="exwork">x-HCL, Times Internet, Mobisoc, SpiceLabs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="teamCont">
                                    <div className="teamImg"><img src="images/kamal.png" alt="Kamal Sharma" className="img-fluid" /> </div>
                                    <div className="teamText">
                                        <h4>Kamal Sharma</h4>
                                        <h5>Director Delivery</h5>
                                        <p>B.Sc - London University</p>
                                        <p className="exwork">Ex-Polaris, SCA, Click Software</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="teamCont">
                                    <div className="teamImg"><img src="images/nullimage.png" alt="Charu Agarwal" className="img-fluid" /> </div>
                                    <div className="teamText">
                                        <h4>Charu Agarwal</h4>
                                        <h5>Director HR</h5>
                                        <p>BBA - CCS University</p>
                                        <p className="exwork">Ex-Eximat Group</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="teamCont">
                                    <div className="teamImg"><img src="images/abhishek.png" alt="Abhishek Jain" className="img-fluid" /> </div>
                                    <div className="teamText">
                                        <h4>Abhishek Jain</h4>
                                        <h5>Director Projects</h5>
                                        <p>B.Tech - NIT Kurushetra</p>
                                        <p className="exwork">Ex-Wipro, TCS, Ramco Infotech</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="teamCont">
                                    <div className="teamImg"><img src="images/RajivTalwar.png" alt="Rajiv Talwar" className="img-fluid" /> </div>
                                    <div className="teamText">
                                        <h4>Rajiv Talwar</h4>
                                        <h5>Director L&amp;D</h5>
                                        <p>MBA - IMT Ghaziabad</p>
                                        <p className="exwork">Ex-Telenor India, Bharti Airtel</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="teamCont">
                                    <div className="teamImg"><img src="images/pawangupta.png" alt="Pawan Gupta" className="img-fluid" /> </div>
                                    <div className="teamText">
                                        <h4>Pawan Gupta</h4>
                                        <h5>Director Technology</h5>
                                        <p>MBA London Business School</p>
                                        <p className="exwork">Ex-Trilogy, Accenture, IBM, Hewlett Packard, Siemens</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="teamCont">
                                    <div className="teamImg"><img src="images/atul.png" alt="Atul Jain" className="img-fluid" /> </div>
                                    <div className="teamText">
                                        <h4>Atul Jain</h4>
                                        <h5>Director Operations</h5>
                                        <p>SMP - IIM Ahemadabad</p>
                                        <p className="exwork">Ex-GE Capital, Acrotend, TCS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="teamCont">
                                    <div className="teamImg"><img src="images/AshishJadhav.png" alt="Ashish Jadhav" className="img-fluid" /> </div>
                                    <div className="teamText">
                                        <h4>Ashish Jadhav</h4>
                                        <h5>Technology Lead</h5>
                                        <p> Tech - IIT Delhi</p>
                                        <p className="exwork">Ex-Trident, London Strategy & Consulting Group</p>
                                    </div>
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
    )
}