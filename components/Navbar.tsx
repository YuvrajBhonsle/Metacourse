import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  const getRouteName = () => {
    if (router.pathname.includes('branch')) {
      // return {props} as any;
      // return router.query.branch;
      let route: string = router.query.branch as string;
      return route
        .split('%20')
        .map((word, index) => word[0].toUpperCase() + word.slice(1))
        .join(' ');
    } else return 'Home';
    // MORE ROUTES CAN BE DEFINED HERE
  };

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box w={'10%'} alignItems={'center'} bg={'white'}>
            <Image src="/next.svg" />
          </Box>

          <Box fontSize={'xl'}>{getRouteName()}</Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                    // isOpen={isOpen} onClose={onClose} onOverlayClick={onClose}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Favourites</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
