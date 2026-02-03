import {
    Body,
    Controller,
    Delete,
    Get,
    Headers,
    Ip,
    Param,
    ParseIntPipe,
    Post,
    Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  //this is a GET request in NestJS, we use the @Get() decorator to classify it as a GET request
  @Get(':id')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Param('optional') optional?: number,
    @Query('limit', ParseIntPipe) limit?: number,
  ) {
    console.log(limit);
    console.log(optional);
    if (optional) {
      return `ID is ${id} and optional parameter is ${optional}`;
    } else {
      return `ID is ${id} and no optional parameter`;
    }
  }

  @Post()
  public createUsers(
    @Body() body: any,
    @Headers() headers: any,
    @Ip() ip: any, //Ip can give us the ip of the sender
  ) {
    //here we can use the Body decorator, where we can extract the body of a request
    console.log(body);
    console.log(headers);
    console.log(ip);
    return 'Created a user!';
  }

  @Delete()
  public deleteUsers() {
    return 'Deleted a user!';
  }
}
