import { useState } from "react";
import { useContext } from "react";
import { LocationContext } from "../context/LocationContext";

const style = {
  wrapper: `pt-2 scrollbar-hide overflow-hidden`,
  searchHeader: `w-full font-bold text-left flex items-center text-3xl p-4 overflow-hidden`,
  inputBoxes: `flex flex-col mb-4 relative`,
  inputBox: `h-10 mx-4 border-2 bg-[#eeeeee] flex items-center my-1 py-1 px-2`,
  focusedInputBox: `border-black`,
  svgContainer: `mx-1`,
  input: `my-2 rounded-2 p-2 outline-none border-none bg-transparent  h-full w-full`,
  verticalLine: `w-0 h-[2rem] border-black border absolute z-10 left-[2.3rem] top-[2rem]`,
};

const LocationSelector = () => {
  const [location, setLocation] = useState("from");
  // const {yourLocation, setYourLocation, meditLocation, setMeditLocation} = useContext(LocationContext)

  return (
    <div className={style.wrapper}>
      <div className={style.searchHeader}>
        {location === "from"
          ? "What is your current location?"
          : "Your nearest meditation spot"}
      </div>
      <div className={style.inputBoxes}>
        <div
          className={`${style.inputBox} ${
            location === "from" && style.focusedInputBox
          }`}
        >
          <div className={style.svgContainer}></div>
          <input
            className={style.input}
            placeholder="Enter your current location"
            // value={yourLocation}
            // onChange={e => setYourLocation(e.target.value)}
            onFocus={() => setLocation('from')}
          />
        </div>
        <div className={style.verticalLine} />
        <div
          className={`${style.inputBox} ${
            location === "to" && style.focusedInputBox
          }`}
        >
          <div className={style.svgContainer}>
            
          </div>
          <input
            className={style.input}
            placeholder='Nearest Meditation spot'
            // value={dropoff}
            // onChange={e => setDropoff(e.target.value)}
            onFocus={() => setLocation('to')}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;
