import React,{useState} from 'react'
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import frameImage from "../image/Frame.png"
import logoImage from "../image/logo2.png"
import { Link } from 'react-router-dom';
import { AiFillPlusCircle } from "react-icons/ai";
import "../style/style.css"
import Fade from 'react-reveal/Fade'

const Home = () => {

  const [dropdownIndex, setDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownIndex(index === dropdownIndex ? null : index);
  };


  const dropdowns = [
    {
      title: "can education flashcards be used for all age Group",
      content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
      title: "How do education flashcards work?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
      title: "can education flashcards be used for test preparation?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    
  ];
  

  return (
    <div className='home-container'>
        <div className='home-nav'>
            <div>
            <GoHome />
            </div>
            <div>
            <IoIosArrowForward />
            </div>
            <div>
           <p>Flashcard</p>
            </div>
           <div>
           <IoIosArrowForward />
           </div>
           <div>
           <p>  Mathematics</p>
           </div>
           <div>
           <IoIosArrowForward />
           </div>
           <div className='text'>
            <h4>Relation and Function</h4>
           </div>
        </div>
        <div className='home-heading'>
            <h1> Relations and Functions ( Mathematics )</h1>
        </div>
<div>
    
</div>
        <div className= "home-content">
            <Link className='home-study'>Study</Link>
            <Link className='home-nav-link'>Quiz</Link>
            <Link className='home-nav-link'>Test</Link>
            <Link className='home-nav-link'>Game</Link>
            <Link className='home-nav-link'>Others</Link>
        </div>
       
        <div className='frame-main'>
        <Fade left>
            <img  className="frame-image" src={frameImage}  alt='frame'  />
            </Fade>
        </div>
        
         <div className='home-logo-main'>
          <div className='second-logo'>
            <img src={logoImage} alt='logo'  />
             </div>   
             <div className='create'>
                <button className='create-btn'>
                <AiFillPlusCircle /> 
                Create Flashcard
                </button>
               
            </div> 
         </div> 
         <div className='question-container'>
         <div className='question-content'>
           <h3>FAQ</h3>
                
    </div>
    
    <div className='question-drop'>
    {dropdowns.map((dropdown, index) => (
      <Fade left>
            <div key={index} className='dropdown'>
              <button className='dropdown-title' onClick={() => toggleDropdown(index)}>{dropdown.title}</button>
              {dropdownIndex === index && <p className='dropdown-content'>{dropdown.content}</p>}
            </div>
            </Fade>
          ))}
    </div>
         </div>
    </div>
  )
}

export default Home