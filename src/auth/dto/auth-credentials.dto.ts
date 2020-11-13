import { Matches } from 'class-validator';
import { MaxLength } from 'class-validator/types/decorator/string/MaxLength';
import { MinLength } from 'class-validator/types/decorator/string/MinLength';
import { IsString } from 'class-validator/types/decorator/typechecker/IsString';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
  password: string;
}
