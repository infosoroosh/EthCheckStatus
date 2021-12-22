import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EthController } from './eth/eth.controller';
import { EthService } from './eth/eth.service';

@Module({
  imports: [],
  controllers: [AppController, EthController],
  providers: [AppService, EthService],
})
export class AppModule {}
