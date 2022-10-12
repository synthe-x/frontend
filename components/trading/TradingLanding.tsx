import React,{useContext} from 'react'
import BTC from '../../public/bitCoin.png'
import CriptoInfoTable from './CriptoInfoTable'
import BuySell from './BuySell'
import OrderBook from './OrderBook'
import BidOrderBook from './BidOrderBook '
import Script from 'next/script'
import MetamaskConnect from '../../components/MetamaskConnect';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import {
    Flex, Text, Box, useColorMode, Button, Image, InputLeftElement, Input,Tabs, TabList, TabPanels, Tab, TabPanel ,
    useDisclosure, InputGroup, Container
} from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi';
import { IoMdArrowDropup } from 'react-icons/io';
import { useAccount } from 'wagmi';
import { appContext } from '../../pages/app'
const TradingLanding = () => {
    const AppData = useContext(appContext)
    const { address } = useAccount();
    const { colorMode } = useColorMode();
    return (
        <>
{ AppData.address ?
        <Container  flexDirection={{xl:"row",sm:"column"}} display={"flex"} px="0" minWidth="100%" justifyContent={"space-between"} maxWidth="1300px">
            <Box display={"flex"} flexDirection="column" width="100%"   bg={ colorMode=="dark"?"#171717":"#ffffff" }>
                <Box bg={ colorMode=="dark"?"#252525":"#efefef" } m="0.5rem" borderRadius={"10px"} display={"flex"} flexWrap="wrap" alignItems="center" justifyContent="space-between" >
                    <Flex alignItems={"center"} justifyContent="space-between" flexDirection="row" width={{sm:"100%",md:"14rem"}} mr="0.5rem">
                        <Box display={"flex"} alignItems="center" justifyContent={"flex-start"}>
                            <Image src={BTC} alt='img' />
                            <Text fontFamily={"basement"}>BTC/USD</Text>
                        </Box>

                        <Box>
                            <Text color="green" fontFamily={"satoshi"}>20,352.8</Text>
                            <Text color="gray" fontFamily={"satoshi"}>+0.44%</Text>
                        </Box>
                    </Flex>
                    <Box w={{sm:"fit-content",md:"6rem"}} m={{sm:"0.5rem",md:""}} >
                        <Text fontSize={"sm"} fontFamily="satoshi">USD</Text>
                        <Text fontFamily={"satoshi"} fontWeight="900">$20,246.80</Text>
                    </Box>
                    <Box w={{sm:"fit-content",md:"6rem"}} m={{sm:"0.5rem",md:""}}>
                        <Text fontSize={"sm"} fontFamily="satoshi">24 Low</Text>
                        <Text fontFamily={"satoshi"} fontWeight="900">19,731.2</Text>
                    </Box>
                    <Box w={{sm:"fit-content",md:"6rem"}} m={{sm:"0.5rem",md:""}}>
                        <Text fontSize={"sm"} fontFamily="satoshi">24 High</Text>
                        <Text fontFamily={"satoshi"} fontWeight="900">$20,447.80</Text>
                    </Box>
                    <Box w={{sm:"fit-content",md:"6rem"}} m={{sm:"0.5rem",md:""}}>
                        <Text fontSize={"sm"} fontFamily="satoshi">24 Vol (BTC)</Text>
                        <Text fontFamily={"satoshi"} fontWeight="900">8,376 </Text>

                    </Box>
                    <Box w={{sm:"fit-content",md:"6rem"}} m={{sm:"0.5rem",md:""}}>
                        <Text fontSize={"sm"} fontFamily="satoshi">24h Turnover(USD)</Text>
                        <Text fontFamily={"satoshi"} fontWeight="900">168.69M</Text>
                    </Box>
                </Box>
                <Box display={"flex"} flexDirection={{sm:"column" ,lg:"row"}} mt="0.5rem" >
                    <Box >
                        <Box >
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<BiSearch color='gray.300' />}
                                />
                                <Input type='tel' placeholder='search' />
                            </InputGroup>
                            <Tabs  >
                                <TabList overflow={"auto"}>
                                    <Tab>Favorite</Tab>
                                    <Tab>All</Tab>
                                    <Tab>Top</Tab>
                                    <Tab>Fan</Tab>
                                    <Tab>Tokens</Tab>
                                </TabList>

                                <TabPanels>
                                    <TabPanel overflow={"auto"} px="0.4rem">
                                        <CriptoInfoTable />
                                    </TabPanel>
                                    <TabPanel>
                                        <p>two!</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>three!</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>four!</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>five!</p>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Box>
                    </Box>

                    <Flex flexDirection={"column"} w={{ xl: "auto", md: "100%" }} mr={{sm:"",lg:"0.3rem"}}>
                        <Box h="470px">
                            <TradingViewWidget
                                symbol="BTC"
                                theme={Themes.DARK}
                                locale="in"
                                autosize
                                hide_side_toolbar={false}
                                allow_symbol_change={true}
                            />
                        </Box>
                        <Flex flexDirection={{ sm: "column", md: "row" }} >
                            <Box overflow={"auto"} mr="0.2rem" bg={ colorMode=="dark"?"#252525":"#efefef" } w={{ xl: "280px", md: "100%" }} h="19rem">
                                <Tabs>
                                    <TabList>
                                        <Tab fontSize={"xs"}>Open Order</Tab>
                                        <Tab fontSize={"xs"}>Hstory Order</Tab>
                                        <Tab fontSize={"xs"}>Positions </Tab>
                                        <Tab fontSize={"xs"}>Assets</Tab>
                                        <Tab fontSize={"xs"}>Statergy</Tab>
                                    </TabList>

                                    <TabPanels>
                                        <TabPanel>
                                            <p>one!</p>
                                        </TabPanel>
                                        <TabPanel>
                                            <p>two!</p>
                                        </TabPanel>
                                        <TabPanel>
                                            <p>three!</p>
                                        </TabPanel>
                                        <TabPanel>
                                            <p>four!</p>
                                        </TabPanel>
                                        <TabPanel>
                                            <p>fivr!</p>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </Box>
                            <Box mt={{ sm: "1rem", md: "0" }} w={{ xl: "315px", md: "100%" }} h="19rem" bg={ colorMode=="dark"?"#252525":"#efefef" }><BuySell /></Box>
                        </Flex>
                    </Flex >
                </Box>
            </Box>
            <Box bg={ colorMode=="dark"?"#171717":"#ffffff" } display="flex" flexDirection={{sm:"column",md:"row",xl:"column"}}>
              
                <Box overflow={"auto"} width="100%" mx={{sm:"0.5rem",md:""}} mr={{sm:"0.3rem",md:""}} mb={{sm:"1rem",md:""}} mt={{sm:"2.8rem",md:""}}>
                    <OrderBook />
                </Box>

                <Box overflow={"auto"}   mx={{sm:"0.5rem",md:""}}  width="100%" >
                <Box display={"flex"} alignItems="flex-end" my="0.5rem">
                    <Box display={"flex"} alignItems="center" px="0.7rem">
                        <Text fontSize={"xl"} color="#349A5C" fontFamily={"satoshi"}>20,352.8</Text>
                        <IoMdArrowDropup size={30} color="#349A5C" />
                    </Box>

                    <Text fontSize={"sm"} fontFamily={"satoshi"}>$20,389.50</Text>
                </Box>
                    <BidOrderBook />
                </Box>

            </Box>
        </Container> :<MetamaskConnect/> }
        </>
    )
}

export default TradingLanding           