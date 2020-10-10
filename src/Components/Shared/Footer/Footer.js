import React from 'react';
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faGooglePlusG} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div className=" mt-5">
            <div className="row">
                <div className="col-md-3 pt-5 ">
                    <ul>
                        <li>
                            <a className="text-secondary" href="">Emergency Dental Care</a>
                        </li>
                        <li>
                            <a className="text-secondary" href="">Check Up</a>
                        </li>
                        <li>
                            <a className="text-secondary" href="">Treatment of Personal Diseases</a>
                        </li>
                        <li>
                            <a className="text-secondary" href="">Tooth Extaction</a>
                        </li>
                        <li>
                            <a className="text-secondary" href="">Check Up</a>
                        </li>

                    </ul>
                </div>
                <div className="col-md-3">

                    <ul>
                        <h3 className="text-primary">Services</h3>
                        <li>
                            <a className="text-secondary" href="">Emergency Dental Care</a>
                        </li>
                        <li>
                            <a className="text-secondary" href="">Check Up</a>
                        </li>
                        <li>
                            <a className="text-secondary" href="">Treatment of Personal Diseases</a>
                        </li>
                        <li>
                            <a className="text-secondary" href="">Tooth Extaction</a>
                        </li>
                        <li>
                            <a className="text-secondary" href="">Check Up</a>
                        </li>
                        <li>
                            <a className="text-secondary" href="">Check Up</a>
                        </li>
                        <li>
                            <a className="text-secondary" href="">Check Up</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <h3 className="text-primary">Oral Health</h3>
                        <li>
                            <a className="text-secondary" href="">Emergency Dental Care</a>
                        </li>
                        <li>
                            <a className="text-secondary" href="">Check Up</a>
                        </li>
                        <li>
                            <a className="text-secondary" href="">Treatment of Personal Diseases</a>
                        </li>
                        <li>
                            <a className="text-secondary" href="">Tooth Extaction</a>
                        </li>
                        <li>
                            <a className="text-secondary" href="">Check Up</a>
                        </li>
                        <li>
                            <a className="text-secondary" href="">Check Up</a>
                        </li>
                        <li>
                            <a className="text-secondary" href="">Check Up</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <h3 className="text-primary">Our Address</h3>
                        <p className="text-secondary">New York - 101010 Hudason Yards</p>
                        <FontAwesomeIcon className='icon text-primary' icon={faFacebookF}/>
                        <FontAwesomeIcon className='icon text-danger' icon={faInstagram}/>
                        <FontAwesomeIcon className='icon text-info' icon={faGooglePlusG}/>
                        <div className="mt-4">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </ul>

                </div>
            </div>
            <div className="copyRight text-center mt-5">
                <p>Copyright {(new Date()).getFullYear()}
                     All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;