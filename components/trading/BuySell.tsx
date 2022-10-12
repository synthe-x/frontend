import React from 'react'
import {
    Flex, Text, Box, useColorMode, Button, Image, ListItem, Drawer,
  useDisclosure, Input,Container
  } from '@chakra-ui/react'
const BuySell = () => {
  return ( 
    <>
    <Container>
    <Box mt="0.7rem">
       <Text fontWeight={"satoshi"}> Price(USDT)</Text>
 <Input border={"2px solid gray"} type='number' placeholder='place order with optimal price' />
    </Box>
    <Box mt="0.7rem">
       <Text fontWeight={"satoshi"}> Total(USDT)</Text>
 <Input type='number' border={"2px solid gray"} />
    </Box>
    <Text mt="1rem">coin Balance -- USDT</Text>
    <Text>Max buy -- BTC</Text>
    <Flex justifyContent={"space-around"} mt="2rem">
      <Button width="8rem" colorScheme='whatsapp' fontFamily={"basement"}>Buy</Button>
      <Button width="8rem" colorScheme='red' fontFamily={"basement"}>Sell</Button>
    </Flex>
    </Container>
    </>
  )
}

export default BuySell