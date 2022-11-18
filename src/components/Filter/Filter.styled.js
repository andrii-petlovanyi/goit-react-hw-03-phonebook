import styled from '@emotion/styled';

export const Label = styled.label`
  position: relative;
  font-size: ${p => p.theme.fontSizes.m};
  margin-left: 5px;
`;
export const Input = styled.input`
  width: 330px;
  margin-bottom: 12px;
  margin-top: 3px;
  font-size: ${p => p.theme.fontSizes.m};
  padding-left: 5px;
  height: 35px;
  border-radius: ${p => p.theme.radii.preMedium};
  border: none;
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto 0 auto;
  width: 340px;
`;
