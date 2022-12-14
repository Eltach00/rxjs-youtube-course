import { fromEvent, interval } from 'rxjs'
import { map, tap, take } from 'rxjs/operators'

fromEvent(document, 'click').subscribe(
  interval(300)
    .pipe(take(5))
    .subscribe({
      next(v) {
        console.log(v)
      },
      complete() {
        console.log('complete')
      },
    })
)
