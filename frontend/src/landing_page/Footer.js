import React from "react";
import "./Footer.css"; // Make sure to create and import a separate CSS file

function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid bg-light mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mt-5">
              <img
                src="media/images/logo.svg"
                className=""
                width="140"
                height="18"
                alt=""
              />
              <h6 className="mt-3">
                <i className="fa-solid fa-phone" style={{ height: "10px" }}></i>
                +91 88 8888 8888
              </h6>
              <p className="mt-3">
                © 2010 - 2024, Zerodha Broking Ltd. <br />
                All rights reserved.
              </p>
              <div>
                <a href="links" className="text-muted-hover">
                  {" "}
                  <i
                    style={{ fontSize: "24px", padding: "15px" }}
                    className="fa-brands fa-x-twitter"
                  ></i>
                </a>
                <a href="links" className="text-muted-hover">
                  <i
                    style={{ fontSize: "24px", padding: "15px" }}
                    className="fab text-muted"
                  >
                    &#xf099;
                  </i>
                </a>
                <a href="links" className="text-muted-hover">
                  <i
                    style={{ fontSize: "24px", padding: "15px" }}
                    className="fab text-muted"
                  >
                    &#xf082;
                  </i>
                </a>
                <a href="links" className="text-muted-hover">
                  {" "}
                  <i
                    style={{ fontSize: "24px", padding: "15px" }}
                    className="fab text-muted"
                  >
                    &#xf16d;
                  </i>
                </a>
                <hr style={{opacity:"0.1"}}/>
                <a href="links" className="text-muted-hover">
                  {" "}
                  <i
                    style={{ fontSize: "24px", padding: "15px" }}
                    className="fa-brands fa-whatsapp"
                  ></i>
                </a>
                <a href="links" className="text-muted-hover">
                  {" "}
                  <i
                    style={{ fontSize: "24px", padding: "15px" }}
                    className="fab text-muted"
                  >
                    &#xf0e1;
                  </i>
                </a>
                <a href="links" className="text-muted-hover">
                  {" "}
                  <i
                    style={{ fontSize: "24px", padding: "15px" }}
                    className="fab text-muted"
                  >
                    &#xf2c6;
                  </i>
                </a>
              </div>
            </div>
            <div className="col-md-3 mt-5" id="footer">
              <h5 className="fs-5 fw-normal">Company</h5>
              <a href="/about" className="card-link text-muted-hover">
                About
              </a>
              <br />{" "}
              <a href="/product" className="card-link text-muted-hover">
                Products
              </a>
              <br />{" "}
              <a href="/pricing" className="card-link text-muted-hover">
                Pricing
              </a>
              <br />{" "}
              <a href="https://zerodha.com/refer/" className="card-link text-muted-hover">
                Referral Programme
              </a>
              <br />{" "}
              <a href="https://careers.zerodha.com/" className="card-link text-muted-hover">
                Career
              </a>
              <br />{" "}
              <a href="links" className="card-link text-muted-hover">
                Zerodha.tech
              </a>
              <br />{" "}
              <a href="links" className="card-link text-muted-hover">
                Press & media
              </a>
              <br />{" "}
              <a href="links" className="card-link text-muted-hover">
                Zerodha Cares(CSR)
              </a>
            </div>
            <div className="col-md-3 mt-5" id="footer">
              <h5 className="fs-5 fw-normal">Support</h5>
              <a href="/support" className="card-link text-muted-hover">
                Contact
              </a>
              <br />{" "}
              <a href="/support" className="card-link text-muted-hover">
                Support Portal
              </a>
              <br />{" "}
              <a href="links" className="card-link text-muted-hover">
                Z-Connect blog
              </a>
              <br />{" "}
              <a href="links" className="card-link text-muted-hover">
                List of charges
              </a>
              <br />{" "}
              <a href="links" className="card-link text-muted-hover">
                Download & resources
              </a>
              <br />{" "}
              <a href="https://zerodha.com/videos/" className="card-link text-muted-hover">
                Videos
              </a>
              <br />{" "}
              <a href="https://stocks.zerodha.com/" className="card-link text-muted-hover">
                Market Overview
              </a>
              <br />{" "}
              <a href="/support" className="card-link text-muted-hover">
                How to file the Complaint?
              </a>
              <br />{" "}
              <a href="/support" className="card-link text-muted-hover">
                Status Of your complaint
              </a>
            </div>

            <div className="col-md-3 mt-5" id="footer">
              <h5 className="fs-5 fw-normal">Account</h5>
              <a href="/signup" className="card-link text-muted-hover">
                Open an account
              </a>
              <br />{" "}
              <a href="https://zerodha.com/fund-transfer/#tab-deposit_funds" className="card-link text-muted-hover">
                Fund transfer
              </a>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <p className="text-secondary" style={{ fontSize: "12px" }}>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Broking Ltd.
            – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
            ZerodhaCommodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
            INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th
            Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
            Phase, Bengaluru -560078, Karnataka, India. For any complaints
            pertaining to securities broking please write to
            <span>
              <a href="/support" style={{ textDecoration: "none" }}>
                {" "}
                complaints@zerodha.com
              </a>
            </span>
            , for DP related to{" "}
            <span>
              <a href="/support" style={{ textDecoration: "none" }}>
                dp@zerodha.com
              </a>
            </span>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p className="text-secondary" style={{ fontSize: "12px" }}>
            Procedure to file a complaint on
            <a href="https://scores.sebi.gov.in/" style={{ textDecoration: "none" }}>
              {" "}
              SEBI SCORES
            </a>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy
            <br />
            redressal of the grievances
          </p>
          <p className="text-secondary" style={{ fontSize: "12px" }}>
            <a href="https://smartodr.in/login" style={{ textDecoration: "none" }}>
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </a>
          </p>
          <p className="text-secondary" style={{ fontSize: "12px" }}>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p className="text-secondary" style={{ fontSize: "12px" }}>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker /
            <br />
            depository participant and receive OTP directly from depository on
            your e-mail and/or mobile number to create pledge. 3) Check your
            securities / MF / bonds in the consolidated account statement issued
            by NSDL/CDSL
            <br />
            every month.
          </p>
          <p className="text-secondary" style={{ fontSize: "12px" }}>
            "Prevent unauthorized transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. <br />
            Issued in the interest of investors. KYC is one-time exercise while
            dealing in securities markets - once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not
            undergo the same
            <br />
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to
            <br />
            authorize your bank to make payment in case of allotment. In case of
            non-allotment the funds will remain in your bank account. As a
            business we don't give stock tips, and have not authorized anyone to
            trade on behalf of
            <br />
            others. If you find anyone claiming to be part of Zerodha and
            offering such services, please &nbsp;
            <span>
              <a href="/support" style={{ textDecoration: "none" }}>
                create a ticket here
              </a>
            </span>
            .
          </p>
        </div>
        <div className="container text-center mt-2" style={{ opacity: "0.7" }}>
          <a href="https://www.nseindia.com" className="mx-4 text-muted-hover">
            NSE
          </a>
          <a href="https://www.bseindia.com" className="mx-4 text-muted-hover">
            BSE
          </a>
          <a href="https://www.mcxindia.com" className="mx-4 text-muted-hover">
            MCX
          </a>
          <a
            href="https://zerodha.com/terms-and-conditions/"
            className="mx-4 text-muted-hover"
          >
            Terms & Conditions
          </a>
          <a
            href="https://zerodha.com/policies-and-procedures/"
            className="mx-4 text-muted-hover"
          >
            Policies & Procedures
          </a>
          <a
            href="https://zerodha.com/disclosure/"
            className="mx-4 text-muted-hover"
          >
            Disclosure
          </a>
          <a
            href="https://zerodha.com/investor-attention/"
            className="mx-4 text-muted-hover"
          >
            For Investors
          </a>
          <a
            href="https://zerodha.com/tos/investor-charter/"
            className="mx-4 text-muted-hover"
          >
            Investor Charter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
