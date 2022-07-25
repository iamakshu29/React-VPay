import React from 'react';
import ServiceAPI from './API/ServiceAPI';

const Services = () => {
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            How to send money
          </h1>
          <div className="row">
            {
              ServiceAPI.map((ele) => {
                return (
                  <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv" key={ele.id}>
                  <i className={`fontawesome-style ${ele.icon}`}></i>
                    <h2 className="sub-heading">{ele.title}</h2>
                    <p className="main-hero-para">{ele.content}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Services