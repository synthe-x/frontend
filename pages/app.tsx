import { Box, Text, Flex, Divider } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import IssuanceTable from '../components/IssuanceTable';
import CollateralTable from '../components/CollateralTable';
import { useEffect, useState } from 'react';
import { getContract } from '../src/utils';
import { useAccount } from 'wagmi';
import web3 from "web3";

function App() {
	const [CollateralAssets, setCollateralAssets] = useState([]);
	const [IssuanceAssets, setIssuanceAssets] = useState([]);
	const [BorrowBalance, setBorrowBalance] = useState(0);
	const [CollateralBalance, setCollateralBalance] = useState(0);
	const [minCRatio, setMinCRatio] = useState(0);

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

	return (
		<>
			<Flex flexDirection={{ sm: 'column', md: 'row' }}
				my="1rem"
				justifyContent="space-between">
				<Box
					height="15rem"
					p="0.8rem"
					width={{ sm: '100%', md: '59.5%' }}
					bg="#171717"
					borderRadius={'10px'}>

					<Text fontSize={'sm'}>Collateral Balance</Text>
					<Text fontSize={'lg'} fontWeight="bold">$ {(CollateralBalance / 10**18).toFixed(2)}</Text>

					<Divider my={4} />
					<Text fontSize={'sm'}>Borrow Balance</Text>
					<Text fontSize={'lg'} fontWeight="bold">$ {(BorrowBalance / 10**18).toFixed(2)}</Text>

					<Divider my={4} />
					<Text fontSize={'sm'}>Available to Borrow</Text>
					<Text fontSize={'lg'} fontWeight="bold">$ {(BorrowBalance / 10**18).toFixed(2)}</Text>
					
				</Box>
				<Box
					mt={{ sm: '1rem', md: '0' }}
					height="15rem"
					p="1rem"
					width={{ sm: '100%', md: '39.5%' }}
					bg="#171717"
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
				flexDirection={{ sm: 'column', md: 'row' }}
				justifyContent="space-between">
				<Box
					px="0.5rem"
					width={{ sm: '100%', md: '44.2%' }}
					bg="#171717"
					borderRadius={'10px'}>
					<CollateralTable collaterals={CollateralAssets} />
				</Box>
				<Box
					px="0.5rem"
					mb={{ sm: '1rem', md: '0' }}
					width={{ sm: '100%', md: '54.2%' }}
					bg="#171717"
					borderRadius={'10px'}>
					<IssuanceTable debts={IssuanceAssets} minCRatio={minCRatio} collateralBalance={CollateralBalance / 1e18} cRatio={CollateralBalance / BorrowBalance} />
				</Box>
			</Flex>
		</>
	);
}

export default App;
