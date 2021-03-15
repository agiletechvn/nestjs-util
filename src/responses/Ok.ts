import { ApiProperty } from "@nestjs/swagger";

export class Ok {
  @ApiProperty()
  public message: string;

  constructor(message: string = "ok") {
    this.message = message;
  }
}
