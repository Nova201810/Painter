<script lang="ts">
  import { onMount } from 'svelte';
  import PencilSVG from 'images/pencil.svelte';
  import Canvas from '../../components/Canvas.svelte';
  import { getPencils } from '../../api/pencils';
  import { subscribeColors } from '../../store/colors';

  let colors: string[] = [];
  let currentColor: string;
  subscribeColors(value => {
    if (value.data) colors = value.data;
  });
  const handleButtonClick: svelte.JSX.MouseEventHandler<HTMLButtonElement> = (event) => {
    currentColor = event.currentTarget.value;
  };
  onMount(() => {
    if (!colors.length) getPencils();
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
  .Button__pencil {
    background: none;
    border: none;
    padding: 0;
    border: 1px solid gainsboro;
    border-radius: 8px;
    margin-left: 16px;
  }
  .Button__pencil:first-of-type {
    margin-left: 0;
  }
  .Button__pencil.Pencil-selected {
    background-color: #eceaea;
  }
</style>

<h1>Добавить новый рисунок</h1>

{#if colors.length}
  <h2>
    Выберите карандаш
    {#if currentColor}
      <span>(выбран <span style={`color: ${currentColor}`}>{currentColor}</span>)</span>
    {/if}
  </h2>
  {#each colors as color}
    <button
      class={`Button__pencil${currentColor === color ? ' Pencil-selected' : ''}`}
      value={color}
      on:click={handleButtonClick}
    >
      <PencilSVG color={color} />
    </button>
  {/each}
{:else}
  <h2>Загрузка карандашей...</h2>
{/if}

{#if currentColor}
  <h2>Нарисуйте картинку</h2>
  <Canvas fillColor={currentColor} />
{/if}