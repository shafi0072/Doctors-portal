import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/Chair.png';
const HeaderMain = () => {
    return (
        <main style={{height: "800px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:"#3A4256"}}>Your New Smiles <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quae quas tenetur rem dolor assumenda.</p>
                <Link to="/appointment"><button className="btn btn-primary">GET APPOINTMENT</button></Link>
            </div>
            <div className="col-md-6">
                <img src={chair} className="img-fluid" alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;