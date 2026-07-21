import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, buttonUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        <div className="pc-button">
        <a href={buttonUrl} target="_blank" rel="noopener noreferrer"><button className="color">مشاهده سایت</button></a></div>
      </div>
    </Col>
  )
}