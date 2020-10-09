import React from 'react';
import {Card} from 'react-bootstrap';

const DoctorDetails = (props) => {
    const {name, phone, img} = props.data;
    return (
        <div className="text-center">
            <Card  style={{
                    width: '20rem',
                    border:'none'
                }}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title className="text-primary">{name}</Card.Title>
                    <Card.Text>
                        {phone}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default DoctorDetails;