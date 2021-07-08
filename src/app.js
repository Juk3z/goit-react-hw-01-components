
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';

import user from './user.json';
import statsData from './statistical-data.json';
import friendsData from './friends.json'

const App = () => (
    <div>
    <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    />

    <Statistics title='User Statistics' stats={statsData} />
        

    <FriendList friends={friendsData} />
</div>
);

export default App;