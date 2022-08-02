import './courses.scss'

export default function Courses() {
  return (
    <div className='courses' id='courses'>
      <div class="header">
        <h1>Services</h1>
        <p>
          Skillstra provides a platform for professional skill development of
          entrepreneurs, current and future employees in Pakistan. It aims to
          equip individuals with skills that enable them to excel in their
          respective career paths. We, at Skillstra, provide the following for
          our clients.
        </p>
      </div>

      <div className="cards">
        {/* Card 1 */}
        <div className="card">
          <img src="training_service1.jpg" alt="card" />
          <div className="card-body">
            <h2>Training Need Analysis</h2>
            <p>Analysis service seeks to address this by helping organizations to identify existing skill gaps, appropriate training solutions, and set clear training objectives. </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src="soft_service2.jpeg" alt="card" />
          <div className="card-body">
            <h2>Soft Skills Development</h2>
            <p> Skillstra helps you improve personal competence, time and people management, and communication with our effective soft skills training solutions.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src="business_service3.jpeg" alt="card" />
          <div className="card-body">
            <h2>Business Consultations</h2>
            <p>
              Our business consultation services are designed in a way to address a company’s end-to-end business needs with the help of related industry experts.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card">
          <img src="customized_service4.jpeg" alt="card" />
          <div className="card-body">
            <h2>Customized Corporate Trainings</h2>
            <p>
              Modules are tailor made to meet your business need and are designed after conducting detailed need analysis.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card card5">
          <img src="software_service5.jpeg" alt="card" />
          <div className="card-body">
            <h2>Software Focused Trainings</h2>
            <p>
              Skillstra covers IT education with its vast range of software training programs to boost new technology adoption.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
