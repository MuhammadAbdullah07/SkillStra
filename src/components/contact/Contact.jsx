import "./contact.scss"
import { IconName } from "react-icons/fa";
export default function Contact() 
{
    return (
      <div className="contact" id="contact">
        <div className="rowup">
          <div className="left">
            <div className="center">
              <h1>Get In Touch</h1>

              <br></br>
              <div className="phone">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <p>0319-5001407</p>
              </div>
              <br></br>
              <div className="email">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <a href="#">skillstra2k22@gmail.com</a>
              </div>

              <br></br>

              <div className="social_media">
                <a href="https://www.linkedin.com/company/skillstra/" target="_blank" className="size-a"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                <a href="https://m.facebook.com/Skillstra-101023266004536/" target="_blank"><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
                <a href="https://instagram.com/skillstra_hrd?igshid=YmMyMTA2M2Y=" target="_blank"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
              </div>

            </div>

          </div>
         <div className="rightcontact">
         {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc6ZXOo4nsM49adQg1ZU2IWzSHxF8L1PUVeumuTSb8kMPRgbg/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>*/}
         <h1>Contact Us</h1>
            <form action="https://formsubmit.co/65bf233b7a5ed0482c0b72580ccfe0b3" method="POST"
             //onSubmit={handleSubmit} 
             name="contact-form">          
              <input type="text" placeholder="Name" name="Name" required></input>

              <input type="text" placeholder="Email" name="Email" required></input>
              
              <textarea placeholder="Message" name="Message" required></textarea>
              
              <button type="submit">Send</button>
            </form>
         </div>
          </div>
        <div className="rowdown">
        <div className="copyright">Copyright &copy; 2022 All Rights Reserved</div>
        <div className="devby">
        <h4>Website Developed By:</h4>
    
        <a href="mailto:abdullahashraf65@gmail.com">Muhammad Abdullah</a><a href="https://www.linkedin.com/in/muhammad-abdullah-241bb11bb/" target="_blank" className="devlinks"><i class="fa fa-linkedin-square fa-1x" aria-hidden="true"></i></a>
        <p>&</p>
        <a href="mailto:abdullahashraf65@gmail.com">Moin Ud Din</a><a href="https://www.linkedin.com/in/moinuddinrao/" target="_blank" className="devlinks"><i class="fa fa-linkedin-square fa-1x" aria-hidden="true"></i></a>
      
        
        </div>
        </div>

        
      </div>
  
    );
}
  