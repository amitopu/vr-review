import React, { useEffect, useState } from "react";
import MyBarChart from "../MyBarChart/MyBarChart";
import MyLineCharts from "../MyLineCharts/MyLineCharts";

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("chartdata.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className="mt-16">
            <h1 className="text-3xl">Welcome to dashboard!</h1>
            <div className="flex justify-around mt-10">
                <MyLineCharts data={data}></MyLineCharts>
                <MyBarChart data={data}></MyBarChart>
            </div>
        </div>
    );
};

export default Dashboard;
