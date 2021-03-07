import React, { useState }from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Heading,
    Stack,
    Button
  } from "@chakra-ui/react"

const LoginPage = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setScreen } = props;

  const submit = () => {
      console.log("logged on");
      setScreen("LandingPage");
  }

  return (
    <form  onClick={submit} className="login-form">
    <Stack spacing={4} mt={10}>
    <Heading as="h1" size="xl" isTruncated>
    Log in Build-Connect
    </Heading>
    
    <FormControl >
  <FormLabel>Username</FormLabel>
  <Input type="text"
        placeholder="Username"
        name="username"
        required
        onChange={e => setUsername(e.target.value)}
        />
  </FormControl>
  <FormControl mb={4}>
  <FormLabel>Password</FormLabel>
  <Input 
    type="password"
    placeholder="Password"
    name="password"
    required
    onChange={e => setPassword(e.target.value)}
    />
    <FormHelperText></FormHelperText>
  </FormControl>
  
    <Button type="submit">
    Log in
    </Button>
   
 
    </Stack>
    </form> 
  );

}

export default LoginPage