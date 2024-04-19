import Navbar from '@/components/molecules/navbar';
import React from 'react'
import sapficoStyle from "../../styles/sapficoTalentHubStyle.module.css";
import CustomButton2 from '@/components/atoms/CustomButton2';
import Image from 'next/image';
import FotterComponent from '@/components/molecules/Fotter';
const sapfico = () => {
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
            <FotterComponent/>
    </div>
  )
}

export default sapfico;
