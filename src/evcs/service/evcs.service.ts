import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../users/user.entity';
import { Repository } from 'typeorm';
import { Evcs } from '../evcs.entity';
import { CreateUserDto } from '../../users/user.dto';
import { CreateEvcsDto } from '../evcs.dto';

@Injectable()
export class EvcsService {
  constructor(
    @InjectRepository(Evcs) private readonly evcsRepository: Repository<Evcs>,
  ) {}

  getAll() {
    return this.evcsRepository.find();
  }

  async create(createEvcsDto: CreateEvcsDto) {
    return await this.evcsRepository.save(createEvcsDto);
  }
}
