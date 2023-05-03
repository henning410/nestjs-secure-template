import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../users/user.entity';
import { Repository } from 'typeorm';
import { Evcs } from '../evcs.entity';
import { CreateEvcsDto } from '../evcs.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class EvcsService {
  constructor(
    @InjectRepository(Evcs) private readonly evcsRepository: Repository<Evcs>,
    private jwtService: JwtService,
  ) {}

  getAll() {
    return this.evcsRepository.find();
  }

  async create(createEvcsDto: CreateEvcsDto, jwtToken: string) {
    const decoded = this.jwtService.decode(jwtToken);
    const user = new User();
    user.id = Number(decoded.sub);
    createEvcsDto.user = user;
    return await this.evcsRepository.save(createEvcsDto);
  }
}
