import Web3 from "web3";
import Contract from "web3-eth-contract";
import {useContext} from 'react';

const config = require("../config.json");
let ETH_data = require(`../artifacts/ethereum/localhost.json`)
let TRON_data = require(`../artifacts/tron/localhost.json`);
const TronWeb = require('tronweb')
const tronWeblink = new TronWeb({
    fullHost: 'http://localhost:3000',
    headers: { "TRON-PRO-API-KEY": '25f66928-0b70-48cd-9ac6-da6f8247c663' },
    privateKey: 'AD71C52E0FC0AB0DFB13B3B911624D4C1AB7BDEFAD93F36B6EF97DC955577509'
})
export function getContract(name: string, network: string, mock: boolean = false) {
    console.log(network == "goerli")
    if(network == "goerli"){
          const abi = ETH_data["sources"][ETH_data["contracts"][name].source];
    const web3 = new Web3(window.ethereum! as any);
    const contractInstance = new web3.eth.Contract(abi, web3.utils.toChecksumAddress(ETH_data["contracts"][name]["address"]));
    console.log("contractInstance",contractInstance)
    return contractInstance;
    }
    else if (network == "tron"){
        const abi = TRON_data["sources"][TRON_data["contracts"][name].source];
        // const contractInstance = new web3.eth.Contract(abi, web3.utils.toChecksumAddress(ETH_data["contracts"][name]["address"]));
        const contractInstance = tronWeblink.contract(abi,TRON_data["contracts"][name]["address"]);
       console.log("contractInstance",contractInstance)
        return contractInstance
    }
  
}

