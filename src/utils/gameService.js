import tokenService from './tokenService';

// index
export function getAllGames() {
    return fetch('/api/games/index').then(function (res) {
        return res.json();
    })
}

// show
export function getGame(id) {
    return fetch(`/api/game/${id}`).then(function (res) {
        return res.json();
    })
}

// create
export function createGame(game) {
    return fetch('/api/games/game/', {
        method: 'POST',
        body: JSON.stringify(game),
        headers: {
            'content-type': 'application/json',
            'Authorization': "Bearer " + tokenService.getToken()
        }
    })

}

// edit
export function editGame(game) {
    return fetch(`/api/games/game/${game.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: game.title,
            platform: game.platform,
            review: game.review,
            reviewTitle: game.reviewTitle
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
}

// delete
export function deleteGame(id) {
    return fetch(`/api/games/game/${id}`, {
        method: 'delete'
    }).then(function (res) {
        return res.json()
    });
}