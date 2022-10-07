import {
  Flex, Text, Box, useColorMode, Button, UnorderedList, ListItem,
} from '@chakra-ui/react'

import { ConnectButton } from '@rainbow-me/rainbowkit'
//   import { FaBars } from 'react-icons/fa';
import React, { useState, } from 'react'
import { useAccount } from 'wagmi'
function MetamaskConnect() {
  const { toggleColorMode } = useColorMode();
  const { colorMode } = useColorMode();
  return (
    <>


      <Box my="auto" height="auto" mx="auto" backgroundColor={colorMode == "light" ?  "gray.100" : "#242b3a"}  borderRadius="10px">
        <Box py="5rem"  px="1rem">
          <Text fontSize={"2xl"} fontFamily={"Satoshi"}  fontWeight="bolder" textAlign={"center"} color={"red"}> You are not Connected to Wallet !!! </Text>
         
          {/* <Box>
              
  
              
                    <Box textAlign={"center"} fontSize="xl" fontFamily={"Satoshi"}>Connect with</Box>
                    <Flex justifyContent={"center"} mt="1rem" alignItems="stretch" flexDirection={{sm:"column",md:"row"}}>
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
                  </ConnectButton.Custom>
<Text textAlign={"center"} fontSize={"2xl"} color="#B7C1C9"  mx="1rem" fontFamily={"Satoshi"}>OR</Text>
<Button  height={"3rem"} fontSize="xl" fontFamily={"basement"} w={{sm:"100%",md:"10rem"}} onClick={TronConnect}>TRON</Button>
                    </Flex>
                    <Box>
                </Box>
            </Box> */}
        </Box>
      </Box>


    </>
  )
}

export default MetamaskConnect 