import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/des.jpg";
import courseImg2 from "../../assests/images/outils_web.png";
import courseImg3 from "../../assests/images/mL.jpg";
import courseImg4 from "../../assests/images/mL.jpg";
import courseImg5 from "../../assests/images/seo.png";
import courseImg6 from "../../assests/images/data.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "1",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "2",
    title: "Devlopement web",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "3",
    title: "Machine learning",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
  {
    id: "4",
    title: "Analyse de donnees",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg4,
  },
  {
    id: "5",
    title: "Intelegence artificiel",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg5,
  },
  {
    id: "6",
    title: "Data warehouse",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg6,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
              </div>
              <div className="w-50 text-end">
                <button className="btn">See..</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item,) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
