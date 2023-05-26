import { Button, Center, Flex, Input, Select, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';

export default function addData() {
  const [semester, setSemester] = useState<number>(0);
  const [branch, setBranch] = useState<string>('');
  const [courseName, setCourseName] = useState<string>('');
  const [courseLink, setCourseLink] = useState<string>('');
  const toast = useToast();

  const options = [
    { label: 'Semester 1', value: '1' },
    { label: 'Semester 2', value: '2' },
    { label: 'Semester 3', value: '3' },
    { label: 'Semester 4', value: '4' },
    { label: 'Semester 5', value: '5' },
    { label: 'Semester 6', value: '6' },
    { label: 'Semester 7', value: '7' },
    { label: 'Semester 8', value: '8' },
  ];

  const branches = [
    { label: 'Aeronautical Engineering', value: 'aero' },
    { label: 'Mechanical Engineering', value: 'mech' },
    { label: 'Civil Engineering', value: 'civil' },
    { label: 'Computer Engineering', value: 'comp' },
    { label: 'Electrical Engineering', value: 'electrical' },
    { label: 'Information Technology', value: 'it' },
    { label: 'IC Engineering', value: 'ic' },
    { label: 'EC Engineering', value: 'ec' },
    { label: 'MCA', value: 'mca' },
  ];

  const addDataToDB = async () => {
    if (!semester || !branch || !courseName || !courseLink) {
      toast({
        title: 'Error',
        description: 'Please fill in all the required fields.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    try {
      const getRes = await fetch('/api/addCourse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sem: semester,
          branch: branch,
          course_name: courseName,
          course_link: courseLink,
        }),
      });
      if (getRes.ok) {
        const response = getRes.json();
        console.log(response);
        toast({
          title: 'Data added successfully',
          description: 'Your data has been added successfully',
          status: 'success',
          duration: 1500,
          isClosable: true,
        });
      }
      setSemester(0);
      setBranch('');
      setCourseName('');
      setCourseLink('');
    } catch (error) {
      toast({
        title: 'Data not added successfully',
        description: 'There was an error while adding your data',
        status: 'error',
        duration: 1500,
        isClosable: true,
      });
      console.log('Error while getting data', error);
    }
  };

  const isSubmitDisabled = !semester || !branch || !courseName || !courseLink;

  return (
    <Flex direction={'column'} p={4} m={4}>
      <Center>Enter details to send your data to Database</Center>
      <Flex alignItems={'center'} justifyContent={'space-evenly'}>
        <Select
          placeholder="Select Semester"
          variant={'filled'}
          w={'25rem'}
          m={4}
          onChange={(e) => setSemester(Number(e.target.value))}
        >
          {options.map((item, key) => (
            <option value={item.value} key={key}>
              {item.label}
            </option>
          ))}
        </Select>

        <Select
          placeholder="Select Branch"
          variant={'filled'}
          w={'25rem'}
          m={4}
          onChange={(e) => setBranch(e.target.value)}
        >
          {branches.map((item, key) => (
            <option value={item.value} key={key}>
              {item.label}
            </option>
          ))}
        </Select>
      </Flex>

      <Flex alignItems={'center'}>
        <Text p={4}>Course Name: </Text>
        <Input
          borderColor={'telegram.200'}
          placeholder="Enter the course details"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          w={'50%'}
        />
      </Flex>

      <Flex>
        <Text p={4}>Course Link: </Text>
        <Input
          placeholder="Enter the course details"
          type="url"
          value={courseLink}
          onChange={(e) => setCourseLink(e.target.value)}
          w={'50%'}
          isRequired
        />
      </Flex>
      <Button type="submit" onClick={addDataToDB} isDisabled={isSubmitDisabled}>
        Submit
      </Button>
    </Flex>
  );
}
