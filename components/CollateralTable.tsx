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
  TableContainer, Box, Text, Flex,useColorMode
} from '@chakra-ui/react'

import DepositModal from './modals/DepositModal';
import WithdrawModal from './modals/WithdrawModal';

import { FiMinusCircle } from 'react-icons/fi';
import Image from 'next/image';


const CollateralTable = ({collaterals, cRatio}) => {
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
      <Table variant='simple' style={{ borderCollapse: "separate", borderSpacing: "0 15px" }}>
        <Thead>
          <Tr  bg={colorMode == "dark" ?"#171717" : "#ededed"}>
            <Th color={colorMode == "dark" ?"#FFFFF" : "#171717"} fontSize={"xs"} fontFamily="Poppins" id='borrow_table_HeadingLeftBorderRadius' className='borrow_table_Head'>Collateral Assets</Th>
            <Th color={colorMode == "dark" ?"#FFFFF" : "#171717"} fontSize={"xs"} fontFamily="Poppins" className='borrow_table_Head'>Protocol Balance</Th>
            <Th color={colorMode == "dark" ?"#FFFFF" : "#171717"} fontSize={"xs"} fontFamily="Poppins" id='borrow_table_HeadingRightBorderRadius' className='borrow_table_Head'></Th>
          </Tr>
        </Thead>
        <Tbody>
          {collaterals.map((collateral) => {
          return <Tr key={collateral['asset']['id']}  bg={colorMode == "dark" ?"#171717" : "#ededed"}>
            <Td id='borrow_table_dataLeftBorderRadius' className='borrow_table_data'>
              <Box display="flex" alignItems="center" cursor="pointer"  >
                {/* <Image src="" 
                // width={35} height={35} 
                style={tknholdingImg} alt="logo" /> */}
                <Box ml={2}>
                  <Text color={colorMode == "dark" ?"#FFFFF" : "#171717"} fontSize='sm' fontWeight="bold" textAlign={"left"}>{collateral['asset']['name']}</Text>
                  <Text color={colorMode == "dark" ?"#FFFFF" : "#171717"} fontSize='xs' fontWeight="light" textAlign={"left"}>{collateral['asset']['symbol']}</Text>

                </Box>
              </Box>
            </Td>
            <Td className='borrow_table_data'>
              
              <Box>
                  <Text fontSize='sm' fontWeight="bold" textAlign={"left"}>{(collateral['amount']/10**collateral['asset']['decimals']).toFixed(3)} {collateral['asset']['symbol']}</Text>
                  {/* <Text fontSize='xs' fontWeight="light" textAlign={"left"}>{(collateral['walletBalance']/10**collateral['asset']['decimals']).toFixed(4)} {collateral['asset']['symbol']}</Text> */}
                </Box>
              </Td>

            <Td id='borrow_table_datarightBorderRadius' className='borrow_table_data'>
              <Flex alignItems={"center"}>
                <DepositModal asset={collateral['asset']} balance={(collateral['walletBalance']/10**collateral['asset']['decimals'])} />
                <WithdrawModal asset={collateral['asset']} balance={(collateral['amount']/10**collateral['asset']['decimals'])} />
              </Flex></Td>
          </Tr>
          })
          }

        </Tbody>
      </Table>
    </div>
  )
}

export default CollateralTable