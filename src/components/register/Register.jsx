import './register.scss'
//import {useState} from 'react';
//import Trainer from "../trainer/Trainer"
//import Trainee from "../trainee/Trainee"

export default function Register(){
{/*  const [isShown,setIsShown] = useState(false);
  const handleClick = event => {
   setIsShown(true);
  };

  const [LetsShow,setLetsShow] = useState(false);
  const Clickhandle = event => {
   setLetsShow(false);
  };*/}

  return (
<div className='register' id='register'>
{/*{isShown && <Trainer/>}*/}
{/*{LetsShow && <Trainee/>}*/}
<a href='#events'><i class="fa fa-close fa-1x styling"></i></a>

<div class="headerreg">

      <h1>Join Us</h1>
      <p>Register as a Trainee</p>
    </div>

    <div className='containerreg'>
    
      <div className="cardsreg">
      {/* Card 1 */}
      <a href='https://forms.gle/qLuvPs9iHoZR8rxm8' target="blank">
      <div className="cardreg">
        <img src="trainer1.jpg" alt="card" />
        <div className="card-bodyreg">
          <h2>Register As Corporate Trainee</h2>
        </div>
      </div>
      </a>
      
    
      {/* Card 2 */}
      <a href='https://forms.gle/wu1Q8x2DxYSccqje7' target="blank">
      <div className="cardreg resadjust">
        <img src="trainer2.jpg" alt="card" />
        <div className="card-bodyreg">
          <h2>Register As Individual Trainee</h2>
        </div>
      </div>
      </a>
      
      </div>  
  </div>
</div>
  )
}
