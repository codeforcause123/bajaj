import React from "react";
const MyComponent = (props) => {
  return (
    <div className="text-centre xt-card rounded-2xl bg-slate-900">
      {props.data.map((item, index) => (
        <div className="my-4 bg-yellow-600 rounded-2xl" key={index}>
          <p>{item.name}</p>
          <p>{item.designation}</p>
          <p>{item.skills}</p>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
