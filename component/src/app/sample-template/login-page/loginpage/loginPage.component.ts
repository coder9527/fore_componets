import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#mpanel1').slideVerify({
            type : 1,   //类型
            vOffset : 5,  //误差量，根据需求自行调整
            barSize : {
              width : '100%',
              height : '40px',
            },
            ready : function() {
          },
            success : function() {
              alert('验证成功，添加你自己的代码！');
              //......后续操作
            },
            error : function() {
//              alert('验证失败！');
            }
            
        });
  }

}
