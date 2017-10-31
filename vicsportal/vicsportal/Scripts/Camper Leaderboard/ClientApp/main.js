import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import UsersTable from './components/UsersTable';

class CamperLeaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: ''
            
        }
        this.getdata();
    }
    getdata() {
        var thisobject = this;
        
        axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
        .then(function(response) {
                thisobject.setState({ users: response.data },
                function() {
                    console.log(thisobject.state.users)                
                })
            })


    }
    render() {
        return (
            <div>

                
                    <UsersTable users={this.state.users}></UsersTable>
                
            </div>
        );    
    }
    
    
}

ReactDOM.render(<CamperLeaderboard />, document.querySelector(".myapp"));


