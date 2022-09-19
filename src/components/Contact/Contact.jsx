import React , {useState , useRef } from "react";
import { useGoogleMaps } from "react-hook-google-maps";
import "./Contact.css";
import emailjs from 'emailjs-com'; 

const Contact = () => {
  const KEY = 'AIzaSyAYrd7duFeX5SdHs_rWQZIZ1ON5OAAAGAU';

  const { ref, map, google } = useGoogleMaps(KEY, {
    center: { lat: 18.596024, lng: 73.924698 },
    zoom: 18,
  });

  const formRef = useRef()
    const [done , setdone] = useState(false)

    const handleSubmit =  (e)=>{ 
      e.preventDefault()

      emailjs.sendForm('service_e8gsnle', 'template_njy9eo2', formRef.current, 'user_pvecif4FWZExhw0wAtxdp')
      .then((result) => {
          console.log(result.text);
          setdone(true)
      }, (error) => {
          console.log(error.text);
      });

  }

  return (
    <>
      <div className="Contact_main">
        <div className="Contact_wrapper">
          <div className="Contact_left">
            <div ref={ref} style={{ width: "100%", height: "100%" }} />
          </div>

          <div className="Contact_right">
            <div className="C_right_wrapper">
              <div className="Contact_heading">
                <h2 style={{ fontWeight: "600" }}>Contact us</h2>
                <p>We're open for any suggestion or just to have a chat</p>
              </div>

              <div className="Contact_locations">
                <div className="C_loc">
                  <h5>ADDRESS:</h5>
                  <p>Pune,Maharastra,India</p>
                </div>

                <div className="C_loc">
                  <h5>Email:</h5>
                  <p>123@gmail.com</p>
                </div>

                <div className="C_loc">
                  <h5>Phone:</h5>
                  <p>123 456 789</p>
                </div>
              </div>
              <form ref={formRef} onSubmit={handleSubmit}>
              <div className="Contact_form">
                <div className="name_email">
                  <input
                    className="uk-input input_field_Contact"
                    required
                    type="text"
                    placeholder="Name"
                    name="user_name"
                  />

                  <input
                    className="uk-input input_field_Contact"
                    required
                    type="email"
                    placeholder="Email"
                    name="user_email"
                  />
                </div>

                <div className="Contact_Subject">
                  <input
                    className="uk-input input_field"
                    required
                    type="text"
                    placeholder="Subject"
                    name="user_Subject"
                  />
                </div>

                <div className="Contact_text_area">
                  <textarea
                    className="uk-textarea"
                    rows="5"
                    placeholder="Textarea"
                    name="user_message"
                  ></textarea>
                </div>
              </div>

              <div className="Contact_Send_btn">
                <button className="uk-button uk-button-primary">
                  Send Message
                </button>
              </div>
              </form>

              <div>
              {done && <h4 className="done text-green-600">Thanks Message Sent :)</h4>}
              </div>

              <div className="Contact_social_main">
                <h4 tyle={{ color: "black", fontWeight: "600" }}>
                  Follow us here
                </h4>

                <div className="Contact_social_icons">
                  <span uk-icon="icon: instagram"></span>
                  <span uk-icon="icon: github"></span>
                  <span uk-icon="icon: twitter"></span>
                  <span uk-icon="icon: facebook"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
