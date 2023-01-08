import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const Board = () => {
    const scoreBoard = localStorage.getItem("result");
    console.log("scoreBoard " + scoreBoard);


  return (
    <section id='course' className="board flex flex-col items-center py-[10vh] h-[100vh] bg-[#EFEFEF]">
    <h1 className="text-text_main text-5xl py-[8vh]">PAPAN SKOR</h1>
      {/* <div className="courses items-center justify-center">
        {categories.map((category) => (
          <button
            className="btn mb-[5vh] bg-button_main rounded-3xl border border-white w-[10vw] border-[0.3vw] tablet:px-[2vh] tablet:py-[0.3vw] mobile:px-[3vw] mobile:py-[1vw]"
            style={{ width: 170 }} 
            key={category.id} 
            onClick={handleClick}
            value={category.id}>
            {category.name}
          </button>
        ))}
      </div> */}

      <div className="flex flex-row items-center">
        <thead>
            <tr className="">
                <th className="font-normal text-2xl py-[0.7vh] px-[6vw] border-y-2 border-x-2">Nama</th>
                {/* <th className="font-normal text-2xl py-[0.7vh] px-[6vw] border-y-2 border-r-2">Nama Sekolah</th> */}
                <th className="font-normal text-2xl py-[0.7vh] px-[6vw] border-y-2 border-r-2 ">Nilai</th>
                <th className="font-normal text-2xl py-[0.7vh] px-[6vw] border-y-2 border-r-2">Waktu</th>
            </tr>
          </thead>
          <tbody>
            {scoresBoard.map((scoreBoard, index) => {
              return scoresBoard.length !== 0 ? (
                <tr key={index}>
                  <td className="font-normal text-2xl py-[0.7vh] px-[6vw] border-y-2 border-r-2">{scoreBoard.username}</td>
                  <td className="font-normal text-2xl py-[0.7vh] px-[6vw] border-y-2 border-r-2">{scoreBoard.score}</td>
                  <td className="font-normal text-2xl py-[0.7vh] px-[6vw] border-y-2 border-r-2">{scoreBoard.duration}</td>
                </tr>
              ) : (
                <tr key={index}>
                  <td>{scoreBoard.duration}</td>
                </tr>
              );
            })}
          </tbody>
      </div>
    </section>
  );
};

export default Board;
