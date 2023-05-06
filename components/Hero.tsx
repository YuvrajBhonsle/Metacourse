import { APP_NAME } from "@/constants";
import { Center, Flex, Grid, Box } from "@chakra-ui/react";
import { HeroCards } from "./HeroCards";

export default function Hero() {
  const course = ["B.E", "B.Com", "B.Arch", ""];
  const branch = [
    "AERONAUTICAL ENGINEERING",
    "MECHANICAL ENGINEERING",
    "CIVIL ENGINEERING",
    "COMPUTER ENGINEERING",
    "ELECTRICAL ENGINEERING",
    "INFORMATION TECHNOLOGY",
    "IC ENGINEERING",
    "EC ENGINEERING",
    "MCA",
  ];

  return (
    <Box w={"100vw"}>
      <Center
        fontSize={"3xl"}
        fontWeight={"bold"}
        mt={"5"}
        mb={"2"}
        letterSpacing={"wide"}
      >
        Welcome to {APP_NAME}
      </Center>

      <Flex
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"stretch"}
        rowGap={4}
        columnGap={8}
      >
        {branch.map((name, key) => (
          <HeroCards
            props={name}
            key={key}
            id={name.split(" ").join("").toLowerCase()}
          />
        ))}
      </Flex>
    </Box>
  );
}
