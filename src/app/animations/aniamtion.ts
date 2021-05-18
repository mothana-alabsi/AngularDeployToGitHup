import { animate, animation, keyframes, style, transition, trigger, useAnimation } from "@angular/animations";
export let leftbounes = animation([
  animate("0.5s ease-out", keyframes([
    style({ backgroundColor: "red", offset: 0 }),
    style({ backgroundColor: "blue", offset: 0.2 }),
    style({ backgroundColor: "orange", offset: 0.3 }),
    style({ backgroundColor: "black", offset: 1 })
  ]))
])
export let slides =
  trigger("slides", [
    transition(':enter', [

      style({ transform: 'translateX(-10px)' }),
      animate(550)
    ]),

    transition(':leave', [

          useAnimation(leftbounes)

    ])

  ])
export let fade =
  trigger("fade", [
    transition(':enter ,:leave', [

      animate(1000, style({ opacity: 0 }))
    ])
  ])
export let aimatein = animation([
  style({
    opacity: 0,
    backgroundColor: 'red'
  }),
  animate('{{ second }} { { ease } }')],
{
  params: { second: '3s' , ease : 'ease-out' }
})



