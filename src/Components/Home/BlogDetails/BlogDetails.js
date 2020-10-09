import React from 'react';
import {Card} from 'react-bootstrap';

const BlogDetails = (props) => {
    const {name, title, des, img} = props.data
    return (
        <div>
            <Card style={{
                    width: '20rem',
                    border:'none'
                }}>

                <Card.Body>
                    <div className="d-flex">
                        <Card.Img variant="bottom" className="image-H" src={img}/>
                        <Card.Title className="text-primary d-flex align-items-center">{name}</Card.Title>

                    </div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {des}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default BlogDetails;