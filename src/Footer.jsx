import React from 'react'
import FooterAPI, { iconAPI } from './API/FooterAPI';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                {
                  FooterAPI.map((ele) => {
                    return (
                      <div className="col-6 col-lg-3" key={ele.id}>
                        <h2>&nbsp;&nbsp;&nbsp;{ele.title}</h2>
                        <ul>
                          <li>
                            <a href="/">{ele.l1}</a>
                          </li>
                          <li>
                            <a href="/">{ele.l2}</a>
                          </li>
                          <li>
                            <a href="/">{ele.l3}</a>
                          </li>
                          <li>
                            <a href="/">{ele.l4}</a>
                          </li>
                        </ul>
                      </div>
                    )
                  })
                }
                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    {
                      iconAPI.map((ele) => {
                        return (
                          <div className="col-3 mx-auto" key={ele.id}>
                            <a
                              href={`https://www.${ele.icon}.com/`}
                              target="_thapa">
                              <i class={`fab fa-${ele.icon} fontawesome-style`}></i>
                            </a>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ {year} VPay. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer