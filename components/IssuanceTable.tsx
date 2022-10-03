import React from 'react';
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Button,
	TableContainer,
	Box,
	Text,
	Flex,
	useDisclosure,useColorMode
} from '@chakra-ui/react';

import Image from 'next/image';
import IssueModel from './modals/IssueModal';
import RepayModel from './modals/RepayModal';

const IssuanceTable = ({ debts, minCRatio, collateralBalance, cRatio }) => {
	const { colorMode } = useColorMode();
	const tknholdingImg = {
		width: '30px',
		marginLeft: '1rem',
		marginRight: '0.5rem',
		borderRadius: '100px',
	};

	return (
		<>
			<TableContainer>
				<Table  overflow={"auto"}
					variant="simple"
					style={{
						borderCollapse: 'separate',
						borderSpacing: '0 15px',
					}}>
					<Thead>
						<Tr  bg={colorMode == "dark" ?"#171717" : "#ededed"}>
							<Th
								fontSize={'xs'}
								fontFamily="Poppins"
								id="borrow_table_HeadingLeftBorderRadius"
								className="borrow_table_Head">
								Issuance Assets
							</Th>
							<Th
								fontSize={'xs'}
								fontFamily="Poppins"
								className="borrow_table_Head">
								APY Rate
							</Th>
							<Th
								fontSize={'xs'}
								fontFamily="Poppins"
								className="borrow_table_Head">
								Protocol Debt
							</Th>
							{/* <Th
								fontSize={'sm'}
								fontFamily="Poppins"
								className="borrow_table_Head">
								Liquidity
							</Th> */}
							<Th
								fontSize={'xs'}
								fontFamily="Poppins"
								id="borrow_table_HeadingRightBorderRadius"
								className="borrow_table_Head"></Th>
						</Tr>
					</Thead>
					<Tbody>
						{debts.map((debt: any) => {
							return (
								<Tr key={debt['asset']['id']}  bg={colorMode == "dark" ?"#171717" : "#ededed"}>
									<Td
										id="borrow_table_dataLeftBorderRadius"
										className="borrow_table_data">
										<Box
											display="flex"
											alignItems="center"
											cursor="pointer">
											{/* <Image src="" 
                                            // width={35} height={35} 
                                            style={tknholdingImg} alt="..." /> */}
											<Box ml={2}>
												<Text
													fontSize="sm"
													fontWeight="bold"
													textAlign={'left'}>
													{debt['asset']['name']}
												</Text>
												<Text
													fontSize="xs"
													fontWeight="light"
													textAlign={'left'}>
													{debt['asset']['symbol']}
												</Text>
											</Box>
										</Box>
									</Td>
									<Td className="borrow_table_data">
										{(
											(1 + debt['asset']['interestRate'] / 10 **
														debt['asset']['interestRateDecimals']) ** 365
										).toFixed(2)}{' '}
										%
									</Td>
									<Td className="borrow_table_data">
										<Box>
											<Text
												fontSize="sm"
												fontWeight="bold"
												textAlign={'left'}>
												{debt['amount']/1e18}{' '}
												{debt['asset']['symbol']}
											</Text>
											{/* <Text
												fontSize="xs"
												fontWeight="light"
												textAlign={'left'}>
												{debt['walletBalance']}{' '}
												{debt['asset']['symbol']}
											</Text> */}
										</Box>
									</Td>
									{/* <Td className="borrow_table_data">
										{debt['asset'][
											'totalLiquidity'
										].toString()}{' '}
										{debt['asset']['symbol']}
									</Td> */}
									<Td
										id="borrow_table_datarightBorderRadius"
										className="borrow_table_data">
										<Flex alignItems={'center'}>
											<IssueModel asset={debt['asset']} minCRatio={minCRatio} collateralBalance={collateralBalance} cRatio={cRatio} />
											<RepayModel asset={debt['asset']} balance={debt['walletBalance']/1e18} />
										</Flex>
									</Td>
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
};

export default IssuanceTable;