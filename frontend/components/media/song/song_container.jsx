import { connect } from 'react-redux';
import Song from './song'
import { removeSongFromPlaylist } from '../../../actions/music_actions';

const msp = (state, ownprops) => ({
    type: 'Song'
})

const mdp = dispatch => ({
    removeSongFromPlaylist: (playlistId, songId) => 
        dispatch(removeSongFromPlaylist(playlistId, songId))
})

const SongContainer = connect(msp, mdp)(Song);
export default SongContainer;