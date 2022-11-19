import styled from 'styled-components';

export const Section = styled.section`
  width: 400px;
  margin: auto;
  background-color: #fff;
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: grey;
  padding: 40px 0;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  width: calc(100% / 4);
  text-align: center;
`;

export const Span = styled.span`
  display: block;
  font-size: ${({ percentage }) => (percentage ? '25px' : '15px')};
  color: #fff;
`;
