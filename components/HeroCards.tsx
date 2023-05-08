"use client";
import { useRouter } from "next/navigation";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Img,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

type HeroCardsProps = {
  title: string;
};
const HeroCards: React.FC<HeroCardsProps> = ({ title }) => {
  const router = useRouter();

  const navigate = React.useCallback(() => {
    router.push("/branch/" + title);
  }, []);
  // console.log(title)

  const formattedName = () => {
    let formattedName = title.split("-");
    if (formattedName.length == 2) {
      return formattedName[0] + " " + formattedName[1];
    } else return formattedName;
  }

  return (
    <>
      <Box
        w="xs"
        rounded={"sm"}
        my={5}
        mx={[0, 5]}
        overflow={"hidden"}
        bg={useColorModeValue("white", "blackAlpha.600")}
        color={useColorModeValue("black", "white")}
        border={"1px"}
        borderColor="black"
        boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 #656665")}
        // _hover={{ textColor: "blue", stroke: "blue", boxShadow: "md"}}
        _hover={{
          // bg: useColorModeValue("blackAlpha.600","white"),
          // color: useColorModeValue("black", "white"),
          boxShadow: useColorModeValue("6px 6px 0 gray", "6px 6px 0 white"),
          transition: "all 0.25s ease",
          transform: "scale(1.04)",
        }}
        cursor={"pointer"}
      >
        <Box h={"200px"} borderBottom={"1px"} borderColor="black">
          <Img
            src={
              "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            }
            roundedTop={"sm"}
            objectFit="cover"
            h="full"
            w="full"
            alt={"Blog Image"}
          />
        </Box>
        <Box p={4}>
          <Box
            bg={useColorModeValue("black", "whiteAlpha.400")}
            display={"inline-block"}
            px={2}
            py={1}
            color="white"
            mb={2}
          >
            <Text fontSize={"xs"} fontWeight="medium">
              {"ENGINEERING"}
            </Text>
          </Box>
          <Heading
            color={useColorModeValue("black", "white")}
            fontSize={"2xl"}
            noOfLines={2}
          >
            {formattedName()}
          </Heading>
          <Text color={useColorModeValue("black", "gray.400")} noOfLines={2}>
            Resources for {formattedName()}
          </Text>
        </Box>
        <HStack borderTop={"1px"} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={"space-between"}
            roundedBottom={"sm"}
            cursor={"pointer"}
            w="full"
          >
            {/* <Button border={"black"}>View More</Button> */}
            <Text
              fontSize={"md"}
              fontWeight={"semibold"}
              align={"center"}
              w={"100%"}
              bgColor={useColorModeValue("black", "whiteAlpha.300")}
              color={useColorModeValue("white", "gray.100")}
              mx={"4rem"}
              my={"0"}
              py={"0.5rem"}
              px={"0.5rem"}
              borderRadius={"md"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              onClick={navigate}
              cursor={"pointer"}
              _hover={{
                textDecoration: "underline",
              }}
            >
              {/* <Link href={"/branch/" + id} key={props}> */}
              View more
              {/* </Link> */}
            </Text>
          </Flex>
        </HStack>
      </Box>
    </>
  );
};

export default React.memo(HeroCards);
