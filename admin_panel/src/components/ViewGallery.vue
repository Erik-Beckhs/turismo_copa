<template>
  <div :id="galleryID">
    <v-row>
        <v-col cols="12" sm="6" md="4" v-for="(image, key) in images" :key="key">
            <a
            :href="image.largeURL"
            :data-pswp-width="image.width"
            :data-pswp-height="image.height"
            target="_blank"
            rel="noreferrer"
            >
                <v-hover
                    v-slot="{ hover }"
                    open-delay="200"
                >
                    <v-card
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                    >
                        <v-img aspect-ratio="1"
                            class="grey lighten-2"
                            :src="image.thumbnailURL"
                        ></v-img>
                    </v-card>
                </v-hover>
            </a>        
        </v-col>
    </v-row>  
  </div>
</template>
<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
<script>
import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';
import 'photoswipe/dist/photoswipe.css';

export default {
  name: 'ViewGallery',
  props: {
    galleryID: String,
    images: Array,
  },
//   setup(props) {
//     console.log(props);
//     return {
//       imagesData: props.images,
//     };
//   },
  mounted() {
    
    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        gallery: '#' + this.$props.galleryID,
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
      this.lightbox.init();
    }
  },
  unmounted() {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },
  methods: {},
};
</script>
