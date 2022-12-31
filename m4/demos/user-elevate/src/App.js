import React from "react";
import AddUser from "./AddUser";
import User from "./User";
import "./App.css";

export default class App extends React.Component {
  state = {
    users: [
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Jon Snow",
        email: "jonsnow@winterfell.com",
      },
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Ned Stark",
        email: "nedstark@winterfell.com",
      },
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Frodo Baggins",
        email: "frodo@bagend.com",
      },
    ],
    newUserName: "",
    newUserEmail: "",
    userBeingEdited: 0,
    editedUserName: "",
    editedUserEmail: "",
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.users.map((user) => {
          return (
            <React.Fragment>
              <div class="box">
                {user._id === this.state.userBeingEdited ? (
                  <div>
                    <input
                      type="text"
                      name="editedUserName"
                      onChange={this.updateFormField}
                      value={this.state.editedUserName}
                    />
                    <input
                      type="text"
                      name="editedUserEmail"
                      onChange={this.updateFormField}
                      value={this.state.editedUserEmail}
                    />
                    <button
                      onClick={() => {
                        this.confirmEdit(user);
                      }}
                    >
                      Confirm
                    </button>
                    <button onClick={this.cancelEdit}>Cancel edit</button>
                  </div>
                ) : (
                  <User
                    user={user}
                    beginEdit={this.beginEdit}
                    deleteUser={this.deleteUser}
                  />
                )}
              </div>
            </React.Fragment>
          );
        })}
        <AddUser
          newUserName={this.state.newUserName}
          newUserEmail={this.state.newUserEmail}
          updateFormField={this.updateFormField}
          addUser={this.addUser}
        />
      </div>
    );
  }

  addUser = () => {
    this.setState({
      users: [
        ...this.state.users,
        {
          _id: Math.floor(Math.random() * 10000),
          name: this.state.newUserName,
          email: this.state.newUserEmail,
        },
      ],
    });
  };

  beginEdit = (user) => {
    this.setState({
      userBeingEdited: user._id,
      editedUserEmail: user.email,
      editedUserName: user.name,
    });
  };

  deleteUser = (user) => {
    let index = this.state.users.findIndex((u) => u._id === user._id);
    this.setState({
      users: [
        ...this.state.users.slice(0, index),
        ...this.state.users.slice(index + 1),
      ],
    });
  };

  cancelEdit = () => {
    this.setState({
      userBeingEdited: 0,
    });
  };

  confirmEdit = (user) => {
    let index = this.state.users.findIndex((u) => u._id === user._id);
    this.setState({
      users: [
        ...this.state.users.slice(0, index),
        {
          ...user,
          email: this.state.editedUserEmail,
          name: this.state.editedUserName,
        },
        ...this.state.users.slice(index + 1),
      ],
      userBeingEdited: 0,
    });
  };
}
