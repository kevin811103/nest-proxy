import { Injectable } from '@nestjs/common';
import axios from 'axios';

import * as https from 'https';

@Injectable()
export class AppService {

  async proxy(proxyUrl, header, url, method) {
    // At request level
    const agent = new https.Agent({
      rejectUnauthorized: false
    });
    const response = await axios.get(proxyUrl + url, {
      withCredentials: false,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Authorization': `${header.authorization}`,
        'Realm': `${header.realm}`
        // 其他配置...
      },
      httpsAgent: agent
    });

    console.log('response.data', response.data);
    // 判斷到底有多少頁 然後組合出他要的連結
    // try {


    // } catch (error) {
    //   console.log("error:", error)

    // }

    return response.data;
  }

  async getApi() {

  }
  async postApi() {

  }


}


