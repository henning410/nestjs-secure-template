import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../user.dto';
import { AuthGuard } from '../../auth/auth.guard';
import { UsersService } from '../service/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('id/:id')
  findUsersById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOneById(id);
  }

  @Post('register')
  @UsePipes(ValidationPipe)
  async createUsers(@Res() res, @Body() createUserDto: CreateUserDto) {
    if (await this.userService.findOneByMail(createUserDto.email)) {
      return res.status(HttpStatus.OK).json({
        message: 'User already exists',
      });
    } else {
      const user = await this.userService.createUser(createUserDto);
      return res.status(HttpStatus.OK).json({
        user,
      });
    }
  }
}
