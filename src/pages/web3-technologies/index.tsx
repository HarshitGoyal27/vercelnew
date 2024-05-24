import FotterComponent from '@/components/molecules/Fotter'
import Navbar from '@/components/molecules/navbar'
import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const WebTechnoPage = () => {
    const [select, setSelect] = useState("enter");
    const [selectbtn, setSelectbtn] = useState("Blockchain");
    const setting = {
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        // arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    return (
        <div>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            <link href="css/fonts.css" rel="stylesheet" />
            <link href="css/reset.css" rel="stylesheet" />
            <link href="css/style.css" rel="stylesheet" />
            <link href="css/responsive.css" rel="stylesheet" />
            <Navbar />
            <div className="wrapper web3Tech ">
                {/* <!-- welcome Section  --> */}
                <div className="transformSection ">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12 ">
                                <h2>Transform Your Enterprise From <span>Web 2 To Web 3</span></h2>
                            </div>
                        </div>
                        <div className="row transformCont">
                            <div className="col-md-4 transformHeadCont">
                                <div className="transformHead">
                                    <ul>
                                        <li className={select==="enter"?"active":""} onClick={()=>setSelect("enter")}><h5>Enterprise Grade Blockchain Solutions</h5></li>
                                        <li className={select==="global"?"active":""} onClick={()=>setSelect("global")}><h5>Global Startup Product Partners</h5></li>
                                        <li className={select==="white"?"active":""} onClick={()=>setSelect("white")}><h5>White Label Digital Marketplace</h5></li>

                                    </ul>
                                </div>

                            </div>
                            <div className="col-md-8 transformBodyCont ">
                                <div className="transformBody">
                                    <ul>
                                        <li className={select==="enter"?"active":""}>
                                            <h3>Enterprise Grade Blockchain Solutions</h3>
                                            <p>Get safe and easy access to genuine service providers to grow and expand your business in India such as Corporate services, Sourcing services, freight, accounting, CHAs and much more.</p>
                                            <p><a href="#">Read More</a></p>
                                        </li>
                                        <li className={select==="global"?"active":""}>
                                            <h3>Global Startup Product Partners</h3>
                                            <p>Get assistance for company formation in India. Also get help related to various legal as well as other documentation for Government approvals. Get your business running in India with us.</p>
                                            <p><a href="#">Read More</a></p>
                                        </li>
                                        <li className={select==="white"?"active":""}>
                                            <h3>White Label Digital Marketplace</h3>
                                            <p>Get access to verified manufacturers and suppliers of your products from India and import high-quality products in the most efficient and economic way possible.</p>
                                            <p><a href="#">Read More</a></p>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </section>
                </div>

                <div className="blockchainSection ">
                    <section className="container mt-4 ">
                        <div className="row blockchainCont">
                            <div className="col-md-12 tblockchainHeadCont">
                                <div className="blockchainHead">
                                    <ul>
                                        <li className={selectbtn==="Blockchain"?"active":""} onClick={()=>setSelectbtn("Blockchain")}><h5>Blockchain</h5></li>
                                        <li className={selectbtn==="Machine"?"active":""} onClick={()=>setSelectbtn("Machine")}><h5>Machine Learning</h5></li>
                                        <li className={selectbtn==="Meta"?"active":""} onClick={()=>setSelectbtn("Meta")}><h5>Meta</h5></li>
                                        <li className={selectbtn==="IoT"?"active":""} onClick={()=>setSelectbtn("IoT")}><h5>IoT</h5></li>
                                        <li className={selectbtn==="AR"?"active":""} onClick={()=>setSelectbtn("AR")}><h5>AR &amp; VR</h5></li>
                                        <li className={selectbtn==="Big"?"active":""} onClick={()=>setSelectbtn("Big")}><h5>Big Data</h5></li>

                                    </ul>
                                </div>

                            </div>
                            <div className="col-md-12 blockchainBodyCont ">
                                <div className="blockchainBody">
                                    <ul>
                                        <li className={selectbtn==="Blockchain"?"active":""}>
                                            <div className="leftSide">
                                                <img src="images/blockchain.jpg" alt="Blockchain" className="img-fluid" />
                                            </div>
                                            <div className="rightSide">
                                                <h3>Blockchain</h3>
                                                <p>Are you considering blockchain technology as a solution to a particular business case? Our Web3 consulting services can help you determine the opportunities and hidden risks when using blockchain to develop a business solution.</p>
                                                <p><a href="#">Read More</a></p>
                                            </div>
                                            <div className="clear"></div>
                                        </li>
                                        <li className={selectbtn==="Machine"?"active":""}>
                                            <div className="leftSide">
                                                <img src="images/machine-learning.png" alt="Machine Learning" className="img-fluid" />
                                            </div>
                                            <div className="rightSide">
                                                <h3>Machine Learning</h3>
                                                <p>We engineer practical data-driven algorithms to implement machine learning solutions for startups by separating the AI hype from computational realities. Machine learning is a subset of AI and refers to an AI system that can self-learn using an algorithm and lots of data to make accurate predictions.</p>
                                                <p><a href="#">Read More</a></p>
                                            </div>
                                        </li>
                                        <li className={selectbtn==="Meta"?"active":""}>
                                            <div className="leftSide">
                                                <img src="images/metaverse.png" alt="Meta" className="img-fluid" />
                                            </div>
                                            <div className="rightSide">
                                                <h3>Meta</h3>
                                                <p>We provide end-to-end solutions to facilitate your entry and participation in the metaverse. Metaverse app brings augmented reality experiences to life. You can socialize, learn and collaborate on 3D virtual spaces that are created within a metaverse app</p>
                                                <p><a href="#">Read More</a></p>
                                            </div>
                                        </li>
                                        <li className={selectbtn==="IoT"?"active":""}>
                                            <div className="leftSide">
                                                <img src="images/INTERNET.png" alt="IoT" className="img-fluid" />
                                            </div>
                                            <div className="rightSide">
                                                <h3>IoT</h3>
                                                <p>IoT is not a concept; it is a network of networks. We help startups gather behaviour, activities and sensor-collected data from connected devices. We process this data to develop new services to give your product the competitive advantage.</p>
                                                <p><a href="#">Read More</a></p>
                                            </div>
                                        </li>
                                        <li className={selectbtn==="AR"?"active":""}>
                                            <div className="leftSide">
                                                <img src="images/ar-vr.png" alt="AR &amp; VR" className="img-fluid" />
                                            </div>
                                            <div className="rightSide">
                                                <h3>AR &amp; VR</h3>
                                                <p>They are now the focal point of everything: monitoring production, approving decisions, completing transactions, indoor and outdoor navigation. We help startups determine and execute the best-fit mobile strategy for their products.</p>
                                                <p><a href="#">Read More</a></p>
                                            </div>
                                        </li>
                                        <li className={selectbtn==="Big"?"active":""}>
                                            <div className="leftSide">
                                                <img src="images/big-data.png" alt="Big Data" className="img-fluid" />
                                            </div>
                                            <div className="rightSide">
                                                <h3>Big Data</h3>
                                                <p>Big Data technologies help you take control of your data landscape. We help startups stay a step ahead of competition by gathering actionable insights for their users from every source of data using our Big Data services.</p>
                                                <p><a href="#">Read More</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </section>
                </div>

                {/* <!-- empowerSection  --> */}
                <div className="empowerSection specializedCont">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Global Startup Product Partners</h2>
                                <h4>Get assistance for company formation in India. Also get help related to various legal as well as other documentation for Government approvals. </h4>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-4">
                                <div className="preBoxExplore">
                                    <h5>MVP Development</h5>
                                    <img src="images/mvp-icon-global-partner-1.png" alt="MVP Development" className="img-fluid" />
                                    <p>The ultimate goal is to build right thing that solves primary problem and identify product market fit as early as possible by wisely investing time and money.</p>
                                    <div><a href="">Read More</a> </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="preBoxExplore">
                                    <h5>Technology Migration</h5>
                                    <img src="images/technology-migration-home-icon.png" alt="Technology Migration" className="img-fluid" />
                                    <p>Helping startups to re-engineer and optimize products by assessing existing application, pain areas, and future business goals.</p>
                                    <div><a href="">Read More</a> </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="preBoxExplore">
                                    <h5>Product Advisory</h5>
                                    <img src="images/product-advisory-icon-home.png" alt="Product Advisory" className="img-fluid" />
                                    <p>Offer value-added technology & business consultation to the startups to reduce the risks and increase the chances of success.</p>
                                    <div><a href="">Read More</a> </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>




                <div className="demandSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">


                            </div>
                            <div className="col-md-4">
                                <h2>White Label Digital Marketplace</h2>
                                <p>Get access to verified manufacturers and suppliers of your products from India and import high-quality products in the most efficient and economic way possible.</p>
                            </div>
                            <div className="col-md-8">
                                <ul className="demandInitiatives">
                                    <li>
                                        <span className="imgCont"><img src="images/icon03.png" alt=" Unmatched Quality" /></span>
                                        <h5>Trade Intelligence Portals</h5>
                                        <p>Our Trade Intelligence Portals are a white label solution that offer a comprehensive set of import-export resources.</p>
                                    </li>
                                    <li>
                                        <span className="imgCont"><img src="images/icon04.png" alt=" Immediate Impact" /></span>
                                        <h5>Trading App</h5>
                                        <p>Ready-to-use, with tons of basic and advanced trading functions on board</p>
                                    </li>
                                    <li>
                                        <span className="imgCont"><img src="images/icon05.png" alt="Comprehensive Solutions" /></span>
                                        <h5>Data Acquisition</h5>
                                        <p>Our back-end interfaces provide onboarding capabilities and engagement tools; they offer tracking and analytics on customer behaviour, for use by your salesforce.</p>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </section>
                </div>

                {/* <!-- Specialist Consulting section  --> */}
                <div className=" unleashingSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Web 3.0 Specialist Consulting</h2>
                                <h4>Get super easy access to genuine Indian buyers, detailed demand & price trends insights of your products to export them profitably and effectively to India.</h4>
                            </div>
                            <div className="col-md-4 unleashing color01 ">
                                <img src="images/webicon01.png" alt="White-Label Marketplace" className="img-fluid" /><br />
                                <h5>White-Label Marketplace</h5>
                            </div>
                            <div className="col-md-4 unleashing color02 ">
                                <img src="images/webicon02.png" alt="NFT Origination" className="img-fluid" /><br />
                                <h5>NFT Origination</h5>
                            </div>
                            <div className="col-md-4 unleashing color03 ">
                                <img src="images/webicon03.png" alt="Metaverse Experiences" className="img-fluid" /><br />
                                <h5>Metaverse Experiences</h5>
                            </div>
                            <div className="col-md-4 unleashing color04 ">
                                <img src="images/webicon04.png" alt="Smart Contract" className="img-fluid" /><br />
                                <h5>Smart Contract</h5>
                            </div>
                            <div className="col-md-4 unleashing color05 ">
                                <img src="images/webicon05.png" alt="Wallet Development" className="img-fluid" /><br />
                                <h5>Wallet Development</h5>
                            </div>
                            <div className="col-md-4 unleashing color06 ">
                                <img src="images/webicon06.png" alt="Web Streaming Services" className="img-fluid" /><br />
                                <h5>Web Streaming Services</h5>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="quantifiedSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-3  quantifiedCont">
                                <img src="images/excellenceicon031.png" alt="Project Delivered" />
                                <h4>56+</h4>
                                <h5>Project Delivered</h5>
                            </div>
                            <div className=" col-md-3 lineleft quantifiedCont">
                                <img src="images/excellenceicon021.png" alt="TClients Served" />
                                <h4>26+</h4>
                                <h5>Clients Served</h5>
                            </div>
                            <div className=" col-md-3 lineleft quantifiedCont">
                                <img src="images/excellenceicon011.png" alt="Expert Resources" />
                                <h4>4,000+</h4>
                                <h5>Expert Resources</h5>
                            </div>
                            <div className=" col-md-3 lineleft quantifiedCont">
                                <img src="images/transformation-done-icon-11.png" alt="Transformation Done" />
                                <h4>18+</h4>
                                <h5>Transformation Done</h5>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="discoverSection">
                    <section className="container mt-4 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Learn About How We Help You Get to MetaVerse</h2>
                            </div>
                            <div className="col-md-3   ">
                                <div className="discoverCont">
                                    <h5><span>Build New</span><br />Blockchain Offerings</h5>
                                    <ul>
                                        <li>Exchange Development</li>
                                        <li>Wallet Development</li>
                                        <li>Defi 2.0 Development</li>
                                        <li>NFT Marketplaces Development</li>
                                        <li>Smart Contract Development</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3   ">
                                <div className="discoverCont">
                                    <h5><span>Extend Existing</span><br />Blockchain Solutions</h5>
                                    <ul>
                                        <li>Whitepaper Development</li>
                                        <li>IDO Development</li>
                                        <li>OTC Trading</li>
                                        <li>Margin Trading</li>
                                        <li>Derivatives Trading</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3   ">
                                <div className="discoverCont">
                                    <h5><span>Scale Enterprise</span><br />Blockchain Tech Expertise</h5>
                                    <ul>
                                        <li>Hyperledger</li>
                                        <li>Etherum</li>
                                        <li>Cardano</li>
                                        <li>Polkadot</li>
                                        <li>Binance</li>
                                        <li>Polygon</li>
                                        <li>Cosmos</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 ">
                                <div className="discoverCont">
                                    <h5><span>Transform Business</span><br />BlockChain Enterprise</h5>
                                    <ul>
                                        <li>Global Trade</li>
                                        <li>Supply Chain</li>
                                        <li>Finance</li>
                                        <li>Insurance</li>
                                        <li>Logistics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* <!-- slider Section  --> */}
                <div className="searchSliderCont">
                    <section className="container mt-4 ">
                        <div className="row ">
                            <div className="col-md-12   ">
                                <h2>Success Stories</h2>
                                <Slider {...setting} className="searchSlider">
                                    <div className="slide ">
                                        <div className="slideCont">
                                            {/* <div className="imgCont"><img src="images/Tata-Logo-300x169.png" alt="Tata Group" width="80px" /></div> */}
                                            <h3>Tata Group</h3>
                                            <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                    <div className="slide ">
                                        <div className="slideCont">
                                            {/* <div className="imgCont"><img src="images/Tata-Logo-300x169.png" alt="Tata Group" width="80px" /></div> */}
                                            <h3>Tata Group</h3>
                                            <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                    <div className="slide ">
                                        <div className="slideCont">
                                            {/* <div className="imgCont"><img src="images/Tata-Logo-300x169.png" alt="Tata Group" width="80px" /></div> */}
                                            <h3>Tata Group</h3>
                                            <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                    <div className="slide ">
                                        <div className="slideCont">
                                            {/* <div className="imgCont"><img src="images/Tata-Logo-300x169.png" alt="Tata Group" width="80px" /></div> */}
                                            <h3>Tata Group</h3>
                                            <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </section>
                </div>
                
            </div>
            <FotterComponent />
        </div>
    )
}

export default WebTechnoPage
