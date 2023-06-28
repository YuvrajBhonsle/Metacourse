import { APP_NAME } from "@/constants";
import { Flex, Text, useColorModeValue, Image } from "@chakra-ui/react";
// import Image from "next/image";

export default function Footer() {
  return (
      <Flex justifyContent={"space-between"} alignItems={"center"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Text fontSize={"xl"} fontWeight={"semibold"} p={"5"} mt={"1"}>Copyright &copy; 2023 {APP_NAME} All Rights Reserved</Text>

      <Image src="/svit.jpg" alt="svit" w={"5rem"} borderRadius={"90%"} m={"1rem"}/>
      </Flex>
  );
}
