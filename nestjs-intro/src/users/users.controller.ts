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
  @Get(':id')
  public getUsers(
    //ParseIntPipe is a pipe that will parse the int value of the query parameter
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit', ParseIntPipe) limit?: any,
  ) {
    console.log(id);
    console.log(limit);

    return `The user ${id} has a limit of ${limit}`;
  }

  @Post()
  public createUsers(
    @Body() body: any,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
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
