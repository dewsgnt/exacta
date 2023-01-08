import React from "react";
import Link from "next/link";
// import "./style.css";

const Result = () => {
  const hasil = localStorage.getItem("result");
  console.log(hasil) 


  return (
    <section className="flex flex-col items-center h-[100vh] bg-[#EDEFFB]">
    
      <h1 className="text-text_main text-5xl py-[15vh]">Nilai</h1>
    
      <div id="isResult">
        <div className="flex justify-between items-center py-[5vh] px-[10vw] h-[50vh] w-[70vw] btn bg-white rounded-2xl">
          <div className="text">
            <p className="isText text-xl text-black font-bold">Correct</p>
            <span className="correctScore">
              {/* <p>{hasil.correct}</p> */}
            </span>
          </div>
          <div className="text">
            <p className="isText text-xl text-black font-bold">Wrong</p>
            <span className="wrongScore">
              {/* <p>{hasil.wrong}</p> */}
            </span>
          </div>
          {/* <div className="text">
            <p className="isText text-xl text-black font-bold">Duration</p>
            <span className="times">
              <p>{hasil.duration}</p>
            </span>
          </div> */}
        </div>
      </div>

      <div className="toScoreboard">
        <button data-id="scoreboard">
          {/* <Link
            to={"/scores-board"}
            style={{ textDecoration: "none", color: "black" }}
          >
            Scoreboard
          </Link> */}
        </button>
      </div>
    
    </section>
  );
};

export default Result;
