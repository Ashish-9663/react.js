import React from "react";
 import moment from "moment";

import AtCoder from "../assets/AtCoder.png";
import CodeForces from "../assets/code-forces.png";
import CodeChef from "../assets/codechef.jpg";
import HackerEarth from "../assets/hakerEarth.png";
import HackerRank from "../assets/hakerRank.png";
import Kick_Start from "../assets/kickstarter.png";
import LeetCode from "../assets/leetcode.png";

const DataList = (props) => {
  const { name, sTime, eTime, duration, siteUrl, site } = props;

  const startDate = () => {
    let date = new Date(sTime);
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();

    return d + "/" + m + "/" + y;
  };

  const endDate = () => {
    let date = new Date(eTime);
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();

    return d + "/" + m + "/" + y;
  };

  let dtFormat = new Intl.DateTimeFormat("en-US", {
    // day: '2-digit',
    // month:'long',
    // year:'numeric'
    hour: "2-digit",
    minute: "2-digit",
    // timeZoneName:'short'
  });
  let t1 = new Date(sTime);
  let timeStart = dtFormat.format(t1);

  let t2 = new Date(eTime);
  let timeEnd = dtFormat.format(t2);

  
  let elapsed = moment().format(duration.value);
   let timedu= new Date(elapsed);
  let h = timedu.getHours() ;
    let g =timedu.getMinutes();
    let s = timedu.getSeconds();
    let durati = h+':'+g+':'+s;


  const siteLogo = () => {
    let name = site;
    if (name === "AtCoder") return AtCoder;
    if (name === "LeetCode") return LeetCode;
    if (name === "HackerEarth") return HackerEarth;
    if (name === "CodeChef") return CodeChef;
    if (name === "CodeForces") return CodeForces;
    if (name === "HackerRank") return HackerRank;
    if (name === "Kick Start") return Kick_Start;
  };

  return (
    <div className="dataList">
      <a href={siteUrl} target="_self">
        <div className="dataListContainerLeft">
          <div className="dataListItems">
            <h2>{name}</h2>
          </div>
          <div className="dataListItems">
            Start date: &#160;
            {startDate()}
            <br />
            Start time: &#160;
            {timeStart}
          </div>
          <div className="dataListItems">
            End date: &#160;
            {endDate()}
            <br />
            End time: &#160;
            {timeEnd}
          </div>
          <div className="dataListItems">Duration: &#160;{durati}</div>
        </div>
        <div className="dataListContainerRight">
          <img src={siteLogo()} alt="logos" />
        </div>
      </a>
    </div>
  );
};

export default DataList;
