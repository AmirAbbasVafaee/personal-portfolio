import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import headerImgMobile from "../assets/img/header-img.svg";
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 50);
  const toRotate = [ "طراح وب", "برنامه نویس وب", "طراح UI/UX", "طراح هویت بصری" ];
  const period = 1000;

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [delta])
  /* eslint-enable react-hooks/exhaustive-deps */

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  }

  return (
    <section className="banner" id="home">
      <span className="headerMobile">
          <img src={headerImgMobile} alt="Header ImgMobile"/>
          </span>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{` سلام! امیرعباس هستم`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "طراح وب", "برنامه نویس وب", "طراح UI/UX”,”طراح هویت بصری” ]
'><span className="wrap">{text}</span></span></h1>
                <p>طراحی وب سایت از جمله به روزترین و پرکاربرد‌ترین موضوعات مربوط به کسب و کار آنلاین می‌باشد. امروزه هر کسب و کاری برای افزایش اعتبار، فروش و تعداد مشتریان حداقل به یک نشانی و وبسایت اینترنتی نیاز دارد. پس همین حالا سفارش خود را ثبت کنید!</p>
                <a href="#connect">
                  <button>سفارش طراحی<ArrowLeftCircle size={25} /></button>
                  </a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                   <span className="headerWeb">
                   <img draggable="false" src={headerImg} alt="Header Img" />
                   </span>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
