import { Box, Text, Flex, Divider,useColorMode } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import IssuanceTable from '../components/IssuanceTable';
import CollateralTable from '../components/CollateralTable';
import { useEffect, useState } from 'react';
import { getContract } from '../src/utils';
import { useAccount } from 'wagmi';
import web3 from "web3";
import Chart from '../components/DonutChart';
function App() {
	const { colorMode } = useColorMode();
	const [CollateralAssets, setCollateralAssets] = useState([]);
	const [IssuanceAssets, setIssuanceAssets] = useState([]);
	const [BorrowBalance, setBorrowBalance] = useState(0);
	const [CollateralBalance, setCollateralBalance] = useState(0);
	const [minCRatio, setMinCRatio] = useState(0)

	const { address, isConnecting, isConnected, isDisconnected } = useAccount();

	useEffect(() => {
		let helper = getContract('Helper', 'goerli');
		helper.methods
			.getUserPosition(address)
			.call({from: address})
			.then((res) => {
				setCollateralAssets(res['collaterals']);
				setIssuanceAssets(res['debts']);
				setCollateralBalance(res['collateralBalance']);
				setBorrowBalance(res['debtBalance']);
			});

			let reserve = getContract('Reserve', 'goerli');
			reserve.methods
				['minCRatio']()
				.call()
				.then((res) => {
					// console.log(res);
					setMinCRatio(res);
				});
	}, []);

	let limit_to_Borrow=CollateralBalance/(1.5)
	let available_to_Borrow=limit_to_Borrow-BorrowBalance
	return (
		<>
			<Flex flexDirection={{ sm: 'column', lg: 'row' }}
				my="1rem"
				justifyContent="space-between">

				<Box display={"flex"}
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

				</Box>


				<Box
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
						<Text fontSize={'lg'} fontWeight="bold">{minCRatio/1e16} %</Text>
						
				</Box>
			</Flex>
 <Flex
				flexDirection={{ sm: 'column', lg: 'row' }}
				justifyContent="space-between" >
			
						<Box mb={{sm:"1rem",lg:"0"}}
						boxShadow="0px 0px 6px 1px #9b9898;"
				overflowX="auto"
					px="0.5rem"
					width={{ sm: '100%', lg: '44.2%' }}
					
					bg={colorMode == "dark" ?"#171717" : "#FFFFFF"}
					borderRadius={'10px'}>				
							<CollateralTable collaterals={CollateralAssets} />

				</Box>
				
				<Box
					px="0.5rem"
					boxShadow="0px 0px 6px 1px #9b9898;"
					mb={{ sm: '1rem', md: '0' }}
					width={{ sm: '100%', lg: '54.2%' }}
					bg={colorMode == "dark" ?"#171717" : "#FFFFFF"}
					borderRadius={'10px'}>
					<IssuanceTable debts={IssuanceAssets} minCRatio={minCRatio} collateralBalance={CollateralBalance / 1e18} cRatio={CollateralBalance / BorrowBalance} />
				</Box>
			</Flex> 
			
		</>
	);
}

export default App;
