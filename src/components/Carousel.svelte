<script lang="ts">
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
    overflow: hidden;
    white-space: nowrap;
    width: 628px;
    margin-top: 64px;
    margin-left: -48px;
    border: 4px solid #a5a5a5;
    border-radius: 16px;
  }
  .Carousel__button {
    height: 48px;
    width: 48px;
    margin-top: auto;
    margin-bottom: auto;
    border: 2px solid #cecaca;
    border-radius: 50%;
    font-size: 24px;
    color: #eaeaea;
    background-color: #a5a5a5;
  }
  .Carousel__button:hover {
    cursor: pointer;
  }
  .Carousel__button:disabled {
    display: none;
  }
  .Carousel__buttonWrapper {
    display: flex;
    width: 64px;
    padding-left: 8px;
    padding-right: 8px;
    background-color: #eaeaea;
  }
</style>

<div class="Carousel">
  <div class="Carousel__buttonWrapper">
    <button
      class="Carousel__button"
      on:click={handleButtonPreviousClick}
      disabled={currentId === 0}
    >
      {'<'}
    </button>
  </div>
  <img src={paints[currentId]} alt={`Рисунок ${currentId}`}/>
  <div class="Carousel__buttonWrapper">
    <button
      class="Carousel__button"
      on:click={handleButtonNextClick}
      disabled={currentId === paints.length - 1}
    >
      {'>'}
    </button>
  </div>
</div>