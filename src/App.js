import logo from './logo.svg';
import './App.css';
import LandingPage from "./components/LandingPage"
import { ChakraProvider } from "@chakra-ui/react"
import React, { useState }from 'react'
import LoginPage from './components/LoginPage';
import ContractsPage from './components/ContractsPage';
import SearchContractsPage from './components/SearchContractsPage'

function App() {
  const [screen, setScreen] = useState("LoginPage")
  return (
    <ChakraProvider>
    <div className="App">
        {screen == "LoginPage" && <LoginPage setScreen = {setScreen}/>}
        {screen == "LandingPage" && <LandingPage setScreen = {setScreen}/>}
        {screen == "ContractsPage" && <ContractsPage setScreen = {setScreen}/>}
        {screen == "SearchContractsPage" && <SearchContractsPage setScreen = {setScreen}/>}
    </div>
    </ChakraProvider>
  );
}

export default App;
