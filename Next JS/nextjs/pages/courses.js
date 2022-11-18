import React from "react";

export const getStaticProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return {
    props: { courseData: data },
  };
};

const courses = (props) => {
  console.log(props.courseData);
  return (
    <>
      <h1>Courses</h1>
      {props.courseData.map((item, index) => {
        return <div key={index}>{item.title}</div>;
      })}
    </>
  );
};

export default courses;
