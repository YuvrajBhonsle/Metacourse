import { APP_NAME } from '@/constants';
import { Center, Flex, Grid, Box } from '@chakra-ui/react';
import { HeroCards } from './HeroCards';
import Navbar from './Navbar';

export default function Hero() {
  const course = ['B.E', 'B.Com', 'B.Arch', ''];
  const branch = [
    'Aeronautical-Engineering',
    'Mechanical-Engineering',
    'Civil-Engineering',
    'Computer-Engineering',
    'Electrical-Engineering',
    'Information-Technology',
    'IC-Engineering',
    'EC-Engineering',
    'MCA',
  ];

  // {
  //   branch.map((name, key) => {
  //     <Navbar
  //       props={name
  //         .split('-')
  //         .map((word, index) => word[0].toUpperCase() + word.slice(1))
  //         .join('')}
  //     />;
  //   });
  // }
  return (
    <Box w={'100vw'}>
      <Center fontSize={'3xl'} fontWeight={'bold'} mt={'5'} mb={'2'} letterSpacing={'wide'}>
        Welcome to {APP_NAME}
      </Center>

      <Flex
        flexWrap={'wrap'}
        justifyContent={'center'}
        alignItems={'stretch'}
        rowGap={4}
        columnGap={8}
      >
        {branch.map((name, key) => (
          <HeroCards
            props={name
              .split('-')
              .map((word, index) => word[0].toUpperCase() + word.slice(1))
              .join(' ')}
            key={key}
            id={name.split('-').join(' ')}
          />
        ))}
      </Flex>
    </Box>
  );
}
