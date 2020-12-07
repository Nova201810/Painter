<script lang="ts">
	import lead from 'images/lead.png';
	import { ROUTES } from '../../constants/routes';
</script>

<style>
	figure {
		text-align: center;
		margin: 0 auto;
	}
	
	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	h3 {
		margin: 1em auto;
		white-space: nowrap;
	}

	.Info {
		margin-top: 4em;
	}
</style>

<figure>
	<img alt="Рисунок карандашей" src={lead}>
	<figcaption><h2>Приветствуем вас в сервисе онлайн рисования!</h2></figcaption>
</figure>

<ul class="Info">
	<li><h3>Вы можете рисовать в разделе <a href={ROUTES.NEW}>Добавить рисунок</a></h3></li>
	<li><h3>Сохранённые работы вы можете посмотреть в разделе <a href={ROUTES.PICTURES}>Мои рисунки</a></h3></li>
</ul>