import { IsNotEmpty, IsString, IsNumber, IsDate, IsArray, IsDateString, IsEnum } from 'class-validator';
import { Category } from '../types/eventcategory.type';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty({ message: '공연 제목을 입력해주세요.' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: '공연 장소를 입력해주세요.' })
  location: string;

  @IsString()
  @IsNotEmpty({ message: '공연 소개를 입력해주세요.' })
  description: string;

  @IsNumber()
  @IsNotEmpty({ message: '공연 가격을 입력해주세요.' })
  price: number;

  @IsDateString()
  @IsNotEmpty({ message: '공연 날짜를 입력해주세요.' })
  event_showtime: Date;

  @IsNumber()
  @IsNotEmpty({ message: '상영시간을 입력해주세요.' })
  event_runtime: number;

  @IsEnum(Object.values(Category))
  @IsNotEmpty({ message: '공연 종류를 선택해주세요.' })
  category: string;

  @IsNumber()
  @IsNotEmpty({ message: '공연의 총 좌석갯수를 입력해주세요.' })
  seats: number;
}