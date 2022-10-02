import React from 'react';
import {
	Button,
	Box,
	Text,
	Flex,
	useDisclosure,
    Input,
    IconButton,
	InputRightElement,
	InputGroup,
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

import { BiMinusCircle } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { getContract } from '../../src/utils';
import { useAccount } from 'wagmi';


const RepayModal = ({ asset, balance }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [amount, setAmount] = React.useState(null);
	const { address, isConnecting, isConnected, isDisconnected } = useAccount();

	const changeAmount = (event: any) =>{
		setAmount(event.target.value);
	}

	const setMax = () =>{
		setAmount(balance);
	}

	const issue = () => {
		if(!amount) return
		let reserve = getContract('Reserve', 'goerli');
		let value = (amount*10**asset['decimals']).toString();
		console.log(asset['id'], asset['name'])
		reserve.methods.repay(asset['id'], value)
		.send({from: address}, (error: any, hash: any) => {
			console.log(hash);
		})
		.on('error', function(error: any){ 
			console.log("error", error);
		 })
		.on('transactionHash', function(transactionHash: string){ 
			console.log("transactionHash", transactionHash);
		 })
		.on('receipt', function(receipt: {}){
			console.log((receipt as any)['contractAddress']) // contains the new contract address
		})
		.on('confirmation', function(confirmationNumber: number, receipt: any){ 
			console.log("confirmation", confirmationNumber);
		 })
	}

	return (
		<Box>
			<IconButton variant="ghost" onClick={onOpen} icon={<BiMinusCircle size={30} />} aria-label={''} isRound={true}>
			</IconButton>
			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent width={'30rem'} height="30rem">
					<ModalCloseButton />
                    <ModalHeader>Repay {asset['symbol']}</ModalHeader>
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
                        <Button colorScheme={"whatsapp"} width="100%" mt={4} onClick={issue}>Repay</Button>
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


export default RepayModal;
