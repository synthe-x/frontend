import { Box, Text, Flex, Divider, Button, Image } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import BorrowTable from '../components/IssuanceTable';
import CollateralTable from '../components/CollateralTable';
import { useEffect, useState } from 'react';
import { getContract } from '../src/utils';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/router'
import { MdOutlineOpenInNew } from 'react-icons/md';
import Link from 'next/link';
import coin_image from '../public/coin_image.svg'
// import Image from 'next/image'
// 

import Navbar_landing from '../components/Navbar_landing';
function Index() {
	const router = useRouter();
	useEffect(() => { }, []);

	return (
		<>
			<Navbar_landing />

			<Box w="100%" h="100%" mt="3rem">
				<Text
					maxW={'95%'}
					fontSize={{sm:"3xl",lg:'6xl'}}
					fontFamily="Basement"
					lineHeight={"1.3"}
					textAlign={{sm:"center",lg:"left"}}
					fontWeight={'extrabold'}
				>
					Overcollateralised Asset Issuance and <span style={{ color: "#0CAD4B" }}>Trading Protocol</span>
				</Text>
				<Flex   justifyContent={"center"} w="100%">
					<Box textAlign={{sm:'center',lg:"left"}} Width="50%">

						<Text maxWidth={"50rem"}
							fontSize={'xl'}
							fontWeight={'medium'}
							
							mt={10}
							textAlign={{sm:"center",lg:"left"}} fontFamily={"Satoshi"}>
							SyntheX is a trustless asset issuance and trading platform for crypto derivatives, which bridges the gap between the real world assets and the DeFi ecosystem
						</Text>
						<Box mt={5} textAlign={{sm:'center',lg:"left"}}>

							<Button size="lg"
								onClick={() => {
									router.push("/app")
								}}
								colorScheme={'whatsapp'}
								bg="#0CAD4B"
								color={"white"}
								variant="solid">
								Open App <MdOutlineOpenInNew size={20} style={{ marginLeft: "5px" }} />
							</Button>

							<Button
								size="lg"
								variant={"outline"}
								ml={5}>
								Learn more
							</Button>
						</Box>
						<Divider mt={10} mb={5} />
						<Text fontSize={'3xl'} mb={8} fontFamily={"Satoshi"}>
							Total Value Locked
						</Text>
						<Flex justify={{sm:"center",lg:"space-between"}} maxWidth={{sm:"auto",lg:"25rem"}} alignItems={"center"}>
							<Box>
								<Text textAlign={"center"} fontFamily={"Satoshi"}>Issued Assets worth</Text>
								<Text p="0.4rem" mt="0.2rem" borderRadius={"8px"} border="1px solid #4e4d4d" fontFamily={"Satoshi"} fontSize={'2xl'} >
									$ 100,920,000
								</Text>
							</Box>
							<Box ml={{sm:"2rem",lg:"0"}}>
								<Text textAlign={"center"} fontFamily={"Satoshi"}>Backed by Collateral</Text>
								<Text p="0.4rem" mt="0.2rem" borderRadius={"8px"} border="1px solid #4e4d4d" fontFamily={"Satoshi"} fontSize={'2xl'}>
									$ 150,099,483
								</Text>
							</Box>
						</Flex>
					</Box>
					<Box  Width="50%">

					
					<Box className='rad' w="40rem" h="35rem" mt="-2rem"  display={{sm:"none",lg:"block"}}>
						<Box className='bg' ml="5rem" w="90%" height={"77%"}></Box>
					</Box>
					</Box>
				</Flex>
			</Box>

		</>
	);
}

export default Index;
