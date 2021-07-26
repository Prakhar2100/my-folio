import React , {Component} from 'react';
import Experience from './ExperienceComponent';
import Header from './HeaderComponent';
import Profile from './ProfileComponent';

class Main extends Component {
    render() {
        return(
            <div>
                <Header />
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3 ml-auto mr-auto mt-2">
                        <Profile />
                        {/* <Skills /> */}
                    </div>
                    <div className="col-12 col-md-8 col-lg-8 ml-auto mr-auto mt-2">
                        <Experience />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;