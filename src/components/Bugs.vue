<template>
  <div class="Bugs">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bug in bugs">
          <th scope="row">•</th>
          <td>{{bug.title}}</td>
          <td>{{bug.description}}</td>
          <td>{{bug.creator}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Bugs",
  props: {},
  data() {
    return {
      activeBug: {}
    };
  },
  mounted() {
    this.$store.dispatch("initialize");
  },
  //computed is talking to the state
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  methods: {
    setActiveBug(bugs) {
      this.activeBug = bugs;
    }
  },
  components: {}
};
</script>