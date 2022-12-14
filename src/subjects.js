import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs'

document.addEventListener('click', () => {
  const stream$ = new BehaviorSubject()

  stream$.next('hello')
  stream$.subscribe((v) => console.log(v))
})
