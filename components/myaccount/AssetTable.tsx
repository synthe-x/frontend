    import React from 'react'
    const  Big= require('big-js');
    import {
      Table,
      Thead,
      Tbody,
      Tfoot,
      Tr,
      Th,
      Td,
      Progress, Button, useDisclosure,Image,
      TableContainer, Box, Text, Flex,useColorMode,
    } from '@chakra-ui/react'
import {CgArrowsExchange} from 'react-icons/cg';
    const FundingAssetTable = ({data}) => { 
      const { colorMode } = useColorMode();
      const { isOpen, onOpen, onClose } = useDisclosure()
      return (
        <div>
          <Table variant='simple' mt="1rem">
            <Thead>
              <Tr  bg={colorMode == "dark" ?"#171717" : "#ededed"}>
                <Th color={colorMode == "dark" ?"#FFFFF" : "#171717"} fontSize={"xs"} fontFamily="satoshi"  className='fund_asset_table_Head'>Asset</Th>
                <Th color={colorMode == "dark" ?"#FFFFF" : "#171717"} fontSize={"xs"} fontFamily="satoshi" className='fund_asset_table_Head'>Balance</Th>
                <Th color={colorMode == "dark" ?"#FFFFF" : "#171717"} fontSize={"xs"} fontFamily="satoshi"  className='fund_asset_table_Head'>Share of Total</Th>
                <Th color={colorMode == "dark" ?"#FFFFF" : "#171717"} fontSize={"xs"} fontFamily="satoshi"  className='fund_asset_table_Head'></Th>
              </Tr>
            </Thead>
            <Tbody>
      {data ? data.map((asset)=>{
        let decimals = asset.decimal
  let balance=( Big(asset.balance).div(Big(10).pow( parseInt(decimals)))).toFixed(2)
  console.log("balance",balance);
              const x=90
        return(
          <>
           <Tr>
<Td  className='fund_asset_table_data'> 
<Flex alignItems={"center"}>
<Image src="https://raw.githubusercontent.com/Chainscore/assets/main/BTC.png" alt='img' w="2rem" mr="0.2rem" />
<Text ml="0.3rem" fontFamily="basement"  fontSize={"lg"}>{asset.name}</Text> 
</Flex> 

</Td>
<Td>
<Text fontFamily="satoshi"  fontSize={"lg"}>{balance}</Text>
{/* <Text fontFamily="satoshi"color="gray"  fontSize={"xs"}>{asset.balance}</Text> */}
</Td>

<Td className='fund_asset_table_data' fontSize={"xs"}> 
<Text fontSize={"lg"}>{x}</Text>
<Progress colorScheme='whatsapp' maxWidth={"5rem"} size='sm' value={x} />
</Td>

<Td className='fund_asset_table_data'>
    <CgArrowsExchange size={40}/>
</Td>

          </Tr>
          </>
        )
      }) :""}
         
          
         
  
            </Tbody>
          </Table>
        </div>
      )
    }
    
    export default FundingAssetTable