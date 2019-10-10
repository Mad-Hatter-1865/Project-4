import React, {Component} from 'react';
import {getGame, deleteGame} from '../../utils/gameService';
import userService from '../../utils/userService';
import {Link} from 'react-router-dom';

class ShowPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            title: '',
            platform: '',
            releaseDate: '',
            userId: '',
            review: '',
            reviewTitle: '',
            currentId: userService.getUser()._id
        }
    }

    componentDidMount() {
        var gameid = this.props.match.params.gameid;
        var self = this;
        getGame(gameid).then(function(json) {
            self.setState({ id: gameid,title: json.title, platform: json.platform, releaseDate: json.releaseDate, userId: json.userId, review: json.review, reviewTitle: json.reviewTitle})
        })
    }

    handleDelete = (id) => {
        deleteGame(id).then(function (json) {
            window.location = '/mygames'
        });
    }

    

    render() {
        return (
            <div>
                <h2>Game Title: {this.state.title}</h2>
                <h3>Platform: {this.state.platform}</h3>
                <h3>Release Date: {this.state.releaseDate}</h3>
                <h3>Review Title: {this.state.reviewTitle}</h3>
                <h3>Review: {this.state.review}</h3>

                {this.state.userId === this.state.currentId ? (
                    <div>
                        <Link to={`/game/${this.state.id}/edit`}>Edit</Link>
                        <button  onClick={() => this.handleDelete(`${this.state.id}`)}>Delete Review</button>
                    </div>
                ) : (
                    <h3>You did not make this review</h3>
                    
                )}
            </div>
        )
    }
}

export default ShowPage;