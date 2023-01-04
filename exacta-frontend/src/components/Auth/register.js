import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../api/Api";

const Register = () => {
  const [username, setUsername] = React.useState("");
  const [namasekolah, setNamaSekolah] = React.useState("")
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  // const submit = async (e) => {
  //   e.preventDefault();
    
  //   const response = await fetch('http://localhost:8080/api/v1/users/regist', {
  //     method: 'POST',
  //     headers: {'Content-type': 'aplication/json'},
  //     body: JSON.stringify({
  //       username,
  //       namasekolah,
  //       email,
  //       password
  //     })
  //   })

  //   const content = await response.json()

  //   console.log(content);
  // }
  const submit = async (e) => {
    e.preventDefault();
    try {
      let { data: res } = await axios.post(
        `${API.API_URL}/api/v1/users/regist`,
        {
          username: username,
          email: email,
          password: password,
          namasekolah: namasekolah,
        },
        {
          headers: {
            Accept: "/",
            "Content-Type": "application/json",
          },
        }
      );
      console.log("code"+res.statusCode)
      if (res.statusCode == 200) {
        //navigate("/");
        alert(
          "berhasill"
        );
      }
    } catch (error) {
      alert(
        "Username / Email Sudah terdaftar, Silahkan Periksa Data Anda Kembali!"
      );
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
              <h2 className="text-3xl font-bold text-bg_main mb-2">Daftar Di Sini</h2>
              <div className="border-2 w-10 border-bg_main inline-block mb-2"></div>
            </div>
            <form onSubmit={submit}>
            <div className="flex flex-col border-transparent items-center">
              <div className="">
                <input
                type='username'
                name='username' 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className="bg-[#EDEFFB] bg-[#EDEFFB] w-64 p-2 mt-[2vh] flex items-center rounded"></input>
              </div>
              <div className="">
                <input 
                type='text' 
                name='namasekolah' 
                placeholder="Nama Sekolah" 
                value={namasekolah} 
                onChange={(e) => setNamaSekolah(e.target.value)} 
                className="bg-[#EDEFFB] bg-[#EDEFFB] w-64 p-2 mt-[2vh] flex items-center rounded"></input>
              </div>
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
              {/* <a href="/login-page" className="border-2 border-bg-blue bg-bg_blue rounded-full px-12 py-2 inline-block font-semibold hover:bg-bg_blue hover:text-bg_main mt-[4vh]">Daftar</a> */}
              <button className="border-2 border-bg-blue bg-bg_blue rounded-full px-12 py-2 inline-block font-semibold hover:bg-bg_blue hover:text-bg_main mt-[4vh]" type="submit">Daftar</button>
            </div>
          </form>
          </div>
          <div className="w-2/5 text-white bg-bg_main rounded-r-2xl py-[20vh] px-12">
            <h2 className="text-3xl font-bold">Halo, Teman-teman!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-2">sudah punya akun? masuk di sini, yuk</p>
            <a href="/login-page" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-bg_main mt-[7vh]">Mulai</a>
            </div>
        </div>
    </section>
  );
};

export default Register;
