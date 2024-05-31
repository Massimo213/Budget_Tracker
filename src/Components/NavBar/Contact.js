import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
//import {useHistory} from "react-router-dom"
import "./NavBar.css";


export default function Contact() {
    //const history=useHistory();
    //const ContactPage =() =>{
       // ContactPage.push("/contact");
   // }
  
  return (

    <div className="container contact-page">


      <div className="text-zone">
        <table>
          <tr>
            <td className="left-side">
              <h1>Let's have a talk</h1>
              <h2>
                <br />
                Thank you for your interest in getting in touch!
                <br />
                <br />I value open communication and welcome any inquiries,
                feedback, or collaboration opportunities. Please don't
                hesitate to get in touch with me 
                <br />
                <br />
                
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/your-linkedin-profile">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="icon"
                    color="#4d4d4e"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:yahyastartwell@gmail.com"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="icon"
                    color="#4d4d4e"
                  />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/your-github-profile">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="icon"
                    color="#4d4d4e"
                  />
                </a>
              </h2>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
  }
