<template>
  <div
    class="relative w-36 border group cursor-pointer"
    @click="downloadFile(data)"
  >
    <div class="w-full flex items-center justify-center ratio">
      <div class="absolute flex flex-col items-center">
        <div class="w-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p class=" h-6 text-center text-base uppercase">
          {{ data.type }}
        </p>
      </div>
    </div>
    <div
      class="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-white bg-opacity-95 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
    >
      <p class="p-4 break-all text-center">{{ data.name }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'File',
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  setup() {
    const downloadFile = async file => {
      try {
        const { data, headers } = await axios.get(file.url, {
          responseType: 'blob'
        });
        const blob = new Blob([data], { type: headers['content-type'] });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = file.name;
        link.click();
        URL.revokeObjectURL(link.href);
      } catch (error) {
        console.error(error);
      }
    };

    return {
      downloadFile
    };
  }
};
</script>

<style scoped>
.ratio:before {
  content: '';
  padding-bottom: 141%;
  width: 100%;
}
</style>
