import { createStore } from 'redux'
import todoApp from './reducers'
import { newTodo } from './actions'
let store = createStore(todoApp)

console.log(store.getState())

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

store.dispatch(newTodo('Belajar dasar redux'))
store.dispatch(newTodo('Belajar hal baru'))
store.dispatch(newTodo('Belajar 3 komponen dasar'))