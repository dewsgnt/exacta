import { Table } from "react-bootstrap";
import LayoutHome from "../../src/components/Layout-Home";

const Skor = () => {
    
    return (
    <LayoutHome>
        <section id='course' className="flex flex-col items-center py-[10vh] h-[100vh] bg-[#EFEFEF]">
        <h1 className="text-text_main text-5xl py-[8vh]">PAPAN SKOR</h1>
        
        {/* <div className="courses">
        {categories.map((category) => (
            <button key={category.id} onClick={handleClick} value={category.id}>
            {category.name}
            </button>
        ))}
        </div> */}
        
              <div className="flex flex-row items-center">
                  <thead>
                    <tr className="">
                      <th className="font-normal text-2xl py-[0.7vh] px-[3vw] border-y-2 border-x-2">Nama</th>
                      <th className="font-normal text-2xl py-[0.7vh] px-[3vw] border-y-2 border-r-2">Nama Sekolah</th>
                      <th className="font-normal text-2xl py-[0.7vh] px-[3vw] border-y-2 border-r-2 ">Nilai</th>
                      <th className="font-normal text-2xl py-[0.7vh] px-[3vw] border-y-2 border-r-2">Waktu</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {scoresBoard.map((scoreBoard, index) => {
                      return scoresBoard.length !== 0 ? (
                        <tr key={index}>
                          <td>{scoreBoard.username}</td>
                          <td>{scoreBoard.score}</td>
                          <td>{scoreBoard.duration}</td>
                        </tr>
                      ) : (
                        <tr key={index}>
                          <td>{scoreBoard.duration}</td>
                        </tr>
                      );
                    })} */}
                  </tbody>
                
              </div>
            </section>
        </LayoutHome>
          )
}

export default Skor 