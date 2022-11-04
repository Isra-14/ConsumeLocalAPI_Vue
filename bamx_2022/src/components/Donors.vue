<script>
import axios from 'axios'

export default {
  name: 'Donors',
  data() {
    return {
      donors: {}
    }
  },
  mounted() {
    this.getDonors()
  },
  methods: {
    getDonors() {
      axios.get('http://localhost:3000/donors')
        .then(response => {
          this.donors = response.data
        })
        .catch(()=>{
          console.log('Something went wrong')
        })
    }
  }
}
</script>

<template>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Product</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="donor in donors" :key="donor.id">
          <td>{{ donor.id }}</td>
          <td>{{ donor.name }}</td>
          <td>{{ donor.last_name }}</td>
          <td>{{ donor.phone }}</td>
          <td>{{ donor.product }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
</style>