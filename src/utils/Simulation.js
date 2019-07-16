import sample from './sample'
import next from './next'
import { db } from '../firebase'

export default class Simulation {
  constructor(ms) {
    this.interval = null
    this.ms = ms || 1000
  }

  start() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        db.ref('loads').once('value', snapshot => {
          const values = Object.values(snapshot.val())
          const target = sample(values)
          const key = sample(['status', 'locked'])
          const value = (key === 'status') ? next(['available', 'booked'], target.status) : !target.locked

          db.ref(`loads/${target.id}`).update({ [key]: value })
          .then(_snapshot => {
            console.info(`simulated update: ${target.id}: ${key}: ${value}`)
          })
        })
      }, this.ms);
      return this.interval
    }
  }

  stop() {
    window.location.reload()
  }
}
