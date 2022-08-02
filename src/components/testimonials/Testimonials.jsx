import './testimonials.scss'

export default function Testimonials() {

  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
    <div className='containerT'>  
      <div className="cards">
  {/* Card 1 */}
  <div className="card">
    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    alt="card" className='imgT'/>
    <div className="card-body">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
      <h3>JHON</h3>
      <h5>CEO ABCD</h5>
    </div>
  </div>
  {/* Card 2 */}
  <div className="card">
    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     alt="card" className='imgT'/>
    <div className="card-body">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
      <h3>Harry</h3>
      <h5>CEO EFGH</h5>
    </div>
  </div>
  {/* Card 3 */}
  <div className="card">
    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    alt="card" className='imgT'/>
    <div className="card-body">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
      <h3>ALLISON</h3>
      <h5>CEO OGHT</h5>
    </div>
  </div>
</div>
</div>
    </div>
  )
}
