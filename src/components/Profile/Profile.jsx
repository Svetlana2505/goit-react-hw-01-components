import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export const Profile = ({
  user: { username, tag, location, avatar },
  children,
}) => {
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={avatar} alt="username" className={styles.avatar} />
          <p className={styles.name}>{username}</p>
          <p className={styles.tag}>{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>
        {children}
      </div>
    </>
  );
};

Profile.propTypes = {
  children: PropTypes.element,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};
