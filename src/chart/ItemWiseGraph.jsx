import React from "react";

const ItemWiseGraph = ({ data }) => {
  const maxQuantity = Math.max(...data.map(item => parseFloat(item.quantity)));

  return (
    <div className="Frame305 item-wise-graph h-[300px] overflow-y-scroll flex-col justify-start items-start rounded shadow inline-flex ">
      <div className="Frame235 self-stretch h-8 justify-between items-center inline-flex grow">
        <div className="Frame234 p-2.5 justify-center items-center gap-2.5 flex ">
          <div className="ItemWiseGraph  text-base font-semibold">Item wise graph</div>
        </div>
        <div className="Frame206 p-2.5 justify-center items-center gap-2.5 flex">
          <div className="text-green-500 text-xs font-normal">3 %</div>
        </div>
      </div>
      <div className="Frame307 self-stretch grow justify-between items-start inline-flex">
        <div className="Frame306 grow shrink basis-0 flex-col justify-start items-start inline-flex">
          {data.map((item, index) => (
            <div key={index} className="Frame219 self-stretch justify-start items-start inline-flex">
              <div className="Frame225 grow shrink basis-0 h-9 justify-start items-start gap-2.5 flex">
                <div className="Frame211 w-[150px] h-9 p-1 justify-end items-center gap-2.5 flex">
                  <div className={`${item.className}  text-xs font-medium`}>{item.label}</div>
                </div>
                <div className={`Frame217 w-[450px]  grow shrink basis-0 self-stretch flex-col justify-center items-center gap-2.5 inline-flex`}>
                  <div className={`Rectangle35 self-stretch h-2.5  bg-${item.color}`} style={{ width: `${(parseFloat(item.quantity) / maxQuantity) * 100}%` }} />
                </div>
              </div>
              <div className="Frame218 p-2.5 w-[100px] justify-center items-center gap-2.5 flex">
                <div className="Pc  text-xs font-medium">{item.quantity}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="Frame304 w-1.5 justify-start items-start gap-2.5 flex">
          <div className="Rectangle37 w-1.5 h-96 bg-neutral-100 rounded" />
          <div className="Rectangle38 w-1 h-11 bg-neutral-900 bg-opacity-40 rounded" />
        </div>
      </div>
    </div>
  );
};

export default ItemWiseGraph;
