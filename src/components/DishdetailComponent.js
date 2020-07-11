import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderDish(dish) {
        if (dish === null) {
            return (
                <div></div>
            );
        }
        else {
            return (
                <div  className="col-12 col-md-5 m-1"> 
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
    }

    renderComment(comments) {
        if (comments == null) {
            return (<div></div>)
        }
        const cmnts = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            );
        });
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>

            </div>
        );
    }

    render() {
        if (this.props.selectedDish == null) {
            return (<div></div>)
        }
        else {
            const dishItem = this.renderDish(this.props.selectedDish);
            const commentItem = this.renderComment(this.props.selectedDish.comments);
            return (
                <div className="row"> 
                    {dishItem}
                    {commentItem}
                </div>
            );
        }
    }
}

export default Dishdetail;