"use client";
import React from 'react'
import { useRouter } from 'next/router'
import { Button, Center } from '@chakra-ui/react';
import useFetch from '@/hooks/useFetch';
import getCollectionName from '@/utils/getCollectionName';

export default function Branch(){
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState<any>([]);
  const router = useRouter();
  const fetchData = useFetch();
  const sem = router?.query?.data?.split("_")[0];
  const branch = router?.query?.data?.split("_")[1];
  React.useEffect(() => {
    console.log(router.query.data);
    console.log(router.query);
    fetchData(parseInt(sem), getCollectionName(branch)).then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {data && JSON.stringify(data)}
      {isLoading && (
        <Center fontSize={"4xl"} fontWeight={"bold"}>LOADING...</Center>
      )}
    </>
  )
}
