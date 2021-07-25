<template>
  <div class="home">
  <list-create-form></list-create-form>
  <list-table> </list-table>
  </div>
</template>

<script>
// @ is an alias to /src
import ListTable from '@/components/ListTable.vue'
import ListCreateForm from '@/components/ListCreateForm.vue'

export default {
  name: 'Home',
  components: {
    ListTable,
    ListCreateForm
  }
}
</script>
