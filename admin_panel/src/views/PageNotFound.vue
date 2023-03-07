<template>
    <div>
        <v-container>
              <v-card
                    class="mx-auto pa-10 mt-16"
                    max-width="700"
                    outlined
                >
                    <v-list-item three-line>
                    <v-list-item-content>
                        <div class="text-overline mb-4">
                        COPACABANA SOMOS TU DESTINO
                        </div>
                        <v-list-item-title class="text-h5 mb-1">
                        Pagina No Encontrada
                        </v-list-item-title>
                        <v-list-item-subtitle>Lo sentimos, la página que buscas no ha sido encontrada</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar
                        tile
                        size="250"
                    >
                    <v-img src="@/assets/img/escudo.png" alt="Copacabana">
                    </v-img>
                    </v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions class="mt-10">
                    <router-link class="underline-none" to="/" v-slot="{ navigate }">
                        <v-btn
                            rounded
                            color="primary"
                            dark
                            class="mx-auto"
                            @click="navigate"
                        >
                            Volver a Inicio
                        </v-btn>
                    </router-link>
                    
                    </v-card-actions>
                </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'PageNotFound',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

</style>