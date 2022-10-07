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
      TronConnect()
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
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent width={'30rem'} height="15rem">
                    <ModalCloseButton />
                    <ModalHeader fontFamily={"Satoshi"}>Connect with</ModalHeader>
                    <ModalBody>
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
                                <Button fontFamily={"basement"} onClick={()=>{
                           openConnectModal()  ;
                          
                                } }
                                 type="button" mr="0.3rem" w="100%" height={"3rem"} fontSize="xl">
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
<Text textAlign={"center"} fontSize={"2xl"} color="#B7C1C9"  fontFamily={"Satoshi"}>OR</Text>
<Button onClick={handleTronConnect} w="100%" height={"3rem"} fontSize="xl" fontFamily={"basement"}>TRON</Button>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};


export default ConnectOptModal;
