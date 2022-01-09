import React, { Component } from "react";
import './Home.css';
import Header from '../../common/header/Header';
import ImageList from "../ImageList";


class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="heading">
                    <span>Upcoming Movies</span>
                </div>
                <ImageList/>
                
            </div>
        );

    }
}
export default Home;
