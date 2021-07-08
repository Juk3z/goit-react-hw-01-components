import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';


const FriendList = ({friends}) => (
    <ul className={styles.friendList}>
        {friends.map(friend =>  <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} online={friend.isOnline} />  )}
    </ul>
);


FriendList.propTypes = {
    friends: PropTypes.PropTypes.arrayOf(PropTypes.object.isRequired)
};


export default FriendList;