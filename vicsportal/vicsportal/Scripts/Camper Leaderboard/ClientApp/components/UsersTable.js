import React from 'react';

const UsersTable =(data)=> {

    let users = data.users;
    let userordering = false; //false = A-Z ordering, true = Z-A ordering
    let recentordering = false; //false = A-Z ordering, true = Z-A ordering
    let alltimeordering = false; //false = A-Z ordering, true = Z-A ordering


    if (users === "") {
        return <div>loading...</div>
    }
    
        return (

            <table>
                    <thead>
                        <tr>
                            <th><button onClick={() => {
                                data.sort("username", userordering);
                                userordering = !userordering;
                                console.log(userordering)
                            }}>Username</button></th>
                            <th>Recent</th>
                            <th>All time</th>

                        </tr>
                    </thead>
                    {
                        React.createElement("tbody",
                            null,
                            users.map(function (element) {
                                return (

                                    <tr>
                                        <td>
                                            <p>{element.username} </p>
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

        )
    
    
}

export default UsersTable