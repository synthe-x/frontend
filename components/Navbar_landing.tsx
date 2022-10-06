import {
  Flex, Text, Box, useColorMode, Button, UnorderedList, ListItem, Avatar,AvatarGroup,
 useDisclosure, 
} from '@chakra-ui/react'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import React,{useContext} from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";
import Link from "next/link";
import { useAccount } from 'wagmi'
import '../styles/Home.module.css'
import darklogo from '../public/dark_logo.svg'
import lightlogo from '../public/light_logo.svg'
import { appContext } from '../pages/app'
import twitter from '../public/twitter.svg'
import discord from '../public/discord.webp'
function newapp() {
	const AppData = useContext(appContext)
  const router = useRouter();
  const { toggleColorMode } = useColorMode();
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex justify={"space-between"} alignItems={"center"}>
        <Box cursor={"pointer"} >
          <Image onClick={()=>{
            router.push("/")
          }} src={colorMode == "dark" ? darklogo : lightlogo} alt=""  width="100px" height="100px" />
        </Box>


        <Box >
          <UnorderedList display={"flex"} alignItems="center" justifyContent={"flex-end"}  minWidth="20rem" listStyleType="none">

            <ListItem mx="1rem">
              <Link href="https://twitter.com/ChainScoreHQ" target="_blank">
              <Image 
       src={twitter} alt="" width="40px" height="40px" />
              </Link>
            </ListItem>
            <ListItem mx="1rem">
              <Link href="https://discord.com/invite/ZhKsjC8464"  target="_blank">
              <Image 
       src={discord} alt="" width="40px" height="40px" />
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
     
    </>
  )
}

export default newapp 