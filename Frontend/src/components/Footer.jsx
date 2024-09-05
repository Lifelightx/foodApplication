import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  const date = new Date()
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div className="me-5 d-none d-lg-block">
            <span></span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div>
            <Link href="" clsssName="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </Link>
            <Link href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </Link>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>CraveCart
                </h6>
                <p>
                 Here You can Get Your Delecious Food At any time , we will provide you the best services. Dont delay just Order
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Food Items
                </h6>
                <p>
                  <Link href="#!" className="text-reset">Rice</Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">Biriyani</Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">Pizza</Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">Chicken</Link>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <Link href="#!" className="text-reset">Pricing</Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">Settings</Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">Orders</Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">Help</Link>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> Bhubaneswar, Odisha, India</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  jeebanjyotimallik14@outlook.com
                </p>
                <p><i className="fas fa-phone me-3"></i> +91 6371327325</p>
                <p><i className="fas fa-print me-3"></i> +91 9853362495</p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
          © {date.getFullYear()} Copyright:&nbsp;
          <Link className="text-reset fw-bold" to="https://lifelightx.github.io/portfolio/"> Jeebanjyoti Mallik</Link>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  )
}

export default Footer
