<template>
  <div class="Notes">
    <div class="container-fluid">
      <div class="row">
        <div id="noteForm" class="col d-flex justify-content-center">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Tell me about your bug</span>
            </div>
            <form @submit.prevent="makeNote">
              <input
                v-model="newNote.Content"
                type="text"
                aria-label="new note"
                placeholder="new note"
                class="form-control"
              >
              <input
                v-model="newNote.bug"
                type="text"
                aria-label="bug description id"
                placeholder="bug description id"
                class="form-control"
              >
              <input
                v-model="newNote.creator"
                type="text"
                aria-label="name who made note"
                placeholder="name who made note"
                class="form-control"
              >
              <button type="submit">Submit the note</button>
            </form>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col d-flex justify-content-center">
          <form>
            <div @submit.prevent="makeNotes" class="form-group">
              <label for="exampleFormControlTextarea1">Enter your comments about the bug here!</label>
              <textarea class="form-control" id="bugNoteComment" rows="3"></textarea>
            </div>
            <button @click="setActiveNote">SET ACTIVE NOTE- Comment</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "notes",
  props: ["noteData"],
  data() {
    return {
      activeBugs: {},
      activeBug: {},
      activeNotes: {}
    };
  },
  mounted() {
    this.$store.dispatch("initializeNote");
  },
  computed: {
    notes() {
      return this.$store.state.notes;
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
<style>
</style>
