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
                v-model="newNote.creator"
                type="text"
                aria-label="name who made note"
                placeholder="name who made note"
                class="form-control"
              >
              <button type="submit-note">Submit the note</button>
            </form>
          </div>
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
      activeBugs: [],
      activeBug: {},
      activeNotes: {},
      newNote: {
        content: "",
        creator: "",
        bug: this.activeBug._id
      }
    };
  },
  mounted() {
    let id = this.$route.params.id;
    this.$store.dispatch("initializeNote", noteData.bug);
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
    },
    makeNote() {
      this.$store.dispatch("addNote", this.newNote);
    }
  },
  components: {}
};
</script>
<style>
</style>
