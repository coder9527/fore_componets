import { Injectable } from '@angular/core';


@Injectable()
export class BaseService {

    constructor() {}


  /**
   * 图片转base64格式
   * crossOrigin：设置anonymous
   */
   public async img2base64(url, crossOrigin) {
      return await new Promise(resolve => {
          const img = new Image();
          crossOrigin && img.setAttribute('crossOrigin', crossOrigin);
          img.src = url;
          img.onload = () => {
              const c = document.createElement('canvas');
              c.width = img.naturalWidth;
              c.height = img.naturalHeight;
              const cxt = c.getContext('2d');
              cxt.drawImage(img, 0, 0);
              // 得到图片的base64编码数据
              resolve(c.toDataURL('image/png'));
          };
      });
  }

}
