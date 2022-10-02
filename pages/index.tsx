import { Box, Text, Flex, Divider, Button } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import BorrowTable from '../components/IssuanceTable';
import CollateralTable from '../components/CollateralTable';
import { useEffect, useState } from 'react';
import { getContract } from '../src/utils';
import { useAccount } from 'wagmi';
import { MdOutlineOpenInNew } from 'react-icons/md';

function Index() {
	useEffect(() => {}, []);

	return (
		<>
			<Flex justify={'center'}>
				<Box maxW={'90%'} mt="10" textAlign={'center'}>
					<Text
						fontSize={'7xl'}
						fontWeight={'extrabold'}
						bgGradient="linear(to-l, #0CAD4B, #29F87A, #0CAD4B)"
						bgClip="text">
						Overcollateralised Asset Issuance and Trading Protocol
					</Text>
          <Text
						fontSize={'lg'}
						fontWeight={'medium'}
						mt={5}
            width={"60%"} mx="auto" textAlign="center">
						SyntheX is a trustless asset issuance and trading platform for crypto derivatives, which bridges the gap between the real world assets and the DeFi ecosystem
					</Text>
					<Box mt={10}>
						<Button size="lg"
            colorScheme={'whatsapp'}
            variant="outline">
							Open App <MdOutlineOpenInNew size={20} style={{marginLeft: "5px"}} />
						</Button>
						<Button
							size="lg"
							
							ml={4}>
							Learn more
						</Button>
					</Box>
					<Divider mt={100} mb={30} />
					<Text fontSize={'3xl'} fontWeight={'bold'} mb={8}>
						Total Value Locked
					</Text>
					<Flex justify={"space-around"}>
						<Box>
							<Text>Issued Assets worth</Text>
							<Text fontSize={'5xl'} fontWeight={'bold'}>
								$ 100,920,000
							</Text>
						</Box>
            <Box>
							<Text>Backed by Collateral</Text>
							<Text fontSize={'5xl'} fontWeight={'bold'}>
								$ 150,099,483
							</Text>
						</Box>
					</Flex>
				</Box>
			</Flex>
		</>
	);
}

export default Index;
