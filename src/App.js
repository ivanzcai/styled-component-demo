import logo from './logo.svg';
import './App.css';
import StyledButton, {FancyButton, SubmitButton, DarkButton, AnimatedLogo} from './components/Button/Button'
import './style.css'
import { ThemeProvider, createGlobalStyle } from 'styled-components';


const theme = {
  dark:{
    primary:"#000",
    text:"#fff",
  },
  lights:{
    primary:"#fff",
    text: "000",
  },
  fontFamily: 'Segoe UI'
}

const GlobalStyle = createGlobalStyle` 
  button {
    font-family: ${(props) => props.theme.fontFamily }
  }
`

function App() { 
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <AnimatedLogo src={logo} />
        
        <StyledButton type='submit'>Styled Button</StyledButton>
        <br />
        <br />
        <StyledButton variant ='outline' >Outline Button</StyledButton>
        <br />
        <br />
        <FancyButton >Outline Button</FancyButton>
        <br />
        <br />
        <SubmitButton >Outline Button</SubmitButton>
        <br />
        <br />
        <DarkButton >Dark Button</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
