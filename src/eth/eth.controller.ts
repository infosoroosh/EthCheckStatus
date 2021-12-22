import { Controller , Post ,Body} from '@nestjs/common';
import {EthDto} from './eth.dto'
import {EthService} from './eth.service'
import {Eth} from './eth.interfaces'

@Controller('eth')
export class EthController {
    constructor(private readonly ethServices:EthService){

    }
    @Post()
    async checkToken(@Body() ethDataModel:EthDto):Promise<Eth> {
        return this.ethServices.checkTransaction(ethDataModel.transactionHash);
    }
}
