import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { StyledButton } from "./styles/Button.styled";
import { StyledContainer } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Card } from "react-bootstrap";
import "./contactForm.scss";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SubjectIcon from "@mui/icons-material/Subject";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
// npm i @emailjs/browser
const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_azumk6n",
        "template_thurzkl",
        form.current,
        "QD7Yrut370nG7QP1B"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <StyledContainer>
      <Flex>
        <Card className="my-5 container shadow-lg contact-card">
          <div className="ccc">
            <form ref={form} onSubmit={sendEmail}>
              <h1 className="my-3">Contact Us</h1>
              <h3 className="my-2">We will get back to you asap!</h3>
              <PersonIcon fontSize="large" />
              <input
                className="my-2"
                type="text"
                name="user_name"
                placeholder="Name"
                required
              />
              <EmailIcon fontSize="large" />
              <input
                className="my-2"
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
              <PhoneIcon fontSize="large" />
              <input
                className="my-2"
                type="tel"
                name="user_mobile"
                placeholder="Phone"
                required
              />
              <SubjectIcon fontSize="large" />
              <input
                className="my-2"
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <MessageIcon fontSize="large" />
              <textarea className="my-1" name="message" placeholder="Message" />
              <StyledButton className="my-3"> Send </StyledButton>
            </form>
          </div>
        </Card>
      </Flex>
    </StyledContainer>
  );
};

export default ContactForm;
