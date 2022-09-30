import {
Box,Text,Flex
} from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import BorrowTable from '../components/BorrowTable'
import Collateral_Asset from '../components/Collateral_Asset'
function newapp() {
  return (
    <>
     <Navbar/>
    
     <Flex flexDirection={{sm:'column',md:"row"}} my="1rem" justifyContent="space-between">
      <Box height="15rem" p="0.8rem"  width={{sm:"100%",md:"59.5%"}} bg="#171717" borderRadius={"10px"}>
    
      </Box>
      <Box mt={{sm:"1rem",md:"0"}} height="15rem" p="1rem"  width={{sm:"100%",md:"39.5%"}} bg="#171717" borderRadius={"10px"}>
  <Flex alignItems={"center"} justifyContent="space-between">
    <Text>Interes Rate</Text>
    <Text>0.5%</Text>
  </Flex>
      </Box>
     </Flex>


     <Flex flexDirection={{sm:'column',md:"row"}} justifyContent="space-between">
      <Box px="0.5rem"  mb={{sm:"1rem",md:"0"}} width={{sm:"100%",md:"59.5%"}} bg="#171717" borderRadius={"10px"}>
          <BorrowTable/>
      </Box>
      <Box px="0.5rem"  width={{sm:"100%",md:"39.5%"}} bg="#171717" borderRadius={"10px"}>
    <Collateral_Asset/>
      </Box>
     </Flex>
   
 
    </>
  )
}

export default newapp 