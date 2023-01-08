import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const Board = () => {
    // const scoreBoard = localStorage.getItem("result");
    // console.log("scoreBoard " + scoreBoard);

    const [scoresBoard, setScoresBoard] = useState([]);
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
          let auth = localStorage.getItem("token");
          let { data: resp } = await axios.get(
            `http://localhost:8080/api/v1/home/categories`,
            {
              headers: {
                Accept: "/",
                "Content-Type": "application/json",
                Authorization: "Bearer " +auth,
              },
            }
          );
    
        //   setCategories(resp.data);
        if (resp.code === 200) {
            setCategories(resp.data);
        }
        } catch (err) {
            console.log(err);
        }
      };

  const handleClick = async (e) => {
    try {
      let auth = localStorage.getItem("token");
      let { data: resp } = await axios.get(
        `http://localhost:8080/api/v1/home/score-boards?category_id=${e.target.value}`,
        {
          headers: {
            Accept: "/",
            "Content-Type": "application/json",
            Authorization: "Bearer " +auth,
          },
        }
      );
        if (resp.code === 200) {
            setScoresBoard(resp.data);
        }
    //   setScoresBoard(resp.data);
    } catch (err) {
        console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
    handleClick();
  }, []);

  return (
    <section id='course' className="board flex flex-col items-center py-[10vh] h-auto  bg-[#EFEFEF]">
    <h1 className="text-text_main text-5xl py-[8vh]">PAPAN SKOR</h1>
      <div className="courses items-center justify-center">
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
      </div>

      <div className="flex flex-col items-center ">
      <table class="table-fixed">
        <thead>
            <tr className="">
                <th className="font-semibold bg-lightblue text-2xl py-[0.7vh] px-[8vw] border border-slate-300">Nama</th>
                {/* <th className="font-semibold bg-lightblue text-2xl py-[0.7vh] px-[6vw] border-y-2 border-r-2">Nama Sekolah</th> */}
                <th className="font-semibold bg-lightblue text-2xl py-[0.7vh] px-[8vw] border border-slate-300 ">Nilai</th>
                <th className="font-semibold bg-lightblue text-2xl py-[0.7vh] px-[8vw] border border-slate-300">Waktu</th>
            </tr>
          </thead>
          <tbody>
            {scoresBoard.map((scoreBoard, index) => {
              return scoresBoard.length !== 0 ? (
                <tr key={index}>
                  <td className="font-normal text-2xl py-[0.7vh] border border-slate-300">{scoreBoard.username}</td>
                  <td className="font-normal text-2xl py-[0.7vh] border border-slate-300">{scoreBoard.score}</td>
                  <td className="font-normal text-2xl py-[0.7vh] border border-slate-300">{scoreBoard.duration}</td>
                </tr>
              ) : (
                <tr key={index}>
                  <td>{scoreBoard.duration}</td>
                </tr>
              );
            })}

          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Board;
