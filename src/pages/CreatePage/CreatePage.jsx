import React, {Component} from 'react';
import {createGame} from '../../utils/gameService';

class CreatePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            platform: '',
            releaseDate: '',
            review: '',
            reviewTitle: '',
            userId: this.props.user,
            userName: this.props.user.name
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        createGame(this.state).then(function () {
            window.location = '/index'
        })
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})


    render () {
        return (
            <div>
                <h2>Please enter the game information</h2>
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
                    <input className='btn btn-success' type="submit" value="Submit Review" />
                </form>
            </div>
        )
    }
}

export default CreatePage;