import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '../../auth/auth.guard';
import { EvcsService } from '../service/evcs.service';
import { CreateEvcsDto } from '../evcs.dto';
import { Request } from 'express';

@Controller('evcs')
@UseGuards(AuthGuard)
export class EvcsController {
  constructor(private readonly evcsService: EvcsService) {}

  @Get()
  getAll() {
    return this.evcsService.getAll();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createEvcs(
    @Body() createEvcsDto: CreateEvcsDto,
    @Req() request: Request,
  ) {
    return this.evcsService.create(
      createEvcsDto,
      request.headers.authorization.split(' ')[1],
    );
  }
}
