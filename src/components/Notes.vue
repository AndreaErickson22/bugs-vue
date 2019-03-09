<template>
  <div class="Notes row"></div>
</template>

<script>
export default {
  name: "notes",
  props: [],
  data() {
    return {
      activeBugs: {}
    };
  },
  computed: {
    notes() {
      return this.$store.state;
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