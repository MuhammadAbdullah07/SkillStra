import './events.scss'

export default function Events() 
  {
  return (
  <div className='events' id='events'>
  
    <div className='event-container'>
    <div>
    
      <div className='row-up'>
          <img src='eventbg.jpg' alt=''></img>
          <div class="centered">
          <h1>Graphic Designing in Adobe Illustrator</h1>
          <p>Date:Wednesday,August 10th,2022</p>
          <p>Venue:Joy Co Rwp</p>
          <p>Registration Fee: 1800 Rs</p>
          <br></br>
          <br></br>
          <a href='#register'>Click for Registration</a>
      </div>
      </div>
      <br></br>
      <div className='row-down'>
        <div className="cardleft right_alter">
        <img src="csr.jpg" alt=""/>
            <div class="h4container">
              <h4><b>CSR ACTIVITIES</b></h4> 
            </div>
        </div>
          <div className="cardleft left_alter">
          <img src="photo_gallery.jpg" alt=""/>
              <div class="h4container">
                <h4><b>PHOTO GALLERY</b></h4> 
              </div>
          </div>
      </div>
      </div>  
    </div>
  </div>
  )
}
