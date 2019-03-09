<template>
  <div class="Notes row"></div>
</template>

<script>
export default {
  name: "notes",
  props: [],
  data() {
    return {
      activeBugs: {},
      activeNotes: {}
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
    },
    setActiveNote(notes) {
      this.activeNote = notes;
    }
  },
  components: {}
};
</script>