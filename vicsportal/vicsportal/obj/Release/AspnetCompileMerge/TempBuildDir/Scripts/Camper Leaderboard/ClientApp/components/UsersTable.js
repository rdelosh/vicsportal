import React from 'react';

class UsersTable extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            userordering: false, //false = A-Z ordering, true = Z-A ordering
            recentordering: true, //false = A-Z ordering, true = Z-A ordering
            alltimeordering: false, //false = A-Z ordering, true = Z-A ordering
        }
    }

    render() {
        var thisobject = this;
        if (this.props.users === "") {
            return <div>loading...</div>
        }

    return (
        <div className="container">
        <table className="table">
                <thead>
                    <tr>
                        
                        <th
                            onClick={() => {
                                this.props.sort("username", this.state.userordering);
                                this.setState({ userordering: !this.state.userordering})
                            }}>Username</th>
                        <th
                            onClick={() => {
                                this.props.sort("recent", this.state.recentordering);
                                this.setState({ recentordering: !this.state.recentordering })
                             }}>Recent</th>
                        <th
                            onClick={() => {
                                this.props.sort("alltime", this.state.alltimeordering);
                                this.setState({ alltimeordering: !this.state.alltimeordering })
                            }}>All time</th>

                    </tr>
                </thead>
                {
                    React.createElement("tbody",
                        null,
                        thisobject.props.users.map(function (element) {
                            return (

                                <tr>
                                    <td>
                                        <img width="50px" height="50px" src={element.img}/><p>{element.username} </p>
                                    </td>
                                    <td>
                                        <p>{element.recent} </p>
                                    </td>
                                    <td>
                                        <p>{element.alltime}</p>
                                    </td>
                                </tr>
                            )
                        }))

                }
            </table>
        </div>
      )


    }
        
    
    
}

export default UsersTable