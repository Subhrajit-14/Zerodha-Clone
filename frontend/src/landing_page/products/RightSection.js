import React from 'react';


function RightSection({
    imageURL,
    productName,
    ProductDescription,
    learnMore,
    KiteConnect
}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{ProductDescription}</p>
                    <div> 
                    <a href={learnMore} style={{textDecoration:"none"}}>LearnMore{" "}<i className="fa-solid fa-arrow-right-long"></i></a>
                    <a href={KiteConnect} style={{ textDecoration:"none", marginLeft:"50px"}}>Kite Connect{" "}<i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                <div className='col-6'>
                    <img src={imageURL} style={{marginLeft:"50px"}}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;