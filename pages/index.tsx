import {
  Flex, Text, Box, useColorMode, Button, UnorderedList, ListItem, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, useDisclosure
} from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { FaBars } from 'react-icons/fa';
import React from 'react'
import Image from 'next/image';
import { useRouter } from "next/router";
import Link from "next/link";
import { useAccount } from 'wagmi'
import '../styles/Home.module.css'
// import logo from '../../public/xtrade_logo.svg'
function AppNavBar() {
  const { address, isConnecting, isConnected, isDisconnected } = useAccount()
  const router = useRouter();
  const { toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex justify={"space-between"} p="2" alignItems={"center"}>
        <Flex alignItems={"center"}>
 
        {/* <Image src={logo} alt="" width="100px" height="100px" /> */}
          <Text ml={2} fontWeight="bold" color={"gray.400"}>LOGO</Text>
        </Flex>
        <Box display={{sm:"none",md:"block"}}>
          <UnorderedList display={"flex"} alignItems="center" justifyContent={"space-around"} minWidth="20rem" listStyleType="none">

            <ListItem>
              <Link href="/">
              <Text my="1rem" cursor={"pointer"} onClick={onClose}  fontFamily="Roboto"  fontWeight={"bold"}>
                      MENU
                    </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/"  >
              <Text cursor={"pointer"} my="1rem" onClick={onClose}  fontFamily="Roboto"  fontWeight={"bold"}>
                      MENU
                    </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/">
              <Text cursor={"pointer"} my="1rem" onClick={onClose}  fontFamily="Roboto"   fontWeight={"bold"}>
                      MENU
                    </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href= "/" >
              <Text cursor={"pointer"} my="1rem" onClick={onClose}  fontFamily="Roboto" fontWeight={"bold"}>
                      MENU
                    </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/"  >
              <Text cursor={"pointer"} my="1rem" onClick={onClose}  fontFamily="Roboto" fontWeight={"bold"}>
              MENU
                    </Text>
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>

            <Button display={{sm:"none",md:"block",lg:"block"}} onClick={toggleColorMode} >🌥</Button>
         <Box display={{sm:"block",md:"none",lg:"none"}}>
            <FaBars size={40} onClick={onOpen} />
         </Box>
        
       
      </Flex>
   <Drawer  placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>
            <Flex alignItems={"center"}>
            <Text ml={2} fontWeight="bold" color={"gray.400"}>LOGO</Text>
            </Flex>
          <Button mt="1rem" minWidth={"100%"} onClick={toggleColorMode} mr={5}>🌥</Button>
           <Box  mt="1rem" minWidth={"100%"}>       
      </Box>
          </DrawerHeader>
          <DrawerBody>

            <nav >
              <UnorderedList display={"flex"} flexDirection="column" alignItems="center" justifyContent={"center"} listStyleType="none">
                <ListItem>
                  <Link href="/">
                    <Text cursor={"pointer"} my="1rem" onClick={onClose}  fontFamily="Roboto" fontSize={"2xl"}  fontWeight={"bold"}>
                    MENU
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href= "/issue"   >
                    <Text cursor={"pointer"} onClick={onClose} my="1rem" fontFamily="Roboto" fontSize={"2xl"}  fontWeight={"bold"}>
                    MENU
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href= "/burn">
                    <Text cursor={"pointer"} onClick={onClose} my="1rem"  fontFamily="Roboto"fontSize={"2xl"}  fontWeight={"bold"}>
                    MENU
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/trade" >
                    <Text cursor={"pointer"} onClick={onClose} my="1rem" fontFamily="Roboto" fontSize={"2xl"}  fontWeight={"bold"}>
                    MENU
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href= "/borrow"  >
                    <Text cursor={"pointer"} onClick={onClose} my="1rem" fontFamily="Roboto" fontSize={"2xl"}  fontWeight={"bold"}>
                    MENU
                    </Text>
                  </Link>
                </ListItem>
              </UnorderedList>
            </nav>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
<Box width={"100%"} >
      <Box maxWidth={"400px"} mx={{sm:"auto",md:"0"}} mt="10rem">
      <Text textAlign={{sm:"center",md:"left"}}  fontSize={{sm:"4xl",md:"6xl"}} fontWeight="bold" fontFamily="Poppins">LOREM</Text>
      <Text textAlign={{sm:"center",md:"left"}} mt={{sm:"-0.5rem",md:"-1rem"}} fontSize={{sm:"2xl",md:"3xl"}}>lorem ipsum lorem ipsum</Text>
      <Text textAlign={{sm:"center",md:"left"}}  color="gray.400"  fontSize='xs'>Lorem Ipsum is simply dummy text of the printing and typesetting indutype and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</Text>

 <Box display="flex" alignItems="center" justifyContent={{sm:"center",md:"flex-start"}}>
 <Link href="/newapp"  >
     <Button  size="lg"  backgroundImage={" linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,77,128,1) )"} className="walletBtn" mt="1rem" type="submit">Get Started</Button>
   </Link>
     </Box>
 </Box>

     

   </Box> 
   </>
  )
}

export default AppNavBar