import Events from "../events/Events";
import Register from "../register/Register";
import './eventreg.scss';

export default function Eventreg() {
  return (
    <div className="eventreg" id="eventreg">
     <br></br>
    <Events/>
    <br></br>
      <div className="reg-alter">
      <Register></Register>
      </div>      
    </div>
  );
}
