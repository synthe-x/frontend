import React,{useState,useContext} from 'react';
import {
	Button,
	Box,
	Text,
	Flex,
	useDisclosure,
    Input,
    IconButton,
	InputRightElement,
	InputGroup,Spinner,Link,useColorMode
} from '@chakra-ui/react';
import tronWeb from 'tronweb';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { appContext } from '../../pages/app'
import ETHER from '../../public/ether.svg'
import TRON from '../../public/tron.svg'
import Image from 'next/image';
const ConnectOptModal = () => {
  const[Taddress, setTaddress]= useState("")
  const { address, isConnecting, isConnected, isDisconnected } = useAccount();
  const AppData = useContext(appContext)
    const { colorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();


    function TronConnect(){
		  if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
			setTaddress(window.tronWeb.defaultAddress.base58)
			
		}
}
	
    const handleTronConnect = () => {
      TronConnect();
    }
    if(Taddress){
      AppData.fetch(Taddress);
     }
    if(isConnected){
      AppData.fetch(address);
     }
    return (
        <Box>
            <Button variant="outline" width={"100%"} fontFamily={"basement"} onClick={onOpen}  aria-label={''} >Connect 
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}  >
                <ModalOverlay />
                <ModalContent width={'30rem'} height="16rem"  bg="#111111" >
                    <ModalCloseButton />
                    <ModalHeader fontFamily={"Satoshi"}>Connect with</ModalHeader>
                    <ModalBody>
                   
                   <Flex alignItems={"center"} justifyContent="space-around">
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
                                <Box w="8rem" onClick={openConnectModal} h="8rem" bg="#1E1E1E" borderRadius={"8px"} cursor="pointer">
                                <Image src={ETHER} alt="" className='ether_for_connect' />
                                </Box>
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
                 
                    <Box cursor="pointer"  onClick={handleTronConnect} w="8rem" h="8rem"  bg="#FF060A" borderRadius={"8px"}>
                    <Image  src={TRON} alt="" className='tron_for_connect' />
                    </Box>
                   </Flex>
                   
                   
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};


export default ConnectOptModal;
