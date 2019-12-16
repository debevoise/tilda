import { RECEIVE_ALBUMS, RECEIVE_ARTIST, RECEIVE_ALBUM } from "../../actions/music_actions";

const albumsReducer = (state = {}, action) => {
    let newState;
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALBUMS:
            return action;
        case RECEIVE_ALBUM:
            const {album} = action.payload;
            newState = Object.assign({}, state);
            newState[album.id] = album;
            return newState;
        case RECEIVE_ARTIST:

            //TODO check format of state( payload etc )
            newState = Object.assign({}, action.albums, state);
            return newState;
        default:
            return state;
    }
}

export default albumsReducer;