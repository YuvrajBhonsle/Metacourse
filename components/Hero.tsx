import { APP_NAME } from "@/constants";
import useFetch from "@/hooks/useFetch";
import getUniqueKey from "@/utils/getUniqueKey";
import { Box, Center, Flex } from "@chakra-ui/react";
import HeroCards from "./HeroCards";

export default function Hero() {
  const course = ["B.E", "B.Com", "B.Arch", ""];
  // const branch = [
  //   "Aeronautical-Engineering",
  //   "Mechanical-Engineering",
  //   "Civil-Engineering",
  //   "Computer-Engineering",
  //   "Electrical-Engineering",
  //   "Information-Technology",
  //   "IC-Engineering",
  //   "EC-Engineering",
  //   "MCA",
  // ];
  const branch = [
    {
      branchName: "Aeronautical-Engineering",
      branchImg: "AeronauticalEngineering.png"
    },
    {
      branchName: "Mechanical-Engineering",
      branchImg: "MechanicalEngineering.jpg"
    },
    {
      branchName: "Civil-Engineering",
      branchImg: "CivilEngineering.png"
    },
    {
      branchName: "Computer-Engineering",
      branchImg: "ComputerEngineering.jpg"
    },
    {
      branchName: "Electrical-Engineering",
      branchImg: "ElectricalEngineering.jpg"
    },
    {
      branchName: "Information-Technology",
      branchImg: "InformationTechnology.jpg"
    },
    {
      branchName: "IC-Engineering",
      branchImg: "ICEngineering.jpg"
    },
    {
      branchName: "EC-Engineering",
      branchImg: "ECEngineering.png"
    },
    {
      branchName: "MCA",
      branchImg: "MCA.jpg"
    },
  ]

  const data = useFetch();

  data(3, "aero").then((res) => {
    console.log(res);
  });

  return (
    <Box w={"100vw"} px={"1.5rem"}>
      <Center
        fontSize={"3xl"}
        fontWeight={"bold"}
        mt={"5"}
        mb={"2"}
        letterSpacing={"wide"}
        textAlign={"center"}
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
          return <HeroCards key={`${index}_${getUniqueKey()}`} title={name.branchName} branchImg={name.branchImg} />;
        })}
      </Flex>
    </Box>
  );
}
