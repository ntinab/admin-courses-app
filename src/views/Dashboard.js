import React from "react";
import { Typography } from "antd";
import StatsList from "../components/StatsList";
import CourseTable from "../components/CourseTable";

const { Title } = Typography;

const Dashboard = () => {
  return (
    <>      
      <Title className="dashboard-title">Welcome to our Dashboard</Title>
      <StatsList url={process.env.REACT_APP_API_URL} resource="stats" />
      <CourseTable url={process.env.REACT_APP_API_URL} resource="courses" />
    </>
  );
};
export default Dashboard;          