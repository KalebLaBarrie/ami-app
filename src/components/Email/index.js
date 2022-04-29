import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  FormTextArea,
  Body,
  Row,
} from './EmailElements';
import './email.css';

const Email = () => {
  let inputAndTextAreaStyle = {
    width: '100%',
    fontWeight: 400,
  };
  return (
    <>
      <Container>
        <Icon to="/">ami</Icon>

        <FormH1>Contact Us!</FormH1>
        <Form
          action="https://formsubmit.co/labarriekaleb@gmail.com"
          method="POST"
        >
          <Row>
            <div className="column">
              <FormLabel htmlFor="name">Name</FormLabel>
              <input
                type="text"
                name=""
                id="name"
                placeholder="Your name here"
              />
            </div>
            <div className="column">
              <FormLabel htmlFor="email">Email</FormLabel>
              <input type="email" id="email" placeholder="Your email here" />
            </div>
          </Row>
          <Row>
            <div className="column">
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <input type="text" id="subject" placeholder="Your subject here" />
            </div>
            <div className="column">
              <FormLabel htmlFor="contact">Contact</FormLabel>
              <input
                type="tel"
                id="contact"
                placeholder="Your phone number here"
              />
            </div>
          </Row>
          <Row>
            <div className="column">
              <FormLabel htmlFor="comment">Comment</FormLabel>
              <textarea
                id="comment"
                placeholder="Tell us what you need!"
                rows="3"
              ></textarea>
            </div>
          </Row>
          <FormButton>Submit</FormButton>
        </Form>
      </Container>
    </>
  );
};

export { Email as EmailPage };
