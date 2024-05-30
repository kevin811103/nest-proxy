import { Body, Controller, Get, Res, Request, Post, Param, Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }



  @Get('*')
  @Post('*')
  async proxy(@Request() req, @Body() body, @Param() params: any, @Res() response, @Headers() headers: any): Promise<any> {
    console.log('req:', req);
    console.log('req.url', req.url);
    console.log('req.method', req.method);
    const proxyUrl = 'your proxy api'
    // console.log('body:', body);
    // console.log('params:', params);
    // console.log('headers:', headers);
    let data = null;
    data = await this.appService.proxy(proxyUrl, headers, req.url, req.method);
    console.log('data:', data);


    return response.status(200).json({ data })
  }

}
