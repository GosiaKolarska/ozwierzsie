import styled, { css } from 'styled-components/native';

const choices = {
    like: {
        container: css`
      border-color: #09cd1d;
    `,
        text: css`
      color: #09cd1d;
    `,
    },
    nope: {
        container: css`
      border-color: #e13a3a;
    `,
        text: css`
      color: #e13a3a;
    `,
    },
};

export const Container = styled.View`
  position: absolute;
  border-width: 6px;
  padding: 5px 10px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
  ${(props) => choices[props.type].container}
`;

export const Text = styled.Text`
  font-size: 48px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 5px;
  ${(props) => choices[props.type].text}
`;
