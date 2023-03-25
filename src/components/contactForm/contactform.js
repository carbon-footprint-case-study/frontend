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
import { useState } from "react";
// npm i @emailjs/browser
const ContactForm = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    alert("Thank you! Your form has been submitted!");
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
    emailjs
      .sendForm(
        "service_m00t4t9",
        "template_wtjwia6",
        form.current,
        "y30egNb7ONvMVZOmm"
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
              <PersonIcon fontSize="medium" />
              <input
                className="my-2"
                type="text"
                onChange={(event) => setName(event.target.value)}
                value={Name}
                name="user_name"
                placeholder="Name"
                required
              />
              <EmailIcon fontSize="medium" />
              <input
                className="my-2"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                value={Email}
                name="user_email"
                placeholder="Email"
                required
              />
              <PhoneIcon fontSize="medium" />
              <input
                className="my-2"
                type="tel"
                onChange={(event) => setPhone(event.target.value)}
                value={Phone}
                name="user_mobile"
                placeholder="Phone"
                required
              />
              <SubjectIcon fontSize="medium" />
              <input
                className="my-2"
                type="text"
                onChange={(event) => setSubject(event.target.value)}
                value={Subject}
                name="subject"
                placeholder="Subject"
              />
              <MessageIcon fontSize="medium" />
              <textarea
                className="my-1"
                name="message"
                placeholder="Message"
                onChange={(event) => setMessage(event.target.value)}
                value={Message}
              />
              <StyledButton className="my-3"> Send </StyledButton>
            </form>
          </div>
        </Card>
      </Flex>
    </StyledContainer>
  );
};

export default ContactForm;
