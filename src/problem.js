import { interval } from 'rxjs'
import { filter } from 'rxjs/internal/operators/filter'
import { map } from 'rxjs/internal/operators/map'
import { scan } from 'rxjs/internal/operators/scan'
import { take } from 'rxjs/internal/operators/take'

const btn = document.getElementById('interval')
const rxjsBtn = document.getElementById('rxjs')
const display = document.querySelector('#problem .result')

const people = [
  { name: 'Vladilen', age: 25 },
  { name: 'Elena', age: 17 },
  { name: 'Ivan', age: 18 },
  { name: 'Igor', age: 14 },
  { name: 'Lisa', age: 32 },
  { name: 'Irina', age: 23 },
  { name: 'Oleg', age: 20 },
]

btn.addEventListener('click', () => {
  let i = 0
  const canDrink = []
  btn.disabled = true

  const inter = setInterval(() => {
    if (people[i]) {
      if (people[i].age >= 18) {
        canDrink.push(people[i].name)
      }
      i++

      display.textContent = canDrink.join(' ')
    } else {
      clearInterval(inter)
      btn.disabled = false
    }
  }, 500)
})

rxjsBtn.addEventListener('click', () => {
  rxjsBtn.disabled = true
  interval(500)
    .pipe(
      take(people.length),
      filter((i) => people[i].age >= 18),
      map((i) => people[i].name),
      scan((acc, i) => acc.concat(i), [])
    )
    .subscribe(
      (res) => {
        display.textContent = res.join(' ')
      },
      null,
      () => {
        rxjsBtn.disabled = false
      }
    )
})
