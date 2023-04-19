import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CreateUserDto} from "../user.dto";
import {User} from "../user.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) {
    }

    createUser(createUserDto: CreateUserDto) {
        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
    }

    findUsersById(id: number) {
        //return this.userRepository.findOne(id);
    }

    async findOne(): Promise<User | undefined> {
    return {
            "id": 1,
            "username": "test",
            "email": "test@test.com",
            "password": "12345678"
        };
    }

    getUsers() {
        return this.userRepository.find();
    }

}