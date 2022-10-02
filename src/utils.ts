import Web3 from "web3";
import Contract from "web3-eth-contract";

const config = require("../config.json");
let data = require(`../artifacts/deployments.json`)

export function getContract(name: string, network: string, mock: boolean = false) {
    const abi = data["sources"][data["contracts"][name].source];
    const web3 = new Web3(window.ethereum! as any);
    const contractInstance = new web3.eth.Contract(abi, web3.utils.toChecksumAddress(data["contracts"][name]["address"]));
    return contractInstance;
}