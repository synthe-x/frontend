
    import React from 'react'
    import {
      Table,
      Thead,
      Tbody,
      Tfoot,
      Tr,
      Th,
      Td,
      TableCaption, Button, useDisclosure,
      TableContainer, Box, Text, Flex,useColorMode,Image
    } from '@chakra-ui/react'

   
    import BTC from '../../public/bitCoin.png'
    const CriptoInfoTable = () => {
      const { colorMode } = useColorMode();
      const { isOpen, onOpen, onClose } = useDisclosure()
      // const tknholdingImg = {
      //   width: "30px",
      //   marginLeft: "1rem",
      //   marginRight: "0.5rem",
      //   borderRadius: "100px"
      // }
      return (
        <div>
          <Table   variant='simple' style={{ borderCollapse: "separate", borderSpacing: "0 15px" }}>
            <Thead>
              <Tr  bg={colorMode == "dark" ?"#171717" : "#ededed"}>
                <Th color={colorMode == "dark" ?"#FFFFF" : "#171717"} fontSize={"xs"} fontFamily="satoshi" id='cripto_info_table_HeadingLeftBorderRadius' className='cripto_info_table_Head'>Assets</Th>
   
                <Th color={colorMode == "dark" ?"#FFFFF" : "#171717"} fontSize={"xs"} fontFamily="satoshi" id='cripto_info_table_HeadingRightBorderRadius' className='cripto_info_table_Head'>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
            <Tr >
                <Td  id='cripto_info_table_dataLeftBorderRadius' className='cripto_info_table_data'>
                        <Box display={"flex"} alignItems="center" justifyContent={"flex-start"}>
                        <Image src="https://raw.githubusercontent.com/Chainscore/assets/main/BTC.png" alt='img' w="2rem" mr="0.2rem" />
                            <Text fontFamily={"basement"}>BTC/USD</Text>
                        </Box>
                </Td>
                <Td className='cripto_info_table_data'>
                <Box>
                            <Text fontFamily={"satoshi"}>$20,352.8</Text>
                            <Text fontFamily={"satoshi"} color="gray" fontSize={"xs"}>$512,535,245.07</Text>
                        </Box>
                </Td>

            </Tr>
            <Tr >
                <Td  id='cripto_info_table_dataLeftBorderRadius' className='cripto_info_table_data'>
                        <Box display={"flex"} alignItems="center" justifyContent={"flex-start"}>
                        <Image src={BTC} alt='img' />
                            <Text fontFamily={"basement"}>BTC/USD</Text>
                        </Box>
                </Td>
                <Td className='cripto_info_table_data'>
                <Box>
                            <Text fontFamily={"satoshi"}>$20,352.8</Text>
                            <Text fontFamily={"satoshi"} color="gray" fontSize={"xs"}>$512,535,245.07</Text>
                        </Box>
                </Td>

            </Tr>
            <Tr >
                <Td  id='cripto_info_table_dataLeftBorderRadius' className='cripto_info_table_data'>
                        <Box display={"flex"} alignItems="center" justifyContent={"flex-start"}>
                        <Image src={BTC} alt='img' />
                            <Text fontFamily={"basement"}>BTC/USD</Text>
                        </Box>
                </Td>
                <Td className='cripto_info_table_data'>
                <Box>
                            <Text fontFamily={"satoshi"}>$20,352.8</Text>
                            <Text fontFamily={"satoshi"} color="gray" fontSize={"xs"}>$512,535,245.07</Text>
                        </Box>
                </Td>

            </Tr>
            <Tr >
                <Td  id='cripto_info_table_dataLeftBorderRadius' className='cripto_info_table_data'>
                        <Box display={"flex"} alignItems="center" justifyContent={"flex-start"}>
                        <Image src={BTC} alt='img' />
                            <Text fontFamily={"basement"}>BTC/USD</Text>
                        </Box>
                </Td>
                <Td className='cripto_info_table_data'>
                <Box>
                            <Text fontFamily={"satoshi"}>$20,352.8</Text>
                            <Text fontFamily={"satoshi"} color="gray" fontSize={"xs"}>$512,535,245.07</Text>
                        </Box>
                </Td>

            </Tr>
            <Tr >
                <Td  id='cripto_info_table_dataLeftBorderRadius' className='cripto_info_table_data'>
                        <Box display={"flex"} alignItems="center" justifyContent={"flex-start"}>
                        <Image src={BTC} alt='img' />
                            <Text fontFamily={"basement"}>BTC/USD</Text>
                        </Box>
                </Td>
                <Td className='cripto_info_table_data'>
                <Box>
                            <Text fontFamily={"satoshi"}>$20,352.8</Text>
                            <Text fontFamily={"satoshi"} color="gray" fontSize={"xs"}>$512,535,245.07</Text>
                        </Box>
                </Td>

            </Tr>
            <Tr >
                <Td  id='cripto_info_table_dataLeftBorderRadius' className='cripto_info_table_data'>
                        <Box display={"flex"} alignItems="center" justifyContent={"flex-start"}>
                        <Image src={BTC} alt='img' />
                            <Text fontFamily={"basement"}>BTC/USD</Text>
                        </Box>
                </Td>
                <Td className='cripto_info_table_data'>
                <Box>
                            <Text fontFamily={"satoshi"}>$20,352.8</Text>
                            <Text fontFamily={"satoshi"} color="gray" fontSize={"xs"}>$512,535,245.07</Text>
                        </Box>
                </Td>

            </Tr>
            <Tr >
                <Td  id='cripto_info_table_dataLeftBorderRadius' className='cripto_info_table_data'>
                        <Box display={"flex"} alignItems="center" justifyContent={"flex-start"}>
                        <Image src={BTC} alt='img' />
                            <Text fontFamily={"basement"}>BTC/USD</Text>
                        </Box>
                </Td>
                <Td className='cripto_info_table_data'>
                <Box>
                            <Text fontFamily={"satoshi"}>$20,352.8</Text>
                            <Text fontFamily={"satoshi"} color="gray" fontSize={"xs"}>$512,535,245.07</Text>
                        </Box>
                </Td>

            </Tr>
    
            </Tbody>
          </Table>
        </div>
      )
    }
    
    export default CriptoInfoTable