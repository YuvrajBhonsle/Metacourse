import React from 'react';
import { Button, Flex, Center, Image } from '@chakra-ui/react';
import { auth, provider } from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
function Login() {
    const [{ }, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).then(result =>
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        )
            .catch(error => alert(error.message));
    };
    return (
        <Flex justify={'center'} align={"center"} minH={"full"}>
            <Flex flexDir={"column"} justify={"space-between"} h={"50vh"} my={"2rem"}>
                {/* <img src="https://www.keyreply.com/hs-fs/hubfs/WhatsApp_Logo_1.png?width=2067&name=WhatsApp_Logo_1.png" width={'200px'} height={'200px'}></img> */}
                <Image src="https://media.istockphoto.com/id/1264548245/vector/glowing-neon-user-protection-icon-isolated-on-blue-background-secure-user-login-password.jpg?s=170667a&w=0&k=20&c=2FFyoWd8V7NulwDhNtFUjxDGIl8G4Zxw-pT9sfeZvi0=" width={'200px'} height={'200px'} rounded={"md"}></Image>
                <Center fontWeight={"semibold"}>
                    Sign In To MetaCourse
                </Center>
                <Button onClick={signIn}>Sign in with Google</Button>
            </Flex>
        </Flex>
    )
}

export default Login