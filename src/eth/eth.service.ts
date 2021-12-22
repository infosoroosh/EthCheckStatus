import { Injectable } from '@nestjs/common';
import { Eth } from './eth.interfaces'


//Infura is server to get Eth Network ethDataModel
//this is url + apikey for use this api
const apiUrl = "https://mainnet.infura.io/v3/80f5e192b7d441b0aeb5131ab4e374f1"

@Injectable()
export class EthService {


    async checkTransaction(transactionHash: string): Promise<Eth> {

        //get transaction data for passed tokens
        var Web3 = require('web3');
        var web3 = new Web3(new Web3.providers.HttpProvider(apiUrl));
        var Transaction = await web3.eth.getTransaction(transactionHash);

        if (Transaction) {

            //pass hash code from transaction to get final status transaction result
            var TransactionData = await web3.eth.getTransactionReceipt(Transaction.hash);

            return {
                status: `${TransactionData.status ? "Success" : "Faile"}`,
                blockNumber: TransactionData.blockNumber,
                transactionHash: transactionHash
            };
        } else {
            return {
                status: "Transaction Not Found",
                blockNumber: -1,
                transactionHash: transactionHash
            };
        }

    }
}
