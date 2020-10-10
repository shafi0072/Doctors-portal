import React from 'react';
import './Contract.css'
const Contract = () => {
    return (
        <section className="make-appointment" id="contract">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-none d-md-block text-center">
                        <h5 className="text-primary text-uppercase pt-3">Contract</h5>
                        <h1 className="my-4 text-white">Always Connect with us</h1>
                        <input type="text" className="form-control" placeholder="Email Address*"/>
                        <br/>
                        <input type="text" className="form-control" placeholder="Subject*"/>
                        <br/>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="Message"></textarea>
                        <br/>
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contract;