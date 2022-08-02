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
          <h1>Stress Management</h1>
          <p>Date: DD/MM/YY</p>
          <p>Venue: Location</p>
          <p>Registration Fee: XXXX Rs</p>
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
