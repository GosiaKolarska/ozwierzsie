import styled from 'styled-components/native';

export const Container = styled.View`
  /* flex: 1; */
  background: #f0f0f0;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-left: 18px;
  `;

export const Filters = styled.Image`
  margin-right: 18px;
  width: 30px;
  height: 30px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;