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

  beginEdit = (user) => {};

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
      <div>
        {this.state.users.map((user) => {
          return (
            <React.Fragment key={user._id}>
              <div>
                <h3>{user.name}</h3>
                <h4>{user.email}</h4>
                <button
                  onClick={() => {
                    this.beginEdit(user);
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    this.deleteUser(user);
                  }}
                >
                  Delete
                </button>
              </div>
            </React.Fragment>
          );
        })}
        {this.renderAddUser()}
      </div>
    );
  }
}
