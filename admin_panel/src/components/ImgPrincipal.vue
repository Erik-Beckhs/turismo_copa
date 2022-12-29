<template>
  <div>
    <div v-if="estado_img==1" class="imagePreviewWrapper" :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage"> </div>
    <input ref="fileInput" type="file" @input="pickFile">
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
    width: 200px;
    height: 200px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}
</style>