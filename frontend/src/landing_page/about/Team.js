import React from "react";

export  function Team() {
  return (
    <div>

      <h3 className="text-center mt-5">People</h3>

      <div className="justify-content-evenly d-flex container flex-wrap mt-5 ">
        <div className="text-center">
          <img
            className="rounded-circle img-fluid"
            src="media/images/nithinkamath.jpg"
            alt="about"
            width="300"
            height="300"
            srcSet=""
          />
          <p className="mt-4 fs-4">Nithin Kamath</p>
          <p>Founder, CEO</p>
        </div>
        <div>
          <p style={{ fontSize: "17px", marginTop: "30px" }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            <br /> hurdles he faced during his decade long stint as a trader.
            Today,
            <br />
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p style={{ fontSize: "17px", marginTop: "30px" }}>
            He was named one of the “Top 10 Businessmen to Watch Out for in
            <br /> 2016 in India” by The Economic Times for pioneering and
            scaling <br />
            discount broking in India.
          </p>
          <p style={{ fontSize: "17px", marginTop: "30px" }}>
            Playing basketball is his zen.
          </p>
          <p style={{ fontSize: "17px", marginTop: "30px" }}>
            Connect on{" "}
            <span>
              <a id="links" href="https://nithinkamath.me/" style={{textDecoration:"none"}}>
                HomePage / TradingQnA / Twitter
              </a>
            </span>
          </p>
        </div>
      </div>

      {/* end of body3 */}

      <div className="container d-flex justify-content-evenly flex-wrap mt-5">
        <div className="text-center">
          <img
            className="rounded-circle img-fluid"
            src="media/images/Austin.jpg"
            alt="IMG"
            width="300"
            height="300"
            srcSet=""
          />
          <p className="mt-4 fs-4">Nikhil Kamath</p>
          <p>Co-founder & CIO </p>
          <div className="dropdown">
            <a
              href="about"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{textDecoration:"none"}}
            >
              Bio
              <i
                className="fa fa-angle-down text-secondary"
                style={{ fontSize: "14px" }}
              ></i>
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <span className="dropdown-item-text">
                  Nikhil is an astute investor with over a decade of experience
                  and an impeccable track record, who specializes in modelling
                  sophisticated long term investment strategies and portfolios.
                  He heads investments and risk management at Zerodha. An avid
                  reader, he always appreciates a good game of chess.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <img
            className="rounded-circle img-fluid"
            src="media/images/Kailash.jpg"
            alt="img"
            width="300"
            height="300"
            srcSet=""
          />
          <p className="mt-4 fs-4">Dr. Kailash Nadh</p>
          <p>CTO</p>
          <div className="dropdown">
            <a
              href="about"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{textDecoration:"none"}}
            >
              Bio
              <i
                className="fa fa-angle-down text-secondary"
                style={{ fontSize: "14px" }}
              ></i>
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <span className="dropdown-item-text">
                  Kailash has a PhD in Artificial Intelligence & Computational
                  Linguistics, and is the brain behind all our technology and
                  products. He has been a developer from his adolescence and
                  continues to write code every day.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <img
            className="rounded-circle img-fluid"
            src="media/images/Subhrajit.jpg"
            alt="img"
            width="300"
            height="300"
            srcSet=""
          />
          <p className="mt-4 fs-4">Subhrajit Swain</p>
          <p>Director - Strategy</p>
          <div className="dropdown">
            <a
              href="about"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{textDecoration:"none"}}
            >
              Bio
              <i
                className="fa fa-angle-down text-secondary"
                style={{ fontSize: "14px" }}
              ></i>
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <span className="dropdown-item-text">
                  Subhrajit is the backbone of Zerodha taking care of operations and
                  ensuring that we are compliant to rules and regulations. He
                  has over a dozen certifications in financial markets and is
                  also proficient in technical analysis. Workouts, cycling, and
                  adventuring is what he does outside of Zerodha.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 1st Part IMG  */}
      <div className="container d-flex justify-content-evenly flex-wrap mt-5">
        <div className="text-center">
          <img
            className="rounded-circle img-fluid"
            src="media/images/Venu.jpg"
            alt="img"
            width="300"
            height="300"
            srcSet=""
          />
          <p className="mt-4 fs-4">Venu Madhav</p>
          <p>Chief of operations </p>
          <div className="dropdown">
            <a
              href="about"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{textDecoration:"none"}}
            >
              Bio
              <i
                className="fa fa-angle-down text-secondary"
                style={{ fontSize: "14px" }}
              ></i>
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <span className="dropdown-item-text">
                  Venu is the backbone of Zerodha taking care of operations and
                  ensuring that we are compliant to rules and regulations. He
                  has over a dozen certifications in financial markets and is
                  also proficient in technical analysis. Workouts, cycling, and
                  adventuring is what he does outside of Zerodha.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <img
            className="rounded-circle img-fluid"
            src="media/images/Hanan.jpg"
            alt="img"
            width="300"
            height="300"
            srcSet=""
          />
          <p className="mt-4 fs-4">Hanan Delvi</p>
          <p>Chief of Client Relation</p>
          <div className="dropdown">
            <a
              href="about"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{textDecoration:"none"}}
            >
              Bio
              <i
                className="fa fa-angle-down text-secondary"
                style={{ fontSize: "14px" }}
              ></i>
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <span className="dropdown-item-text">
                  We take pride in the way we support our clients, and Hanan is
                  responsible for this with his never ending flow of energy. He
                  is the man behind many of our support initiatives that have
                  helped us stay ahead of the game. A free thinker, Hanan can be
                  seen posing as one in his free time.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <img
            className="rounded-circle img-fluid"
            src="media/images/Seema.jpg"
            alt="img"
            width="300"
            height="300"
            srcSet=""
          />
          <p className="mt-4 fs-4">Seema Patil</p>
          <p>Chief of Quality</p>
          <div className="dropdown">
            <a
              href="about"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{textDecoration:"none"}}
            >
              Bio
              <i
                className="fa fa-angle-down text-secondary"
                style={{ fontSize: "14px" }}
              ></i>
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <span className="dropdown-item-text">
                  Seema worked with an international airline business for over 6
                  years before joining us. She uses her experience of liasing
                  with people from various backgrounds to ensure that our ever
                  expanding support team maintains highest quality. She is an
                  extremely disciplined fitness enthusiast.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
