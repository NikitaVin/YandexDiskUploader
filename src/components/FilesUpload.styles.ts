import styled from '@emotion/styled';

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  height: '50%',
  backgroundColor: '#ededed',
  border: '1px solid #bfb0b0',
  boxShadow: '10px 5px 5px #bfb0b0',
});

export const P = styled.p({
  backgroundColor: 'inherit',
  fontSize: '20px',
  marginBottom: '15px',
});

export const Button = styled.button({
  backgroundColor: '#419152',
  borderRadius: '4px',
  marginTop: '20px',
  transition: 'background-color 0.2s',
  height: '40px',
  padding: '10px 20px',
  boxSizing: 'border-box',
  border: 'none',
  '&:hover': {
    backgroundColor: '#59be6e',
  },
  '&:active': {
    backgroundColor: '#2E703A',
  },
});
export const Input = styled.input({
  margin: ' 20px 0',
  backgroundColor: 'inherit',
  display: 'none',
});

export const Li = styled.li({
  backgroundColor: 'inherit',
  marginRight: '5px',
});

export const Ul = styled.ul({
  backgroundColor: 'inherit',
  margin: '40px 40px 0 40px',
});

export const Label = styled.label({
  backgroundColor: '#419152',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  borderRadius: '4px',
  height: '40px',
  padding: '10px 20px',
  boxSizing: 'border-box',
  border: 'none',
  '&:hover': {
    backgroundColor: '#59be6e',
  },
  '&:active': {
    backgroundColor: '#2E703A',
  },
});

export const Form = styled.form({
  cursor: 'pointer',
});
