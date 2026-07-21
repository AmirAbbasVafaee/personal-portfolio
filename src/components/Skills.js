import Web1 from "../assets/img/new4.webp";
import Web2 from "../assets/img/new5.png";
import Web3 from "../assets/img/new6.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ListUl } from 'react-bootstrap-icons';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      partialVisibilityGutter:10
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>خدمات</h2>
                        <p>ارائه انواع وب سایتها بر اساس نیاز کسب و کار شما</p>
                        <Carousel responsive={responsive} infinite={true}  className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img draggable="false" src={Web1} alt="Personal website" />
                                <h5>سایت شخصی</h5>
                            </div>
                            <div className="item">
                                <img draggable="false" src={Web2} alt="Corporate website"/>
                                <h5>سایت شرکتی</h5>
                            </div>
                            <div className="item">
                                <img draggable="false" src={Web1} alt="Store website"/>
                                <h5>سایت فروشگاهی</h5>
                            </div>
                            <div className="item">
                                <img draggable="false" src={Web3} alt="Mobile application"/>
                                <h5>برنامه موبایل</h5>
                            </div>
                        </Carousel>

                         <a href="#pricing-plan">
                         <button className="btn-pricing">
                         <span><ListUl size={25}/>مشاهده لیست قیمت</span>
                         </button>
                         </a>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background"/>
    </section>
  )
}
