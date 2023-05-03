import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '../../auth/auth.guard';
import { EvcsService } from '../service/evcs.service';
import { CreateEvcsDto } from '../evcs.dto';

@Controller('evcs')
export class EvcsController {
  constructor(private readonly evcsService: EvcsService) {}

  @UseGuards(AuthGuard)
  @Get()
  getAll() {
    return this.evcsService.getAll();
  }

  @UseGuards(AuthGuard)
  @Post()
  @UsePipes(ValidationPipe)
  async createUsers(@Body() createEvcsDto: CreateEvcsDto) {
    console.log('RECEOVED');
    return this.evcsService.create(createEvcsDto);
  }
}
