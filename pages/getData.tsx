import { Button, Flex } from "@chakra-ui/react";
import React, {useState} from "react";
import { useRouter } from "next/router";

export default function getData() {
  const [semester, setSemester] = useState<string>('');
  const [branch, setBranch] = useState<string>('');
  const [courseName, setCourseName] = useState<string>('');
  const [courseLink, setCourseLink] = useState<string>('');


  const getDataFromDB = async () => {
    try {
      const apiRes = await fetch("/api/addCourse", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            sem: semester,
            branch: branch,
            course_name: courseName,
            course_link: courseLink,
        }),
      });
      const resData = apiRes.json();
      console.log(resData);

    } catch (error) {
      console.log("Error while adding data", error);
    }
  
  return(
  <Flex h={"50rem"}>
    <Button onClick={getDataFromDB}>Get Data</Button>
  </Flex>
  )
}
}
