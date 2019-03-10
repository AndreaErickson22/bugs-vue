<template>
  <div class="Bug Comment">
    <div class="col-12 d-flex justify-content-center">
      <div class="home container-fluid">
        <div class="row">
          <div class="col d-flex justify-content-center">
            <activeBug>This is the Active Bug</activeBug>
          </div>
        </div>
      </div>
      <!-- active bug above -->
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h1>This is the area for comments</h1>
          <!-- <results></results> -->
        </div>
      </div>
    </div>
    <!-- <details-view></details-view> -->
  </div>
</template>

<script>
import Bugs from "@/components/Bugs.vue";
import Notes from "@/components/Notes.vue";
export default {
  name: "details",
  props: [],
  data() {
    return {
      activeBug: {
        creator: "",
        creator: "",
        description: "",
        title: "",
        notes: ""
      }
    };
  },
  computed: {
    activeBug() {
      return this.$store.state.acitveBug._id;
    }
  },
  methods: {
    addNote() {
      this.$store.dispatch("addNote", this.newNote);
    }
  },
  components: {
    Bugs,
    Notes
  }
};
</script>