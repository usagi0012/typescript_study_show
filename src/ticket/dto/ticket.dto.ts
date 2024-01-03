import { IsNotEmpty, IsNumber } from 'class-validator';

export class TicketDto {
  @IsNumber()
  @IsNotEmpty({ message: '예매할 좌석 수를 입력해주세요.' })
  seats_quantity: number;
}