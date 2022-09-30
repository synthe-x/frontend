import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,Button,
    TableContainer,Box,Text,Flex,useDisclosure
  } from '@chakra-ui/react'
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import { BsPlusCircle } from 'react-icons/bs';
  import { FiMinusCircle } from 'react-icons/fi';
const BorrowTable = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const tknholdingImg = {
        width: "30px",
        marginLeft: "1rem",
        marginRight: "0.5rem",
        borderRadius: "100px"
      }
  return (
    <>
    <TableContainer>
                <Table variant='simple' style={{ borderCollapse: "separate", borderSpacing: "0 15px" }}>
                    <Thead>
                        <Tr>
                            <Th fontSize={"lg"} fontFamily="Poppins" id='borrow_table_HeadingLeftBorderRadius' className='borrow_table_Head'>Assets</Th>
                            <Th fontSize={"lg"} fontFamily="Poppins" className='borrow_table_Head'>APY</Th>
                            <Th fontSize={"lg"} fontFamily="Poppins" className='borrow_table_Head'>Debt Balance</Th>
                            <Th fontSize={"lg"} fontFamily="Poppins" className='borrow_table_Head'>Liquidity</Th>
                            <Th fontSize={"lg"} fontFamily="Poppins" id='borrow_table_HeadingRightBorderRadius' className='borrow_table_Head'></Th>
                        </Tr>
                    </Thead>
                  <Tbody>
                      <Tr>
                          <Td id='borrow_table_dataLeftBorderRadius' className='borrow_table_data'>
                              <Box display="flex" alignItems="center" cursor="pointer"  >
                                  <img src="" style={tknholdingImg} alt="..." />
                                  <Box>
                                      <Text fontSize='12px' fontWeight="bold" textAlign={"left"}>DAI</Text>
                                  </Box>
                              </Box>
                          </Td>
                          <Td className='borrow_table_data'>2.94%</Td>
                          <Td className='borrow_table_data'>10 DAI</Td>
                          <Td className='borrow_table_data'>$420.00M</Td>
                          <Td id='borrow_table_datarightBorderRadius' className='borrow_table_data'>
                              <Flex alignItems={"center"}>
                                  <Button variant='ghost' onClick={onOpen}><BsPlusCircle size={30} /></Button>
                                  <Modal  isCentered isOpen={isOpen} onClose={onClose}>
                                      <ModalOverlay />
                                      <ModalContent width={"30rem"} height="30rem">                                   
                                         <ModalCloseButton />
                                          <ModalBody> 
                                            HHHHGHHGH                                           
                                          </ModalBody>
                                      </ModalContent>
                                  </Modal>
                                  <Box>
                                      <FiMinusCircle size={33} />
                              </Box>
                              </Flex>
                         </Td>


                      </Tr>

                  </Tbody>
                </Table>
            </TableContainer>
           
            </>
  ) 
}

export default BorrowTable