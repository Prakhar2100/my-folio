/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React , {Component} from 'react';
import {Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle} from 'reactstrap';

class Project extends Component {
    render() {
        return(
            <div>
                <Card>
                    <CardBody>
                        <h3 style={{backgroundColor: "#e7a944"}}>Projects</h3>
                        <CardTitle tag="h5">Pathfinding Visualizer</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">ReactJs, Reactstrap, Firebase</CardSubtitle>
                        {/* </CardBody>
                            <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody> */}
                        <CardText>
                            <ul>
                                <li>
                                    Web app that visualizes the working of
                                    Pathfinding algorithms such as Dijkstra, A*, Dfs,
                                    Bfs.
                                </li>
                            </ul>
                        </CardText>
                        <CardLink href="https://github.com/Prakhar2100/PathfindingVisualizer">Github Link</CardLink>
                        <CardLink href="https://pathfindingvisualizer-acc9b.web.app/">Firebase Link</CardLink>
                    </CardBody>
                    <CardBody>
                        <CardTitle tag="h5">Weather-Forecasting App</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">React Native, Expo-cli</CardSubtitle>
                        {/* </CardBody>
                            <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody> */}
                        <CardText>
                            <ul>
                                <li>
                                    Real TimeWeather Forecasting Mobile App build
                                    around React Native, Javascript bundles,
                                    React-Native-Paper,Weather API’s           
                                </li>
                            </ul>
                        </CardText>
                        <CardLink href="https://github.com/Prakhar2100/Weather-Forecasting-App">Github Link</CardLink>
                    </CardBody>

                    <CardBody>
                        <CardTitle tag="h5">Subject Scheduler</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Python, Pandas, Tkinter, Openpyxl</CardSubtitle>
                        {/* </CardBody>
                            <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody> */}
                        <CardText>
                            <ul>
                                <li>
                                    User gives subjects and time per subject as input
                                    through UI. Two excel files are generated which
                                    contains weekly schedule of the input subjects for
                                    two different classes in synchronization        
                                </li>
                                <li>
                                    Implemented using Python Programming Language using concepts of 
                                    file-handling, openpyxl, and dictionary of lists
                                </li>
                            </ul>
                        </CardText>
                    </CardBody>

                    <CardBody>
                        <CardTitle tag="h5">Miscellaneous</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">ReactJs, Flutter, Python, C++</CardSubtitle>
                        {/* </CardBody>
                            <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody> */}
                        <CardText>
                            <ul>
                                <li>
                                    Created Pinterest UI-clone using Flutter <a href="https://github.com/Prakhar2100/Pinterest-UI-Clone">[Link]</a>      
                                </li>
                                <li>
                                    Developed Twitter Bot using tweepy library in
                                    Python and Twitter Developer Account <a href="https://github.com/Prakhar2100/Twitter-bot">[Link]</a>
                                </li>
                                <li>
                                    Implemented minesweeper game using C++
                                    programming language
                                </li>
                                <li>
                                    Implemented Fibonacci Heap using Min/Max
                                    Heap data structure         
                                </li>
                            </ul>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Project;