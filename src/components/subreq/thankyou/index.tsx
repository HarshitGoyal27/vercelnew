import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import css from "../../../styles/subreq.module.css";
import { SubreqPageText } from '@/constants/texts';
import Navbar from '@/components/molecules/navbar';
import FotterComponent from '@/components/molecules/Fotter';
interface ClientInfo {
    Name: string;
    Email: string;
    workEmail: string;
    Company_name: string;
    contact_number: string;
    meetingDate: string | null;
    Current_Timezone: string | null;
    workType: string;
}
interface SteponeProps {
    ClientData: ClientInfo;
}
const Thankyou = () => {
    return (
        <div>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            <link href="css/fonts.css" rel="stylesheet" />
            <link href="css/reset.css" rel="stylesheet" />
            <link href="css/style.css" rel="stylesheet" />
            <link href="css/responsive.css" rel="stylesheet" />
            <Navbar />
            <div className="wrapper thankyou">
                {/* <!-- welcome Section  --> */}
                <div className="thankyouSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="thankyouCont">
                                    <img src="images/thankyou.png" alt="thank you" className="img-fluid" />
                                    <h3>Thank You for Selecting Your Candidates!</h3>
                                    <h5>We&apos;re on our way to finalizing your team.</h5>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="submitSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="submitCont">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="submitText">
                                                <h3>Your Candidates Have Been Successfully Submitted</h3>
                                                <p>Thank you for selecting your preferred candidates. We have received your submission and are now in the process of finalizing the details to ensure a perfect match for your project needs. Here’s what you can expect next.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="submitContIng">
                                                <img src="images/submited.png" alt="thank you" className="img-fluid" />


                                            </div>
                                        </div>

                                    </div>




                                </div>
                            </div>
                        </div>
                    </section>
                </div>




                <div className="nextStepSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12 ">
                                <h2>Next Steps in Our Process</h2>
                            </div>
                            <div className="col-md-4 ">
                                <div className="nextStepCont">
                                    <h4><span>1. </span>Candidate Engagement</h4>
                                    <p>Our team is currently engaging with the chosen candidates to confirm their availability and readiness to join your project. We aim to complete this step within the next 48 hours.</p>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="nextStepCont">
                                    <h4><span>2. </span>Contract Initiation</h4>
                                    <p>Once candidate availability is confirmed, we will proceed with contract preparations. You will receive all the necessary documentation for your review and approval.</p>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="nextStepCont">
                                    <h4><span>3. </span>Project Kickoff</h4>
                                    <p>With contracts signed and teams ready, we’ll schedule a kickoff meeting to outline project objectives, timelines, and communication protocols, ensuring a smooth start.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>



                <div className="keeptouchSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="keeptouchCont">

                                    <h2>Keep in Touch</h2>
                                    <p>For any questions or further assistance, don’t hesitate to contact us directly.</p>
                                    <div><a href="contact-us">Contact Us </a></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>



            </div>
            <FotterComponent />
        </div>
    )
}

export default Thankyou
