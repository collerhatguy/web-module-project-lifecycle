import React from 'react'
import axios from "axios"

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
            <div>
                <h2>{username}</h2>
                <img src={avatar_url} /> 
                <p>{bio}</p>
                <h3>Followers: </h3> 
                <ul>
                    {this.state.followers?.length ? 
                        this.state.followers.map(user => 
                            <User user={user} first={false} />
                        ) : <h3>this guy has no followers</h3>} 
                </ul>
            </div>
        )
    }
}
