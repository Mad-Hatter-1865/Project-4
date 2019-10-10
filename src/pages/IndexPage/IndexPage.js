import React, {Component} from 'react';
import {getAllGames} from '../../utils/gameService';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';
import './IndexPage.css'

class IndexPage extends Component {
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
            games:games
        })
    }

    render() {
        return (
            <div className='index-page'>
            {this.state.games.map((game, i) => {
                return (
                    <div>
                        <Link className='show-links' to={`/show/${game._id}`}>{game.title}</Link>
                    </div>
                )
            })}
        </div>
        )
    }
}

export default IndexPage;