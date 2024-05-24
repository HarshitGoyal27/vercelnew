import Navbar from '@/components/molecules/navbar'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FotterComponent from '@/components/molecules/Fotter';
const RemotejsDevPage = () => {
  const setting = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    // infinite: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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

  const settingTwo = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    mobileFirst: true,
    // infinite: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="css/fonts.css" rel="stylesheet"/>
    <link href="css/reset.css" rel="stylesheet"/>
    <link href="css/style.css" rel="stylesheet"/>
    <link href="css/responsive.css" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <Navbar/>
      <div className="wrapper hjd">
        {/* <!-- capabilitiesSection --> */}
        <div className="capabilitiesSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-8">
                <div className="homesapExpertise" >
                  <h2>Remote <span>JavaScript developer</span> jobs with US companies</h2>
                  <p>Work from home as a JavaScript developer with top US companies and earn in USD. We at Turing are looking for experienced JavaScript developers who can implement JavaScript applications with an emphasis on optimization, API design, and architecture.</p>
                  <div className="hireSap"><a className="hire" href="#">Apply as JavaScript developer</a></div>
                  <div className="font16">Check out the best jobs for May 2024 <a href="#">here</a></div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bannerImg">
                  <img src="images/banner02.png" alt="ELEVATE YOUR TECH CAPABILITIES" className="img-fluid" />

                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="clientlogoText">Find remote software jobs with hundreds of Turing clients</div>
                <div className="clientlogo"><img src="images/logo01.jpg" alt="logo" className="img-fluid" /> <img src="images/logo02.jpg" alt="logo" className="img-fluid" /> <img src="images/logo03.jpg" alt="logo" className="img-fluid" /> <img src="images/logo04.jpg" alt="logo" className="img-fluid" /> <img src="images/logo05.jpg" alt="logo" className="img-fluid" /> </div>

              </div>
            </div>
          </section>
        </div>
        {/* <!-- Job description Section --> */}
        <div className="JobDescriptionSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-8">
                <div className="jobDescCont">
                  <h2>Job description</h2>
                  <h3>Job responsibilities</h3>
                  <ul>
                    <li>Review existing designs and modify features accordingly</li>
                    <li>Enhance applications performance, speed, and scalability</li>
                    <li>Perform code analysis, requirements analysis, and software reliability analysis</li>
                    <li>Coordinate with UI/UX designers to ensure technical feasibility</li>
                    <li>Collaborate with other team members and stakeholders</li>

                  </ul>
                  <h3>Minimum requirements</h3>
                  <ul>
                    <li>Bachelor’s/Master’s degree in Computer Science (or equivalent experience)</li>
                    <li>3+ years of experience as a JavaScript Developer (rare exceptions for highly skilled developers)</li>
                    <li>Experience with other JS libraries like Backbone.js, Angular.js, Node.js, and other frameworks</li>
                    <li>Familiar with web development tools, Git, jQuery, and Bootstrap</li>
                    <li>Familiar with JavaScript module loaders, such as Require.js and AMD</li>
                    <li>Proficient with HTML5 and CSS3</li>
                  </ul>
                  <h3>Preferred skills</h3>
                  <ul>
                    <li>Experience with asynchronous request handling, partial page updates, and AJAX</li>
                    <li>Familiar with browser rendering behavior and performance</li>
                    <li>Experience with responsive designs for desktop/mobile</li>
                    <li>Ability to function individually and in a team</li>
                    <li>In-depth understanding of the entire web development process</li>

                  </ul>
                  <div className="jobDescCtaBtnFrame">
                    <div className="jobDescCtaCont">
                      <h5>Interested in this job?</h5>
                      <p>Apply to Turing today.</p>
                    </div>
                    <a href="#">Apply now</a>

                  </div>
                </div>

              </div>
              <div className="col-md-4">
                <div className="jobDescRight">
                  <Slider {...setting} className=" jobDescSlider ">
                    <div className="slide ">
                      <div className="slideCont">
                        <div className="imgCont"><img src="images/avatar1.png" alt="avatar" className="img-fluid" /></div>
                        <h4>Ermal Kosovo</h4>
                        <h5>JavaScript developer </h5>
                        <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                      </div>
                    </div>
                    <div className="slide ">
                      <div className="slideCont">
                        <div className="imgCont"><img src="images/avatar1.png" alt="avatar" className="img-fluid" /></div>
                        <h4>Ermal Kosovo</h4>
                        <h5>JavaScript developer </h5>
                        <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                      </div>
                    </div>
                    <div className="slide ">
                      <div className="slideCont">
                        <div className="imgCont"><img src="images/avatar1.png" alt="avatar" className="img-fluid" /></div>
                        <h4>Ermal Kosovo</h4>
                        <h5>JavaScript developer </h5>
                        <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                      </div>
                    </div>
                  </Slider>

                  <div className="rightBottom">
                    <div className="baseSection">
                      <h4>Based on your skills</h4>
                      <ul className="skillList">
                        <li>
                          <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Angular</span></a>
                        </li>
                        <li>
                          <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>React Native</span></a>
                        </li>
                        <li>
                          <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>HTML</span></a>
                        </li>
                        <li>
                          <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>React/Node</span></a>
                        </li>
                        <li>
                          <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Bootstrap</span></a>
                        </li>
                        <li>
                          <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Angular/Node</span></a>
                        </li>
                        <li>
                          <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Angular/Node</span></a>
                        </li>
                      </ul>
                    </div>
                    <div className="baseSection">
                      <h4>Based on your role</h4>
                      <ul className="skillList">
                        <li>
                          <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Mobile </span></a>
                        </li>
                        <li>
                          <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Data Scientist</span></a>
                        </li>
                      </ul>
                    </div>
                    <div className="baseSection">
                      <h4>Based on your skills</h4>
                      <ul className="skillList">
                        <li>
                          <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Sr. Full-stack Developer</span></a>
                        </li>
                        <li>
                          <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Sr. Software Developer</span></a>
                        </li>
                        <li>
                          <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Sr. Java Developer</span></a>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>

        {/* <!-- Supercharge Section --> */}
        <div className="superchargeSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12 ">
                <div className="">
                  <h2>Why join <span>Skill India</span>?</h2>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="superchargeCont">
                  <span className="number">1</span>
                  <div className="superchargeHeading"><h3>Elite US Jobs</h3></div>
                  <div className="superchargeText">Turing’s developers earn better than market pay in most countries, working with top US companies.</div>

                </div>
              </div>
              <div className="col-md-4 ">
                <div className="superchargeCont">
                  <span className="number">2</span>
                  <div className="superchargeHeading"><h3>Career Growth</h3></div>
                  <div className="superchargeText">Grow rapidly by working on challenging technical and business problems on the latest technologies.</div>

                </div>
              </div>
              <div className="col-md-4 ">
                <div className="superchargeCont">
                  <span className="number">3</span>
                  <div className="superchargeHeading"><h3>Developer success support</h3></div>
                  <div className="superchargeText">While matched, enjoy 24/7 developer success support.</div>

                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <!--latest post Section --> */}
        <div className="latestpostSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12 ">
                <h2>Latest posts from Turing</h2>

                <Slider {...settingTwo} className="  latestpostSlider ">
                  <div className="slide ">
                    <div className="slideCont">
                      <div className="imgCont"><img src="images/post01.jpg" alt="Six Popular JavaScript Frameworks" className="img-fluid" /></div>
                      <h5>Six Popular JavaScript Frameworks</h5>
                      <p >This post lists the best JavaScript frameworks to help you make the best choice for your project. Read more to..</p>
                      <div className="readmore"><a href="">Read More</a></div>
                    </div>
                  </div>
                  <div className="slide ">
                    <div className="slideCont">
                      <div className="imgCont"><img src="images/post01.jpg" alt="Six Popular JavaScript Frameworks" className="img-fluid" /></div>
                      <h5>Six Popular JavaScript Frameworks</h5>
                      <p >This post lists the best JavaScript frameworks to help you make the best choice for your project. Read more to..</p>
                      <div className="readmore"><a href="">Read More</a></div>
                    </div>
                  </div>
                  <div className="slide ">
                    <div className="slideCont">
                      <div className="imgCont"><img src="images/post01.jpg" alt="Six Popular JavaScript Frameworks" className="img-fluid" /></div>
                      <h5>Six Popular JavaScript Frameworks</h5>
                      <p >This post lists the best JavaScript frameworks to help you make the best choice for your project. Read more to..</p>
                      <div className="readmore"><a href="">Read More</a></div>
                    </div>
                  </div>
                  <div className="slide ">
                    <div className="slideCont">
                      <div className="imgCont"><img src="images/post01.jpg" alt="Six Popular JavaScript Frameworks" className="img-fluid" /></div>
                      <h5>Six Popular JavaScript Frameworks</h5>
                      <p >This post lists the best JavaScript frameworks to help you make the best choice for your project. Read more to..</p>
                      <div className="readmore"><a href="">Read More</a></div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </section>
        </div>





        {/* <!-- Supercharge Section --> */}
        <div className="superchargeSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12 ">
                <div className="">
                  <h2>How to become a Skill India developer?</h2>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="superchargeCont">
                  <span className="number">1</span>
                  <div className="superchargeHeading"><h3>Create your profile</h3></div>
                  <div className="superchargeText">Fill in your basic details - Name, location, skills, salary, & experience.</div>

                </div>
              </div>
              <div className="col-md-3 ">
                <div className="superchargeCont">
                  <span className="number">2</span>
                  <div className="superchargeHeading"><h3>Take our tests</h3></div>
                  <div className="superchargeText">Solve questions and appear for technical interview.</div>

                </div>
              </div>
              <div className="col-md-3 ">
                <div className="superchargeCont">
                  <span className="number">3</span>
                  <div className="superchargeHeading"><h3>Receive job offers</h3></div>
                  <div className="superchargeText">Get matched with the best US and Silicon Valley companies.</div>

                </div>
              </div>
              <div className="col-md-3 ">
                <div className="superchargeCont">
                  <span className="number">3</span>
                  <div className="superchargeHeading"><h3>Start working</h3></div>
                  <div className="superchargeText">Once you join Turing, you’ll never have to apply for another job.</div>

                </div>
              </div>
              <div className="col-md-12 ">
                <div className="applyNow">
                  <a href="#" className="">Apply now</a>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- perfect resume Section --> */}
        <div className=" perfectResumeSection ventureSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-7">
                <div className="venturCont" >
                  <h2>Learn how to create a perfect resume</h2>

                  <p>Turing.com lists out the do’s and don’ts behind a great resume to help you find a top remote JavaScript developer job.</p>
                  <div ><a href="#" className="contButton">Learn More</a></div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="bannerImg">
                  <img src="images/ventre-img.png" alt="Next Venture" className="img-fluid" />

                </div>
              </div>
            </div>
          </section>
        </div>


        {/* <!-- faq Section --> */}
        <div className="faqSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12 ">
                <div className="">
                  <h2>Frequently Asked Questions</h2>
                </div>

              </div>
              <div className="col-md-4 ">
                <div className="faqCont">
                  <ul>
                    <li>
                      <span><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                      <h5>How to get a job as a JavaScript developer?</h5>
                      <p>Becoming a JavaScript developer is not hard. Ensure you have a sound grip on the front-end skills and good command of programming languages like CSS and HTML and frameworks like Angular and React. If you aspire to become a JavaScript developer, log in to Turing and pass the developer test.</p>
                    </li>
                    <li>
                      <span><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                      <h5>Can I get a job with just JavaScript?</h5>
                      <p>Yes, without any hassle, you can get a job. If you have a good knowledge of JavaScript and are updated to the latest version with the efficiency to use it, then visit Turing.com and take its test to explore exciting remote job opportunities in top U.S. companies.</p>
                    </li>
                    <li>
                      <span><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                      <h5>What kind of developers does Turing hire?</h5>
                      <p>We, at Turing, hire remote developers for over 100 skills like React/Node, Python, Angular, Swift, React Native, Android, Java, Rails, Golang, PHP, Vue, among several others. We also hire engineers based on tech roles and seniority.</p>
                    </li>
                  </ul>
                </div>

              </div>
              <div className="col-md-4 ">
                <div className="faqCont">
                  <ul>
                    <li>
                      <span><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                      <h5>How to get a job as a JavaScript developer?</h5>
                      <p>Becoming a JavaScript developer is not hard. Ensure you have a sound grip on the front-end skills and good command of programming languages like CSS and HTML and frameworks like Angular and React. If you aspire to become a JavaScript developer, log in to Turing and pass the developer test.</p>
                    </li>
                    <li>
                      <span><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                      <h5>Can I get a job with just JavaScript?</h5>
                      <p>Yes, without any hassle, you can get a job. If you have a good knowledge of JavaScript and are updated to the latest version with the efficiency to use it, then visit Turing.com and take its test to explore exciting remote job opportunities in top U.S. companies.</p>
                    </li>
                    <li>
                      <span><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                      <h5>What kind of developers does Turing hire?</h5>
                      <p>We, at Turing, hire remote developers for over 100 skills like React/Node, Python, Angular, Swift, React Native, Android, Java, Rails, Golang, PHP, Vue, among several others. We also hire engineers based on tech roles and seniority.</p>
                    </li>
                  </ul>
                </div>

              </div>
              <div className="col-md-4 ">
                <div className="faqCont">
                  <ul>
                    <li>
                      <span><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                      <h5>How to get a job as a JavaScript developer?</h5>
                      <p>Becoming a JavaScript developer is not hard. Ensure you have a sound grip on the front-end skills and good command of programming languages like CSS and HTML and frameworks like Angular and React. If you aspire to become a JavaScript developer, log in to Turing and pass the developer test.</p>
                    </li>
                    <li>
                      <span><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                      <h5>Can I get a job with just JavaScript?</h5>
                      <p>Yes, without any hassle, you can get a job. If you have a good knowledge of JavaScript and are updated to the latest version with the efficiency to use it, then visit Turing.com and take its test to explore exciting remote job opportunities in top U.S. companies.</p>
                    </li>
                    <li>
                      <span><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                      <h5>What kind of developers does Turing hire?</h5>
                      <p>We, at Turing, hire remote developers for over 100 skills like React/Node, Python, Angular, Swift, React Native, Android, Java, Rails, Golang, PHP, Vue, among several others. We also hire engineers based on tech roles and seniority.</p>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </section>
        </div>
        {/* <!--latest post Section --> */}
        <div className="latestpostSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12 ">
                <h2>Latest posts from Turing</h2>

                <Slider {...settingTwo} className="  latestpostSlider ">
                  <div className="slide ">
                    <div className="slideCont">
                      <div className="imgCont"><img src="images/post01.jpg" alt="Six Popular JavaScript Frameworks" className="img-fluid" /></div>
                      <h5>Six Popular JavaScript Frameworks</h5>
                      <p >This post lists the best JavaScript frameworks to help you make the best choice for your project. Read more to..</p>
                      <div className="readmore"><a href="">Read More</a></div>
                    </div>
                  </div>
                  <div className="slide ">
                    <div className="slideCont">
                      <div className="imgCont"><img src="images/post01.jpg" alt="Six Popular JavaScript Frameworks" className="img-fluid" /></div>
                      <h5>Six Popular JavaScript Frameworks</h5>
                      <p >This post lists the best JavaScript frameworks to help you make the best choice for your project. Read more to..</p>
                      <div className="readmore"><a href="">Read More</a></div>
                    </div>
                  </div>
                  <div className="slide ">
                    <div className="slideCont">
                      <div className="imgCont"><img src="images/post01.jpg" alt="Six Popular JavaScript Frameworks" className="img-fluid" /></div>
                      <h5>Six Popular JavaScript Frameworks</h5>
                      <p >This post lists the best JavaScript frameworks to help you make the best choice for your project. Read more to..</p>
                      <div className="readmore"><a href="">Read More</a></div>
                    </div>
                  </div>
                  <div className="slide ">
                    <div className="slideCont">
                      <div className="imgCont"><img src="images/post01.jpg" alt="Six Popular JavaScript Frameworks" className="img-fluid" /></div>
                      <h5>Six Popular JavaScript Frameworks</h5>
                      <p >This post lists the best JavaScript frameworks to help you make the best choice for your project. Read more to..</p>
                      <div className="readmore"><a href="">Read More</a></div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </section>
        </div>


        {/* <!--remote developer Section --> */}
        <div className="remoteDeveloperSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12 ">
                <h2>Explore remote developer jobs</h2>
              </div>
              <div className="col-md-6 ">
                <div className="remotedeveloperCont">
                  <h3><i className="fa fa-suitcase" aria-hidden="true"></i>Remote Senior Fullstack Programmer</h3>
                  <p>A renowned US-based client is seeking a committed Full-stack Developer to join their dynamic team.</p>
                  <p>This opportunity is tailor-made for professionals who excel in crafting innovative solutions and strive to be at the forefront of AI progress. Collaborate with various firms focused on developing cutting-edge AI solutions for commercial and research purposes.</p>
                  <div className="employeesNumber"><i className="fa fa-users" aria-hidden="true"></i> <span> 1-10 employees</span></div>
                  <div className="skillCard"><span>Python</span><span>JavaScript</span><span>Typescript</span></div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="remotedeveloperCont">
                  <h3><i className="fa fa-suitcase" aria-hidden="true"></i>Remote Swift Developer</h3>
                  <p>A renowned US-based client is seeking a committed Full-stack Developer to join their dynamic team.</p>
                  <p>This opportunity is tailor-made for professionals who excel in crafting innovative solutions and strive to be at the forefront of AI progress. Collaborate with various firms focused on developing cutting-edge AI solutions for commercial and research purposes.</p>
                  <div className="employeesNumber"><i className="fa fa-users" aria-hidden="true"></i> <span> 1-10 employees</span></div>
                  <div className="skillCard"><span>Python</span><span>JavaScript</span><span>Typescript</span></div>
                </div>
              </div>
              <div className="col-md-12 ">
                <div className="applyNow">
                  <a href="#" className="">View more openings</a>
                </div>
              </div>
            </div>
          </section>
        </div>


        {/* <!--bottom search skill Section --> */}
        <div className="bottomSearchSkillSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12 ">
                <div className="baseSection">
                  <h4>Based on your skills</h4>
                  <ul className="skillList">
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Angular</span></a>
                    </li>
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>React Native</span></a>
                    </li>
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>HTML</span></a>
                    </li>
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>React/Node</span></a>
                    </li>
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Bootstrap</span></a>
                    </li>
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Angular/Node</span></a>
                    </li>
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Angular/Node</span></a>
                    </li>
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Angular</span></a>
                    </li>
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>React Native</span></a>
                    </li>
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>HTML</span></a>
                    </li>
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>React/Node</span></a>
                    </li>
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Bootstrap</span></a>
                    </li>
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Angular/Node</span></a>
                    </li>
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Angular/Node</span></a>
                    </li>
                  </ul>
                  <div ><a href="">+ See more skills</a></div>
                </div>
                <div className="baseSection">
                  <h4>Based on your role</h4>
                  <ul className="skillList">
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Angular</span></a>
                    </li>
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>React Native</span></a>
                    </li>
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>HTML</span></a>
                    </li>
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>React/Node</span></a>
                    </li>
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Bootstrap</span></a>
                    </li>
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Angular/Node</span></a>
                    </li>
                    <li>
                      <a href="#"> <img src="images/skill-icon01.png" alt="Angular" /><span>Angular/Node</span></a>
                    </li>
                  </ul>
                </div>
                <div className="baseSection">
                  <h4>Based on your career trajectory</h4>
                  <ul className="skillList">
                    <li>
                      <a href="#"> <i className="fa fa-file"></i><span>Software Engineer</span></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-file"></i><span>Software Developer</span></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-file"></i><span>Senior Engineer</span></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-file"></i><span>Senior Architect</span></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-file"></i><span>Tech Lead Manager</span></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-file"></i><span>VP of Software Engineering</span></a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>



        {/* <!-- work full time Section --> */}
        <div className="hjdBottomSliderSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12 ">
                <Slider {...setting} className="hjdBottomSlider">
                  <div className="slide ">
                    <div className="slideCont">
                      <h2>Ranked no. 1 in The Information&apos;s &quot;50 Most Promising Startups of 2021&quot; in the B2B category</h2>
                    </div>
                  </div>
                  <div className="slide ">
                    <div className="slideCont">
                      <h2>Turing helps entrepreneurs tap into the global talent pool to hire elite, pre-vetted remote engineers at the push of a button</h2>
                    </div>
                  </div>
                  <div className="slide ">
                    <div className="slideCont">
                      <h2>Turing books $87M at a $1.1B valuation to help source, hire and manage engineers remotely</h2>
                    </div>
                  </div>
                  <div className="slide ">
                    <div className="slideCont">
                      <h2>Turing named to Fast Company&apos;s World&apos;s Most Innovative Companies 2021 for placing remote devs at top firms via AI-powered vetting</h2>
                    </div>
                  </div>
                  <div className="slide ">
                    <div className="slideCont">
                      <h2>Turing named one of America&apos;s Best Startup Employers for 2022 by Forbes</h2>
                    </div>
                  </div>

                </Slider>
              </div>
            </div>
          </section>
        </div>



        {/* <!-- work full time Section --> */}
        <div className="workFullTimeSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12 ">
                <h2>Work full-time at top U.S.<br />companies</h2>
                <p>Create your profile, pass Skill India Tests and get job offers as early as 2 weeks.</p>
                <div className="applyNow">
                  <a href="#" className="">Apply now</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <FotterComponent/>
    </div>
  )
}

export default RemotejsDevPage
