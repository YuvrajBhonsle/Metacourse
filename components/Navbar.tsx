import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useStateValue } from "@/StateProvider";

export default function Navbar() {
  const [{user, photo}, dispatch] = useStateValue()
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  const getRouteName = () => {
    if (router.pathname.includes("branch")) {
      const branchNameFromRouter = router?.asPath
        ?.split("/branch/")[1]
        ?.slice(0);
      const formattedName = branchNameFromRouter?.split("-");
      if (formattedName?.length == 2) {
        return formattedName[0] + " " + formattedName[1];
      } else return formattedName;
    } else if(!router.pathname.includes("/branch/")){
      return "Home";
    } else return "MetaCourse";
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"} justify={"center"} bg={"white"} onClick={() => router.push('/')} cursor={"pointer"}>
            <Image src="/logo.png" h={"3rem"} w={"5rem"} borderRadius='full'/>
          </Flex>

          <Box fontSize={"xl"}>{getRouteName()}</Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              {/* <Menu>
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
              </Menu> */}
              {user ? (<Avatar display={"flex"} alignItems={"center"} justifyContent={"center"} size={"sm"} src={photo} />) : (<Button><Link href="/login">Login</Link></Button>)}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
