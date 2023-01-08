import React from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";

const Contact = () => {
  const socialLinks = [
    {
      url: "#",
      icon: "../images/fb.png",
    },
    {
      url: "#",
      icon: "../images/insta.png",
    },
    {
      url: "#",
      icon: "../images/linkedin.png",
    },
    {
      url: "#",
      icon: "../images/twitter.png",
    },
  ];
    return (
    <>
      <section className="contact-section">
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className="contact__btn" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  Walchand College Of Engineering,
                  <br /> Miraj Road, Vishrambaug, Sangli <br /> Maharashtra,
                  416415
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 section-field">Phone:</h6>
                  <p className="section__description mb-0">9146124322</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 section-field">Email:</h6>
                  <p className="section__description mb-0">########@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i ><img className="item-icon" src={item.icon}></img></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
    );
  };

  export default Contact;