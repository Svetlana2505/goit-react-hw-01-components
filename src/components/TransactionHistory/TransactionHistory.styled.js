import styled from 'styled-components';

export const Table = styled.table`
  width: 800px;
  margin: auto;
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  overflow: hidden;
  border-collapse: collapse;
`;

export const Tbody = styled.tbody`
  background-color: #dcdcdc;

  &:nth-child(even) {
    background-color: aliceblue;
  }
`;

export const Thead = styled.thead`
  background-color: #00bfff;

  height: 40px;
`;

export const Th = styled.th`
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  &:not(:last-child) {
    border-right: 1px solid #ccc;
  }
`;

export const Td = styled.td`
  text-align: center;
  text-transform: capitalize;
  font-size: 14px;
  height: 40px;
  &:not(:last-child) {
    border-right: 1px solid #ccc;
  }
`;
