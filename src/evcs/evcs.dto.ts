import { IsLatitude, IsLongitude, IsNotEmpty } from 'class-validator';
import { User } from '../users/user.entity';

export class CreateEvcsDto {
  @IsNotEmpty()
  @IsLongitude()
  longitude: number;

  @IsNotEmpty()
  @IsLatitude()
  latitude: number;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  price: number;

  user: User;
}
