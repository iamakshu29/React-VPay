import React, { useState } from 'react';

const ContactUs = () => {
    const details = { fName: "", lName: "", number: "", email: "", address: "", message: "" };
    const [input, setinput] = useState(details);


    const postUserData = (event) => {
        const { name, value } = event.target;
        setinput({ ...input, [name]: value });
    }

    //connect with firebase
    const submitData = async (event) => {
        event.preventDefault();
        const { fName, lName, number, email, address, message } = input;
        if (fName && lName && number && email && address && message) {
            const res = await fetch("https://vpay-a63db-default-rtdb.firebaseio.com/inputRecords.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fName,
                        lName,
                        number,
                        email,
                        address,
                        message,
                    })
                }
            );

            if (res) {
                setinput({
                    fName: "",
                    lName: "",
                    number: "",
                    email: "",
                    address: "",
                    message: "",
                });
                alert("Data Stored Successfully");
            } else {
                alert("plz fill the data");
            }
        } else {
            alert("plz fill the data");
        }

    }

    return (
        <>


            <section className="contactus-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contact-leftside col-12 col-lg-5">
                                    <h1 className="main-heading fw-bold">
                                        Connect With Our <br /> Sales Team.
                                    </h1>
                                    <p className="main-hero-para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Deserunt eaque alias similique.
                                    </p>
                                    <figure>
                                        <img
                                            src="images/hero1.jpg"
                                            alt="contatUsImg"
                                            className="img-fluid"
                                        />
                                    </figure>
                                </div>

                                {/* right side contact form  */}
                                <div className="contact-rightside col-12 col-lg-7">
                                    <form method="POST">
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input
                                                    type="text"
                                                    name="fName"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    value={input.fName}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input
                                                    type="text"
                                                    name="lName"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                    value={input.lName}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input
                                                    type="text"
                                                    name="number"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Phone Number "
                                                    value={input.number}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Email ID"
                                                    value={input.email}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-feild">
                                                <input
                                                    type="text"
                                                    name="address"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Add Address"
                                                    value={input.address}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 ">
                                                <input
                                                    type="text"
                                                    name="message"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Enter Your Message"
                                                    value={input.message}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>
                                        <div class="form-check form-checkbox-style">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                            />
                                            <label
                                                class="form-check-label"
                                                className="main-hero-para">
                                                I agree that the thapatechnicalpay may contact me at the
                                                email address or phone number above
                                            </label>
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-style w-100"
                                            onClick={submitData}>
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs;