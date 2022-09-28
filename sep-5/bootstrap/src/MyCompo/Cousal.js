import Carousel from 'react-bootstrap/Carousel';
import dp1 from '../assets/myFile.jpg';
import dp2 from '../assets/myFile2.jpg';
import dp3 from '../assets/Screenshot (1).png';


function Cousal() {
  
  let styly = {
     width:"100%",
     height:"200px",
     color:"white",
     backgroundColor:"black",
     textAling:"center",
     justifyContent:"center"
  }
  let tagStyle = {
 textAlign: "center",
 
  
  }
  return (
    <div className="Container">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dp3}
         
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dp1}
          
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dp2}
          
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dp3}
         
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={styly}> 
        <h2 style={tagStyle}>Hi It Is blank tag</h2>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Cousal;