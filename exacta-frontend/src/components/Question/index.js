// import Countdown from "./Component/countdown";
import Button from "../Button"
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef, use } from "react";
import axios from "axios";

const Question = () => {
  const router = useRouter()
  
  let query = new URLSearchParams(router.asPath.split("?")[1])
  let categoryId = parseInt(query.get("category_id"));

  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [stopwatch, setStopwatch] = useState("00:00:00");
  const [pageQuestion, setPageQuestion] = useState(1);
  // const [categoryId, setCategoryId] = useState()
  const [selected, setSelected] = useState();
  const interval = useRef(null);
  
  // console.log("category_id", categoryId);

  // const categoryId = 0;

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const hours = Math.floor(
      (total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((total % (1000 * 60)) / 1000);

    return {
      total,
      hours,
      minutes,
      seconds,
    };
  }

  function startCount(endtime) {
    let { total, hours, minutes, seconds } = getTimeRemaining(endtime);
    if (total >= 0) {
      setStopwatch(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    } else {
      clearInterval(interval.current);
    }
  }

  useEffect(() => {
    const endtime = new Date(Date.parse(new Date()) + 3600 * 1000);
    interval.current = setInterval(() => startCount(endtime), 1000);
    return () => clearInterval(interval.current);
  }, []);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // let auth = localStorage.getItem("token");
        const token = res.data.token;
        localStorage.setItem("token", token);

        const { data: res } = await axios.get(
          `http://localhost:8080/api/v1/home/quizzes?category_id=${categoryId}&page=${pageQuestion}&limit=1`,
          {
            headers: {
              Accept: "/",
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            }, 
          }
        );

        setQuestions(res.data);

        setOptions(
          [res.data[0].correct_answer, ...res.data[0].incorrect_answers].sort(
            () => Math.random() - 0.5
          )
        );
      } catch (error) {}
    };

    fetchQuestions();
  }, [categoryId, pageQuestion]);

  const handleSelect = (index) => {
    if (selected === index && selected === questions[0]?.correct_answer)
      return "select";
    else if (selected === index && selected !== questions[0]?.correct_answer)
      return "wrong";
    else if (index === questions[0]?.correct_answer) return "select";
  };

  const handleQuit = () => {
    router.push({ pathname: "/" });
    setPageQuestion(0);
    setQuestions();
  };

  const handleCheck = (index) => {
    setSelected(index);
    let values = {
      quiz_id: questions[0].id,
      answer: index,
    };

    if (pageQuestion === 1) {
      let data = {
        answers: [values],
        category_id: id,
        duration: "",
      };
      localStorage.setItem("answer", JSON.stringify(data));
    } else if (pageQuestion > 1) {
      let data = JSON.parse(localStorage.getItem("answer"));
      data.answers.push(values);
      localStorage.setItem("answer", JSON.stringify(data));

      if (pageQuestion === 10) {
        let timeStart = "00:30:00";
        timeStart = timeStart.split(":");

        let timeRemaining = stopwatch;
        timeRemaining = timeRemaining.split(":");

        let data = JSON.parse(localStorage.getItem("answer"));
        data.category_id = categoryId;
        data.duration = `${parseInt(
          timeStart[1] - timeRemaining[1]
        )}:${parseInt(timeStart[2] - timeRemaining[2])}`;
        localStorage.setItem("answer", JSON.stringify(data));
        console.log(localStorage.getItem("answer"));
      }
    }
  };

  const handleNext = async () => {
    if (pageQuestion > 9) {
      let auth = localStorage.getItem("token");
      let answers = localStorage.getItem("answer");

      try {
        let { data: res } = await axios.post(
          `http:localhost:8080/api/v1/home/process-and-result`,
          answers,
          {
            headers: {
              Accept: "/",
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth,
            },
          }
        );

        localStorage.setItem("result", JSON.stringify(res.data));
        router.push("/result");
      } catch (err) {}
    } else if (selected) {
      router.push({
        pathname: "/question-page",
        search: `?category_id=${categoryId}&page=${pageQuestion + 1}`,
      });

      setPageQuestion(pageQuestion + 1);
      setSelected();
    }
  };


    return (
        <section id='question' className="flex flex-col items-center h-[100vh] bg-[#EDEFFB]">
            <div>
                <h1 className="text-text_main text-5xl py-[8vh]">Pertanyaan</h1>
            </div>
            <div className='flex'>
            <div className='flex h-[60vh] w-[70vw] btn bg-white rounded-2xl'>
                <div className='flex flex-col p-[2vw] tablet:w-[100%] mobile:w-[80%]'>
                {/* <ImageComponent src={ellipse1} style="w-[10vw] mb-[4vh]"/> */}
                    <div className='flex flex-row justify-between'>
                        <h3 className='tablet:text-xl tablet:mb-[10vh] mobile:mb-4 tracking-wider mobile:title-med-mobile'>Soal ke {pageQuestion} dari 10</h3>
                        {/* <div className="tablet:text-xl tablet:mb-[10vh] mobile:mb-4 tracking-wider mobile:title-med-mobile">
			                <h2>{stopwatch}</h2>
		                </div> */}
                    </div>
                        <div className="text-black text-xl">
                          
                        {questions.map((item, index) => (
                          <h5 key={index} className="mb-4">
                            {item.question}
                          </h5>
                        ))}
                    <div className="options">
                    
                    {options.map((index) => (
                    <button
                        className={`singleOption  
                        ${
                        selected && handleSelect(index)
                        }`}
                        key={index}
                        onClick={() => handleCheck(index)}
                        disabled={selected}
                        value={index}
                        style={{ color: "black" }}
                    >
                        {index}
                    </button>
                    ))}
                    
                    </div>
                    </div>
                    {/* <div className="flex pt-[30vh] items-end justify-between">
                        <div>
                        <Button title='Kembali' onClick={() => router.push('#')} btnStyle='bg-button_main rounded-3xl border border-white w-[10vw] border-[0.3vw] tablet:px-[2vh] tablet:py-[0.3vw] mobile:px-[3vw] mobile:py-[1vw] mr-[2vw]' />  
                        <Button title='Selanjutnya' onClick={() => router.push('#')} btnStyle='bg-button_main rounded-3xl border border-white w-[10vw] border-[0.3vw] tablet:px-[2vh] tablet:py-[0.3vw] mobile:px-[3vw] mobile:py-[1vw] mr-[2vw]' />  
                        </div>
                        <Button title='Selesai' onClick={() => router.push('/skor-page')} btnStyle='bg-bg_main rounded-3xl border border-white w-[10vw] border-[0.3vw] tablet:px-[2vh] tablet:py-[0.3vw] mobile:px-[3vw] mobile:py-[1vw] mr-[2vw]' />  
                    </div> */}
                    <div className="flex pt-[30vh] items-end justify-end">
                        <div>
                        <button
                            type="button"
                            className="btn bg-button_main rounded-3xl border border-white w-[10vw] border-[0.3vw] tablet:px-[2vh] tablet:py-[0.3vw] mobile:px-[3vw] mobile:py-[1vw] mr-[2vw]"
                            style={{ width: 170 }}
                            onClick={() => handleQuit()}
                            >
                            Kembali
                        </button>
                        <button
                            type="button"
                            className="btn bg-button_main rounded-3xl border border-white w-[10vw] border-[0.3vw] tablet:px-[2vh] tablet:py-[0.3vw] mobile:px-[3vw] mobile:py-[1vw] mr-[2vw]'"
                            style={{ width: 170 }}
                            onClick={() => handleNext()}
                            >
                            {pageQuestion > 9 ? "Selesai" : "Selanjutnya"}
                        </button>
                        </div>
                    </div>
                        {/* <ButtonIcon onClick={onClick} style="w-[1vw] place-content-end" /> */}
                    </div>
                    </div>
            </div>
        </section>
    )
}

export default Question