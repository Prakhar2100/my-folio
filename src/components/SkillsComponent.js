import React , {Component} from 'react';
import {Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

class Skills extends Component {
    render() {
        return(
            <div>
                <Card>
                    <CardBody>
                        <CardTitle tag="h4" style={{backgroundColor: "#e7a944"}}>Skillset</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Programming</CardSubtitle>
                        {/* </CardBody>
                            <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody> */}
                        <CardText>
                            <ul>
                                <li>
                                    C, C++, Java, Python
                                </li>
                            </ul>
                        </CardText>

                        <CardSubtitle tag="h6" className="mb-2 text-muted">Competitive Programming Platforms</CardSubtitle>
                        <CardText>
                            <ul>
                                <li>
                                    <a href="https://www.codechef.com/users/prakhar_87">Codechef : </a> <text style={{color: "purple"}}>1863 (4 star)</text>
                                </li>
                                <li>
                                    <a href="https://codeforces.com/profile/prako_87">Codeforces : </a><text style={{color: "darkcyan"}}>1493 (Specialist)</text>
                                </li>
                            </ul>
                        </CardText>

                        <CardSubtitle tag="h6" className="mb-2 text-muted">Web-Development and Databases</CardSubtitle>
                        <CardText>
                            <ul>
                                <li>
                                    HTML, CSS, Javascript, React.js, React Native,
                                    ReactStrap, Node.js, MongoDB
                                </li>
                            </ul>
                        </CardText>

                        <CardSubtitle tag="h6" className="mb-2 text-muted">Libraries</CardSubtitle>
                        <CardText>
                            <ul>
                                <li>
                                    Numpy, Pandas, Tkinter, Sklearn
                                </li>
                            </ul>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Skills;