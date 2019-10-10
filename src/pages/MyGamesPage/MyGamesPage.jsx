import React, {Component} from 'react';
import {getAllGames} from '../../utils/gameService';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';

class MyGamesPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            games: [],
            currentId: userService.getUser()._id
        }
    }

    async componentDidMount() {
        var games = await getAllGames()
        this.setState({
            games: games
        })
    }

    render() {
        return (
            <div>
            {this.state.games.map((game) => {
                console.log(this.state.currentId)
                console.log(game.userId)
                return (
                   <div>
                       {game.userId === this.state.currentId ? (
                           <div>
                                <Link to={`/show/${game._id}`}>{game.title}</Link>
                            </div>
                            ) : (
                                   <h3>You have not made any reviews yet.</h3>
                                   
                                )}
                   </div>
                )
            })}
        </div>
        )
    }
}

export default MyGamesPage;