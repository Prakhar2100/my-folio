import React , {Component} from 'react';
import {Card, CardText, CardBody, CardTitle} from 'reactstrap';


class Achievements extends Component {
    render() {
        return(
            <div>
                <Card>
                    <CardBody>
                        <CardTitle tag="h4" style={{backgroundColor: "#e7a944"}}>Achievements</CardTitle>
                        {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Programming</CardSubtitle> */}
                        {/* </CardBody>
                            <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody> */}
                        <CardText>
                            <ul>
                                <li>
                                    Secured Global rank <b>103/4500</b> in Codechef Nov-2020
                                    Lunchtime
                                </li>
                                <li>
                                    Secured Global rank <b>187/3000</b> in Codechef Jan-2020
                                    Cook-off
                                </li>
                                <li>
                                    4 star (Max: 1863) on Codechef
                                </li>
                                <li>
                                    Specialist (Max: 1493) in codeforces
                                </li>

                                <li>
                                    Offered Google Cloud Career Readiness Seat on
                                    successful completion of GoogleCloudReady Facilitator
                                    program
                                </li>
                                <li>
                                    Secured <b>2028th</b> rank in Google Kickstart 2020 Round G
                                </li>
                                <li>
                                    Solved <b>1000+</b> questions based on Data-Structures and Algorithms over various 
                                    coding platforms.
                                </li>
                            </ul>
                        </CardText>

                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Achievements;