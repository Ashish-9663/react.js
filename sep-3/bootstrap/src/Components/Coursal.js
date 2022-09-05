import React from 'react'
import dp1 from "../assets/myFile.jpg";
import dp2 from "../assets/Screenshot (1).png";
import dp3 from "../assets/myFile2.jpg";


function Coursal() {
  
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={dp1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={dp2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={dp3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Coursal
