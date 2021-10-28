import styled from 'styled-components';
import MUIButton, { ButtonProps } from '@material-ui/core/Button';

interface ThemeValues {
  color: string;
  backgroundColor: string;
  border: string;
}

interface ThemeProps {
  [name: string]: ThemeValues;
}

const theme: ThemeProps = {
  salmon: {
    color: 'white',
    backgroundColor: '#F37474;',
    border: '',
  },
  yellow: {
    color: 'black',
    backgroundColor: '#FCD949',
    border: '',
  },
  blue: {
    color: '#FFFFFF',
    backgroundColor: '#6685D3',
    border: '',
  },
  red: {
    color: '#FFFFFF',
    backgroundColor: '#F37474',
    border: '',
  },
  'light-yellow': {
    color: '#9053A1',
    backgroundColor: '#FFEF61',
    border: '',
  },
  'blue-flat': {
    color: '#6685D3',
    backgroundColor: '#FFFFFF',
    border: '',
  },
  'blue-outline': {
    color: '#6685D3',
    backgroundColor: '#FFFFFF',
    border: 'border: 1px solid #6685D3',
  },
  'pink-outline': {
    color: '#DF58C1',
    backgroundColor: '#FFFFFF',
    border: 'border: 1px solid #DF58C1',
  },
  'purple-outline': {
    color: '#962698',
    backgroundColor: '#FAFAFA',
    border: 'border: 1px solid #962698',
  },
  pink: {
    color: '#FFFFFF',
    backgroundColor: '#DF58C1',
    border: '',
  },
  grey: {
    color: '#FFFFFF',
    backgroundColor: '#BDBDBD',
    border: '',
  },
  white: {
    color: '#313335',
    backgroundColor: '#FAFAFA',
    border: 'border: 1px solid #FAFAFA',
  },
  purple: {
    color: '#FFFFFF',
    backgroundColor: '#962698',
    border: '',
  },
  'whitepurple': {
    color: '#d05ad4',
    backgroundColor: '#FFFFFF',
    border: '',
  }
};

type StyledButtonProps = ButtonProps & { theme: keyof typeof theme };

const Button = styled(MUIButton).attrs(() => ({
  disableElevation: true,
  variant: 'contained',
}))`
  && {
    color: ${(props) => theme[props.theme].color};
    background: ${(props) => theme[props.theme].backgroundColor};
    ${(props) => theme[props.theme].border};
    font-family: 'Visby CF', sans-serif;
    border-radius: 12px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.4;
    text-transform: none;
    padding: 10px 14px;

    :hover {
      background-color: ${(props) => theme[props.theme].backgroundColor};
    }
  }
` as React.ComponentType<StyledButtonProps>;

export default Button;
