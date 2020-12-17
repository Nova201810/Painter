<script lang="ts">
  import LeftArrow from 'images/left-arrow.svelte';
  import RightArrow from 'images/right-arrow.svelte';

  export let paints: any[];

  let currentId = 0;
  const handleButtonPreviousClick = () => {
    currentId -= 1;
  };
  const handleButtonNextClick = () => {
    currentId += 1;
  };
</script>

<style>
  .Carousel {
    display: flex;
    width: 628px;
    margin-top: 64px;
    margin-left: -64px;
  }
  .Carousel__button {
    height: 64px;
    width: 64px;
    margin: auto 16px;
    padding: 0;
    border: 0;
    background-color: inherit;
  }
  .Carousel__button:hover {
    cursor: pointer;
  }
  .Carousel__button:disabled {
    visibility: hidden;
  }
  .Carousel__image {
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  }
</style>

<div class="Carousel">
  <button
    class="Carousel__button"
    on:click={handleButtonPreviousClick}
    disabled={currentId === 0}
  >
    <LeftArrow />
  </button>
  <img class="Carousel__image" src={paints[currentId]} alt={`Рисунок ${currentId}`}/>
  <button
    class="Carousel__button"
    on:click={handleButtonNextClick}
    disabled={currentId === paints.length - 1}
  >
    <RightArrow />
  </button>
</div>