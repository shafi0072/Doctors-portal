import React from 'react';
import doctore from '../../../images/Doctore.png'
import DoctorDetails from '../DoctorDetails/DoctorDetails';
const Doctores = () => {
    const doct = [
        {
            name:'Dr.Coudi',
            phone:'+1512465233',
            img:doctore
        },
        {
            name:'Dr.Coudi',
            phone:'+1512465233',
            img:doctore
        },
        {
            name:'Dr.Coudi',
            phone:'+1512465233',
            img:doctore
        }
    ]
    return (
        <div className="container">
            <h5 className="text-primary text-center">Our Doctors</h5>
            <div className="mt-5 d-flex text-center py-5 card-deck mt-5">
                {
                    doct.map(data => <DoctorDetails data={data} />)
                }
            </div>
        </div>
    );
};

export default Doctores;