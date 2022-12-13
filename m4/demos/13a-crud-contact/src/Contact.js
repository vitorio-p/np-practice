import React from "react";

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
    userBeingEdited: null,
    editedUserName: "",
    editedUserEmail: "",
  };

  renderAddUser() {
    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="User name"
          value={this.state.newUserName}
          onChange={this.updateFormField}
          name="newUserName"
        />
        <input
          type="text"
          placeholder="User email"
          value={this.state.newUserEmail}
          onChange={this.updateFormField}
          name="newUserEmail"
        />
        <button onClick={this.addUser}>Add</button>
      </React.Fragment>
    );
  }

  addUser = () => {
    const newUser = {
      _id: Math.floor(Math.random() * 10000),
      name: this.state.newUserName,
      email: this.state.newUserEmail,
    };
    this.setState({
      users: [...this.state.users, newUser],
    });
  };

  beginEdit = (user) => {
    this.setState({
      userBeingEdited: user,
      editedUserName: user.name,
      editedUserEmail: user.email,
    });
  };

  processEditUser = (user) => {
    const clonedUser = {
      ...this.state.userBeingEdited,
      name: this.state.editedUserName,
      email: this.state.editedUserEmail,
    };
    const indexToReplace = this.state.users.findIndex((eachUser) => {
      if (eachUser._id === clonedUser._id) return true;
      else return false;
    });

    const modifiedUsers = [
      ...this.state.users.slice(0, indexToReplace),
      clonedUser,
      ...this.state.users.slice(indexToReplace + 1),
    ];

    this.setState({
      users: modifiedUsers,
      userBeingEdited: null,
    });
  };

  cancelEdit = () => {
    this.setState({
      userBeingEdited: null,
    });
  };

  deleteUser = (user) => {
    const indexToDelete = this.state.users.findIndex((eachUser) => {
      if (eachUser._id === user._id) return true;
      else return false;
    });

    const modifiedUsers = [
      ...this.state.users.slice(0, indexToDelete),
      ...this.state.users.slice(indexToDelete + 1),
    ];

    this.setState({
      users: modifiedUsers,
    });
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Contact List</h1>
        {this.state.users.map((eachUser) => {
          if (
            this.state.userBeingEdited &&
            eachUser._id === this.state.userBeingEdited._id
          ) {
            return (
              <div key={eachUser._id}>
                <div>
                  <input
                    type="text"
                    value={this.state.editedUserName}
                    name="editedUserName"
                    onChange={this.updateFormField}
                  />
                  <input
                    type="text"
                    value={this.state.editedUserEmail}
                    name="editedUserEmail"
                    onChange={this.updateFormField}
                  />
                  <button onClick={this.processEditUser}>Update</button>
                  <button onClick={() => {
                    this.setState({
                      userBeingEdited: null
                    });
                  }}>Cancel</button>
                </div>
              </div>
            );
          } else {
            return (
              <div key={eachUser._id}>
                <div>
                  <h3>{eachUser.name}</h3>
                  <h4>{eachUser.email}</h4>
                  <button
                    onClick={() => {
                      this.beginEdit(eachUser);
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      this.deleteUser(eachUser);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          }
        })}
        <br />
        <h1>Add new user</h1>
        {this.renderAddUser()}
      </React.Fragment>
    );
  }
}
