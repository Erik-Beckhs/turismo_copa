<template>
  <div>
    <div v-if="estado_img==1" class="imagePreviewWrapper" :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage"> </div>
    <v-row class="my-1">
    <v-spacer></v-spacer>
      <label for="selecciona" class="lblSelecciona">Seleccionar Imagen <v-icon color="white">mdi-cloud-upload</v-icon></label>
      <input ref="fileInput" id="selecciona" class="seleccionaImagen" type="file" @input="pickFile">
    </v-row>
  </div>
</template>
 
<script>
export default {
  name:'ImgPrincipal',
  data() {
      return {
        previewImage: null,
        estado_img:0
      };
    },
  methods: {
      selectImage () {
          this.$refs.fileInput.click()
      },
      pickFile () {
        let input = this.$refs.fileInput
        let file = input.files
        if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            this.previewImage = e.target.result;
            //console.log(this.previewImage);
            this.$emit('imagen', this.previewImage);
            this.estado_img = 1;
            this.$emit('estado', this.estado_img);
          }
          reader.readAsDataURL(file[0])
          this.$emit('input', file[0])
        }
      }
  }
}
</script>
 
<style>
.imagePreviewWrapper {
    width: 400px;
    height: 400px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}

</style>