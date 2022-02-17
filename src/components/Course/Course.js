import React from 'react';

const Course = (props) => {
    const { image,courses,price,description}=props.course;
    return (

        <div className="col">
                <div className="card h-100 shadow-lg" >
                    <img src={image} className="card-img-top" width="500" height="500" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{courses}</h5>
                        <p className="card-text"> <strong>Description:</strong> {description}</p>
                        <p className="text-nowrap"><strong >Price:</strong>{price}</p>
                        
                            <button className="btn btn-dark"><img  alt="" width="25" />
                                Purchase Now</button>

                                
                        
{/* 
<div className="col">
                <div className="card h-100 shadow-lg" >
                    <img src={image} className="card-img-top" width="500" height="500" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"> <strong>Description:</strong> {description}</p>
                        <p className="text-nowrap"><strong >Price:</strong>{price}</p>
                        <Link to={`/buynow/${_id}`}>
                            <button className="btn btn-dark"><img src={brandicon} alt="" width="25" />
                                Buy now</button>
                        </Link>



                    </div>

                </div>
            </div> */}








                    </div>

                </div>
            </div>
    
    
           

        
    );
};

export default Course;