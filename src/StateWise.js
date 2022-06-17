import React, { useEffect, useState } from "react";
import "./StateWise.css";
const StateWise = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    const res = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
    const actData = await res.json();

    setData(actData.data.regional);
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div className = "container">
      <h1>INDIA COVID-19 DASHBOARD</h1>
      <thead>
        <tr>
          <td>State</td>
          <td>confirmedCasesIndian</td>
          <td>confirmedCasesForeign</td>
          <td>deaths</td>
          <td>discharged</td>
          <td>totalConfirmed</td>
        </tr>
      </thead>
      <tbody>
        {data.map((curEle, idx) => {
          return (
            <tr>
              <td>{curEle.loc}</td>
              <td>{curEle.confirmedCasesIndian}</td>
              <td>{curEle.confirmedCasesForeign}</td>
              <td>{curEle.deaths}</td>
              <td>{curEle.discharged}</td>
              <td>{curEle.totalConfirmed}</td>
            </tr>
          );
        })}
      </tbody>
    </div>
  );
};
export default StateWise;
