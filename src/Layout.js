import React from "react";
import { withRouter } from "react-router-dom"

import Nav from "./components/Nav"
import Footer from "./components/Footer"

class Layout extends React.Component{
    render(){
        const { location } = this.props;
        const containerStyle = {
            marginTop: "60px"
        };
        console.log("layout");
        return(
            <div>
                <Nav location={location}/>
                <div className="container" style={containerStyle}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>KillerNews.net</h1>
                            {this.props.children}
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default withRouter(Layout);