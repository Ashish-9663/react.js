import './index';
import img1 from './imgIcon/start.png';
import img2 from './imgIcon/img2.png';
import img3 from './imgIcon/img3.png';
import img4 from './imgIcon/img4.png';
import img5 from './imgIcon/img5.png';
import img6 from './imgIcon/img6.png';
import img7 from './imgIcon/img7.png';
import icn1 from './imgIcon/icn1.png';
import icn2 from './imgIcon/icn2.png';
import icn3 from './imgIcon/icn3.png';
import icn0 from './imgIcon/icn0.png';
import folder from './imgIcon/pngwing.png';
function App() {
  return (
    <div className='main'>
      <div className="container">
      <div className='containerIcon'>
      <img className='folder' src={folder} alt='no images'/>
        </div>
        <div className='containerText'>
          w3clone 
        </div>
      </div>
      <div className="footer">
        <div className='footerLeft'>
          <div className='footerLeftLeft'>
             <img className='startimg1' src={img1} alt='no images'/>
          </div>
          <div className='footerLeftMid'>
          <img className='searchLens' src={icn0} alt='no images'/>
          <input className="lowerBtn1" type="text" name="searchBar" placeholder='Type here to search'/>
          </div>
          <div className='footerLeftRight'>
                <div className='tabs'><img className='startimg' src={img7} alt='no images'/></div>
                <div className='tabs'><img className='startimg' src={img3} alt='no images'/></div>
                <div className='tabs'><img className='startimg' src={img4} alt='no images'/></div>
                <div className='tabs'><img className='startimg' src={img5} alt='no images'/></div>
                <div className='tabs'><img className='startimg' src={img2} alt='no images'/></div>
                <div className='tabs'><img className='startimg' src={img3} alt='no images'/></div>
                <div className='tabs'><img className='startimg' src={img3} alt='no images'/></div>
                <div className='tabs'><img className='startimg' src={img6} alt='no images'/></div>
                <div className='tabs'><img className='startimg' src={img3} alt='no images'/></div>
          </div>
        </div>
        <div className='footerRigth'>
        <div className='right '><img className='startimg' src={icn2} alt='no images'/></div>
         <div className='right '>27.C</div>
         <div className='right '>/\</div>
         <div className='right '><img className='startimg33 startimg' src={icn1} alt='no images'/></div>
         <div className='right '>ENG</div>
         <div className='right5'>9:58 02/10/2022</div>
         <div className='right'><img className='startimg33 startimg' src={icn3} alt='no images'/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
