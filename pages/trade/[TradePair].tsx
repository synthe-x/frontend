import { Box, Text, Input, Button } from '@chakra-ui/react';
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function TradePair() {
	const router = useRouter();
	const { TradePair } = router.query;
    console.log(router.query)
	const assets = TradePair ? (TradePair as string).split('_') : [];

	useEffect(() => {}, []);

	return (
		<Box width={'1300px'}>
			<Box maxW={300} border="1px" height={'80vh'} borderColor="gray.600">
				<Box m={5}>
					<Text fontSize={'2xl'} fontWeight="bold" mb={5}>
						{assets[0]} / {assets[1]}
					</Text>
					<Box height={5} border={'1px'} borderColor="gray.600" borderRadius={5} my={1} bgColor="#9aeca8" color={"black"}><Text fontSize={"xs"}>100 ETH at 12.100</Text></Box>
					<Box height={5} border={'1px'} borderColor="gray.600" borderRadius={5} my={1} bgColor="#ff8799" color={"black"}><Text fontSize={"xs"}>10 ETH at 12.150</Text></Box>
					<Box height={5} border={'1px'} borderColor="gray.600" borderRadius={5} my={1} bgColor="#ff8799" color={"black"}><Text fontSize={"xs"}>100 ETH at 12.100</Text></Box>
					<Box height={5} border={'1px'} borderColor="gray.600" borderRadius={5} my={1} bgColor="#ff8799" color={"black"}><Text fontSize={"xs"}>100 ETH at 12.100</Text></Box>
					<Box height={5} border={'1px'} borderColor="gray.600" borderRadius={5} my={1} bgColor="#9aeca8" color={"black"}><Text fontSize={"xs"}>100 ETH at 12.100</Text></Box>
					<Box height={5} border={'1px'} borderColor="gray.600" borderRadius={5} my={1} bgColor="#9aeca8" color={"black"}><Text fontSize={"xs"}>100 ETH at 12.100</Text></Box>
					<Box height={5} border={'1px'} borderColor="gray.600" borderRadius={5} my={1} bgColor="#9aeca8" color={"black"}><Text fontSize={"xs"}>100 ETH at 12.100</Text></Box>
					<Box height={5} border={'1px'} borderColor="gray.600" borderRadius={5} my={1} bgColor="#ff8799" color={"black"}><Text fontSize={"xs"}>100 ETH at 12.100</Text></Box>
					

					<Box mt={10}>
						<Text>{"Amount "+assets[0]}</Text>
						<Input value={0}></Input>
                        <Slider aria-label='slider-ex-1' defaultValue={30}>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
					</Box>

                    <Box mt={5}>
						<Text>{"Amount "+assets[1]}</Text>
						<Input value={0}></Input>
                        <Slider aria-label='slider-ex-1' defaultValue={30}>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
					</Box>

                    <Button bgColor={"green"} width="100%" my={1}>Buy</Button>
                    <Button bgColor={"red"} width="100%" my={1}>Sell</Button>

				</Box>
			</Box>
		</Box>
	);
}
