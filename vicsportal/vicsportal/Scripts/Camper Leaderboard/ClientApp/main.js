import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import UsersTable from './components/UsersTable';
import arraySort from 'array-sort';
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
                    function () {
                        thisobject.sortBy('alltime',true);
                        console.log(thisobject.state.users)                
                })
            })


    }
    sortBy(key,ordering) {
        this.setState(arraySort(this.state.users, key, { reverse: ordering}));
    }
    render() {
        return (
            <div>

                
                <UsersTable users={this.state.users} sort={(key,ordering) =>this.sortBy(key,ordering)}></UsersTable>
                
            </div>
        );    
    }
    
    
}

ReactDOM.render(<CamperLeaderboard />, document.querySelector(".myapp"));


