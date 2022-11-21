import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  padding: 10px;
`;

export const Image = styled.img`
  border: 1px solid grey;
  margin-right: 10px;
  box-shadow: 3px 4px 9px 1px rgba(0, 0, 0, 0.2);
`;

export const Span = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'red' : 'green')};
  margin-right: 10px;
`;

export const Text = styled.p`
  font-weight: 700;
`;
