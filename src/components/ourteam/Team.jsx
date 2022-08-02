import "./team.scss";


export default function Team() {
    
    return (
    <div className="team" id="team">
        <div className="heading">
        <h1>Our Team</h1>
        </div>
        <div className="team_container">
           <div className="card_team">
              <img src="maira.jpeg" alt=""></img>
              <div className="team_body">
                <h3>Maira Tanweer</h3>
                <p>Head of Communication & Coordination</p>
                <a href="http://linkedin.com/in/maira-tanweer-b4550410b" target="blank"><i className="fa fa-linkedin"></i></a>
              </div>
           </div>

           <div className="card_team">
           <img src="anum.jpeg" alt=""></img>
           <div className="team_body">
             <h3>Anum Haroon Malik</h3>
             <p>Head of Business Development & Operations</p>
             <a href="https://www.linkedin.com/in/anum-haroon-malik-10682a129" target="blamk"><i className="fa fa-linkedin"></i></a>
           </div>
           </div>
           
           <div className="card_team">
           <img src="howaina.jpeg" alt=""></img>
           <div className="team_body">
             <h3>Howaina Saghir</h3>
             <p>Head of Public Relations</p>
             <a href="https://www.linkedin.com/in/howainasaghir" target="blank"><i className="fa fa-linkedin"></i></a>
           </div>
           </div>


           <div className="card_team">
           <img src="fatima.jpeg" alt=""></img>
           <div className="team_body">
             <h3>Fatima Raza</h3>
             <p>Head of Marketing & Sales</p>
             <a href="https://www.linkedin.com/in/fatima-raza-b52101160" target="blank"><i className="fa fa-linkedin"></i></a>
           </div>
           </div>
        </div>
    </div>
    
    )}