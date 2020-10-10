import React from 'react';
import doctore from '../../../images/Doctore.png'
import DoctorDetails from '../DoctorDetails/DoctorDetails';
const Doctores = () => {
    const doct = [
        {
            id:1,
            name:'Dr.Coudi',
            phone:'+1512465233',
            img:doctore
        },
        {
            id:2,
            name:'Dr.Coudi',
            phone:'+1512465233',
            img:doctore
        },
        {
            id:3,
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
                    doct.map(data => <DoctorDetails key={data.id} data={data} />)
                }
            </div>
        </div>
    );
};

export default Doctores;