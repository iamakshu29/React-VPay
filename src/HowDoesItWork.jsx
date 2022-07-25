import React from 'react';
import WorkAPI from "./API/WorkAPI";

const HowDoesItWork = () => {

    return (
        <>
            <section>
                <div className="work-container container">
                    <h1 className="main-heading text-center">How does it Work</h1>
                    <div className="row">
                        {WorkAPI.map((ele) => {
                            return (
                                    <div className="col-12 col-lg-4 text-center work-container-subdiv" key={ele.id}>
                                        <i className={`fontawesome-style ${ele.icon}`}></i>
                                        <h2 className="sub-heading">{ele.title}</h2>
                                        <p className="main-hero-para w-100">{ele.content}</p>
                                    </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowDoesItWork;