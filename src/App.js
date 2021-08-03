import React from "react";
import axios from "axios";
import User from "./components/User.js";
import styled from "styled-components";
import "./styles/reset.css";

const StyledMain = styled.main`
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`

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
      <StyledMain>
        {this.state.user ? <User user={this.state.user} first={true} /> : <h2>Loading</h2>}
      </StyledMain>
    );
  }
}

export default App;
