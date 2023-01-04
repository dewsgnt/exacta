import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import AuthContext from "../store/AuthContext";
import axios from "axios";
import Link from "next/link";

const Login = () => {
    const router = useRouter()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post(`http://localhost:8080/api/v1/users/login`, JSON.stringify({email, password}),
            {
                headers: { 
                    Accept: "/",
                    "Content-Type": "application/json"},
                withCredentials: false,
            })

            const token = res?.data?.token

            localStorage.setItem("token", token)

            // setEmail("");
            // setPassword("");
            console.log("code"+ res.statusCode)

            if (res.statusCode == 200) {
                //navigate("/");
                router.push('/')
              }
        } catch (error) {
            router.push('/login-page')
            alert("Email atau Password salah")
        }
    }
    
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
            
            <form onSubmit={submit}>
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
              <button onClick={() => router.push('/')} className="border-2 border-bg-blue bg-bg_blue rounded-full px-12 py-2 inline-block font-semibold hover:bg-bg_blue hover:text-bg_main mt-[4vh]" type="submit">Mulai</button>
            
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
