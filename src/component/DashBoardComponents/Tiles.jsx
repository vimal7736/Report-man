import React from 'react';
import { useTheme } from '../../ThemeContext';
import Calender from '../svg/Calender';
import Arrow from '../svg/Arrow';

const Tiles = () => {
  const { theme, toggleTheme } = useTheme();

  const tileData = [
    {
      title: 'Today sales',
      value: '322.61',
      currency: 'AED',
      percentage: '8',
      timePeriod: 'than yesterday',
      color: 'yellow-400',
    },
    {
      title: 'Top sale time',
      value: '322.61',
      currency: 'AED',
      timePeriod: '12 pm - 3 pm',
      color: 'pink-400',
    },
    {
      title: 'Door delivery sales',
      value: '322.61',
      currency: 'AED',
      timePeriod: 'Bills 08',
      color: 'orange-500',
    },
    {
      title: 'Bills & Pax',
      value: '11/25',
      timePeriod: '12 pm - 3 pm',
      color: 'rose-600',
    },
    {
      title: 'Void',
      value: '0/0',
      timePeriod: 'Bills/Memos',
      color: 'sky-500',
    },
  ];

  return (
    <div className="gap-[10px]  self-stretch p-[4px] grow justify-start items-center">
      <div className=" self-stretch  flex  items-start gap-[10px] grow">
        {tileData.map((tile, index) => (
          <div
            key={index}
            style={{ boxShadow: theme.shadow }}
            className={`px-5 bg-opacity-95 rounded-xl self-stretch  grow shadow flex-col justify-start items-start inline-flex`}
          >
            <div className="h-[30px] self-stretch justify-start grow items-center gap-[19px] inline-flex">
              <div className="py-2.5 justify-start items-center gap-2.5 flex grow">
                <div className=" grow text-[8px] font-normal font-['Poppins'] flex">
                  <div>{tile.title}</div>
                  {index === 0 && (
                    <div className="absolute ml-[70px]">
                      <Calender />
                    </div>
                  )}
                </div>
              </div>

            </div>
            <div className="h-[23px] justify-start items-end inline-flex">
              <div className="justify-center items-end gap-2.5 flex">
                <div className={`h-[27px] text-${tile.color} text-xl font-normal font-['Poppins']`}>
                  {tile.value}
                </div>
              </div>
              <div className="justify-center items-end gap-2.5 flex">
                <div className="text-xs mb-1 font-normal font-['Poppins']">{tile.currency}</div>
              </div>
            </div>

            {tile.percentage && (
              <div className="p-2.5 justify-center items-center gap-1 inline-flex">
                <Arrow />
                <div className={`text-green-400 text-[10px] flex font-medium font-['Poppins']`}>
                  {tile.percentage}
                </div>
                <div className="text-green-400 text-[6px] font-medium font-['Poppins']">
                  {tile.timePeriod}
                </div>
              </div>
            )}
            {!tile.percentage && (
              <div className="py-2.5 justify-center items-center gap-2.5 inline-flex">
                <div className={`text-[10px] font-normal font-['Poppins']`}>{tile.timePeriod}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tiles;
