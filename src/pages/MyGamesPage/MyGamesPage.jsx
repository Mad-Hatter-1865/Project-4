import React, {Component} from 'react';
import {getAllGames} from '../../utils/gameService';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';
import './MyGamesPage.css'

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
            <div className='mygames-page'>
            {this.state.games.map((game) => {
                console.log(this.state.currentId)
                console.log(game.userId)
                return (
                   <div>
                       {game.userId === this.state.currentId ? (
                           <div>
                                <Link className='show-links' to={`/show/${game._id}`}>{game.title}</Link>
                            </div>
                            ) : (
                                   <div></div>
                                   
                                )}
                   </div>
                )
            })}
        </div>
        )
    }
}

export default MyGamesPage;