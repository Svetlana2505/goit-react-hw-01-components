import PropTypes from 'prop-types';
import { Item, Span, Image, Text } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <Item>
    <Span isOnline={isOnline}></Span>
    <Image src={avatar} alt={name} width="48" />
    <Text>{name}</Text>
  </Item>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
