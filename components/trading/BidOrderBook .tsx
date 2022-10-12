
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

   
    const OrderBook = () => { 
      const { colorMode } = useColorMode();
      const { isOpen, onOpen, onClose } = useDisclosure()

      return (
        <div>
          <Table variant='simple' >
            <Thead>
              <Tr  bg={colorMode == "dark" ?"#171717" : "#ededed"}>
                <Th color={colorMode == "dark" ?"#FFFFF" : "#171717"} fontSize={"xs"} fontFamily="satoshi"  className='cripto_info_table_Head'>Price(USDT</Th>
                <Th color={colorMode == "dark" ?"#FFFFF" : "#171717"} fontSize={"xs"} fontFamily="satoshi" className='cripto_info_table_Head'>Amount(BTC)</Th>
                <Th color={colorMode == "dark" ?"#FFFFF" : "#171717"} fontSize={"xs"} fontFamily="satoshi"  className='cripto_info_table_Head'>Total(BTC)</Th>
              </Tr>
            </Thead>
            <Tbody>
          <Tr bg={ colorMode=="dark"?"#171717":"#ffffff" }>
<Td bg={ colorMode=="dark"?"#171717":"#ffffff" }   className='cripto_info_table_data'> <Text color={"green"}>20,352.8</Text></Td>
<Td bg={ colorMode=="dark"?"#171717":"#ffffff" } className='cripto_info_table_data'> <Text>0.033</Text></Td>
<Td bg={ colorMode=="dark"?"#171717":"#ffffff" } className='cripto_info_table_data'> <Text>4.490</Text></Td>
          </Tr>
          <Tr>
<Td bg={ colorMode=="dark"?"#171717":"#ffffff" }   className='cripto_info_table_data'> <Text color={"green"}>20,352.8</Text></Td>
<Td bg={ colorMode=="dark"?"#171717":"#ffffff" } className='cripto_info_table_data'> <Text>0.033</Text></Td>
<Td bg={ colorMode=="dark"?"#171717":"#ffffff" } className='cripto_info_table_data'> <Text>4.490</Text></Td>
          </Tr>
          <Tr>
<Td bg={ colorMode=="dark"?"#171717":"#ffffff" }   className='cripto_info_table_data'> <Text color={"green"}>20,352.8</Text></Td>
<Td bg={ colorMode=="dark"?"#171717":"#ffffff" } className='cripto_info_table_data'> <Text>0.033</Text></Td>
<Td bg={ colorMode=="dark"?"#171717":"#ffffff" } className='cripto_info_table_data'> <Text>4.490</Text></Td>
          </Tr>
          <Tr>
<Td bg={ colorMode=="dark"?"#171717":"#ffffff" }   className='cripto_info_table_data'> <Text color={"green"}>20,352.8</Text></Td>
<Td bg={ colorMode=="dark"?"#171717":"#ffffff" } className='cripto_info_table_data'> <Text>0.033</Text></Td>
<Td bg={ colorMode=="dark"?"#171717":"#ffffff" } className='cripto_info_table_data'> <Text>4.490</Text></Td>
          </Tr>
          <Tr>
<Td bg={ colorMode=="dark"?"#171717":"#ffffff" }   className='cripto_info_table_data'> <Text color={"green"}>20,352.8</Text></Td>
<Td bg={ colorMode=="dark"?"#171717":"#ffffff" } className='cripto_info_table_data'> <Text>0.033</Text></Td>
<Td bg={ colorMode=="dark"?"#171717":"#ffffff" } className='cripto_info_table_data'> <Text>4.490</Text></Td>
          </Tr>
        
          
    
            </Tbody>
          </Table>
        </div>
      )
    }
    
    export default OrderBook