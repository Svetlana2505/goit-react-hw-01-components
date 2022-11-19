import { Table, Tbody, Thead, Th, Td } from './TransactionHistory.styled.js';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </Thead>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <Tbody key={id}>
            <tr>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </tr>
          </Tbody>
        );
      })}
    </Table>
  );
};

TransactionHistory.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.number.isRequired,
      id: PropTypes.string,
    }).isRequired
  ).isRequired,
};
