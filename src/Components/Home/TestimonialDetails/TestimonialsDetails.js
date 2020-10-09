import React from 'react';
import {Card} from 'react-bootstrap';
import './Test.css';
const TestimonialsDetails = (props) => {
    const {name, quote, img} = props.data;
    return (
        <div>
            <Card style={{
                    width: '20rem',
                    border:'none'
                }}>
                
                <Card.Body>
                
                    <Card.Text>
                       {quote}
                    </Card.Text>
                    <div className="d-flex">
                    <Card.Img variant="bottom" className="image-H" src={img}/>
                    <Card.Title className="text-primary d-flex align-items-center">{name}</Card.Title>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TestimonialsDetails;