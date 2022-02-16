import React from 'react';
import './Courses.css';
import  cgo from '../Images/course-2.png';
import  cogo from '../Images/course-7.jpg';
import  aogo from '../Images/course-3.webp';
import  bogo from '../Images/course-4.jpg';
import  logo from '../Images/course-5.png';
import  go from '../Images/course-6.jpg';

const Courses = () => {
    return (

         
        <div className="container">
            <h1 className='text-center my-5'> <span className=' course-color'> Our  Courses
            </span><br />
            </h1>
            
  <div className="row">
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={cogo} alt=""  height="250px"/>
  <div className="card-body">
    <h5 className="card-title">IELTS Course</h5>
    <p className="card-text">New level of IELTS,high experince Teachers are here</p>
    <a hRef="" className="btn btn-primary">see update</a>
    
  </div>
</div> </div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={cgo} alt="" height="250px"/>
  <div className="card-body">
    <h5 className="card-title">Mathmatics Course</h5>
    <p className="card-text">Vector,geometry,matrics claases.</p>
    <a hRef="" className="btn btn-primary">see update</a>
  </div>
</div> </div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={go} alt=""  height="250px"/>
  <div className="card-body">
    <h5 className="card-title">Digital Marketing Course</h5>
    <p className="card-text"> our members also gain the knowledge of digital marketing.</p>
    <a hRef="" className="btn btn-primary">see update</a>
  </div>
</div></div>
  </div>
  <div className="row">
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={aogo} alt=""  height="250px"/>
  <div className="card-body">
    <h5 className="card-title">Art Course</h5>
    <p className="card-text">Art classes are one of the best courses in our education</p>
    <a hRef="" className="btn btn-primary">see update</a>
    
  </div>
</div> </div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={bogo} alt="" height="250px"/>
  <div className="card-body">
    <h5 className="card-title">Child Course</h5>
    <p className="card-text">Children are interested  to join online classes  </p>
    <a hRef="" className="btn btn-primary">see update</a>
  </div>
</div> </div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={logo} alt=""  height="250px"/>
  <div className="card-body">
    <h5 className="card-title">Other course</h5>
    <p className="card-text"> Every peoples are asking to know about our courses.</p>
    <a hRef="" className="btn btn-primary">see update</a>
  </div>
</div></div>
  </div><br /><br />
</div>
       
    );
};

export default Courses;