import React, {Component} from 'react';
import {getGame, deleteGame} from '../../utils/gameService';
import userService from '../../utils/userService';
import {Link} from 'react-router-dom';
import './ShowPage.css'

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
            <div className= 'show-page'>
                <div className='show-page-game'>
                <h2>Game Title: <span>{this.state.title}</span></h2>
                <h3>Platform: <span>{this.state.platform}</span></h3>
                <h3>Release Date: <span>{this.state.releaseDate}</span></h3>
                <h3>Review Title: <span>{this.state.reviewTitle}</span></h3>
                <h3>Review: <span className='review'>{this.state.review}</span></h3>

                {this.state.userId === this.state.currentId ? (
                    <div>
                        <Link className='edit-link' to={`/game/${this.state.id}/edit`}>Edit</Link>
                        <button  onClick={() => this.handleDelete(`${this.state.id}`)}>Delete Review</button>
                    </div>
                ) : (
                    <div></div>
                    
                )}
                </div>
            </div>
        )
    }
}

export default ShowPage;