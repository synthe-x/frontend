import React,{useState,useContext,useEffect} from 'react'
import {
  Flex, Text,Image, Box, useColorMode, Button, ButtonGroup, Select, InputLeftElement, Input, Tabs, TabList, TabPanels, Tab, TabPanel,
  useDisclosure, InputGroup, Container, Divider
} from '@chakra-ui/react'
import RecentTransTable from './RecentTransTable'
import AssetTable from './AssetTable'
import SynthassetTable from './SynthassetTable'
import { BiSearch } from 'react-icons/bi';
import { appContext } from '../../pages/app'
import MetamaskConnect from '../../components/MetamaskConnect';
import { useAccount } from 'wagmi';
const axios = require('axios').default;
const MyAccountLanding = () => {
  const [collateralsasset, setcollateralsasset] = useState({})
  const [synthsasset, setsynthsasset] = useState({})
  const [newAddress, setnewAddress] = useState("")
  const [newTronAddress, setnewTronAddress] = useState("")
  const { address} = useAccount();
  const { colorMode } = useColorMode();
  const AppData = useContext(appContext)
const [collectralsearch, setcollectralsearch] = useState('')
const [synthsearch, setsynthsearch] = useState('')

useEffect(() => {
  axios.get('http://localhost:3031/user/TAHfCaWwkxbrg2fNeTmqDhZ3xumExNi9qg/collateral')
    .then((resp) => {
      console.log(resp.data.data)
      setcollateralsasset(resp.data.data)
    })
    .catch((err) => {
      console.log(err)
    })


  axios.get('http://localhost:3031/user/TAHfCaWwkxbrg2fNeTmqDhZ3xumExNi9qg/debt/0')
    .then((resp) => {
      console.log(resp.data.data)
      setsynthsasset(resp.data.data)
    })
    .catch((err) => {
      console.log(err)
    })

}, [])

console.log("asset",synthsasset)
const handleSearch = (event) => {
  setcollectralsearch(event.target.value);
};
const synthhandleSearch = (event) => {
  setsynthsearch(event.target.value);
};

const data = Object.values(collateralsasset).filter((item) =>
    item.name.toLowerCase().includes(collectralsearch.toLowerCase())
  )
const synthsdata = Object.values(synthsasset).filter((item) =>
    item.name.toLowerCase().includes(synthsearch.toLowerCase())
  )
  useEffect(() => {
    let data;
    let trondata
      if (typeof window !== 'undefined') {
        data = window.localStorage.getItem('address');
        trondata = window.localStorage.getItem('tron');
        setnewAddress(data)
        setnewTronAddress(trondata)
      } 
  }, [newAddress,newTronAddress])

return (
    <>
 {AppData.address || newAddress || newTronAddress || AppData.trondata?
     <Tabs variant='unstyled'  width="100%" mr="0.8rem">
  <TabList>
    <Tab  _selected={{ border:"2px solid white",borderRadius:"10px"}} fontFamily={"satoshi"}>Overview</Tab>
    <Tab _selected={{ border:"2px solid white",borderRadius:"10px"}} fontFamily={"satoshi"}>Funding</Tab>
    <Tab _selected={{ border:"2px solid white",borderRadius:"10px"}} fontFamily={"satoshi"}>Trading</Tab>
  </TabList>
  <TabPanels>
    <TabPanel px="0">
    <Container display={"flex"} flexDirection={{sm:"column",lg:"row"}} minWidth="100%" justifyContent={"space-between"} px="0">

    <Box  bg={ colorMode=="dark"?"#171717":"#ffffff" } p="0.9rem" width={"100%"} mr="1rem">
        <Flex alignItems={"center"} flexDirection={{sm:'column',md:"row"}} py={{sm:"1rem",md:""}} justifyContent="space-between" height={{sm:"10rem",md:"8rem"}}    bg={ colorMode=="dark"?"#252525":"#c9c9c9" }  px="1rem" borderRadius={"20px"} mb="1rem">
          <Box  mr="0.5rem">
            <Text fontFamily={"satoshi"}>Total Balance</Text>
            <Box display={"flex"} alignItems="center" >
              <Text fontSize={"3xl"} fontFamily={"basement"} mr="0.5rem">$13,959,45</Text>
              <Select placeholder='Select option' size='xs' w="5rem" mb="0.5rem">
                <option value='option1' selected>USD</option>
                <option value='option2'>USD</option>
                <option value='option3'>USD</option>
              </Select>
            </Box>

          </Box>
          <ButtonGroup>
            <Button size='sm'  bg={"green"} color="white">Deposit</Button>
            <Button  size='sm' bg='#171717' color="white">Convert</Button>
            <Button  size='sm' bg='#171717' color="white">Withdraw</Button>
            <Button  size='sm' bg='#171717' color="white">Transfer</Button>
          </ButtonGroup>
        </Flex>
       
        <Box  overflow="auto">  
        <Box maxWidth={"20rem"}>  <InputGroup>
          <InputLeftElement
            pointerEvents='none'
       
           
            children={<BiSearch color='gray.300' />}
          />
          <Input type='text' value={collectralsearch}  placeholder='search'  onChange={handleSearch}/>
        </InputGroup>
        </Box>      
      {data.length >0 ?<AssetTable data={data}/>:""}  
       

        {/* <RecentTransTable transactionType="Funding" img="https://raw.githubusercontent.com/Chainscore/assets/main/WALLET.png" /> */}
        </Box>
      </Box> 
      <Box  bg={ colorMode=="dark"?"#171717":"#ffffff" } w={{sm:"100%",lg:"40rem"}} p="0.5rem" mt={{sm:"1rem",lg:"0"}} overflow="auto">  
      <Text pl="1rem" fontSize={"3xl"} fontWeight="bold" fontFamily={"basement"}>Asset</Text>
      
      <Flex flexDirection={{lg:"column",md:"row",sm:"column"}} justifyContent={{md:"space-between",lg:""}}>
           <Box  mb="0.5rem" mt="1rem"  overflow={{sm:"auto",lg:"hidden"}} borderRight={{sm:"",md:"1px solid gray",lg:"0"}}  borderBottom={{sm:"1px solid gray",lg:"1px solid gray",md:"0"}}>
        <Text pl="1rem" fontSize={"xl"} fontWeight="600" fontFamily={"satoshi"}>Funding Account</Text>
                  {/* funding deta repeted */}
        <Flex  alignItems={"center"} justifyContent="space-between" px="1rem" my="1rem">
                  <Box display={"flex"} alignItems="center"><Image src="https://raw.githubusercontent.com/Chainscore/assets/main/BTC.png" alt='img' w="2rem" mr="0.2rem" />
                    <Text ml="0.3rem" fontFamily="basement" fontSize={"lg"}>BTC</Text> </Box>
                  <Box>
                    <Text fontFamily="satoshi" fontSize={"lg"}>$2,5551.644</Text>
                    <Text fontFamily="satoshi" color="gray" fontSize={"xs"}>$9,435.04</Text>
                  </Box>

                </Flex>
        <Flex  alignItems={"center"} justifyContent="space-between" px="1rem" my="1rem">
                  <Box display={"flex"} alignItems="center"><Image src="https://raw.githubusercontent.com/Chainscore/assets/main/BTC.png" alt='img' w="2rem" mr="0.2rem" />
                    <Text ml="0.3rem" fontFamily="basement" fontSize={"lg"}>BTC</Text> </Box>
                  <Box>
                    <Text fontFamily="satoshi" fontSize={"lg"}>$2,5551.644</Text>
                    <Text fontFamily="satoshi" color="gray" fontSize={"xs"}>$9,435.04</Text>
                  </Box>

                </Flex>
        <Flex alignItems={"center"} justifyContent="space-between" px="1rem" my="1rem">
                  <Box display={"flex"} alignItems="center"><Image src="https://raw.githubusercontent.com/Chainscore/assets/main/BTC.png" alt='img' w="2rem" mr="0.2rem" />
                    <Text ml="0.3rem" fontFamily="basement" fontSize={"lg"}>BTC</Text> </Box>
                  <Box>
                    <Text fontFamily="satoshi" fontSize={"lg"}>$2,5551.644</Text>
                    <Text fontFamily="satoshi" color="gray" fontSize={"xs"}>$9,435.04</Text>
                  </Box>

                </Flex>
              </Box>
             
              <Box  mb="0.5rem" mt="1rem" overflow={{sm:"auto",lg:"hidden"}}  borderRight={{sm:"",md:"1px solid gray",lg:"0"}} borderBottom={{sm:"1px solid gray",lg:"1px solid gray",md:"0"}}>
                <Text pl="1rem" fontSize={"xl"} fontWeight="600" fontFamily={"satoshi"}>Trading</Text>
              {/* Trading deta repeted */}
                <Flex  alignItems={"center"} justifyContent="space-between" px="1rem" my="1rem">
                  <Box display={"flex"} alignItems="center"><Image src="https://raw.githubusercontent.com/Chainscore/assets/main/BTC.png" alt='img' w="2rem" mr="0.2rem" />
                    <Text ml="0.3rem" fontFamily="basement" fontSize={"lg"}>BTC</Text> </Box>
                  <Box>
                    <Text fontFamily="satoshi" fontSize={"lg"}>$2,5551.644</Text>
                    <Text fontFamily="satoshi" color="gray" fontSize={"xs"}>$9,435.04</Text>
                  </Box>

                </Flex>
                <Flex alignItems={"center"} justifyContent="space-between" px="1rem" my="1rem">
                  <Box display={"flex"} alignItems="center"><Image src="https://raw.githubusercontent.com/Chainscore/assets/main/BTC.png" alt='img' w="2rem" mr="0.2rem" />
                    <Text ml="0.3rem" fontFamily="basement" fontSize={"lg"}>BTC</Text> </Box>
                  <Box>
                    <Text fontFamily="satoshi" fontSize={"lg"}>$2,5551.644</Text>
                    <Text fontFamily="satoshi" color="gray" fontSize={"xs"}>$9,435.04</Text>
                  </Box>

                </Flex>
                <Flex alignItems={"center"} justifyContent="space-between" px="1rem" my="1rem">
                  <Box display={"flex"} alignItems="center"><Image src="https://raw.githubusercontent.com/Chainscore/assets/main/BTC.png" alt='img' w="2rem" mr="0.2rem" />
                    <Text ml="0.3rem" fontFamily="basement" fontSize={"lg"}>BTC</Text> </Box>
                  <Box>
                    <Text fontFamily="satoshi" fontSize={"lg"}>$2,5551.644</Text>
                    <Text fontFamily="satoshi" color="gray" fontSize={"xs"}>$9,435.04</Text>
                  </Box>

                </Flex>
              </Box>
             
              <Box  mb="0.5rem" mt="1rem" overflow={{sm:"auto",lg:"hidden"}} >
                <Text pl="1rem" fontSize={"xl"}  fontWeight="600" fontFamily={"satoshi"}>Growing Balance</Text>
                <Flex  mt="0.9rem" alignItems={"center"} justifyContent="space-between" px="1rem">
                  <Box display={"flex"} alignItems="center"><Image src="https://raw.githubusercontent.com/Chainscore/assets/main/BTC.png" alt='img' w="2rem" mr="0.2rem" />
                    <Text ml="0.3rem" fontFamily="basement" fontSize={"lg"}>BTC</Text> </Box>
                  <Box>
                    <Text fontFamily="satoshi" fontSize={"lg"}>$2,5551.644</Text>
                    <Text fontFamily="satoshi" color="gray" fontSize={"xs"}>$9,435.04</Text>
                  </Box>

                </Flex>
              </Box>
        
      </Flex>
    
      </Box>
    </Container>
    </TabPanel>
    <TabPanel  px="0">
          <Container display={"flex"} flexDirection={{sm:"column",lg:"row"}} minWidth="100%" justifyContent={"space-between"} px="0">

    <Box   bg={ colorMode=="dark"?"#171717":"#ffffff" }   p="0.9rem" width={"100%"} mr="1rem">
        <Flex alignItems={"center"} flexDirection={{sm:'column',md:"row"}} py={{sm:"1rem",md:""}} justifyContent="space-between" height={{sm:"10rem",md:"8rem"}}     bg={ colorMode=="dark"?"#252525":"#c9c9c9" }  px="1rem" borderRadius={"20px"} mb="1rem">
          <Box >
            <Text fontFamily={"satoshi"}>Funding Account</Text>
            <Box display={"flex"} alignItems="center" >
              <Text fontSize={"3xl"} fontFamily={"basement"} mr="0.5rem">$13,959,45</Text>
              <Select placeholder='Select option' size='xs' w="5rem" mb="0.5rem">
                <option value='option1' selected>USD</option>
                <option value='option2'>USD</option>
                <option value='option3'>USD</option>
              </Select>
            </Box>

          </Box>
          <ButtonGroup>
            <Button size='sm'  bg={"green"} color="white">Deposit</Button>
            <Button  size='sm' bg='#171717' color="white">Convert</Button>
            <Button  size='sm' bg='#171717' color="white">Withdraw</Button>
          </ButtonGroup>
        </Flex>
        <Box maxWidth={"20rem"}>  <InputGroup>
          <InputLeftElement
            pointerEvents='none'
       
           
            children={<BiSearch color='gray.300' />}
          />
          <Input type='text' value={synthsearch}  placeholder='search'  onChange={synthhandleSearch}/>
        </InputGroup>
        </Box>
        <Box  overflow="auto">
        {synthsdata.length >0 ?<SynthassetTable  data={synthsdata}/>:""}  
      
        </Box>
      </Box>

        <Box  bg={ colorMode=="dark"?"#171717":"#ffffff" } w={{sm:"100%",lg:"40rem"}} p="0.5rem" mt={{sm:"1rem",lg:"0"}} overflow="auto">  
        <Text pl="1rem" fontSize={"xl"} fontWeight="bold" fontFamily={"satoshi"}>Recent Transaction</Text>
        <RecentTransTable     transactionType="Funding" img="https://raw.githubusercontent.com/Chainscore/assets/main/WALLET.png"  />
        {/* <RecentTransTable  data={data} transactionType="Funding" img="https://raw.githubusercontent.com/Chainscore/assets/main/WALLET.png"  /> */}
      </Box>
    </Container>
    </TabPanel>
    <TabPanel px="0">
    <Container display={"flex"} flexDirection={{sm:"column",lg:"row"}} minWidth="100%" justifyContent={"space-between"} px="0">
    <Box  bg={ colorMode=="dark"?"#171717":"#ffffff" } p="0.9rem"  width={"100%"} mr="1rem">
        <Flex alignItems={"center"} flexDirection={{sm:'column',md:"row"}} py={{sm:"1rem",md:""}} justifyContent="space-between" height={{sm:"10rem",md:"8rem"}} bg="#0CAD4B" px="1rem" borderRadius={"20px"} mb="1rem">
          <Box ml="0.5rem">
            <Text fontFamily={"satoshi"}>Total</Text>
            <Box display={"flex"} alignItems="center" >
              <Text fontSize={"3xl"} fontFamily={"basement"} mr="0.3rem">$13,959,45</Text>
              <Select placeholder='Select option' size='xs' w="5rem" mb="0.5rem">
                <option value='option1' selected>USD</option>
                <option value='option2'>USD</option>
                <option value='option3'>USD</option>
              </Select>
            </Box>

          </Box>
          <ButtonGroup>
            <Button size='sm'  bg={"white"} color="black" fontFamily={"satoshi"}>Transaction</Button>
            <Button  size='sm' bg='#171717' color="white" fontFamily={"satoshi"}>Convert</Button>
            <Button  size='sm' bg='#171717' color="white" fontFamily={"satoshi"}>Transfer</Button>
          </ButtonGroup>
        </Flex>
        <Box maxWidth={"20rem"}>  <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<BiSearch color='gray.300' />}
          />
          <Input type='tel' placeholder='search' />
        </InputGroup>
        </Box>
        <Box  overflow="auto">
          <AssetTable/>
        </Box>
      </Box>
      <Box bg={ colorMode=="dark"?"#171717":"#ffffff"} w={{sm:"100%",lg:"40rem"}} p="0.5rem" mt={{sm:"1rem",lg:"0"}} overflow="auto">  
        <Text pl="1rem" fontSize={"xl"} fontWeight="bold" fontFamily={"satoshi"}>Recent Transaction</Text>
        <RecentTransTable transactionType="Trade"  img="https://raw.githubusercontent.com/Chainscore/assets/main/TRADE.png"/>
      </Box>
    </Container>
    </TabPanel>
  </TabPanels>
</Tabs>:<MetamaskConnect/>}

     </>
  )
}

export default MyAccountLanding;