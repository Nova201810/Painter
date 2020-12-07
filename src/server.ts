import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const delay = async (duration = 1500) => new Promise(resolve => setTimeout(resolve, duration));

const server = express();

server.use(express.json());

if (dev) {
	server.post('/api/pencils', async (req, res) => {
		const pencilsCount = req.body.count;
		if (pencilsCount) {
			const colors = ['gray', 'red', 'green', 'blue', 'orange', 'black'] as const;
			await delay();
			res.json({
				code: 200,
				data: {
					colors: colors.slice(0, pencilsCount)
				}
			});
		}
	})
}

server.use(
	compression({ threshold: 0 }),
	sirv('static', { dev }),
	sapper.middleware()
);

server.listen(PORT, () => {
	console.info(`Ready on port ${PORT}`);
});
