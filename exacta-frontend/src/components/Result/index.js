import React from "react";
import Link from "next/link";
// import "./style.css";
import { useRouter } from "next/router";

const Result = () => {
  const hasil = JSON.parse(localStorage.getItem("result"));
  console.log(hasil) 

  const router = useRouter();
  
  let durations = hasil.duration.split(":");
  durations[0] = parseInt(durations[0]) < 10 ? "0" + durations[0] : durations[0];
  durations[1] = parseInt(durations[1]) < 10 ? "0" + durations[1] : durations[1];

  return (
    <section className="flex flex-col items-center h-[100vh] bg-[#EDEFFB]">
    
      <h1 className="text-text_main text-5xl pt-[15vh] pb-[7vh]">Nilai</h1>
    
      <div id="isResult">
        <div className="flex justify-between items-center py-[5vh] px-[10vw] h-[50vh] w-[70vw] btn bg-white rounded-2xl">
          <div className="">
            <p className="isText text-xl text-black font-bold text-center">Correct</p>
            <span className="text-center">
              <p className="text-7xl font-bold correctAnswer">{hasil.correct}</p>
            </span>
          </div>
          <div className="text">
            <p className="isText text-xl text-black font-bold text-center">Wrong</p>
            <span className="text-center">
              <p className="text-7xl font-bold wrongAnswer">{hasil.wrong}</p>
            </span>
          </div>
          <div className="text">
            <p className="isText text-xl text-black font-bold text-center">Duration</p>
            <span className="text-center">
              <p className="text-7xl font-bold duration">{
                durations[0] + ":" + durations[1]
              }</p>
            </span>
          </div>
        </div>
      </div>

      

      <div className="toScoreboard">
      <button
        type="button"
        className="btn text-xl bg-button_main rounded-3xl border border-white w-[10vw] border-[0.3vw] tablet:px-[2vh] tablet:py-[0.3vw] mobile:px-[3vw] mobile:py-[1vw] mt-[7vh] mr-[2vw]'"
        style={{ width: 200 }}
        onClick={() => router.push("/skor-page")}
      >PAPAN SKOR
    </button>
      </div>
    
    </section>
  );
};

export default Result;
