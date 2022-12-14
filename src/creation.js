import { Observable, fromEvent } from 'rxjs'
import { map } from 'rxjs/internal/operators/map'

// const stream$ = new Observable((observer) => {
//   observer.next('first')
//   setTimeout(() => {
//     observer.error('error')
//   }, 500)
// })

// stream$.subscribe({
//   next(el) {
//     console.log(el)
//   },

//   error(err) {
//     console.log(err)
//   },
// })

fromEvent(document.querySelector('canvas'), 'mousemove')
  .pipe(
    map((e) => ({
      x: e.offsetX,
      y: e.offsetY,
      ctx: e.target.getContext('2d'),
    }))
  )
  .subscribe((res) => {
    res.ctx.fillRect(res.x, res.y, 2, 2)
  })

fromEvent(document.getElementById('clear'), 'click').subscribe(() => {
  const canvas = document.querySelector('canvas')
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
})
