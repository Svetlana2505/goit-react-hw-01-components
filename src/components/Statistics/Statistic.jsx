import { Section, List, Title, Item, Span } from './Statistics.styled';
import PropTypes from 'prop-types';

function randomColor() {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
}

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>Upload stats</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id} style={{ backgroundColor: randomColor() }}>
              <Span>{label}</Span>
              <Span percentage>{percentage}%</Span>
            </Item>
          );
        })}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
