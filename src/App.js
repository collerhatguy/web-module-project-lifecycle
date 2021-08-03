import React from "react";
import axios from "axios";
import User from "./components/User.js"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/collerhatguy")
      .then(res => {
        console.log(res.data)
        this.setState({user: res.data})
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? <User user={this.state.user} first={true} /> : <h2>Loading</h2>}
      </div>
    );
  }
}

export default App;
