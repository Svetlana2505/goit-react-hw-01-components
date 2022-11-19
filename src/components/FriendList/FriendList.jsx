import { List, Image, Item, Span, Text } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Item key={id}>
            <Span isOnline={isOnline}></Span>
            <Image src={avatar} alt={name} width="48" />
            <Text>{name}</Text>
          </Item>
        );
      })}
    </List>
  );
};

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string,
    }).isRequired
  ).isRequired,
};
