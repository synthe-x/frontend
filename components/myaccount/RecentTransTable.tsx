
    import React from 'react'
    import {
      Table,
      Thead,
      Tbody,
      Tfoot,
      Tr,
      Th,
      Td,
      TableCaption, Button, useDisclosure,Image,
      TableContainer, Box, Text, Flex,useColorMode,
    } from '@chakra-ui/react'
import {BiWalletAlt} from 'react-icons/bi';
    const RecentTransTable = ({transactionType,img}) => { 
      const { colorMode } = useColorMode();
      const { isOpen, onOpen, onClose } = useDisclosure()

      return (
        <div>
          <Table variant='simple' >
            {/* <Thead>
              <Tr  bg={colorMode == "dark" ?"#171717" : "#ededed"}>
                <Th color={colorMode == "dark" ?"#FFFFF" : "#171717"} fontSize={"xs"} fontFamily="satoshi"  className='cripto_info_table_Head'>Price(USDT</Th>
                <Th color={colorMode == "dark" ?"#FFFFF" : "#171717"} fontSize={"xs"} fontFamily="satoshi" className='cripto_info_table_Head'>Amount(BTC)</Th>
                <Th color={colorMode == "dark" ?"#FFFFF" : "#171717"} fontSize={"xs"} fontFamily="satoshi"  className='cripto_info_table_Head'>Total(BTC)</Th>
              </Tr>
            </Thead> */}
            <Tbody>
          <Tr>
<Td   className='Recent_trans_table_data'> 
<Flex alignItems={"center"}>
<Image src={img} alt='img' w="3rem" height={"3rem"} color="white"/>
    <Box ml="0.5rem">
        <Text fontFamily={"satoshi"}>{transactionType}</Text>
        <Text color="gray" fontSize={"xs"} fontFamily={"satoshi"}>06/10/2022, 06:52:46</Text>
    </Box>
</Flex>

</Td>
<Td className='Recent_trans_table_data' fontSize={"xs"}> <Text>0.000564533 USD</Text></Td>

          </Tr>
        
         
  
            </Tbody>
          </Table>
        </div>
      )
    }
    
    export default RecentTransTable