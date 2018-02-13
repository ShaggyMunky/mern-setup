import React, {Component} from "react";
import axios from "axios";

class ApiTest extends Component {

    getUserData(){
        axios.get("/api/get-user").then((resp) =>{
            console.log("response from get user: ", resp);
        }).catch((err) => {
            console.log("ERROR from get user: ", err)
        });
    }

    getArticleData(){
        axios.get("/api/get-articles").then((resp) => {
            console.log("response articles: ", resp);
        }).catch((err) => {
            console.log("ERROR get-articles: ", err.message)
        });
    }

    render(){
        return (
            <div>
                <h1>This is API</h1>
                <button onClick={this.getUserData}>Get User Info</button>
                <br/>
                <button onClick={this.getArticleData}>Get Article Data</button>
            </div>
        );
    }
}

export default ApiTest;