import React , {Component} from 'react';
import {Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

class Education extends Component {
    render() {
        return(
            <div>
                <Card>
                    <CardBody>
                        <CardTitle tag="h4" style={{backgroundColor: "#e7a944"}}>Education</CardTitle>
                        <h6>Bachelor of Technology, CSE</h6>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">IIIT Nagpur</CardSubtitle>
                        {/* </CardBody>
                            <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody> */}
                        <CardText>
                            <ul>
                                <li>
                                    Current CGPA: 9.45/10
                                </li>
                            </ul>
                        </CardText>

                        <h6>Intermediate</h6>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Dr. VSEC, Kanpur</CardSubtitle>
                        {/* </CardBody>
                            <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody> */}
                        <CardText>
                            <ul>
                                <li>
                                    Percentage: 97%
                                </li>
                            </ul>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Education;