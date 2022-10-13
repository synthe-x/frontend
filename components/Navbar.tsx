import {
  Flex, Text, Box, useColorMode, Button, UnorderedList, ListItem, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, useDisclosure, Select,
} from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { MdKeyboardArrowDown } from 'react-icons/md';
import tronWeb from 'tronweb';
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { FaBars } from 'react-icons/fa';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import React, { useState, useContext,useEffect } from 'react'
import Image from 'next/image';
import { useRouter } from "next/router";
import Link from "next/link";
import '../styles/Home.module.css'
import darklogo from '../public/dark_logo.svg'
import lightlogo from '../public/light_logo.svg'
import MetamaskConnect from './MetamaskConnect';
import ConnectOptModal from './modals/ConnectOptModal'
import { appContext } from '../pages/app'
function newapp() {
  const [newAddress, setnewAddress] = useState("")
	const [newTronAddress, setnewTronAddress] = useState("")
  const initRef = React.useRef()
  const appData = useContext(appContext)
  const router = useRouter();
  const { toggleColorMode } = useColorMode();
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()


useEffect(() => {
	let data;
  let trondata
		if (typeof window !== 'undefined') {
		  data = window.localStorage.getItem('address');
      setnewAddress(data)
      trondata = window.localStorage.getItem('tron');
      setnewTronAddress(trondata)
		} 
}, [newAddress,newTronAddress])

  return (
    <>
      <Flex justify={"space-between"} alignItems={"center"}>
        <Box cursor={"pointer"}>
          <Image onClick={() => {
            router.push("/")
          }} src={colorMode == "dark" ? darklogo : lightlogo} alt="" width="100px" height="100px" />
        </Box>


        <Box display={{ sm: "none", md: "none", lg: "block" }}>

          <UnorderedList display={"flex"} alignItems="center" justifyContent={"space-around"} minWidth="20rem" listStyleType="none">

            {/* <ListItem mx="1rem">
              <Link href= { appData.metaaddress || appData.tronaddress ? "/convert" :"/">
                <Text className={router.pathname=="/" ? "link_active":""} my="1rem" cursor={"pointer"} onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                  Home
                </Text>
              </Link>
            </ListItem> */}

            <ListItem mx="1rem">
              <Link href="/convert" >
                <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                  Convert
                </Text>
              </Link>
            </ListItem>

            <ListItem mx="1rem">
              <Link href="/basictrading" >
                <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                  Basic Trading
                </Text>
              </Link>
            </ListItem>

            <ListItem mx="1rem">
              <Link href="/market">
                <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                  Market
                </Text>
              </Link>
            </ListItem>

            <ListItem mx="1rem">
              <Link href="/margintrading">
                <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                  Margin Trading
                </Text>
              </Link>
            </ListItem>

            <ListItem mx="1rem">
              <Link href="/myaccount" >
                <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                  My Account
                </Text>
              </Link>
            </ListItem>

            <ListItem ml="1.1rem" w="10rem">
              {(appData.data && appData.isConnected || newAddress) ?
                <>
                  <Menu >
                    <MenuButton as={Button} maxW="100%" border="2px solid gray" rightIcon={<MdKeyboardArrowDown />}>
                      <Text overflow={"hidden"} whiteSpace="nowrap" textOverflow={"ellipsis"}>{appData.data ??newAddress}</Text>
                    </MenuButton>
                    <MenuList width={"8rem"}>
                      <MenuItem fontFamily={"satoshi"} onClick={() => {
                  localStorage.removeItem("address")
                  window.location.reload()
                      }} >
                        Disconnect
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </> : appData.trondata  || newTronAddress?
                  <> <Menu >
                    <MenuButton as={Button} maxW="8rem" rightIcon={<MdKeyboardArrowDown />}>
                      <Text overflow={"hidden"} whiteSpace="nowrap" textOverflow={"ellipsis"}>{appData.trondata ?? newTronAddress}</Text>
                    </MenuButton>
                    <MenuList>
                      <MenuItem fontFamily={"satoshi"} onClick={() => {
                  localStorage.removeItem("tron")
                  window.location.reload()
                      }} >
                        Disconnect
                      </MenuItem>
                    </MenuList>
                  </Menu> </>

                  : <ConnectOptModal />}
            </ListItem>
            <ListItem mx="1rem">
              <Button variant={"outline"} width={"100%"} onClick={toggleColorMode} > {colorMode == "dark" ? <BsMoonFill size={25} /> : <BsSunFill size={25} />} <Text ml="1rem">{colorMode == "light" ? "light" : "dark"} mode</Text></Button>
            </ListItem>
          </UnorderedList>
        </Box>


        <Box display={{ sm: "block", lg: "none" }}>
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
                {/* <ListItem my="0.5rem">
              <Link href="/">
                <Button variant={"outline"} w="100%"  className={router.pathname=="/" ? "sidebar_link_active ":""} fontSize="2xl" my="0.5rem" cursor={"pointer"} onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                  Home
                </Button>
              </Link>
            </ListItem> */}

                <ListItem mx="1rem">
                  <Link href={appData.metaaddress || appData.tronaddress ? "/convert" : "/"}>
                    <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                      Convert
                    </Text>
                  </Link>
                </ListItem>
                <ListItem mx="1rem">
                  <Link href={appData.metaaddress || appData.tronaddress ? "/basictrading" : "/"}  >
                    <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                      Basic Trading
                    </Text>
                  </Link>
                </ListItem>
                <ListItem mx="1rem">
                  <Link href={appData.metaaddress || appData.tronaddress ? "/market" : "/"}>
                    <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                      Market
                    </Text>
                  </Link>
                </ListItem>
                <ListItem mx="1rem">
                  <Link href={appData.metaaddress || appData.tronaddress ? "/margintrading" : "/"}>
                    <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                      Margin Trading
                    </Text>
                  </Link>
                </ListItem>
                <ListItem mx="1rem">
                  <Link href={appData.metaaddress || appData.tronaddress ? "/myaccount" : "/"} >
                    <Text cursor={"pointer"} my="1rem" onClick={onClose} fontFamily="satoshi" fontWeight={"bold"}>
                      My Account
                    </Text>
                  </Link>
                </ListItem>

                <ListItem my="0.5rem">
                  {appData.metaaddress ?
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
                                  <Button fontFamily={"basement"} onClick={
                                    openConnectModal
                                  } type="button" mr="0.3rem" w="100%" height={"3rem"} fontSize="xl">
                                    ETHEREUM
                                  </Button>
                                );
                              }
                              return (

                                <Box borderRadius={"5px"} p="0.5rem" display={"flex"} justifyContent="center" alignItems="baseline" backgroundColor={"gray.600"} height="3rem" border="1px solid #114D80"  >

                                  <Text ml="8px" fontFamily="satoshi" fontSize={"md"} mr={"3"} fontWeight="bold">{account.displayBalance
                                    ? `${account.displayBalance}`
                                    : ''}</Text>

                                  <Button size={"xs"} color={colorMode == "dark" ? "#FFFFF" : "#171717"} fontFamily="Poppins" fontSize={"xl"} onClick={openAccountModal} mt="3px" mr="2px" type="button" >
                                    {account.displayName}

                                  </Button>
                                </Box>
                              );
                            })()}
                          </div>
                        );
                      }}
                    </ConnectButton.Custom> : appData.tronaddress ? <Menu >
                      <MenuButton as={Button} maxW="100%" rightIcon={<MdKeyboardArrowDown />}>
                        <Text overflow={"hidden"} whiteSpace="nowrap" textOverflow={"ellipsis"}>{appData.tronaddress}</Text>
                      </MenuButton>
                      <MenuList width={"8rem"}>
                        <MenuItem fontFamily={"satoshi"} onClick={() => {
                          localStorage.clear();
                        }} >
                          Disconnect
                        </MenuItem>
                      </MenuList>
                    </Menu> : <ConnectOptModal />}
                </ListItem>
                <ListItem my="0.5rem">
                  <Button variant={"outline"} width={"100%"} onClick={toggleColorMode} > {colorMode == "dark" ? <BsMoonFill size={25} /> : <BsSunFill size={25} />} <Text ml="1rem">{colorMode == "light" ? "light" : "dark"} mode</Text></Button>
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