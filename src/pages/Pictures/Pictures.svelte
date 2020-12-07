<script lang="ts">
  import Carousel from '../../components/Carousel.svelte';
  import { subscribePictures } from '../../store/pictures';
  let paints = [];
  subscribePictures(value => {
    if (value.data) paints = value.data;
  });
</script>

<style>
  h1 {
    font-weight: 800;
  }
  h2 {
    margin-top: 48px;
    margin-bottom: 24px;
    font-weight: 600;
  }
</style>

<h1>Мои рисунки</h1>
{#if paints.length}
  <Carousel paints={paints}/>
{:else}
  <h2>У вас нет рисунков</h2>
{/if}
