export const state = () => ({
  task: []
})

export const mutations = {
  ADD_TASK(state, task) {
    // state.tasks = [task, ...state.tasks]
    state.tasks = [{ content: task, done: false}, ...state.tasks]
  },
  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1)
  },
  TOGGLE_TASK(state, task) {
    task.done = !task.done;
  }

}
// export const actions = {

// }
// export const getters = {

// }
// export const modules = {

// }
