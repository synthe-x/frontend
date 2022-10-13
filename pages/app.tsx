import { useEffect, useState, createContext,useRef } from 'react';
import { Box, Text, Flex, Divider, useColorMode, Skeleton } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import IssuanceTable from '../components/IssuanceTable';
import CollateralTable from '../components/CollateralTable';
import MetamaskConnect from '../components/MetamaskConnect';
import { getContract } from '../src/utils';
import { useAccount } from 'wagmi';
import web3 from "web3";
import Chart from '../components/DonutChart';
export const appContext = createContext(1);

function App() {
	const[Taddress, setTaddress]= useState("")
	const [newAddress, setnewAddress] = useState("")
	const [newTronAddress, setnewTronAddress] = useState("")
	// const [collateralsasset, setcollateralsasset] = useState({})
	const { address,isConnected } = useAccount();
	const { colorMode } = useColorMode();
	const [CollateralAssets, setCollateralAssets] = useState([]);
	const [IssuanceAssets, setIssuanceAssets] = useState([]);
	const [BorrowBalance, setBorrowBalance] = useState(0);
	const [CollateralBalance, setCollateralBalance] = useState(0);
	const [minCRatio, setMinCRatio] = useState(0)

	function TronConnect() {
		if (window.tronWeb && window.tronWeb.defaultAddress.base58 && typeof window !== 'undefined') {
			setTaddress(window.tronWeb.defaultAddress.base58)	
		}
	}
		if ( typeof window !== 'undefined' && isConnected) {
			window.localStorage.setItem('address', address)
		} 
		if ( typeof window !== 'undefined' && Taddress) {
			window.localStorage.setItem('tron', Taddress)
		} 

	let data;
	let trondata;
	if (typeof window !== 'undefined') {

		data = window.localStorage.getItem('address');
		trondata = window.localStorage.getItem('tron');
	}

	// useEffect(() => {
	// 	axios.get('http://localhost:3030/user/TTvnhvkLDqhdXtAGPfCQfPR7ffE8uPVSe6/collateral')
	// 		.then((resp) => {
	// 			console.log(resp.data.data)
	// 			setcollateralsasset(resp.data.data)
	// 		})
	// 		.catch((err) => {
	// 			console.log(err)
	// 		})

	// }, [])


		useEffect(() => {
			let data;
			 let newtrondata;
				if (typeof window !== 'undefined') {
				  data = window.localStorage.getItem('address');
			  setnewAddress(data)
			  newtrondata = window.localStorage.getItem('tron');
			  setnewTronAddress(newtrondata)
				} 
		}, [newAddress,newTronAddress])
		



	let limit_to_Borrow = CollateralBalance / (1.5)
	let available_to_Borrow = limit_to_Borrow - BorrowBalance;
	return (
		<>
			<appContext.Provider value={{ TronConnect,data,trondata, isConnected,}}>
				<Navbar />
				{address || trondata || newAddress ||newTronAddress? 
				<Box width="auto">
					<Flex flexDirection={{ sm: 'column', lg: 'row' }}
						my="1rem"
						justifyContent="space-between">
						{CollateralBalance && BorrowBalance ? <Box display={"flex"}
							justifyContent="space-between"
							height="15rem"
							p="0.8rem"
							boxShadow="0px 0px 6px 1px #9b9898;"
							mb={{ sm: "1rem", lg: "0" }}
							width={{ sm: '100%', lg: '59.5%' }}
							bg={colorMode == "dark" ? "#171717" : "#FFFFFF"}
							borderRadius={'10px'}>
							<Box w="70%">
								<Text w="7rem" h="0.3rem" bg="#36a2eb"></Text>
								<Text fontSize={'sm'}>Collateral Balance</Text>
								<Text fontSize={'lg'} fontWeight="bold">$ {(CollateralBalance / 10 ** 18).toFixed(2)}</Text>
								<Divider my={4} />
								<Text w="7rem" h="0.3rem" bg="#ffcd56"></Text>
								<Text fontSize={'sm'}>Borrow Balance</Text>
								<Text fontSize={'lg'} fontWeight="bold">$ {(BorrowBalance / 10 ** 18).toFixed(2)}</Text>
								<Divider my={4} />
								<Text w="7rem" h="0.3rem" bg="#ff6384"></Text>
								<Text fontSize={'sm'}>Available to Borrow</Text>
								<Text fontSize={'lg'} fontWeight="bold">$ {(available_to_Borrow / 10 ** 18).toFixed(2)}</Text>
							</Box>
							<Chart available_to_Borrow={(available_to_Borrow / 10 ** 18).toFixed(2)} CollateralBalance={(CollateralBalance / 10 ** 18).toFixed(2)} BorrowBalance={(BorrowBalance / 10 ** 18).toFixed(2)} />
						</Box> : <Skeleton height="15rem" width={{ sm: '100%', lg: '59.5%' }} />}
						{CollateralBalance && minCRatio ? <Box
							mt={{ sm: '1rem', md: '0' }}
							height="15rem"
							p="1rem"
							boxShadow="0px 0px 6px 1px #9b9898;"
							width={{ sm: '100%', lg: '39.5%' }}
							bg={colorMode == "dark" ? "#171717" : "#FFFFFF"}
							borderRadius={'10px'}>
							<Text fontSize={'sm'}>Interest Rate</Text>
							<Text fontSize={'lg'} fontWeight="bold">0.5%</Text>
							<Divider my={4} />
							<Text fontSize={'sm'}>Collateralisation Ratio</Text>
							<Text fontSize={'lg'} fontWeight="bold">{(100 * CollateralBalance / BorrowBalance).toFixed(2)} %</Text>
							<Divider my={4} />
							<Text fontSize={'sm'}>Minimum Required</Text>
							<Text fontSize={'lg'} fontWeight="bold">{minCRatio / 1e16} %</Text>
						</Box> : <Skeleton height="15rem" mt={{ sm: "1rem", lg: "0" }} ml={{ sm: "0", lg: "0.5rem" }} width={{ sm: '100%', lg: '39.5%' }} />}
					</Flex>
					<Flex
						flexDirection={{ sm: 'column', lg: 'row' }}
						justifyContent="space-between" >
						{CollateralAssets.length > 0 ? <Box mb={{ sm: "1rem", lg: "0" }}
							boxShadow="0px 0px 6px 1px #9b9898;"
							overflowX="auto"
							px="0.5rem"
							width={{ sm: '100%', lg: '44.2%' }}
							bg={colorMode == "dark" ? "#171717" : "#FFFFFF"}
							borderRadius={'10px'}>
							<CollateralTable collaterals={CollateralAssets} />
						</Box> : <Skeleton height="25rem" width={{ sm: '100%', lg: '44.2%' }} />}
						{minCRatio && CollateralBalance && BorrowBalance && IssuanceAssets.length > 0 ? <Box
							px="0.5rem"
							boxShadow="0px 0px 6px 1px #9b9898;"
							mb={{ sm: '1rem', md: '0' }}
							width={{ sm: '100%', lg: '54.2%' }}
							bg={colorMode == "dark" ? "#171717" : "#FFFFFF"}
							borderRadius={'10px'}>
							<IssuanceTable debts={IssuanceAssets} minCRatio={minCRatio} collateralBalance={CollateralBalance / 1e18} cRatio={CollateralBalance / BorrowBalance} />
						</Box> : <Skeleton mt={{ sm: "1rem", lg: "0" }} height="25rem" width={{ sm: '100%', lg: '54.2%' }} />}
					</Flex>
				</Box> : <MetamaskConnect />}
			</appContext.Provider>

		</>
	);
}

export default App;
