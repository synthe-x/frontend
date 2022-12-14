import React,{useContext} from 'react';
import {
	Button,
	Box,
	Text,
	Flex,
	useDisclosure,
    Input,
    IconButton,
	InputRightElement,
	InputGroup,Spinner,Link
} from '@chakra-ui/react';

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react';

import { BsPlusCircle } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { getContract } from '../../src/utils';
import { useAccount } from 'wagmi';

import { appContext } from '../../pages/app'
const DepositModal = ({ asset, collateralBalance, minCRatio, cRatio }) => {
	const AppData = useContext(appContext)
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [loader, setloader] = React.useState(false)
	const [hash, sethash] =  React.useState("")
	const [issueerror,setissueerror] = React.useState()
	const [issueconfirm, setissueconfirm] = React.useState(false)
	const [amount, setAmount] = React.useState(null);

	const changeAmount = (event: any) =>{
		setAmount(event.target.value);
	}

	const setMax = () => {
		// 1/mincRatio * collateralBalance = max amount of debt
		console.log(cRatio*1e18, minCRatio, cRatio*1e18 - minCRatio);
		setAmount((((1e18/(minCRatio)) - 1/(cRatio))*collateralBalance*(10**asset['priceDecimals'])/(asset['price'])));
	}

	// 1/1.69 - 1/1.5 = 0.58823529411764705882352941176471 - 0.66666666666666666666666666666667 = -0.07843137254901960784313725490196 

	const issue = () => {
		if(!amount) return
		let reserve = getContract('Reserve', 'goerli');
		let value = (amount*10**asset['decimals']).toString();
		reserve.methods.borrow(asset['id'], value)
		.send({from: AppData.address}, (error: any, hash: any) => {
			console.log(hash);
		})
		.on('error', function(error: any){ 
			console.log("error", error);
			setissueerror(error.message);
		 })
		.on('transactionHash', function(transactionHash: string){ 
			console.log("transactionHash", transactionHash);
			sethash(transactionHash)
			if(transactionHash){
				setloader(true)
			}
		 })
		// .on('receipt', function(receipt: {}){
		// 	console.log(receipt) // contains the new contract address
		// })
		.on('confirmation', function(confirmationNumber: number, receipt: any){ 
			console.log("confirmation", confirmationNumber);
			if(confirmationNumber ==1){
				setloader(false)
				setissueconfirm(true)
			}
		 })
	}

	return (
		<Box>
			<IconButton variant="ghost" onClick={onOpen} icon={<BsPlusCircle size={30} />} aria-label={''} isRound={true}>
			</IconButton>
			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent width={'30rem'} height="30rem">
					<ModalCloseButton />
                    <ModalHeader>Issue {asset['symbol']}</ModalHeader>
					<ModalBody>
					<InputGroup size='md'>
						<Input
							type="number"
							placeholder='Enter amount'
							onChange={changeAmount}
							value={amount}
						/>
						<InputRightElement width='4.5rem'>
							<Button h='1.75rem' size='sm' mr={1} onClick={setMax}>
								Set Max
							</Button>
						</InputRightElement>
						</InputGroup>
                        <Flex mt={4} justify="space-between">
							<Text fontSize={"xs"} color="gray.400" >1 {asset['symbol']} = {(asset['price']/10**asset['priceDecimals']).toFixed(2)} USD</Text>
                        </Flex>
                        <Button colorScheme={"whatsapp"} width="100%" mt={4} onClick={issue}>Issue</Button>
						{loader &&<Flex alignItems={"center"} flexDirection={"row"} justifyContent="center" mt="1rem">
							<Box>
							<Spinner
								thickness='4px'
								speed='0.65s'
								emptyColor='gray.200'
								color='blue.500'
								size='xl'
							/></Box>
							<Box ml="0.5rem">
								<Text fontFamily={"Roboto"}> Waiting for the blockchain to confirm your transaction... </Text>
								<Link color="blue.200" href={`https://goerli.etherscan.io/tx/${hash}`} target="_blank" rel="noreferrer">View on etherscan</Link >
							</Box>
						</Flex>}
						{issueerror && <Text textAlign={"center"} color="red">{issueerror}</Text>}
							{issueconfirm && <Flex flexDirection={"column"} mt="1rem" justifyContent="center" alignItems="center">
								<Text fontFamily={"Roboto"} textAlign={"center"}>Transaction Successful</Text>
								<Box><Link fontFamily={"Roboto"} alignSelf={"center"} color="blue.200" href={`https://goerli.etherscan.io/tx/${hash}`} target="_blank" rel="noreferrer"> view on etherscan</Link>
								</Box>

							</Flex>}
					</ModalBody>
                    <ModalFooter>

                            <AiOutlineInfoCircle size={20} />
                        <Text ml="2"> 
                            More Info
                            </Text>
                        </ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
};


export default DepositModal;
