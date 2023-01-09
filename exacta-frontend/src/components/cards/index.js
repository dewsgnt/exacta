import React, { useState, useEffect, use } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from "axios";
import { useRouter } from "next/router";
import ImageComponent from "../Image";
import ellipse1 from '../../assets/images/math.png'
import { ChevronRightIcon } from '@heroicons/react/solid'

const Cards = () => {
    const router = useRouter()
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
      try {
        let auth = localStorage.getItem("token");
        console.log(auth);
        // axios.defaults.withCredentials= true
         let { data: resp } = await axios.get(
          `http://localhost:8080/api/v1/home/categories`,
          {
            headers: {
                  Authorization: `Bearer ${auth}`            }, 
            //  withCredentials: true,
            //  crossDomain: true  

          });

  
        setCategories(resp.data);
      } catch (err) {
        console.log(err);
      }
    };
    
  
    useEffect(() => {
      fetchCategories();
    }, []);
  
  const handleClick = (id) => {
    id = categories[0]?.id
    router.push({ 
      pathname: `/question-page`,
      query: { category_id: id, page: 1, limit: 1},
   });
  }

  const handleClick1 = (id) => {
    id = categories[1]?.id
    router.push({ 
      pathname: `/question-page`,
      query: { category_id: id, page: 1, limit: 1},
   });
   }

   const handleClick2 = (id) => {
    id = categories[2]?.id
    router.push({ 
      pathname: `/question-page`,
      query: { category_id: id, page: 1, limit: 1},
   });
   }
  
  return (
    <>
    <section className="flex flex-col items-center justify-center h-[100vh] bg-[#EDEFFB]">
        <h1 className="text-text_main text-5xl pb-[8vh]">KUIS</h1>
        <div className="flex flex-row">
          <div className="flex flex-row">
            <div className="container flex d-flex gap-4 mt-5 mr-3 text-black">
              <Card
                className="flex h-[60vh] w-[25vw] flex bg-white rounded-2xl"
              >
                <Card.Body className="flex flex-col justify-center items-center p-[2vw] m-[1vw] tablet:w-[100%] mobile:w-[80%]">
                  <center>
                  <ImageComponent src={ellipse1} alt="" style="w-[10vw] mb-[4vh]"/>
                  </center>
                  <Card.Title 
                  style={{ color: "black" }} 
                  className='tablet:text-3xl tablet:mb-[10vh] mobile:mb-4 tracking-wider mobile:title-med-mobile text-start'>
                    <center className="text-black">{categories[0]?.name}</center>
                  </Card.Title>
                  {/* <Card.Text style={{ color: "white", textAlign: "justify" }}>
                    {categories[0]?.description}
                  </Card.Text> */}
                  <center>
                    <button
                    onClick={(e) => handleClick(e.target.value)}
                    value={categories[0]?.id}
                    >
                    <ChevronRightIcon className="h-[5vh] w-[7vw] m-0 bg-button_main rounded-xl text-white"/>
                    </button>
                  </center>
                </Card.Body>
              </Card>
            </div>

            <div className="container flex d-flex gap-4 mt-5 mr-3 text-black">
              <Card
                className="flex h-[60vh] w-[25vw] flex bg-white rounded-2xl"
              >
                <Card.Body className="flex flex-col justify-center items-center p-[2vw] m-[1vw] tablet:w-[100%] mobile:w-[80%]">
                  <center>
                  <ImageComponent src={ellipse1} alt="" style="w-[10vw] mb-[4vh]"/>
                  </center>
                  <Card.Title 
                  style={{ color: "black" }} 
                  className='tablet:text-3xl tablet:mb-[10vh] mobile:mb-4 tracking-wider mobile:title-med-mobile text-start'>
                    <center>{categories[1]?.name}</center>
                  </Card.Title>
                  {/* <Card.Text style={{ color: "white", textAlign: "justify" }}>
                    {categories[1]?.description}
                  </Card.Text> */}
                  <center>
                    <button
                    onClick={(e) => handleClick1(e.target.value)}
                    value={categories[1]?.id}
                    >
                    <ChevronRightIcon className="h-[5vh] w-[7vw] m-0 bg-button_main rounded-xl text-white"/>
                    </button>
                  </center>
                </Card.Body>
              </Card>
            </div>

            <div className="container flex d-flex gap-4 mt-5 mr-3 text-black">
              <Card
                className="flex h-[60vh] w-[25vw] flex bg-white rounded-2xl"
              >
                <Card.Body className="flex flex-col justify-center items-center p-[2vw] m-[1vw] tablet:w-[100%] mobile:w-[80%]">
                  <center>
                  <ImageComponent src={ellipse1} alt="" style="w-[10vw] mb-[4vh]"/>
                  </center>
                  <Card.Title 
                  style={{ color: "black" }} 
                  className='tablet:text-3xl tablet:mb-[10vh] mobile:mb-4 tracking-wider mobile:title-med-mobile text-start'>
                    <center>{categories[2]?.name}</center>
                  </Card.Title>
                  {/* <Card.Text style={{ color: "white", textAlign: "justify" }}>
                    {categories[2]?.description}
                  </Card.Text> */}
                  <center>
                    <button
                    onClick={(e) => handleClick2(e.target.value)}
                    value={categories[2]?.id}
                    >
                    <ChevronRightIcon className="h-[5vh] w-[7vw] m-0 bg-button_main rounded-xl text-white"/>
                    </button>
                  </center>
                </Card.Body>
              </Card>
            </div>
          </div>

         
        </div>
      </section>

      <div className="boxCard"></div>
    </>
  );
};

export default Cards;
