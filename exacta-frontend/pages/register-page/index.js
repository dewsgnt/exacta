import React from "react";
import Login from "../../src/components/Auth/login"
// import "./style.css";


const RegisterPage = () => {
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

            <div className="flex flex-col border-transparent items-center">
              <div className="">
                <input type='username' name='username' placeholder="Username" className="bg-[#EDEFFB] bg-[#EDEFFB] w-64 p-2 mt-[2vh] flex items-center rounded"></input>
              </div>
              <div className="">
                <input type='text' name='' placeholder="Nama Sekolah" className="bg-[#EDEFFB] bg-[#EDEFFB] w-64 p-2 mt-[2vh] flex items-center rounded"></input>
              </div>
              <div className="">
                <input type='email' name='email' placeholder="Email" className="bg-[#EDEFFB] bg-[#EDEFFB] w-64 p-2 mt-[2vh] flex items-center rounded"></input>
              </div>
              <div className="">
                <input type='password' name='password' placeholder="Password" className="bg-[#EDEFFB] bg-[#EDEFFB] w-64 p-2 mt-[2vh] flex items-center rounded"></input>
              </div>
              <a href="/" className="border-2 border-bg-blue bg-bg_blue rounded-full px-12 py-2 inline-block font-semibold hover:bg-bg_blue hover:text-bg_main mt-[4vh]">Daftar</a>
            </div>
          </div>
          <div className="w-2/5 text-white bg-bg_main rounded-r-2xl py-[20vh] px-12">
            <h2 className="text-3xl font-bold">Halo, Teman-teman!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-2">sudah punya akun? masuk di sini, yuk</p>
            <a href="/login-page" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-bg_main mt-[7vh]">Mulai</a>
            </div>
        </div>
    </section>
    // <div className="gradient">
    //   <Login />

    //   <div className="login-image">
    //     <img src="./assets/greating-image.png" height={400} width={400} />
    //   </div>
    // </div>
  );
};

export default RegisterPage;
