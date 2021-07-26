/* eslint-disable jsx-a11y/img-redundant-alt */
import React , {Component} from 'react';
import {Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle} from 'reactstrap';
import Project from './ProjectComponent';

class Experience extends Component {
    render() {
        return(
            <div>
                <Card>
                    <CardBody>
                        <h3 style={{backgroundColor: "#e7a944"}}>Experience</h3>
                        <CardTitle tag="h5"><img className="activator center" height="20" src="assets/images/google.png" alt="Prakhar Kochar" />GoogleCloudReady Facilitator</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Google</CardSubtitle>
                        {/* </CardBody>
                            <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody> */}
                        <CardText>
                            <ul>
                                <li>
                                    Learned concepts like Cloud Infrastructure, Cloud-native
                                    Application Development, Big Data and ML .Mentored
                                    100+ peers so that they can explore cloud computing
                                </li>
                                <li>
                                    Completed 30 quests and 15 Skill Badges. My qwiklab
                                    profile can be found <a href="https://www.qwiklabs.com/public_profiles/eec90a5e-1df9-4657-9113-b781a2a9bcf4">Here</a>
                                </li>
                            </ul>
                        </CardText>
                        <CardLink href="https://drive.google.com/file/d/1QJReACEjG-JGGcBfGBZ2MzP4tZsTASy0/view?usp=sharing">Certificate Link</CardLink>
                        <CardLink href="https://drive.google.com/file/d/1Z4v7BvC7hhj5rugyMkXpVTIIfRxC0huS/view?usp=sharing">Facilitator Badge</CardLink>
                    </CardBody>
                    <CardBody>
                        <CardTitle tag="h5"><img className="activator center" height="35" width="30" src="assets/images/gfg.png" alt="Prakhar Kochar" />&nbsp;&nbsp;Technical Content Writer</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">GeeksforGeeks</CardSubtitle>
                        {/* </CardBody>
                            <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody> */}
                        <CardText>
                            <ul>
                                <li>
                                    Published various articles on Data-Structure and
                                    Algorithms.           
                                </li>
                                <li>
                                    Recognized as an exemplary technical content writer at
                                    GeeksforGeeks
                                </li>
                            </ul>
                        </CardText>
                        <CardLink href="https://drive.google.com/file/d/1b3BpQEIC7lbRx4iltkvLXRukXvf1-CcQ/view">Certificate Link</CardLink>
                        <CardLink href="https://auth.geeksforgeeks.org/user/prakhar_kochar/articles">Articles Link</CardLink>
                    </CardBody>

                    <CardBody>
                        <CardTitle tag="h5"><img className="activator center" height="25" width="25" src="assets/images/cc.jpg" alt="Prakhar Kochar" /> Problem Setter & Tester</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Codechef</CardSubtitle>
                        {/* </CardBody>
                            <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody> */}
                        <CardText>
                            <ul>
                                <li>
                                    Problem Setter for Codechef open contests. Problems
                                    were based on Data Structure and Algorithms, Greedy,
                                    Number theory          
                                </li>
                                <li>
                                    List of the problems set by me can be found <a href="https://www.codechef.com/tags/problems/prakhar_87">Here</a>
                                </li>
                            </ul>
                        </CardText>
                    </CardBody>
                </Card>
                <div className="mt-2">
                    <Project />
                </div>
            </div>
        )
    }
}

export default Experience;