<template>
  <Navigation>
    <template v-slot:default>Results</template>
    <template v-slot:right>
      <router-link
        to="/"
        class="py-4 px-6 mr-2 border bg-white text-xl capitalize hover:bg-gray-100"
      >
        Start over
      </router-link>
    </template>
  </Navigation>
  <div class="my-24">
    <h2 class="text-2xl">Results</h2>
    <div class="mt-10 grid grid-rows-1 auto-cols-min gap-x-10 overflow-x-auto">
      <ResultTile
        :key="`result-${index}`"
        v-for="(result, index) in results"
        :data="result"
        class="row-start-1"
      />
    </div>
  </div>
  <div>
    <h2 class="text-2xl">Other assets [files as pdf / pptx etc]</h2>
    <div
      class="mt-10 pb-5 grid grid-rows-1 auto-cols-min gap-x-10 overflow-x-auto"
      data-scroll
      style="scroll-behavior: smooth"
      @wheel.passive="handleScroll"
    >
      <FileTile
        :key="`file-${index}`"
        v-for="(file, index) in files"
        :data="file"
        class="row-start-1"
      />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import FileTile from '@/components/FileTile';
import ResultTile from '@/components/ResultTile';

export default {
  name: 'Result',
  components: {
    Navigation,
    FileTile,
    ResultTile
  },

  setup() {
    const results = [
      {
        title: 'See Results',
        link: '/product/1',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>`
      },
      {
        title: 'Share',
        link: '#',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>`
      }
    ];
    const files = [
      {
        url: '/01.png',
        name: 'illustration',
        type: 'png'
      },
      {
        url: '/02.png',
        name: 'illustration_2',
        type: 'png'
      },
      {
        url: '/03.png',
        name: 'illustration_3',
        type: 'png'
      },
      {
        url: '/CV_Niek_van_Sleeuwen.pdf',
        name: 'CV_niek_van_sleeuwen',
        type: 'pdf'
      },
      { url: '/iconSpritesheet24.svg', name: 'icons', type: 'svg' },
      {
        url: '/live.techno-mythopoeia.com_.png',
        name: 'techno-mythopoeia',
        type: 'png'
      },
      {
        url: '/live.techno-mythopoeia.com_.png',
        name: 'techno-mythopoeia_2',
        type: 'png'
      },
      {
        url: '/live.techno-mythopoeia.com_.png',
        name: 'techno-mythopoeia_3',
        type: 'png'
      }
    ];

    const findScrollEl = el => {
      const isScrollEl = el.hasAttribute('data-scroll');

      if (isScrollEl) {
        return el;
      }

      return findScrollEl(el.parentNode);
    };

    const handleScroll = e => {
      // check for horizontal scroll
      if (e.deltaX !== 0) return;

      const scrollEl = findScrollEl(e.target);
      if (navigator.userAgent === 'Mac') {
        scrollEl.scrollLeft -= e.deltaY;
      } else {
        scrollEl.scrollLeft += e.deltaY;
      }
    };

    return {
      handleScroll,
      results,
      files
    };
  }
};
</script>
