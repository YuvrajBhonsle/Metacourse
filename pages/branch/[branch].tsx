'use client';
import { useRouter } from 'next/router';
import { IMAGE_LINK, SEM_IMAGES } from '@/constants';
import { Box, Flex, Heading, Img, useColorModeValue } from '@chakra-ui/react';

const SemNum = () => {
  return (
    <Box m={'8'}>
      <Flex flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} gap={[8, 16]}>
        {[...Array(8)].map((_, index) => (
          <SemesterCard key={index} number={index} />
        ))}
      </Flex>
    </Box>
  );
};

const SemesterCard = ({ number }: { number: number }) => {
  const router = useRouter();

  return (
    <Box
      bg={useColorModeValue('white', 'blackAlpha.600')}
      color={useColorModeValue('black', 'white')}
      textAlign={'center'}
      p={5}
      alignSelf="center"
      rounded={'md'}
      border={'1px'}
      borderColor="black"
      boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 #656665')}
      _hover={{
        // background: "white",
        color: '#606263',
        boxShadow: useColorModeValue('6px 6px 0 gray', '6px 6px 0 white'),
        transition: 'all 0.3s ease-out',
        transform: 'translateY(-8px)',
      }}
    >
      <Box h={'200px'} borderBottom={'1px'} borderColor="black">
        <Img
          src={SEM_IMAGES[1]}
          roundedTop={'sm'}
          objectFit="cover"
          h="full"
          w="full"
          alt={'Blog Image'}
        />
      </Box>
      <Heading
        mt={'3'}
        onClick={() => {
          // console.log(number + 1);
          // console.log(router.pathname);
          // console.log(router.query.branch);
          // console.log(`${number + 1}_${router.query.branch}`);
          router.push(`/data/${number + 1}_${router.query.branch}`);
        }}
        cursor={'pointer'}
      >
        Semester {number + 1}
      </Heading>
    </Box>
  );
};

export default SemNum;
