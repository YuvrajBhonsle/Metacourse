'use client';
import useFetch from '@/hooks/useFetch';
import getCollectionName from '@/utils/getCollectionName';
import { Box, Center, Flex, Heading, Img, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

export default function Branch() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [data, setData] = React.useState<any>([]);
  const router = useRouter();
  const fetchData = useFetch();
  const sem = router?.query?.data?.split('_')[0];
  const branch = router?.query?.data?.split('_')[1];
  React.useEffect(() => {
    console.log(router.query.data);
    console.log(router.query);
    fetchData(parseInt(sem), getCollectionName(branch)).then((res) => {
      setData(res);
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  return (
    <>
      {data && console.log(data.courses)}
      {data ? (
        <Flex flexWrap={'wrap'} justifyContent="center" alignItems={"stretch"}>
          {data.hasOwnProperty('courses') &&
          Array.isArray(data.courses) &&
          data.courses.length > 0 ? (
            data.courses.map((course: any) => (
              <Box
                key={course._id}
                w="xs"
                rounded={'sm'}
                my={5}
                mx={[0, 5]}
                overflow={'hidden'}
                bg={useColorModeValue('white', 'blackAlpha.600')}
                color={useColorModeValue('black', 'white')}
                border={'1px'}
                borderColor="black"
                boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 #656665')}
                _hover={{
                  boxShadow: useColorModeValue('6px 6px 0 gray', '6px 6px 0 white'),
                  transition: 'all 0.25s ease',
                  transform: 'scale(1.04)',
                }}
                cursor={'pointer'}
              >
                <Box h={'200px'} borderBottom={'1px'} borderColor="black">
                  <Img
                    src={
                      'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                    }
                    roundedTop={'sm'}
                    objectFit="cover"
                    h="full"
                    w="full"
                    alt={'Blog Image'}
                  />
                </Box>

                <Box
                  bg={useColorModeValue('black', 'whiteAlpha.400')}
                  display={'inline-block'}
                  p={1}
                  color="white"
                  mb={'0.125rem'}
                  borderBottomRightRadius={'2xl'}
                >
                  <Text fontSize={'0.95rem'} fontWeight={'medium'} p={'0.125rem'}>
                    {'SEMESTER: ' + course.data.sem}
                  </Text>
                </Box>

                <Heading
                  color={useColorModeValue('black', 'white')}
                  fontSize={'2xl'}
                  my={'1rem'}
                  justifyContent={'center'}
                  display={'flex'}
                  alignItems={'center'}
                  px={'1rem'}
                >
                  {course.data.course_name}
                </Heading>

                <Link
                  href={course.data.course_link}
                  isExternal
                  px={'1rem'}
                  py={'0.5rem'}
                  bgColor={useColorModeValue('black', 'whiteAlpha.300')}
                  color={useColorModeValue('white', 'gray.100')}
                  cursor={'pointer'}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  mx={'auto'}
                  my={'0.5rem'}
                  w={'50%'}
                  fontWeight={'semibold'}
                  borderTopRightRadius={'xl'}
                  borderBottomLeftRadius={'xl'}
                >
                  Go to Course
                </Link>
              </Box>
            ))
          ) : (
            <Center fontWeight={'bold'} fontSize={'3xl'} m={'2rem'}>
              No courses available.
            </Center>
          )}
        </Flex>
      ) : null}
      {isLoading && (
        <Center fontSize={'4xl'} fontWeight={'bold'}>
          LOADING...
        </Center>
      )}
    </>
  );
}
