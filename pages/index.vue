<template>
<main>
  <h1>Task Board</h1>
  <p>Create of list of tasks</p>
  <div class="create-new">
    <input type="text" v-model="newTask" placeholder="Add a new task">
  </div>
</main>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
