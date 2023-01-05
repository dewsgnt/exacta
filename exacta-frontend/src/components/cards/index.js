import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from "axios";
import { useRouter } from "next/router";


const Cards = () => {
  const [categories, setCategories] = useState([]);
  // const navigate = useNavigate();
  const router = useRouter();
  
  const fetchCategories = async () => {
    try {
      let auth = localStorage.getItem("token");
      // XMLHttpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
      let { data: resp } = await axios.get(
        `http://localhost:8080/api/v1/home/categories`,
        {
          headers: {
            Accept: "/",
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth,
          },
          // withCredentials: true,
        }
      );

      setCategories(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleClick = (e) => {
    router.push({
      pathname: "/quizzes",
      search: `?category_id=${e}&page=1`,
    });
  };

  return (
    <>
      <section className="about topMarign" id="card">
        <div className="heading">
          <div className="cards">
            <center>
              <h1>Choose a Course!</h1>{" "}
            </center>
            <div className="container flex d-flex gap-4 mt-5">
              <Card
                style={{ width: "18rem" }}
                className="border-0  bg-transparent"
              >
                <Card.Body className="card-body1">
                  {/* <center>
                    <img className="card-img1" src="./assets/vocab.png" />
                  </center> */}
                  <Card.Title style={{ color: "black" }}>
                    <center>{categories[0]?.name}</center>
                  </Card.Title>
                  <Card.Text style={{ color: "black", textAlign: "justify" }}>
                    {categories[0]?.description}
                  </Card.Text>
                  <center>
                    <button
                      className="start1"
                      onClick={(e) => handleClick(e.target.value)}
                      value={categories[0]?.id}
                    >
                      Start
                    </button>
                  </center>
                </Card.Body>
              </Card>

              <Card
                style={{ width: "18rem" }}
                className="border-0 bg-transparent"
              >
                <Card.Body className="card-body2">
                  {/* <center>
                    <img className="card-img2" src="./assets/grammar.png" />
                  </center> */}
                  <Card.Title style={{ color: "black" }}>
                    <center>{categories[1]?.name}</center>
                  </Card.Title>
                  <Card.Text style={{ color: "black", textAlign: "justify" }}>
                    {categories[1]?.description}
                  </Card.Text>
                  <center>
                    <button
                      className="start2"
                      onClick={(e) => handleClick(e.target.value)}
                      value={categories[1]?.id}
                    >
                      Start
                    </button>
                  </center>
                </Card.Body>
              </Card>

              <Card
                style={{ width: "18rem" }}
                className="border-0  bg-transparent"
              >
                <Card.Body className="card-body3">
                  {/* <center>
                    <img className="card-img3" src="./assets/tenses.png" />
                  </center> */}
                  <Card.Title style={{ color: "black" }}>
                    <center>{categories[2]?.name}</center>
                  </Card.Title>
                  <Card.Text style={{ color: "black", textAlign: "justify" }}>
                    {categories[2]?.description}
                  </Card.Text>
                  <center>
                    <button
                      className="start3"
                      onClick={(e) => handleClick(e.target.value)}
                      value={categories[2]?.id}
                    >
                      Start
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
