import React from 'react';


function CreateTicket() {
    return ( 
       <div className="container">
        <h5 className="container mt-4 fs-4" style={{ color: 'rgb(68,68,68)', fontWeight: 'normal' }}>To create a ticket, select a
                 relevant topic</h5>

            <div className="container mt-5" id="supportbody">
                <div className="row">
                    <div className="col-4 mt-5 mb-5">
                        <h5 className="fs-5 fw-normal"> <a href="" style={{textDecoration:"none", lineHeight:"2.5", color:"black"}}><i className="fa-solid fa-circle-plus" ></i>
                        Account Opening
                    </a>
                        </h5>
                            <a href="/signup" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Getting started</a><br/>
                             <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Online</a><br/>
                             <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Offline</a><br/>
                             <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Charges</a><br/>
                             <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Company, Partnership and HUF</a><br/>
                             <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Non Resident Indian (NRI)</a><br/>
                             

                    </div>
                    <div className="col-4 mt-5 mb-5">
                        <h5 className="fs-5 fw-normal"> <a href="support"  style={{textDecoration:"none", lineHeight:"2.5", color:"black"}}><i class="fa-regular fa-user"></i>
                        Your Zerodha Account
                    </a>
                        </h5>
                        
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Login Credentials</a><br/>
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Your Profile</a><br/>
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Account Modification and Segment addition</a><br/>
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}> CMR & DP ID</a><br/>
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Nomination</a><br/>
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Transfer and conversion of shares</a><br/>
                    </div>

                    <div className="col-4 mt-5 mb-5">
                        <h5 className="fs-5 fw-normal "> <a href="support"  style={{textDecoration:"none", lineHeight:"2.5", color:"black"}}><i class="fa-solid fa-chart-simple"></i>
                        Trading and Markets
                    </a>
                        </h5>
                       
                            <a href="SUPPORT" className="card-link "  style={{textDecoration:"none", lineHeight:"2.5"}}>Trading FAQs</a><br/>
                            <a href="SUPPORT" className="card-link "  style={{textDecoration:"none", lineHeight:"2.5"}}>Kite</a><br/>
                            <a href="SUPPORT" className="card-link "  style={{textDecoration:"none", lineHeight:"2.5"}}>Margins</a><br/>
                            <a href="SUPPORT" className="card-link "  style={{textDecoration:"none", lineHeight:"2.5"}}>Product and order types</a><br/>
                            <a href="SUPPORT" className="card-link "  style={{textDecoration:"none", lineHeight:"2.5"}}>Corporate Actions</a><br/>
                            <a href="SUPPORT" className="card-link "  style={{textDecoration:"none", lineHeight:"2.5"}}>Kite features</a><br/>
                            
                       
                    </div>
                </div>
            </div>

            <div className="container mt-5 " id="supportbody1">
                <div className="row">
                    <div className="col-4 mt-4 mb-5">
                        <h5 className="fs-5 fw-normal"> <a href="support" style={{textDecoration:"none", lineHeight:"2.5", color:"black"}}> <i class="fa-solid fa-box"></i>
                        Funds
                    </a>
                        </h5>  
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Fund Withdrawal</a><br/>
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Adding Funds</a><br/>
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Adding Bank Accounts</a><br/>
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>eMandates</a><br/>
                    </div>
                    <div className="col-4 mt-4 mb-5">
                        <h5 className="fs-5 fw-normal"> <a href="support" style={{textDecoration:"none", lineHeight:"2.5", color:"black"}}> <i style={{ fontSize: '24px' }} className='fas'>&#xf140;</i>

                        Console
                    </a>
                        </h5>
                        
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>IPO</a><br/>
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Portfolio</a><br/>
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Funds statement</a><br/>
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Profile</a><br/>
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Reports</a> <br/>    
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Referral Program</a><br/>

                        
                    </div>

                    <div className="col-4 mt-4 mb-5">
                        <h5 className="fs-5 fw-normal"> <a href="support" style={{textDecoration:"none", lineHeight:"2.5", color:"black"}}> <i style={{ fontSize: '24px' }} className='fab'>&#xf383;</i>
                        Coin
                    </a>
                        </h5>
                        
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Understanding Mutual Funds and Coin</a><br/>
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Coin app</a><br/>
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Coin web</a><br/>
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>Transactions and reports</a><br/>
                            <a href="SUPPORT" className="card-link " style={{textDecoration:"none", lineHeight:"2.5"}}>National Pension Scheme(NPS)</a><br/>

                        
                    </div>
                </div>
            </div>

       </div>
     );
}

export default CreateTicket;