import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center ">
        <h2 className="mt-3">The Zerodha Universe</h2>
        
      <p className="mt-4 text-center " style={{ fontSize: "18px" }}>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="col-4 p-3 mt-5">
        <img src="media/images/smallcase-logo.png"  height="50px" width="120px"/>
        <p className="text-small text-muted">Thematic investment platforms</p>
      </div>
      <div className="col-4 p-3 mt-5">
        <img src="media/images/streak-logo.png"  height="50px" width="100px"/>
        <p className="text-small text-muted">Algo & strategy platform</p>
      </div>
      <div className="col-4 p-3 mt-5">
        <img src="media/images/sensibull-logo.svg"  height="50px" width="100px"/>
        <p className="text-small text-muted">Options trading platforms</p>
      </div>
      <div className="col-4 p-3 mt-5">
        <img src="media/images/zerodhafundhouse.png"  height="60px" width="150px"/>
        <p className="text-small text-muted">Asset management</p>
      </div>
      <div className="col-4 p-3 mt-5">
        <img src="media/images/tijori.svg" height="50px" width="100px"/>
        <p className="text-small text-muted">Fundamental research platforms</p>
      </div>
      <div className="col-4 p-3 mt-5">
        <img src="media/images/ditto-logo.png" height="50px" width="100px" />
        <p className="text-small text-muted">Insurance</p>
      </div>
      </div>
      <button
        className="btn btn-primary mt-5 fs-4 d-block mx-auto"
        id="productbtn"
      ><a href='/signup' style={{textDecoration:"none", color:"white"}}>Signup now</a>
      </button>
      </div>
  );
}

export default Universe;
