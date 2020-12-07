<script lang="ts">
  import { onMount } from 'svelte';
  import { canvasToPNG } from '../helpers/canvasToPNG';
  import { setPicturesData } from '../store/pictures';

  export let fillColor: string;
  let canvasElement: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let actionButtons: HTMLDivElement;
  let hasPaint = false;
  let timer = null;
  const ANIMATION_TIME = 3000;
  onMount(() => {
    ctx = canvasElement.getContext('2d');
    ctx.beginPath();
    actionButtons.scrollIntoView();
    return () => {
      if (timer) clearTimeout(timer);
      ctx.closePath();
    };
  });
  const handeFillColorChange = (node, color) => {
    return {
      update() {
        ctx.closePath();
        ctx.beginPath();
      }
    };
  };
	const handleMouseMove = (event: MouseEvent) => {
    const { left, top } = canvasElement.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const mouseY = event.clientY - top;
    if (event.buttons) {
      ctx.lineTo(mouseX, mouseY);
      hasPaint = true;
    } else {
      ctx.moveTo(mouseX, mouseY);
    }
    ctx.strokeStyle = fillColor;
    ctx.stroke();
  };
  const handleCanvasClear = () => {
    ctx.closePath();
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    hasPaint = false;
    ctx.beginPath();
  };
  const handleCanvasSave = () => {
    const png = canvasToPNG(canvasElement);
    setPicturesData(png);
    handleCanvasClear();
    timer = setTimeout(() => { timer = null }, ANIMATION_TIME)
  };
</script>

<style>
  canvas {
    border: 1px solid;
  }
  .Canvas__actions {
    display: flex;
    width: 500px;
    justify-content: space-between;
    margin-top: 16px;
  }
  .Canvas__actions_button {
    width: 160px;
    height: 48px;
    border: 2px solid;
    border-radius: 4px;
    font-size: 18px;
    line-height: 26px;
  }
  .Canvas__actions_button.Button-cancel {
    border-color: #ff8282;
    background-color: #ff000026;
    color: red;
  }
  .Canvas__actions_button.Button-save {
    border-color: #65c366;
    background-color:#00ff1326;
    color: green;
  }
  .Canvas__actions_button:hover {
    cursor: pointer;
  }
  .Canvas__actions_button:disabled {
    cursor: default;
    color: gray;
    border-color: gray;
  }
  .Canvas__saveContainer {
    position: relative;
  }
  .Canvas__label {
    position: absolute;
    top: 0;
    left: 176px;
    font-size: 18px;
    line-height: 26px;
    color: #65c366;
  }
</style>

<canvas
  width={500}
  height={500}
  bind:this={canvasElement}
  on:mousemove={handleMouseMove}
  use:handeFillColorChange={fillColor}
/>
<div class="Canvas__actions" bind:this={actionButtons}>
  <button
    class="Canvas__actions_button Button-cancel"
    disabled={!hasPaint}
    on:click={handleCanvasClear}
  >
    Очистить
  </button>
  <div class="Canvas__saveContainer">
    <button
      class="Canvas__actions_button Button-save"
      disabled={!hasPaint}
      on:click={handleCanvasSave}
    >
      Сохранить
    </button>
    {#if timer}
      <div class="Canvas__label">Рисунок сохранён</div>
    {/if}
  </div>
</div>