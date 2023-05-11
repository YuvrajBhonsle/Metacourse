"use client";
import { useRouter } from "next/navigation";
import { APP_NAME } from "@/constants";
import { Box, Button, Image, Text, useColorModeValue, Flex } from '@chakra-ui/react';

export default function NotFound() {
  const router = useRouter();

  return (
    <Flex
      direction={'column'}
      justify={'space-between'}
      align={'center'}
      h={'71vh'}
      p={'4'}
      w={'full'}
      flexGrow={'1'}
    >
      <Image src="/404page(3).jpg" />
      <Text fontSize={'3xl'}>Uh Oh! Looks like something broke</Text>

      <Button
        fontSize={"xl"}
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
        onClick={() => router.push('/')}
      >
        Take Me Back
      </Button>
    </Flex>
  );
}
