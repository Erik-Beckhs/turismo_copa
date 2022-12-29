<template>
  <div>
    <Sidebar :drawer="drawer" />
      <Topbar @drawerEvent="drawer = !drawer" />
      <v-main style="background: #ededed">
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
export default {
  name: "About",
  components: { Topbar, Sidebar },
  data: () => ({
    drawer: null,
  }),
  methods: {},
};
</script>
