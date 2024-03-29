import React from "react";
import DataList from "./DataList";

const Contest = (props) => {
  
   const { getData } = props;
  return (
    <div className="contestContainer">
      <div className="contestContainerInner">
        <div className="topIcon">Platforms</div>
        {getData.map((getdatao) => (
          <DataList
            key={Math.random() * 100}
            name={getdatao.name}
            sTime={getdatao.start_time}
            eTime={getdatao.end_time}
            duration={getdatao.duration}
            siteUrl={getdatao.url}
            site={getdatao.site}
          />

        ))}
      </div>
    </div>
  );
};

export default Contest;
