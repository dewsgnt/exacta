import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import AuthContext from "../store/AuthContext";

const Login = () => {
    const router = useRouter()
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const authCtx = useContext(AuthContext);
    
    if (authCtx.loggedin) {
    //   navigate("/");
    router.push("/")
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      let auth = localStorage.getItem("token");
  
      let url;
      url = `http://localhost:8080/api/v1/users/login`;
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          Accept: "/",
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMassage = "Authentication failed!";
              throw new Error(errorMassage);
            });
          }
        })
        .then((data) => {
          authCtx.login(data.data.token);
        })
        .catch((err) => {
          alert("Data yang anda masukkan salah, silahkan di cek!");
        });
    };

  return (
    <section className="flex flex-col items-center justify-center text-center h-[100vh] bg-[#EDEFFB]">
        <div className="bg-white rounded-2xl btn flex flex-row w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold text-black">
              <span className="text-bg_main">Exac</span>ta
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-bg_main mb-2">Masuk Di Sini</h2>
              <div className="border-2 w-10 border-bg_main inline-block mb-2"></div>
            </div>
            
            <form onSubmit={handleSubmit}>
            <div className="flex flex-col border-transparent items-center">
              <div className="">
                <input 
                type='email' 
                name='email' 
                placeholder="Email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#EDEFFB] bg-[#EDEFFB] w-64 p-2 mt-[2vh] flex items-center rounded"></input>
              </div>
              <div className="">
                <input 
                type='password' 
                name='password' 
                placeholder="Password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#EDEFFB] bg-[#EDEFFB] w-64 p-2 mt-[2vh] flex items-center rounded"></input>
              </div>
              {/* <a href="/" className="border-2 border-bg-blue bg-bg_blue rounded-full px-12 py-2 inline-block font-semibold hover:bg-bg_blue hover:text-bg_main mt-[7vh]">Mulai</a> */}
              <button className="border-2 border-bg-blue bg-bg_blue rounded-full px-12 py-2 inline-block font-semibold hover:bg-bg_blue hover:text-bg_main mt-[4vh]" type="submit">Mulai</button>
            
            </div>
            </form>
          </div>
          <div className="w-2/5 text-white bg-bg_main rounded-r-2xl py-[20vh] px-12">
            <h2 className="text-3xl font-bold">Halo, Teman-teman!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-2">Uji coba kemampuan matematika kalian bersama kami, yuk!</p>
            <a href="/register-page" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-bg_main mt-[7vh]">Register</a>
            </div>
        </div>
    </section>
    );
};

export default Login;
