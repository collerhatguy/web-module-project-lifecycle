import React from 'react';
import axios from "axios";
import styled from "styled-components";

const StyledCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(pink, red);
    & > * {
        margin: 1rem;
    }
`

export default class User extends React.Component {
    constructor() {
        super()
        this.state = {
            followers: null
        }
    }
    componentDidMount() {
        if (!this.props.first) return;
        axios.get(this.props.user.followers_url)
            .then(res => {
                console.log(res.data)
                this.setState({ followers: res.data })
            })
            .catch(err => console.log(err))
    }
    render() {
        const {login: username, avatar_url, bio} = this.props.user
        return (
            <StyledCard>
                <h2>{username}</h2>
                <img src={avatar_url} alt="user pic" /> 
                <p>{bio}</p>
                {this.state.followers?.length ? <h3>Followers: </h3> : null}
                <ul>
                    {this.state.followers?.length ? 
                        this.state.followers.map(user => 
                            <User user={user} first={false} />
                        ) : null} 
                </ul>
            </StyledCard>
        )
    }
}
