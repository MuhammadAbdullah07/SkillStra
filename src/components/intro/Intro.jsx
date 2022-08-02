import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="landingpage">
        <div className="info">
          <h1>A Human Resource Development Marketplace</h1>
          
          <br></br>
          <p>
          Skillstra envisions to become a household name in the local training & development industry. 
          We see ourselves broadening our horizon across Pakistan through our top-of-the-line Human Development services. 
          We plan to expand our range of services to become one-stop solution for all Human Resource and Development needs.
          </p>
          <a href="#aboutus">About Us</a>
        </div>
        <div className="image">
          <img
            src="intro.jpg"
              alt=""  />
        </div>
      </div>
    </div>
  );
}
