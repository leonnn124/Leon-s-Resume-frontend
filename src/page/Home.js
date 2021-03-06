/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import "./Home.css";
import $ from "jquery";
import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";
const Home = () => {
  useEffect(() => {
    $(".bars").click(function () {
      $(this).toggleClass("close");
      if ($(this).hasClass("close")) {
        $(".navbar-menu").css("right", "0");
      } else $(".navbar-menu").css("right", "-100%");
    });
    $(window).scroll(function () {
      if (this.scrollY > 20) $(".navbar").addClass("stick");
      else $(".navbar").removeClass("stick");
      $(".hideme").each(function () {
        var bottom_of_object = $(this).offset().top; // + $(this).outerHeight()
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
          $(this).animate({ opacity: "0.7" }, 1500);
        }
      });
      $(".hidemid").each(function () {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
          $(this).animate({ opacity: "0.9" }, 500);
        }
      });
      $(".hides").each(function () {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
          $(this).animate({ opacity: "0.9" }, 1000);
        }
      });
    });
  }, []);
  const options = {
    items: 2,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      1105: {
        items: 2,
      },
    },
  };
  return (
    <div>
      <div>
        <nav className="navbar fixed bg-transparent w-full py-4 z-50">
          <div className="inner-width flex items-center justify-between top-0">
            <a href="/" className="Logo w-16 h-11 bg-no-repeat z-50">
              {null}
            </a>
            <button className="md:hidden bars block bg-none w-7 border-0 cursor-pointer relative outline-none z-50">
              <span className="bars block h-0.5 bg-golden my-1 relative"></span>
              <span className="bars block h-0.5 bg-golden my-1 relative"></span>
              <span className="bars block h-0.5 bg-golden my-1 relative"></span>
            </button>
            <div className="navbar-menu font-normal active">
              <a
                href="/"
                className="text-base ml-7 text-golden font-medium hover:text-orange-100 active"
              >
                ABOUT
              </a>
              <a
                href="/"
                className="text-base ml-7 text-golden font-medium hover:text-orange-100 active"
              >
                EXPERIENCES
              </a>
              <a
                href="/"
                className="text-base ml-7 text-golden font-medium hover:text-orange-100 active"
              >
                PROJECT
              </a>
              <a
                href="/"
                className="text-base ml-7 text-golden font-medium hover:text-orange-100 active"
              >
                EDUCATION
              </a>
              <a
                href="/"
                className="text-base ml-7 text-golden font-medium hover:text-orange-100 active"
              >
                SKILLS
              </a>
              <a
                href="/"
                className="text-base ml-7 text-golden font-medium hover:text-orange-100 active"
              >
                ABILITIES
              </a>
            </div>
          </div>
        </nav>
        <section id="Home">
          <div className="inner-width flex items-center justify-center h-full text-center">
            <div className="content">
              <h1 className="text-5xl mt-8 mb-4 after:content-['Leon'] text-golden">
                Hi I'm&nbsp;
              </h1>
              <div className="sm w-full">
                <a
                  href="/"
                  className="text-xl my-3 mx-3 text-golden font-medium hover:text-orange-100 fab fa-facebook-f"
                >
                  {null}
                </a>
                <a
                  href="/"
                  className="text-xl my-3 mx-3 text-golden font-medium hover:text-orange-100 fab fa-twitter"
                >
                  {null}
                </a>
                <a
                  href="/"
                  className="text-xl my-3 mx-3 text-golden font-medium hover:text-orange-100 fab fa-instagram"
                >
                  {null}
                </a>
                <a
                  href="/"
                  className="text-xl my-3 mx-3 text-golden font-medium hover:text-orange-100 fab fa-linkedin-in"
                >
                  {null}
                </a>
                <a
                  href="/"
                  className="text-xl my-3 mx-3 text-golden font-medium hover:text-orange-100 fab fa-youtube"
                >
                  {null}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="About">
          <div className="inner-width">
            <h1 className="section-title text-center pt-12 pb-4 relative text-2xl text-golden">
              ABOUT
            </h1>
            <div className="divider rounded-md border-t-4 border-neutral-300 border-solid m-auto mb-12"></div>
            <div className="about-content flex item-center flex-wrap pt-12">
              <img
                src={require("../assets/Leon.jpg")}
                alt=""
                className="about-pic w-48 md:rounded-xl mx-12 max-h-64 -md:rounded-full -md:h-24 -md:w-24"
              />
              <div className="about-text md:flex-1 mx-12">
                <h2 className="text-2xl pb-4 text-neutral-400">
                  Hi ! I'm Leon
                </h2>
                <p className="text-lg text-justify justify-between flex-wrap mb-10">
                  ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                  <br />
                  <br />
                  ?????????????????????????????????????????????????????????????????????????????????????????????
                  <br />
                  <br />
                  ????????????????????????????????????????????????????????????????????????????????????????????????????????????
                  ????????????????????????????????????
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="Experiences">
          <div className="inner-width float-none relative box-border">
            <h1 className="section-title text-center pt-12 pb-4 relative text-2xl text-golden">
              Experiences
            </h1>
            <div className="divider rounded-md border-t-4 border-neutral-300 border-solid m-auto mb-12"></div>
            <div className="exp-timeline mt-28 overflow-hidden">
              <div className="timeline-item px-2 pl-1 pr-14 float-left mb-8 -mr-3 ml-auto w-full">
                <div className="container float-left w-1/2 relative pr-10 pl-0 text-right timeline-box-right">
                  <div className="table w-full box-border md:text-right">
                    <h3 className="text-golden">????????? - ???????????? / ??????</h3>

                    <p className="text-neutral-400">
                      <br />
                      ?????????????????????????????????????????????????????????
                      <br />
                      ????????????????????????????????????????????????
                      <br />
                      ???????????????????????????????????????????????????
                      <br />
                      ?????????????????????????????????????????????????????????
                      <br />
                      ???????????????????????????????????????????????????????????????
                    </p>
                  </div>
                  <div className="box-circle-l bg-golden w-5 h-5 absolute top-4 md:right-0 left-auto rounded-full mt-4 z-10"></div>
                  <div className="box-tale-l content-[''] absolute md:-right-3 w-0 h-0 box-border"></div>
                  <div className="box-date-l text-right -right-36 md:pl-16 absolute text-golden text-sm top-8 w-full">
                    Aug 2019
                  </div>
                </div>
              </div>
              <div className="timeline-item px-2 pl-10 pr-1 float-left mb-8 -mr-3 ml-auto w-full">
                <div className="container mt-0 float-right w-1/2 relative pr-10 pl-0 text-left timeline-box-left">
                  <div className="table w-full box-border text-left">
                    <h3 className="text-golden">?????? / ????????????</h3>
                    <p className="text-neutral-400">
                      <br />
                      Web????????????App????????????
                      <br />
                      ???????????????????????????
                      <br />
                      ???????????????????????????
                      <br />
                      DevOps???????????????
                      <br />
                      ????????????????????????????????????????????????
                    </p>
                  </div>
                  <div className="box-circle-r bg-golden w-5 h-5 absolute top-4 rounded-full mt-4 z-10"></div>
                  <div className="box-tale-r content-[''] absolute w-0 h-0 box-border"></div>
                  <div className="box-date-r text-left md:-left-36 absolute text-golden text-sm top-8 w-full">
                    Feb 2022
                  </div>
                </div>
              </div>
              {/* <div className="timeline-item px-2 pl-1 pr-14 float-left mb-8 -mr-3 ml-auto w-full">
                <div className="container mt-0 float-left w-1/2 relative pr-10 pl-0 text-right timeline-box-right">
                  <div className="table w-full box-border md:text-right">
                    <h3 className="text-golden">...</h3>
                    <p className="text-neutral-400">
                      <br />
                      ...
                    </p>
                  </div>
                  <div className="box-circle-l bg-golden w-5 h-5 absolute top-4 md:right-0 left-auto rounded-full mt-4 z-10"></div>
                  <div className="box-tale-l content-[''] absolute md:-right-3 w-0 h-0 box-border"></div>
                  <div className="box-date-l text-right -right-36 md:pl-16 absolute text-golden text-sm top-8 w-full">
                    Future ...
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <section id="Project">
          <div className="inner-width">
            <h1 className="section-title text-center pt-12 pb-4 relative text-2xl text-golden">
              Project
            </h1>
            <div className="divider rounded-md border-t-4 border-neutral-300 border-solid m-auto mb-12"></div>
            <OwlCarousel
              options={options}
              className="project owl-sm:mt-28 owl-carousel owl-theme mt-14"
            >
              <div className="pro-item owl-sm:flex h-72">
                <div className="pro-img w-3/12 owl-sm:m-2 mx-auto">
                  <img
                    src={require("../assets/mono.png")}
                    alt=""
                    className="h-32 w-24 m-2"
                  />
                </div>

                <div className="pro-text owl-sm:m-4 w-9/12 mx-auto -owl-lg:text-center">
                  <h2 className="text-2xl mb-2">
                    <span className="text-golden">MonoLuck</span> ?????????????????????
                  </h2>
                  <p className="text-md mt-4 h-1/3">
                    ??????????????????????????????????????????????????????
                    <br />
                    ?????????????????????????????????????????????
                    <br />
                    ????????????????????????????????????????????????
                  </p>
                  <div className="more absolute bottom-0 owl-sm:w-8/12 mx-auto w-9/12">
                    <p className="tech text-sm text-neutral-400">
                      ????????????
                      <br />
                      React.js&emsp;Material-UI&emsp;Axios&emsp;Laravel
                    </p>
                    <hr />
                    <p className="float-right italic text-sm text-golden">
                      ??? ???????????? Trunk Studio
                    </p>
                  </div>
                </div>
              </div>
              <div className="pro-item owl-sm:flex owl-sm:h-72">
                <div className="pro-img w-3/12 owl-sm:m-2 mx-auto">
                  <img
                    src={require("../assets/whEat.png")}
                    alt=""
                    className="h-32 w-24 m-2"
                  />
                </div>

                <div className="pro-text owl-sm:m-4 w-9/12 mx-auto -owl-lg:text-center">
                  <h2 className="text-2xl mb-2">
                    <span className="text-golden">LINEBot</span> ?????????????????????
                    (???????`???)
                  </h2>
                  <p className="text-md mt-4 h-1/3">
                    ????????????????????????????????????????????????
                    <br />
                    ????????????????????? ?????????????????? ???<br />
                    ????????????Folium???????????????????????????????????????
                    <br />
                    ????????????????????????????????????
                  </p>
                  <div className="more absolute bottom-0 owl-sm:w-8/12 mx-auto w-9/12">
                    <p className="tech text-sm text-neutral-400">
                      ????????????
                      <br />
                      Python&emsp;LINEBot Message API&emsp;Google Place
                      API&emsp;Django&emsp;Folium
                    </p>
                    <hr />
                    <p className="float-right italic text-sm text-golden">
                      ??? ???????????????????????? NUTC
                    </p>
                  </div>
                </div>
              </div>
              <div className="pro-item owl-sm:flex h-72">
                <div className="pro-img w-3/12 owl-sm:m-2 mx-auto">
                  <img
                    src={require("../assets/blindstar.png")}
                    alt=""
                    className="h-32 w-24 m-2 rounded-2xl"
                  />
                </div>

                <div className="pro-text owl-sm:m-4 w-9/12 mx-auto -owl-lg:text-center">
                  <h2 className="text-2xl mb-2">
                    <span className="text-golden">LINEBot</span> ????????????
                  </h2>
                  <p className="text-md mt-4 h-1/3">
                    ????????????????????????????????????
                    <br />
                    ?????????????????????????????????????????????
                    <br />
                    ???????????????
                    <br />
                    ????????????????????????????????????????????????
                  </p>
                  <div className="more absolute bottom-0 owl-sm:w-8/12 mx-auto w-9/12">
                    <p className="tech text-sm text-neutral-400">
                      ????????????
                      <br />
                      Python&emsp;LINEBot Message
                      API&emsp;MySQL&emsp;Django&emsp;Word2vec&emsp;NER&emsp;K-means
                    </p>
                    <hr />
                    <p className="float-right italic text-sm text-golden">
                      ??? ???????????????????????? NUTC
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </section>
        <section id="Education">
          <div className="inner-width">
            <h1 className="section-title text-center pt-12 pb-4 relative text-2xl text-golden">
              Education
            </h1>
            <div className="divider rounded-md border-t-4 border-neutral-300 border-solid m-auto mb-12"></div>
          </div>
          <div className="edu-content text-center">
            <div className="hideme text-2xl my-28">
              <span className="text-golden">National Taichung University</span>{" "}
              of Science and Technology.
            </div>
            <div className="hideme my-20">Sep. 2018 - Jun. 2022</div>
            <div className="hideme text-xl">
              Information Management
              <span className="text-golden">, Bachelor Degree</span>
            </div>
          </div>
        </section>
        <section id="Skills">
          <div className="inner-width">
            <h1 className="section-title text-center pt-12 pb-4 relative text-2xl text-golden">
              Skills
            </h1>
            <div className="divider rounded-md border-t-4 border-neutral-300 border-solid m-auto mb-12"></div>
            <div className="ski-row w-full flex justify-between mb-8">
              <div className="ski-col tl w-1/3 px-12 py-10 mx-8 text-center my-auto hides">
                <p className="title italic text-golden text-3xl">Programmer</p>
              </div>
              <div className="ski-col tm w-1/3 px-12 py-10 mx-8 text-center hides">
                <i className="fa-solid fa-code fa-2x text-golden"></i>
                <p className="title text-white text-2xl">Code</p>
                <div className="divider rounded-md border-t-2 border-neutral-300 border-solid m-auto mt-2 mb-8"></div>
                <div className="itemGroup">
                  <div className="ski-item flex justify-between items-center mx-auto">
                    <i className="fa-brands fa-html5 text-white w-1/3"></i>
                    <p className="content text-white text-md w-2/3 text-left ml-3.5">
                      HTML5
                    </p>
                  </div>
                  <div className="ski-item flex justify-between items-center mx-auto">
                    <i className="fa-brands fa-css3-alt text-white w-1/3"></i>
                    <p className="content text-white text-md w-2/3 text-left ml-3.5">
                      CSS3
                    </p>
                  </div>
                  <div className="ski-item flex justify-between items-center mx-auto">
                    <i className="w-1/3">
                      <img
                        src={require("../assets/tailwind.png")}
                        className="mx-auto"
                        style={{ width: "20px", height: "20px" }}
                        alt=""
                      />
                    </i>
                    <p className="content text-white text-md w-2/3 text-left ml-3.5">
                      Taildwind CSS
                    </p>
                  </div>
                  <div className="ski-item flex justify-between items-center mx-auto">
                    <i className="fa-brands fa-sass text-white w-1/3"></i>
                    <p className="content text-white text-md w-2/3 text-left ml-3.5">
                      SASS
                    </p>
                  </div>
                </div>
              </div>
              <div className="ski-col tr w-1/3 px-12 py-10 mx-8 text-center hides">
                <i className="fa-brands fa-js fa-2x text-golden"></i>
                <p className="title text-white text-2xl">Javascript</p>
                <div className="divider rounded-md border-t-2 border-neutral-300 border-solid m-auto mt-2 mb-8"></div>
                <div className="itemGroup">
                  <div className="ski-item flex justify-between items-center mx-auto">
                    <i className="fa-brands fa-js text-white w-1/3"></i>
                    <p className="content text-white text-md w-2/3 text-left ml-3.5">
                      ES6
                    </p>
                  </div>
                  <div className="ski-item flex justify-between items-center mx-auto">
                    <i className="w-1/3">
                      <img
                        src={require("../assets/jq.png")}
                        className="mx-auto"
                        style={{ width: "16px", height: "16px" }}
                        alt=""
                      />
                    </i>
                    <p className="content text-white text-md w-2/3 text-left ml-3.5">
                      jQuery
                    </p>
                  </div>
                  <div className="ski-item flex justify-between items-center mx-auto">
                    <i className="fa-brands fa-react text-white w-1/3"></i>
                    <p className="content text-white text-md w-2/3 text-left ml-3.5">
                      React
                    </p>
                  </div>
                  <div className="ski-item flex justify-between items-center mx-auto">
                    <i className="fa-brands fa-vuejs text-white w-1/3"></i>
                    <p className="content text-white text-md w-2/3 text-left ml-3.5">
                      Vue
                    </p>
                  </div>
                  <div className="ski-item flex justify-between items-center mx-auto">
                    <i className="w-1/3">
                      <img
                        src={require("../assets/axios.png")}
                        className="mx-auto"
                        style={{ width: "20px", height: "20px" }}
                        alt=""
                      />
                    </i>
                    <p className="content text-white text-md w-2/3 text-left ml-3.5">
                      Axios
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ski-row w-full flex justify-between mb-8">
              <div className="ski-col bl w-1/3 px-12 py-10 mx-8 text-center hides">
                <i className="fa-brands fa-python fa-2x text-golden"></i>
                <p className="title text-white text-2xl">Python</p>
                <div className="divider rounded-md border-t-2 border-neutral-300 border-solid m-auto mt-2 mb-8"></div>
                <div className="itemGroup">
                  <div className="ski-item flex justify-between items-center mx-auto">
                    <i className="w-1/3">
                      <img
                        src={require("../assets/django.png")}
                        className="mx-auto"
                        style={{ width: "20px", height: "20px" }}
                        alt=""
                      />
                    </i>
                    <p className="content text-white text-md w-2/3 text-left ml-3.5">
                      Django
                    </p>
                  </div>
                  <div className="ski-item flex justify-between items-center mx-auto">
                    <i className="fa-brands fa-python text-white w-1/3"></i>
                    <p className="content text-white text-md w-2/3 text-left ml-3.5">
                      Python 2&3
                    </p>
                  </div>
                  <div className="ski-item flex justify-between items-center mx-auto">
                    <i className="fa-brands fa-line text-white w-1/3"></i>
                    <p className="content text-white text-md w-2/3 text-left ml-3.5">
                      LINE Bot SDK
                    </p>
                  </div>
                </div>
              </div>

              <div className="ski-col bm w-1/3 px-12 py-10 mx-8 text-center hides">
                <i className="fa-solid fa-screwdriver-wrench fa-2x text-golden"></i>
                <p className="title text-white text-2xl">Tools</p>
                <div className="divider rounded-md border-t-2 border-neutral-300 border-solid m-auto mt-2 mb-8"></div>
                <div className="itemGroup">
                  <div className="ski-item flex justify-between items-center mx-auto">
                    <i className="fa-brands fa-figma text-white w-1/3"></i>
                    <p className="content text-white text-md w-2/3 text-left ml-3.5">
                      Figma
                    </p>
                  </div>
                  <div className="ski-item flex justify-between items-center mx-auto">
                    <i className="w-1/3">
                      <img
                        src={require("../assets/vsc.png")}
                        className="mx-auto"
                        style={{ width: "16px", height: "16px" }}
                        alt=""
                      />
                    </i>
                    <p className="content text-white text-md w-2/3 text-left ml-3.5">
                      VS Code
                    </p>
                  </div>
                  <div className="ski-item flex justify-between items-center mx-auto">
                    <i className="fa-brands fa-github text-white w-1/3"></i>
                    <p className="content text-white text-md w-2/3 text-left ml-3.5">
                      Github
                    </p>
                  </div>
                </div>
              </div>
              <div className="ski-col br w-1/3 px-12 py-10 mx-8 text-center hides">
                <i className="fa-solid fa-ellipsis fa-2x text-golden"></i>
                <p className="title text-white text-2xl">Other</p>
                <div className="divider rounded-md border-t-2 border-neutral-300 border-solid m-auto mt-2 mb-8"></div>
                <div className="itemGroup">
                  <div className="ski-item flex justify-between items-center mx-auto">
                    <i className="fa-brands fa-docker text-white w-1/3"></i>
                    <p className="content text-white text-md w-2/3 text-left ml-3.5">
                      Docker
                    </p>
                  </div>
                  <div className="ski-item flex justify-between items-center mx-auto">
                    <i className="fa-brands fa-markdown text-white w-1/3"></i>
                    <p className="content text-white text-md w-2/3 text-left ml-3.5">
                      Markdown
                    </p>
                  </div>
                  <div className="ski-item flex justify-between items-center mx-auto">
                    <i className="w-1/3">
                      <img
                        src={require("../assets/sql.png")}
                        className="mx-auto"
                        style={{ width: "20px", height: "20px" }}
                        alt=""
                      />
                    </i>
                    <p className="content text-white text-md w-2/3 text-left ml-3.5">
                      MySQL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Abilities">
          <div className="inner-width">
            <h1 className="section-title text-center pt-12 pb-4 relative text-2xl text-golden">
              Language Abilities
            </h1>
            <div className="divider rounded-md border-t-4 border-neutral-300 border-solid m-auto mb-12"></div>
            <div className="abi-group flex justify-between align-center my-36 w-full">
              <div className="abi-item odd mid h-96 w-72 bg-golden hidemid text-center rounded-md mx-2">
                <i className="fa-solid odd fa-medal fa-3x text-neutral-300"></i>
                <p className="type text-neutral-300 text-3xl my-20">Chinese</p>
                <p className="italic opacity-60 text-sm w-2/3 mx-auto mt-40">
                  Native
                </p>
              </div>
              <div className="abi-item h-96 w-72 bg-neutral-300 hides text-center rounded-md mx-2">
                <i className="fa-solid fa-medal fa-3x text-golden"></i>
                <p className="type text-golden text-3xl my-20">English</p>
                <p className="italic opacity-60 text-sm w-2/3 mx-auto mt-40">
                  Conversational
                </p>
              </div>
              <div className="abi-item max-h-96 w-72 bg-neutral-300 hides text-center rounded-md mx-2">
                <i className="fa-solid fa-medal fa-3x text-golden"></i>
                <p className="type text-golden text-3xl my-20">Japanese</p>
                <p className="italic opacity-60 text-sm w-2/3 mx-auto mt-40">
                  Begineer
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-neutral-900">
          <div className="inner-width my-10">
            <div className="contacts">
              <div className="icon">
                <div className="sm w-full text-center pt-10 pb-6">
                  <a
                    href="/"
                    className="text-xl my-3 mx-3 text-golden font-medium hover:text-orange-100 fab fa-facebook-f"
                  >
                    {null}
                  </a>
                  <a
                    href="/"
                    className="text-xl my-3 mx-3 text-golden font-medium hover:text-orange-100 fab fa-twitter"
                  >
                    {null}
                  </a>
                  <a
                    href="/"
                    className="text-xl my-3 mx-3 text-golden font-medium hover:text-orange-100 fab fa-instagram"
                  >
                    {null}
                  </a>
                  <a
                    href="/"
                    className="text-xl my-3 mx-3 text-golden font-medium hover:text-orange-100 fab fa-linkedin-in"
                  >
                    {null}
                  </a>
                  <a
                    href="/"
                    className="text-xl my-3 mx-3 text-golden font-medium hover:text-orange-100 fab fa-youtube"
                  >
                    {null}
                  </a>
                </div>
              </div>
              <div className="info pb-10">
                <div className="phone flex justify-center my-2">
                  <i className="fa-solid fa-phone text-golden mx-4"></i>
                  <p className="text-golden text-sm">+886 968 600 228</p>
                </div>
                <div className="email flex justify-center my-2">
                  <i className="fa-solid fa-envelope text-golden mx-4"></i>
                  <p className="text-golden text-sm">leonlin124@gmail.com</p>
                </div>
                <div className="board flex justify-center pt-12 text-golden text-sm relative w-1/12 mx-auto">
                  <a href="/login">
                    <span>M</span>
                    <span>e</span>
                    <span>s</span>
                    <span>s</span>
                    <span>a</span>
                    <span>g</span>
                    <span>e</span>
                    <span>B</span>
                    <span>o</span>
                    <span>a</span>
                    <span>r</span>
                    <span>d</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
