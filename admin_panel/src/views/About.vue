<template>
  <div>
    <Sidebar :drawer="drawer" />
      <Topbar @drawerEvent="drawer = !drawer" />
      <v-main style="background: #ededed">
        <v-sheet class="overflow-y-auto" :max-height="altura_ini_p">
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </v-sheet>
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
    altura_ini_p:500,
  }),
  mounted(){	
		this.altura_ini_p=(window.innerHeight)-64;
  },
  methods: {},
};
</script>
