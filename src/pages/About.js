import "./css/about.css"
import Footer from "../components/footer/Footer"
import { useNavigate } from "react-router-dom"
export default function About(){
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/resources");
  };
  return(
    <>
    <h1 className="aboutus" style={{textAlign:"center"}}>ABOUT US</h1>
<div className="responsive-container-block bigContainer">
  <div className="responsive-container-block Container">
    <img className="mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eaboutus1.svg" alt="career counselling"/>
    <div className="allText aboveText">
      <p className="text-blk headingText">
        Our Mission
      </p>
      <p className="text-blk subHeadingText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p className="text-blk description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut.
      </p>
      
    </div>
  </div>
  <div className="responsive-container-block Container bottomContainer">
    <img className="mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/xpraup2.svg" alt="counselai" />
    <div className="allText bottomText">
      <p className="text-blk headingText">
        Our Vision
      </p>
      <p className="text-blk subHeadingText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p className="text-blk description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut.
      </p>
      <button className="explore" onClick={handleClick}>
        Explore
      </button>
    </div>
  </div>
</div>
   <Footer/>
</>
  )
}