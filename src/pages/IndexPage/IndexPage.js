import React, {Component} from 'react';
import {getAllGames} from '../../utils/gameService';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';

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
            <div>
            {this.state.games.map((game, i) => {
                return (
                    <div>
                        <Link to={`/show/${game._id}`}>{game.title}</Link>
                    </div>
                )
            })}
        </div>
        )
    }
}

export default IndexPage;