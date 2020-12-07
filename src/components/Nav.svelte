<script lang="ts">
	import { ROUTES } from '../constants/routes';

	export let segment: string;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href={ROUTES.INDEX}>Главная</a></li>
	<li><a aria-current="{segment === ROUTES.NEW ? 'page' : undefined}" href={ROUTES.NEW}>Добавить рисунок</a></li>
	<li><a aria-current="{segment === ROUTES.PICTURES ? 'page' : undefined}" href={ROUTES.PICTURES}>Мои рисунки</a></li>
	</ul>
</nav>
