import {
  Flex, Text, Box, useColorMode, Button, UnorderedList, ListItem, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, useDisclosure, Switch
} from '@chakra-ui/react'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { FaBars } from 'react-icons/fa';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import React, { useState } from 'react'
import Image from 'next/image';
import { useRouter } from "next/router";
import Link from "next/link";
import { useAccount } from 'wagmi'
import '../styles/Home.module.css'
import darklogo from '../public/dark_logo.svg'
import lightlogo from '../public/light_logo.svg'
function newapp() {
  const { address, isConnecting, isConnected, isDisconnected } = useAccount()
  const router = useRouter();
  const { toggleColorMode } = useColorMode();
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex justify={"space-between"} alignItems={"center"}>
        <Box>
          <Image src={colorMode == "dark" ? darklogo : lightlogo} alt="" width="100px" height="100px" />
        </Box>


        <Box display={{ sm: "none", md: "block" }}>
          <UnorderedList display={"flex"} alignItems="center" justifyContent={"space-around"} minWidth="20rem" listStyleType="none">

            <ListItem mx="1rem">
              <Link href="/dashboard">
                <Text my="1rem" cursor={"pointer"} onClick={onClose} fontFamily="Roboto" fontWeight={"bold"}>
                  Dashboard
                </Text>
              </Link>
            </ListItem>
            <ListItem mx="1rem">
              <Link href={address ? "/portfolio" : "/"}  >
                <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="Roboto" fontWeight={"bold"}>
                  Portfolio
                </Text>
              </Link>
            </ListItem>
            <ListItem mx="1rem">
              <Button width={"3rem"} onClick={toggleColorMode} mr={5}> {colorMode == "dark" ? <BsMoonFill size={25} /> : <BsSunFill size={25} />}</Button>
            </ListItem>
            <ListItem mx="1rem">
              <ConnectButton />
            </ListItem>
          </UnorderedList>
        </Box>


        <Box display={{ sm: "block", md: "none", lg: "none" }}>
          <FaBars size={35} onClick={onOpen} />
        </Box>


      </Flex>
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent alignItems={"center"}>
          <DrawerHeader borderBottomWidth='1px'>
            <Flex alignItems={"center"}>
              <Image src={colorMode == "dark" ? darklogo : lightlogo} alt="" width="100px" height="100px" />
            </Flex>

            <Box mt="1rem" minWidth={"100%"}>
            </Box>
          </DrawerHeader>
          <DrawerBody>

            <nav >
              <UnorderedList display={"flex"} flexDirection="column" alignItems="center" justifyContent={"center"} listStyleType="none">
                <ListItem>
                  <Link href="/dashboard">
                    <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="Roboto" fontSize={"2xl"} fontWeight={"bold"}>
                      Dashboard
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/portfolio"   >
                    <Text cursor={"pointer"} onClick={onClose} my="1rem" fontFamily="Roboto" fontSize={"2xl"} fontWeight={"bold"}>
                      Portfolio
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Button variant={"outline"} width={"11rem"} onClick={toggleColorMode} > {colorMode == "dark" ? <BsMoonFill size={25} /> : <BsSunFill size={25} />} <Text ml="1rem">{colorMode == "light" ? "light" : "dark"} mode</Text></Button>
                </ListItem>
                <ListItem my="1rem">
                  <ConnectButton.Custom>
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
                                <Button onClick={() => {
                                  openConnectModal
                                }} type="button" mr="0.3rem" borderRadius={"50px"} height="3rem">
                                  Connect Wallet
                                </Button>
                              );
                            }
                            return (

                              <Box p="0.5rem" display={"flex"} justifyContent="center" alignItems="baseline" borderRadius="20px" backgroundColor={"gray.600"} height="3rem" border="1px solid #114D80" color="#B7C1C9" >

                                <Text ml="8px" fontFamily="Roboto" fontSize={"xl"} mr={"3"} fontWeight="bold">{account.displayBalance
                                  ? `${account.displayBalance}`
                                  : ''}</Text>

                                <Button size={"xs"} fontFamily="Poppins" fontSize={"xl"} color="white" onClick={openAccountModal} mt="3px" mr="2px" type="button" borderRadius={"20px"}>
                                  {account.displayName}

                                </Button>
                              </Box>
                            );
                          })()}
                        </div>
                      );
                    }}
                  </ConnectButton.Custom>
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