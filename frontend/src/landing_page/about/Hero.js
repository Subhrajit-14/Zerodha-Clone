import React from 'react';

function Hero() {
  return (
    <div className="container" style={{ marginTop: "140px" }}>
      <h5 className="text-center fs-2">
        We pioneered the discount broking model in India.
      </h5>
      <h5 className="text-center fs-2">
        Now, we are breaking ground with our technology.
      </h5>

      <hr className="container" style={{ marginTop: "80px" }} />

      <div className="justify-content-evenly d-flex container flex-wrap mt-5">
        <div>
          <p style={{ fontSize: "17px", marginTop: "30px" }}>
            We kick-started operations on the 15th of August, 2010 <br />
            with the goal of breaking all barriers that traders and <br />
            investors face in India in terms of cost, support, and <br />
            technology. We named the company Zerodha, a <br />
            combination of Zero and "Rodha", the Sanskrit word for <br />
            barrier.
          </p>
          <p style={{ fontSize: "17px", marginTop: "30px" }}>
            Today, our disruptive pricing models and in-house <br />
            technology have made us the biggest stock broker in <br />
            India in terms of active retail clients.
          </p>
          <p style={{ fontSize: "17px", marginTop: "30px" }}>
            Over 3+ million clients place millions of orders every day <br />
            through our powerful ecosystem of investment <br />
            platforms, contributing over 15% of all Indian retail <br />
            trading volumes.
          </p>
        </div>
        <div>
          <p style={{ fontSize: "17px", marginTop: "30px" }}>
            In addition, we run a number of popular open online <br />
            educational and community initiatives to empower retail <br />
            traders and investors.
          </p>
          <p style={{ fontSize: "17px", marginTop: "30px" }}>
            <span>
              <a id="links" href="https://rainmatter.com/" style={{textDecoration:"none"}}>
                Rainmatter
              </a>
            </span>
            , our fintech fund and incubator, has invested <br />
            in several fintech startups with the goal of growing the <br />
            Indian capital markets.
          </p>
          <p style={{ fontSize: "17px", marginTop: "30px" }}>
            And yet, we are always up to something new every day. <br />
            Catch up on the latest updates on our{" "}
            <span>
              <a id="links" href="https://zerodha.com/z-connect/" style={{textDecoration:"none"}}>
                blog
              </a>
            </span>{" "}
            or see what <br/>the media is{" "}
            <span>
              <a id="links" href="https://zerodha.com/media" style={{textDecoration:"none"}}>
                saying about us.
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
