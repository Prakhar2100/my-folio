import React , {Component} from 'react';
import Skills from './SkillsComponent';
import Education from './EducationComponent';
import Achievements from './AchievementsComponent';
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

class Profile extends Component {
    render() {
        return(
            <div>
                {/* <div className="card">
                    <div className="card-image" 
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                    }}>
                        <img className="rounded-circle activator center" height="200" src="assets/images/mypic.jpg" alt="Prakhar Kochar" />
                    </div>
                </div> */}
                
                <Card>
                    <div className="m-auto">
                        <CardBody>
                            <img className="rounded-circle activator center" height="200" src="assets/images/mypic.jpg" alt="Prakhar Kochar" />
                            <CardTitle className="mt-2" tag="h4">Prakhar Kochar</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">3rd year CSE Undergrad IIITN</CardSubtitle>
                        </CardBody>
                    </div>
                </Card>
                
                <div className="mt-2">
                    <Education />
                </div>
                <div className="mt-2">
                    <Skills />
                </div>
                <div className="mt-2">
                    <Achievements />
                </div>
            </div>
        )
    }
}

export default Profile;