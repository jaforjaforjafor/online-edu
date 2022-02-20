import React from 'react';
import './Teachers.css';
import gogo from './pic2.jpg'
import pogo from './pic1.jpg'; 
import mogo from './pic3.jpg'; 
import aogo from './pic4.png' 
import cogo from './pic4.png' 
import bogo from './pic4.png' 

const Teachers = () => {
  const submitButton=()=>{

  }
    return (
        
        <div className="container">
            <h1 className='text-center my-5'> <span className='try'> OUR  TEACHER'S PROFILE</span></h1>
  <div className="row">
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={gogo} alt=""  height="250px"/>
  <div className="card-body">
    <h5 className="card-title">patient dependencies</h5>
    <p className="card-text">Advice patient how to protect your teeth.life is happy if your health is well</p>
    <a href="/" className="btn btn-primary">see update</a>
    
  </div>
</div> </div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={pogo} alt="" height="250px"/>
  <div className="card-body">
    <h5 className="card-title">operation time</h5>
    <p className="card-text">Patients think about teeth ,we think about patient.</p>
    <a href="/" className="btn btn-primary">see update</a>
  </div>
</div> </div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={mogo} alt=""  height="250px"/>
  <div className="card-body">
    <h5 className="card-title">Succesful operation</h5>
    <p className="card-text"> after Succesful dentist activity the child smile like he is true happiest person.</p>
    <a href="/" className="btn btn-primary">see update</a>
  </div>
</div></div>
  </div>
  <div className="row">
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={aogo} alt=""  height="250px"/>
  <div className="card-body">
    <h5 className="card-title">patient dependencies</h5>
    <p className="card-text">Advice patient how to protect your teeth.life is happy if your health is well</p>
    <a href="/" className="btn btn-primary">see update</a>
    
  </div>
</div> </div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={bogo} alt="" height="250px"/>
  <div className="card-body">
    <h5 className="card-title">operation time</h5>
    <p className="card-text">Patients think about teeth ,we think about patient.</p>
    <a href="/" className="btn btn-primary">see update</a>
  </div>
</div> </div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={cogo} alt=""  height="250px"/>
  <div className="card-body">
    <h5 className="card-title">Succesful operation</h5>
    <p className="card-text"> after Succesful dentist activity the child smile like he is true happiest person.</p>
    <a href="/" className="btn btn-primary">see update</a>
  </div>
</div></div>
  </div><br /><br />
</div>
    );
};

export default Teachers;