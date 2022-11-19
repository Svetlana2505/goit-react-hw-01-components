import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { user } from 'data/users.js';
import { Profile } from './Profile/Profile';
import { Stats } from './Stats/Stats';
import { Statistics } from './Statistics/Statistic';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile user={user}>
        <Stats user={user} />
      </Profile>
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
