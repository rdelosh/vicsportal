import React from 'react';

const UsersTable = (data) => {
    let users = data.users
    console.log(users);
    if (users==="") {
        return <div>Loading...</div>
    }

    return (

        <table>
            <thead>
                <tr>
                    <th>Username</th>
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