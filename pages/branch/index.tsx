import { Box, Grid } from "@chakra-ui/react";

const Semesters = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <Box w={"50%"} bg={"white"} color={"black"}>
        SEMESTER 1
      </Box>
      <Box w={"50%"} bg={"white"} color={"black"}>
        SEMESTER 2
      </Box>
      <Box w={"50%"} bg={"white"} color={"black"}>
        SEMESTER 3
      </Box>
      <Box w={"50%"} bg={"white"} color={"black"}>
        SEMESTER 4
      </Box>
      <Box w={"50%"} bg={"white"} color={"black"}>
        SEMESTER 5
      </Box>
      <Box w={"50%"} bg={"white"} color={"black"}>
        SEMESTER 6
      </Box>
      <Box w={"50%"} bg={"white"} color={"black"}>
        SEMESTER 7
      </Box>
      <Box w={"50%"} bg={"white"} color={"black"}>
        SEMESTER 8
      </Box>
    </Grid>
  );
};

export default Semesters;
