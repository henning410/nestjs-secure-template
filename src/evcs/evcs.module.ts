import { Module } from '@nestjs/common';
import { EvcsController } from './controller/evcs.controller';
import { EvcsService } from './service/evcs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evcs } from './evcs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Evcs])],
  controllers: [EvcsController],
  providers: [EvcsService],
  exports: [EvcsService],
})
export class EvcsModule {}
