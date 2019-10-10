import React, { Component } from 'react';
import { getGame, editGame } from '../../utils/gameService';
import userService from '../../utils/userService';

class EditPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            title: '',
            platform: '',
            releaseDate: '',
            userId: this.props.user._id,
            review: '',
            reviewTitle: '',
            currentId: userService.getUser()._id
        }
    }

    componentDidMount() {
        var gameid = this.props.match.params.gameid;
        var self = this;
        getGame(gameid).then(function(json) {
            self.setState({ id: gameid,title: json.title, platform: json.platform, releaseDate: json.releaseDate,review: json.review, reviewTitle: json.reviewTitle})
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        editGame(this.state).then(function(json) {
            window.location = '/index'
        })
        
    }
        
    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    render () {
        return (
            <div>
                <h2>Edit: {this.state.reviewTitle}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Game Title:
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title}></input>
                    </label><br /> <br />
                    <label>Platform:
                        <input type="text" name="platform" onChange={this.onChange} value={this.state.platform}></input>
                    </label><br></br><br></br>
                    <label>Release Date:
                        <input type="text" name="releaseDate" onChange={this.onChange} value={this.state.releaseDate}></input>
                    </label><br></br><br></br>
                    <label>Review:
                        <textarea name="review" onChange={this.onChange} value={this.state.review}></textarea>
                    </label><br></br><br></br>
                    <label>Review Title:
                        <input type="text" name="reviewTitle" onChange={this.onChange} value={this.state.reviewTitle}></input>
                    </label><br></br><br></br>
                    <input className='btn btn-success' type="submit" value="Edit Review" />
                </form>
            </div>
        )
    }
}

export default EditPage;
