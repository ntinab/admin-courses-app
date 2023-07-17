import React from "react";
import useCourses from "../api/useCourses";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  const data = useCourses({
    url: process.env.REACT_APP_API_URL,
    resource: "courses",
  });
  return (
    <>
      {data.courses.map(
        ({ title, dates, id, price, online, duration, imagePath }) => {
          return (
            <div className="container" key={id}>
              <CourseCard
                id={id}
                title={title}
                price={price}
                duration={duration}
                online={online}
                dates={dates}
                imagePath={imagePath}
              />
            </div>
          );
        }
      )}
    </>
  );
};

export default Courses;