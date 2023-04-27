import { IsEmail, IsLatitude, IsLongitude, IsNotEmpty } from 'class-validator';

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
}
