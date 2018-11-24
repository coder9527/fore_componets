import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const flyInTop = trigger('flyInTop', [
    // state('out',style({opacity: 1,transform: 'translate(0px)'})),
    // 平移为0
    state('in', style({opacity: 1, transform: 'translate(0px)'})),
    transition('*=>in', animate(1000, keyframes([
      style({opacity: 0, transform: 'translateY(-450px)', offset: 0}),
      style({opacity: 0.4, transform: 'translateY(-250px)', offset: 0.1}),
      style({opacity: 0.6, transform: 'translateY(-150px)', offset: 0.2}),
      style({opacity: 0.8, transform: 'translateY(-25px)',  offset: 0.3}),
      style({opacity: 0.9, transform: 'translateY(5px)',  offset: 0.7}), // 弹动效果
      style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      ]))),
    transition('in=>*',  animate(1000, keyframes([
      style({opacity: 1, transform: 'translateY(0)', offset: 0}),
      style({opacity: 0.9, transform: 'translateY(5px)', offset: 0.1}),
      style({opacity: 0.8, transform: 'translateY(-25px)', offset: 0.2}),
      style({opacity: 0.6, transform: 'translateY(-150px)',  offset: 0.3}),
      style({opacity: 0.4, transform: 'translateY(-250px)',  offset: 0.7}), // 弹动效果 0 0.4 0.6 0.8 0.9 1
      style({opacity: 0, transform: 'translateY(-450px)',     offset: 1.0})//-450 -250 -150 -25 5 0
    ]))),

    // 进场
    /*
    transition('void=>*', animate(1000, keyframes([
      style({opacity: 0, transform: 'translateX(-450px)', offset: 0}),
      style({opacity: 0.2, transform: 'translateX(-250px)', offset: 0.1}),
      style({opacity: 0.4, transform: 'translateX(-150px)', offset: 0.2}),
      style({opacity: 0.6, transform: 'translateX(-25px)',  offset: 0.3}),
      style({opacity: 0.8, transform: 'translateX(5px)',  offset: 0.7}),//弹动效果
      style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))
    ),*/
    // 出场
    /*
    transition('*=>void',  animate(300, keyframes([
      style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
      style({opacity: 0.7, transform: 'translateX(-25px)', offset: 0.7}),
      style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
    ])))*/

]);
