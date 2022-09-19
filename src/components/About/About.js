import React from "react";
import Aiimg from "../assets/images/Aiimg.jpg";
import About_us from "../assets/images/About_us.svg";
import Question from '../assets/images/Question.svg'
import react_img from '../assets/images/react.png'
import Mongo from '../assets/images/mongo.png'
import express from '../assets/images/express.jpg'
import uikit from '../assets/images/uikit.jpg'

const About = () => {
  return (
    <div className=" w-[85%] mx-auto ">
      <div>
        <div className="">
          <div className="uk-inline">
            <img
              src={Aiimg}
              className=" w-[100vw] object-cover  h-[40vh] sm:h-[20vh]"
              alt="image"
            />
            <div className="uk-overlay-primary uk-position-cover"></div>
            <div className="uk-position-center ">
              <p className="text-3xl text-white font-extrabold">ABOUT US</p>
            </div>
          </div>

          <div className=" my-10 flex sm:flex-col sm:my-5">
            <div className="about_outerLayer w-[50%] sm:w-[100%] bg-blue-200 ">
              <img
                src={About_us}
                className=" w-full object-cover h-full"
                alt="image"
              />
            </div>
            <div className="w-[50%] py-20 px-20 sm:w-[100%] sm:px-0 sm:text-center sm:py-4">
              <h1 className=" text-2xl font-semibold">About Aducator</h1>
              <p className=" my-3 leading-7 text-justify sm:text-center">
                Aducator is an Online Educational website in which users can
                upload their Projects , Publication Paper , and Registered Users
                can access free courses which Aducator admin upload.
              </p>
            </div>
          </div>

          <hr class="uk-divider-icon"></hr>

          <div className=" my-10 flex sm:flex-col sm:my-5">
            <div className="w-[50%] py-20 px-20 sm:w-[100%] sm:px-0 sm:text-center sm:py-4">
              <h1 className=" text-2xl font-semibold">Why Aducator ?</h1>
              <p className=" my-3 leading-7 text-justify sm:text-center">
                Aducator is a platform which offer students multiple educational benefits Such as:
              
                <div className=" my-4">
                <ul>
                <li className=" flex items-center my-4"><span uk-icon="icon:  arrow-right" className=" pr-2"></span>Upload Free Papers & Projects</li>
                <li className=" flex items-center my-4"><span uk-icon="icon:  arrow-right" className=" pr-2"></span>Like , Follow and Comment on Posts</li>
                <li className=" flex items-center my-4"><span uk-icon="icon:  arrow-right" className=" pr-2"></span>Free Courses</li>
                <li className=" flex items-center my-4"><span uk-icon="icon:  arrow-right" className=" pr-2"></span>Free Email Messaging Services</li>
                <li className=" flex items-center my-4"><span uk-icon="icon:  arrow-right" className=" pr-2"></span>Secured Data And Account Verification.</li>
                </ul> 
                </div>
              </p>
            </div>

            <div className=" w-[50%] sm:w-[100%]">
              <img
                src={Question}
                className="aboutWhy bg-purple-200 w-full object-cover  h-full"
                alt="image"
              />
            </div>
          </div>
          <hr class="uk-divider-icon"></hr>

          <div className=" my-5">
          <h1 className=" my-5 text-2xl font-semibold text-center">Technology Used</h1>

          <div className=" flex justify-around items-center sm:overflow-x-auto">
          <img src={react_img} alt="images" className="about_tech w-[200px] h-[130px] rounded-full object-cover " />
          <img src={express} alt="images" className="about_tech w-[200px] h-[130px] rounded-full object-cover " />
          <img src={Mongo} alt="images" className="about_tech w-[200px] h-[130px] rounded-full object-cover " />
          <img src={uikit} alt="images" className="about_tech w-[200px] h-[130px] rounded-full object-cover " />
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
