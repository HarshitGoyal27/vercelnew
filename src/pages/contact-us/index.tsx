import React from 'react'
import { useState, useEffect } from 'react';
import css from "../../styles/subreq.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { Button, TextField } from '@mui/material';
import { FooterPageText, SubreqPageText } from '@/constants/texts';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import style from "../../styles/contactPageStyle.module.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Navbar from '@/components/molecules/navbar';
import FotterComponent from '@/components/molecules/Fotter';
import emailjs from 'emailjs-com';
import Letstalk from '@/components/molecules/Contact';
const Contact = () => {
    const [reci, setRecipient] = useState('');
    const [body, setBody] = useState('');
    const onSendMail = () => {
        const recipient = reci;
        const subject = 'Subject of the email';
        const Body = body;
        console.log('ABc', reci);
        const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(Body)}`;
        const anchor = document.createElement('a');
        // anchor.href = mailtoUrl;
        // anchor.click();
        // window.open
        setTimeout(() => {
            window.open(mailtoUrl, '_blank');
        }, 100);
    }
    const handleInputChange = (e: any) => {
        console.log(e.target.value)
        setRecipient(e.target.value);
    }

    const handleBody = (e: any) => {
        console.log(e.target.value);
        setBody(e.target.value);
    }
    return (
        <div>
            <Navbar />
            <div className="wrapper contactus">
                {/* <!-- welcome Section  --> */}
                <div className="aboutusSection ">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Contact US</h2>

                            </div>
                        </div>
                    </section>
                </div>
                {/* <!-- contact Section  --> */}
                <div className="contactSection ">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-6 contactForm">
                                <h2>LET&apos;S TALK </h2>
                                <h4>Get in touch with us today to explore how our specialized tech ecosystem platform can elevate your business</h4>
                                <div className="contactCont">
                                    <form>
                                        <div className="form-group">
                                            {/* <!--  <label for="firstName">First Name</label> --> */}
                                            <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                                        </div>
                                        <div className="form-group">
                                            {/* <!--<label for="lastName">Last Name</label> --> */}
                                            <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                                        </div>
                                        <div className="form-group">
                                            {/* <!--<label for="email">Email Address</label> --> */}
                                            <input type="email" className="form-control" id="email" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            {/* <!--<label for="phone">Phone Number</label> --> */}
                                            <input type="tel" className="form-control" id="phone" placeholder="Phone" />
                                        </div>
                                        <div className="form-group">
                                            {/* <!--<label for="message">Message</label> --> */}
                                            <textarea className="form-control" id="message" rows={5} placeholder="Message"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>


                                </div>
                            </div>
                            <div className="col-md-6 contactsection">
                                <h2>Connect with us </h2>
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <h3>Email</h3>
                                    </div>
                                    <div className="col-md-6 ">
                                        <h3>Whatapp</h3>
                                    </div>
                                </div>

                            </div>




                        </div>
                    </section>
                </div>

                <div className="officeSection ">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Our Offices</h2>
                            </div>
                            <div className="col-md-4 ">
                                <div className="officeAddress">
                                    <h4>US OFFICE</h4>
                                    <p >5580 Merlin Court<br />Avila Beach. CA 93424<br />California, United States</p>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="officeAddress">
                                    <h4>UK OFFICE</h4>
                                    <p >145-157 St John Street,<br />London, EC1V 4PY<br />United Kingdom</p>
                                </div>
                            </div>

                            <div className="col-md-4 ">
                                <div className="officeAddress">
                                    <h4>GERMANY OFFICE</h4>
                                    <p >Griebenowstr. 10-11<br />10435 Berlin<br />Germany</p>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="officeAddress">
                                    <h4>BELGIUM OFFICE</h4>
                                    <p >Stoachup<br />Rue du Stampia 35<br />5310 Eghezée<br />Belgium</p>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="officeAddress">
                                    <h4>BRAZIL OFFICE</h4>
                                    <p >Rua Theodoro Makiolka, 1239<br />Stanta Cândida<br />82640-010 Curitiba, Paraná<br />Brazil</p>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="officeAddress">
                                    <h4>INDIA OFFICE</h4>
                                    <p >B1/H3, Mohan Estate,<br />Industrial Area,<br />New Delhi - 110044<br />India</p>
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
                        </div>
                    </section>
                </div>

            </div>
            <div>
                <FotterComponent />
            </div>
        </div>
    )
}

export default Contact;
