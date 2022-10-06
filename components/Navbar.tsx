import {
  Flex, Text, Box, useColorMode, Button, UnorderedList, ListItem, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, useDisclosure, Switch
} from '@chakra-ui/react'
import tronWeb from 'tronweb';
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { FaBars } from 'react-icons/fa';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import React, { useState,useContext } from 'react'
import Image from 'next/image';
import { useRouter } from "next/router";
import Link from "next/link";
import { useAccount } from 'wagmi'
import '../styles/Home.module.css'
import darklogo from '../public/dark_logo.svg'
import lightlogo from '../public/light_logo.svg'
import ConnectOptModal from './modals/ConnectOptModal';
import { appContext } from '../pages/app'
function newapp() {
  const AppData = useContext(appContext)
  const router = useRouter();
  const { toggleColorMode } = useColorMode();
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex justify={"space-between"} alignItems={"center"}>
        <Box cursor={"pointer"}>
          <Image onClick={()=>{
            router.push("/")
          }} src={colorMode == "dark" ? darklogo : lightlogo} alt="" width="100px" height="100px" />
        </Box>


        <Box display={{ sm: "none", md: "block" }}>
          <UnorderedList display={"flex"} alignItems="center" justifyContent={"space-around"} minWidth="20rem" listStyleType="none">

            <ListItem mx="1rem">
              <Link href="/">
                <Text className={router.pathname=="/" ? "link_active":""} my="1rem" cursor={"pointer"} onClick={onClose} fontFamily="Roboto" fontWeight={"bold"}>
                  Home
                </Text>
              </Link>
            </ListItem>
            <ListItem mx="1rem">
              <Link href={AppData.address ? "/app" : "/"}  >
                <Text  className={router.pathname=="/app" ? "link_active":""} cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="Roboto" fontWeight={"bold"}>
                  App
                </Text>
              </Link>
            </ListItem>
            <ListItem mx="1rem">
              <Button width={"3rem"} onClick={toggleColorMode} > {colorMode == "dark" ? <BsMoonFill size={25} /> : <BsSunFill size={25} />}</Button>
            </ListItem>
            <ListItem ml="1.1rem" w= {AppData.address ? "15rem":"8rem"}>          
           {AppData.address ?  <ConnectButton/>  :AppData.Taddress ? <Text bg="gray.600" onClick={()=>{AppData.setTaddress("")}}  fontFamily={"basement"} minWidth="100%" height="2.5rem" border={"2px solid gray"} pt="0.5rem" px="0.5rem" fontSize={"xs"} fontWeight={"bold"} borderRadius={"5PX"}  whiteSpace={"nowrap"} overflow="hidden" width={"6rem"} textOverflow={"ellipsis"}>{AppData.Taddress}</Text>: <ConnectOptModal  />}
            </ListItem>
          </UnorderedList>
        </Box>


        <Box display={{ sm: "block", md: "none", lg: "none" }}>
          <FaBars size={35} onClick={onOpen} />
        </Box>

      </Flex>
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent alignItems={"stretch"}>
          <DrawerHeader borderBottomWidth='1px'>
            <Flex alignItems={"center"} justifyContent="center">
              <Image src={colorMode == "dark" ? darklogo : lightlogo} alt="" width="100px" height="100px" />
            </Flex>
            <Box mt="0.5rem" minWidth={"100%"}>
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <nav >
              <UnorderedList display={"flex"} flexDirection="column" alignItems={"strech"} justifyContent={"center"} listStyleType="none">
              <ListItem my="0.5rem">
              <Link href="/">
                <Button variant={"outline"} w="100%"  className={router.pathname=="/" ? "sidebar_link_active ":""} fontSize="2xl" my="0.5rem" cursor={"pointer"} onClick={onClose} fontFamily="Roboto" fontWeight={"bold"}>
                  Home
                </Button>
              </Link>
            </ListItem>
            <ListItem my="0.5rem">
              <Link href={AppData.address ? "/app" : "/"}  >
                <Button variant={"outline"} w="100%"  className={router.pathname=="/app" ? "sidebar_link_active ":""} fontSize="2xl" cursor={"pointer"} my="0.5rem" onClick={onClose} fontFamily="Roboto" fontWeight={"bold"}>
                  App
                </Button>
              </Link>
            </ListItem >
                <ListItem my="0.5rem">
                  <Button variant={"outline"} width={"100%"} onClick={toggleColorMode} > {colorMode == "dark" ? <BsMoonFill size={25} /> : <BsSunFill size={25} />} <Text ml="1rem">{colorMode == "light" ? "light" : "dark"} mode</Text></Button>
                </ListItem>
                <ListItem my="0.5rem">
                {AppData.address ?   <ConnectButton.Custom>
                    {({
                      account,
                      chain,
                      openAccountModal,
                      openChainModal,
                      openConnectModal,
                      mounted,
                    }) => {
                      return (
                        <div
                          {...(!mounted && {
                            'aria-hidden': true,
                            'style': {
                              opacity: 0,
                              backgroundColor: "red",
                              pointerEvents: 'none',
                              userSelect: 'none',
                            },
                          })}
                        >
                          {(() => {
                            if (!mounted || !account || !chain) {
                              return (
                                <Button fontFamily={"basement"} onClick={
                                  openConnectModal
                                } type="button" mr="0.3rem" w="100%" height={"3rem"} fontSize="xl">
                              ETHEREUM
                                </Button>
                              );
                            }
                            return (

                              <Box  borderRadius={"5px"} p="0.5rem" display={"flex"} justifyContent="center" alignItems="baseline"  backgroundColor={"gray.600"} height="3rem" border="1px solid #114D80"  >

                                <Text ml="8px" fontFamily="Roboto" fontSize={"md"} mr={"3"} fontWeight="bold">{account.displayBalance
                                  ? `${account.displayBalance}`
                                  : ''}</Text>

                                <Button size={"xs"} color={colorMode == "dark" ?"#FFFFF" : "#171717"} fontFamily="Poppins" fontSize={"xl"}  onClick={openAccountModal} mt="3px" mr="2px" type="button" >
                                  {account.displayName}

                                </Button>
                              </Box>
                            );
                          })()}
                        </div>
                      );
                    }}
                  </ConnectButton.Custom> :AppData.Taddress ?<Text bg="gray.600"  onClick={()=>{AppData.setTaddress("")}}  fontFamily={"basement"} minWidth="100%" height="2.5rem" border={"2px solid gray"} pt="0.5rem" px="0.5rem" fontSize={"xs"} fontWeight={"bold"} borderRadius={"5PX"}  whiteSpace={"nowrap"} overflow="hidden" width={"6rem"} textOverflow={"ellipsis"}>{AppData.Taddress}</Text>: <ConnectOptModal />}
                </ListItem>
              </UnorderedList>
            </nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default newapp 