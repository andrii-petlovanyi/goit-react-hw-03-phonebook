import styled from '@emotion/styled';

export const ContactsForm = styled.form`
  border-radius: ${p => p.theme.radii.medium};
  padding: 30px;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Input = styled.input`
  width: 280px;
  margin-top: 3px;
  margin-bottom: 12px;
  padding-left: 5px;
  font-size: ${p => p.theme.fontSizes.m};
  border: none;
  height: 35px;
  border-radius: ${p => p.theme.radii.preMedium};
`;

export const Button = styled.button`
  height: 40px;
  background-color: ${p => p.theme.colors.mainAccentColor};
  padding: 0 20px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  outline: none;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.mainAccentColor};
  border-radius: ${p => p.theme.radii.normal};
  margin-top: 10px;
  cursor: pointer;
  :hover {
    border: ${p => p.theme.borders.normal} white;
  }
`;
