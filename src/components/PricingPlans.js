import { Container, Row, Col } from "react-bootstrap";

export const PricingPlans = () => {
    return (
            <div className="pricing-plan__container" >
                <Container>
                <Row>
                    <Col xs={12}>
                        <h2 className="pricing-plan__h1" id="pricing-plan">لیست قیمت </h2>
                        <p className="pricing-plan__p">پکیج‌های متنوع طراحی برای کسب‌وکارها، استارتاپ‌ها و برندهای شخصی</p>
                    </Col>
                </Row>
                <Row className="pricing-cards-row">
            <Col xs={12} sm={6} md={6} lg={3} className="price1">
            <section className="pricing-plan">
                <div className="pricing-plan__header">
                    <h1 className="pricing-plan__title">سایت شخصی</h1>
                    <h2 className="pricing-plan__summary">Personal Website</h2>
                </div>
                <div className="pricing-plan__description">
                    <ul className="pricing-plan__list">
                        <li className="pricing-plan__feature">معرفی و رزومه</li>
                        <li className="pricing-plan__feature">نمونه کارها</li>
                        <li className="pricing-plan__feature">طراحی UI/UX</li>
                        <li className="pricing-plan__feature">کاملا ریسپانسیو</li>
                    </ul>
                </div>
                <div className="pricing-plan__actions">
                    <p className="pricing-plan__cost">۱۲ میلیون تومان</p>
                    <p className="pricing-plan__text">قیمت پایه</p>
                    <a href="#connect" className="pricing-plan__button" >ثبت درخواست</a>
                    <p className="pricing-plan__text">* هزینه دامنه و هاست اعمال نشده است</p>
                </div>
            </section>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} className="price2">
            <section className="pricing-plan">
                <div className="pricing-plan__header">
                    <h1 className="pricing-plan__title">سایت شرکتی</h1>
                    <h2 className="pricing-plan__summary">Corporate Website</h2>
                </div>
                <div className="pricing-plan__description">
                    <ul className="pricing-plan__list">
                        <li className="pricing-plan__feature">معرفی شرکت و اعضا</li>
                        <li className="pricing-plan__feature">خبرنامه و وبلاگ</li>
                        <li className="pricing-plan__feature">طراحی UI/UX</li>
                        <li className="pricing-plan__feature">کاملا ریسپانسیو</li>
                    </ul>
                </div>
                <div className="pricing-plan__actions">
                    <p className="pricing-plan__cost">۲۰ میلیون تومان</p>
                    <p className="pricing-plan__text">قیمت پایه</p>
                    <a href="#connect" className="pricing-plan__button" >ثبت درخواست</a>
                    <p className="pricing-plan__text">* هزینه دامنه و هاست اعمال نشده است</p>
                </div>
            </section>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} className="price3">
            <section className="pricing-plan">
                <div className="pricing-plan__header">
                    <h1 className="pricing-plan__title">سایت فروشگاهی</h1>
                    <h2 className="pricing-plan__summary">Store Website</h2>
                </div>
                <div className="pricing-plan__description">
                    <ul className="pricing-plan__list">
                        <li className="pricing-plan__feature">قابل اتصال به درگاه بانکی</li>
                        <li className="pricing-plan__feature">فروش انواع محصولات</li>
                        <li className="pricing-plan__feature">طراحی UI/UX</li>
                        <li className="pricing-plan__feature">کاملا ریسپانسیو</li>
                    </ul>
                </div>
                <div className="pricing-plan__actions">
                    <p className="pricing-plan__cost">۲۸ میلیون تومان</p>
                    <p className="pricing-plan__text">قیمت پایه</p>
                    <a href="#connect" className="pricing-plan__button" >ثبت درخواست</a>
                    <p className="pricing-plan__text">* هزینه دامنه و هاست اعمال نشده است</p>
                </div>
            </section>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} className="price4">
            <section className="pricing-plan">
                <div className="pricing-plan__header">
                    <h1 className="pricing-plan__title">برنامه موبایل</h1>
                    <h2 className="pricing-plan__summary">Mobile Application</h2>
                </div>
                <div className="pricing-plan__description">
                    <ul className="pricing-plan__list">
                    <li className="pricing-plan__feature">به شکل کراس پلتفرم</li>
                        <li className="pricing-plan__feature">قابل اتصال به درگاه بانکی</li>
                        <li className="pricing-plan__feature">طراحی UI/UX</li>
                        <li className="pricing-plan__feature">انتشار در استورهای جهانی</li>
                    </ul>
                </div>
                <div className="pricing-plan__actions">
                    <p className="pricing-plan__cost">۳۴ میلیون تومان</p>
                    <p className="pricing-plan__text">قیمت پایه</p>
                    <a href="#connect" className="pricing-plan__button" >ثبت درخواست</a>
                    <p className="pricing-plan__text">* هزینه دامنه و هاست اعمال نشده است</p>
                </div>
            </section>
            </Col>
            </Row>
            </Container>
            </div>
            
            

    )
    
}
  