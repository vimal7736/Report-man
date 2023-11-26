import React from "react";

const CircularProgressBar = ({ percentage, branchName, target, earnings ,stroke ,  }) => {
  const radius = 90; // Increase the radius to make the circle bigger
  const strokeWidth = 11;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage * circumference) / 100;

  return (
    <div className="relative">
      <div className="w-[281.50px] h-[250px] p-5 rounded-xl flex-col justify-between items-center inline-flex">
        <div className="text-[10px]  font-semibold font-['Poppins']">
          Target {target} AED
        </div>
        <svg className="progress-ring" width="200" height="200">
  <circle
    className="progress-ring__circle"
    stroke="#14FF00"
    strokeWidth={strokeWidth}
    fill="transparent"
    r={radius}
    cx={100}
    cy={100}
    style={{
      strokeDasharray: circumference,
      strokeDashoffset: circumference - progress,
      filter: "drop-shadow(0px 0px 4px #14FF00)",
      borderRadius: "50%",
    }}
  />
</svg>

      </div>

      <div className="flex h-250 p-20 flex-col justify-space items-center flex-1 relative mt-[-223px] text-[13px]">
        <div className="text-poppins text-14 font-semibold leading-21">
          {branchName}
        </div>
        <div className="text-poppins text-10 font-normal leading-15">
          {percentage}% Target completed
        </div>
        <div className="text-poppins text-8 font-normal leading-12">
          {earnings}% More earnings today
        </div>
        <div className="text-poppins text-24 font-semibold leading-36">xxx</div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
