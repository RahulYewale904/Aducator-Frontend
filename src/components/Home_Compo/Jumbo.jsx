import React, { useState, useEffect } from "react";
import "../style/Jumbo.css";
import { Link } from "react-router-dom";
import Student_logo from "../assets/images/Student_logo.png";
import folow from "../assets/images/follow_us.png";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import dark from "../../components/assets/images/dark.jpg";
import soft from "../../components/assets/images/soft.webp";
import upload_img from '../../components/assets/images/upload.gif'
import laptop_img from '../../components/assets/images/laptop.gif'

export default function Jumbo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Search, setSearch] = useState("");

  const Jumbo_search = () => {
    alert(Search);
  };

  return (
    <div>
      <div className="Jumbo_main">
        <div className="Jumbo_wrapper">
          <div className="Jumbo_left">
            <div className="jumbo_heading">
              <h5 className=" text-3xl font-bold">WELCOME TO ADUCATOR</h5>
              <h2 className=" text-lg text-gray-600">
                Best Online Education Expertise{" "}
              </h2>
              <p className=" w-[60%] sm:w-[100%]">
                Welcome to Aducator take a tour to under stand the website
                better.
              </p>
            </div>

            <div className="Jumbo_btn">
              <button
                onClick={onOpen}
                className="Cat_shadow uk-button uk-button-primary home_btn"
              >
                Take a tour
              </button>
              <Link to="allcourses">
                <button className="Cat_shadow uk-button uk-button-secondary home_btn">
                  View Courses
                </button>
              </Link>
            </div>
            <div className="social_input">
              <img
                src={folow}
                className=" my-4 pl-[20px] object-cover w-[150px] h-[120px] "
                alt="follow-img"
              />

              <div className="social_jumbo">
                <span
                  className="Cat_shadow social-icons"
                  uk-icon="icon: instagram"
                ></span>
                <span
                  className="Cat_shadow social-icons"
                  uk-icon="icon: github"
                ></span>
                <span
                  className="Cat_shadow social-icons"
                  uk-icon="icon: twitter"
                ></span>
                <span
                  className="Cat_shadow social-icons"
                  uk-icon="icon: facebook"
                ></span>
              </div>
            </div>
          </div>

          <div className=" sm:hidden">
            <img src={Student_logo} className="Student_logo" alt="Error" />
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} size="xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Brief Introduction of Aducator</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div
              className="uk-position-relative uk-visible-toggle "
              tabindex="-1"
              uk-slideshow="animation: push"
            >
              <ul className="uk-slideshow-items">
                <li className="Cat_shadow rounded-lg">
                  <img src={dark} alt="" uk-cover />
                  <div className="uk-position-center uk-position-small uk-text-center uk-light">
                    <p className="uk-margin-remove text-3xl font-bold">
                      Welcome to Aducator{" "}
                    </p>
                    <p className=" text-xl">
                      We have different options for a Student lets Explore..
                    </p>
                  </div>
                </li>
                <li className="Cat_shadow rounded-lg">
                  <img src={dark} alt="" uk-cover />
                  <div className="uk-position-top uk-position-medium uk-text-center uk-light">
                    <p className="uk-margin-remove text-3xl font-bold text-white">1ST </p>
                    <p className=" text-white my-4 font-semibold text-lg">Registered/Login to use the features of this website.</p>
                    <Link style={{ textDecoration: "none" }} to="/Login">
                      <p className="Cat_shadow w-[30%] mx-auto my-7 text-lg font-semibold bg-green-800 hover:bg-green-400  py-2 rounded-full">Login</p>
                    </Link>
                  </div>
                </li>
                <li className="Cat_shadow rounded-lg">
                  <img src={soft} alt="" uk-cover />
                  <div className="uk-position-top uk-position-medium uk-text-center uk-light">
                    <p className="uk-margin-remove text-3xl font-bold text-gray-700">2nd </p>
                    <p className=" text-gray-700 my-4 font-semibold text-lg ">Registered/Login Can upload Projects and Paper for free</p>
                   <img src={upload_img} className='Cat_shadow object-cover h-[230px] w-[230px] mx-auto rounded-full' alt="images" />
                  </div>
                </li>
                <li className="Cat_shadow rounded-lg">
                  <img src={soft} alt="" uk-cover />
                  <div className="uk-position-top uk-position-medium uk-text-center uk-light">
                    <p className="uk-margin-remove text-3xl font-bold text-gray-700">3rd </p>
                    <p className=" text-gray-700 my-4 font-semibold text-lg">Users can access free courses.</p>
                    <img src={laptop_img} className='Cat_shadow object-cover h-[230px] w-[230px] mx-auto rounded-full' alt="images" />

                  </div>
                </li>
              </ul>

              <div className="uk-light">
                <a
                  className="uk-position-center-left uk-position-small uk-hidden-hover text-black"
                  href="#"
                  uk-slidenav-previous
                  uk-slideshow-item="previous"
                ></a>
                <a
                  className="uk-position-center-right uk-position-small uk-hidden-hover text-black"
                  href="#"
                  uk-slidenav-next
                  uk-slideshow-item="next"
                ></a>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <button mr={3} onClick={onClose} className=' hover:text-white hover:Cat_shadow hover:bg-rose-700 hover:rounded-full hover:py-2 px-4' >
              Close
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
