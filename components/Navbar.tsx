'use client';
import { useRouter } from 'next/navigation';
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar, Box, Button, Center, Flex, Image, Menu,
  MenuButton, MenuDivider, MenuItem, MenuList, Stack,
  useColorMode, useColorModeValue
} from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar({ props }: any) {
  const router = useRouter();

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box w={"10%"} alignItems={"center"} bg={"white"} onClick={() => router.push('/')} cursor={"pointer"}>
            <Image src="/next.svg" />
          </Box>

          <Box fontSize={"xl"}>HOME</Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                    // isOpen={isOpen} onClose={onClose} onOverlayClick={onClose}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
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
