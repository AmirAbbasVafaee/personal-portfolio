import React, { useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import contactImg from "../assets/img/contact-img.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
  const form = useRef();
  const successNotif = () => 
    toast.success('با موفقیت ارسال شد!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const errorNotif = () => 
    toast.error('پیام شما ارسال نشد!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
        

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_up1hwy7', 'template_mocqxas', form.current, 'QuI8DL3jEXqyjU7_A')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          successNotif();
          
      }, (error) => {
          console.log(error.text);
          errorNotif();
      });
  };


 
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img draggable="false" src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>درخواست مشاوره</h2>
              <form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" placeholder="نام" name="user_name" required />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" placeholder="نام خانوادگی" name="user_surename" required />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" placeholder="تلفن همراه" name="user_phone" required />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <div className="custom-select">
                      <select name="user_choice" required>
                        <option hidden disabled selected value>انتخاب کنید...</option>
                        <option value="سایت شخصی">سایت شخصی</option>
                        <option value="سایت شرکتی">سایت شرکتی</option>
                        <option value="سایت فروشگاهی">سایت فروشگاهی</option>
                        <option value="برنامه موبایل">برنامه موبایل</option>
                      </select>
                    </div>
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea rows="6" placeholder="متن پیام" name="message" />
                    <button type="submit"><span>ارسال</span></button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>



      <ToastContainer className="hello"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        limit={1}
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
    </section>
  );
}; 
