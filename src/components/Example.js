import React from "react";
const MyComponent = (props) => {
  return (
    <div className="text-centre xt-card rounded-xl bg-slate-900 p-2">
      {props.data.map((item, index) => (
        <div className="my-4 bg-red-600 rounded-2xl  text-white h-20" key={index}>
          <p>{item.name}</p>
          <p>{item.designation}</p>
          <p>{item.skills}</p>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
