import React, { Component } from "react";
import UserForm from "./UserForm";

class User extends Component {
  render() {
    let list = [
      {
        name: "Glaucio",
        email: "glaucio@test.com.br",
      },
      {
        name: "Pedro",
        email: "pedro@test.com.br",
      },
    ];
    return (
      <div>
          <UserForm />
        <table border="1">
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
          {list.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default User;