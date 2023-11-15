const CircularProgressBar = ({ percentage }) => {
  const radius = 90; // Increase the radius to make the circle bigger
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage * circumference) / 100;

  return (
    <div>
      <div className="w-[281.50px] h-[250px] p-5 bg-stone-50 rounded-xl shadow flex-col justify-between items-center inline-flex">
        <div className="text-neutral-900 text-[10px] font-semibold font-['Poppins']">
          Target 1000 AED
        </div>

        <svg className="progress-ring" width="200" height="200">
          <circle
            className="progress-ring__circle"
            stroke="#3498db"
            strokeWidth={strokeWidth}
            fill="transparent"
            r={radius}
            cx={100}
            cy={100}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: circumference - progress,
            }}
          />

          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy="0.3em"
            fontSize="18"
            fill="#3498db"
          >
            {/* {percentage}% */}
          </text>
        </svg>
      </div>

      <div className="flex h-250 p-20 flex-col justify-space items-center flex-1 relative mt-[-223px] text-[13px]">
        <div className="text-poppins text-14 font-semibold leading-21">
          Branch Name
        </div>
        <div className="text-poppins text-10 font-normal leading-15">
          {/* {progressPercentage}% Target completed */}
        </div>
        <div className="text-poppins text-8 font-normal leading-12">
          25% More earnings today
        </div>
        <div className="text-poppins text-24 font-semibold leading-36">
          1250.88
        </div>
      </div>
      
     
     
      
     
      
    </div>
  );
};

export default CircularProgressBar;
