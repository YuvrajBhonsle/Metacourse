import { APP_NAME } from "@/constants";
import useFetch from "@/hooks/useFetch";
import getUniqueKey from "@/utils/getUniqueKey";
import { Box, Center, Flex } from "@chakra-ui/react";
import HeroCards from "./HeroCards";

export default function Hero() {
  const course = ["B.E", "B.Com", "B.Arch", ""];
  const branch = [
    "Aeronautical-Engineering",
    "Mechanical-Engineering",
    "Civil-Engineering",
    "Computer-Engineering",
    "Electrical-Engineering",
    "Information-Technology",
    "IC-Engineering",
    "EC-Engineering",
    "MCA",
  ];

  const data = useFetch();

  data(3, "aero").then((res) => {
    console.log(res);
  });

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
        {branch.map((name, index) => {
          return <HeroCards key={`${index}_${getUniqueKey()}`} title={name} />;
        })}
      </Flex>
    </Box>
  );
}
