import { Center, Flex, Grid } from "@chakra-ui/react";
import { HeroCards } from "./HeroCards";

export default function Hero() {
  // const career = ["ENGINEERING"];
  const branch = ["AERONAUTICAL ENGINEERING", "MECHANICAL ENGINEERING", "CIVIL ENGINEERING", "COMPUTER ENGINEERING", "ELECTRICAL ENGINEERING", "INFORMATION TECHNOLOGY", "IC ENGINEERING", "EC ENGINEERING", "MCA"]

  return (
    <>
    <Center fontSize={"3xl"} fontWeight={"bold"} mt={"5"} mb={"2"} letterSpacing={"wide"}>WELCOME TO METACOURSE</Center>

    <Grid templateColumns='repeat(3, 1fr)' gap={4} m={"3rem"}>
      { branch.map((name) => <HeroCards props={name} id={name.split(" ").join("").toLowerCase()} />) }
    </Grid>
    </>
  );
}
