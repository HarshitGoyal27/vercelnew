import React, { useEffect, useRef, useState } from 'react'
import css from "../../styles/subreq.module.css";
import Link from 'next/link';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
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
import { PUBLIC_KEY, SERVER_ID, TEMPLATE_ID } from '../../../configs/auth';
const Contact = () => {
    
    const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e:any) => {
    e.preventDefault();
    // console.log(e.target.value)
    if (form.current) {
        emailjs
      .sendForm(SERVER_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
    
  };
    return (
        <div>
            <Navbar />
            <div className={style.step2container}>

                <div className={style.step2innercontainer}>
                    <div className={style.leftContainet} >
                        <div className={style.heading}>Lets get in touch</div>
                        <div className={style.coninfo}>
                            <div className={style.flex}><LocationOnIcon /> {FooterPageText.address1} {FooterPageText.address2}</div>
                            <div className={style.flex}><EmailIcon /> {FooterPageText.email}</div>
                            {/* <div className={style.flex}><LocalPhoneIcon/> {FooterPageText.phone}</div> */}
                        </div>
                        <div className={style.coninfo2}>
                            <a href="#" className={css.socialIcon}>
                                <TwitterIcon sx={{ color: "black" }} />
                            </a>
                            <a href="#" className={css.socialIcon}>
                                <FacebookIcon sx={{ color: "black" }} />
                            </a>
                            <a href="#" className={css.socialIcon}>
                                <InstagramIcon sx={{ color: "black" }} />
                            </a>
                            <a href="https://www.linkedin.com/company/skillscapital/" target="_blank" className={css.socialIcon}>
                                <LinkedInIcon sx={{ color: "black" }} />
                            </a>
                            {/* Add more social media icons as needed */}
                        </div>
                    </div>
                    <div className={css.fieldcontainer}>
                        <form ref={form} onSubmit={sendEmail} className={css.fieldinnercontainer}>
                            <div className={css.enterdetails} >Enter Details</div>
                            <div>
                                <div className={css.namecontainer}>Name*</div>
                                <TextField
                                    placeholder="Enter Your Name"
                                    name="name"
                                    sx={{ width: "300px" }}
                                // value={ClientData.Name}
                                    
                                />
                            </div>
                            <div>
                                <div className={css.namecontainer}>Email*</div>
                                <TextField
                                    placeholder="Enter Your Email"
                                    name="email"
                                    sx={{ width: "300px" }}
                                // value={ClientData.Email}
                                // onChange={handleInputChange}
                                
                                />
                            </div>
                            <div>
                                <div className={css.namecontainer}>Phone*</div>
                                <TextField
                                    placeholder="Enter Your Phone"
                                    name="phone"
                                    sx={{ width: "300px" }}
                                // value={ClientData.Email}
                                // onChange={handleInputChange}
                                
                                />
                            </div>
                            <div>
                                <div className={css.namecontainer}>Message*</div>
                                <textarea name="message" cols={46} rows={3} style={{ height: "80px", width: "300px", borderColor: "lightgray", borderRadius: "5px" }} ></textarea>
                                {/* <label htmlFor="">Message</label> */}
                            </div>
                            <Button
                                // onClick={onNextStep} 
                                // disabled={!ClientData.workType || !ClientData.Name || !ClientData.Email}
                                type='submit'
                                style={{ width: "190px", padding: "15px 15px", borderRadius: "45px" }}
                                variant="contained">
                                send
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <FotterComponent />
            </div>
        </div>
    )
}

export default Contact;
