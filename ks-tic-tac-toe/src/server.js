import 'babel-polyfill';
import wixRenderer from 'wix-renderer';
import wixRunMode from 'wix-run-mode';
import wixExpressRenderingModel from 'wix-express-rendering-model';
import wixExpressCsrf from 'wix-express-csrf';
import wixExpressRequireHttps from 'wix-express-require-https';

module.exports = (app, context) => {
  const config = context.config.load('ks-tic-tac-toe');

  app.use(wixExpressCsrf());
  app.use(wixExpressRequireHttps);

  app.post('/api/leaderboard', (req, res) => res.end());

  app.get('/api/leaderboard', (req, res) => res.send([{name: 'Shilo', score: 1}]));

  app.get('/', wrapAsync(async (req, res) => {
    const templatePath = './src/index.ejs';
    const data = {title: 'Wix Full Stack Project Boilerplate'};

    const renderModel = await wixExpressRenderingModel.generate(req, config);
    const html = await wixRenderer.render(templatePath, renderModel, data, wixRunMode.isProduction());

    res.send(html);
  }));

  return app;
};

function wrapAsync(asyncFn) {
  return (req, res, next) => asyncFn(req, res, next).catch(next);
}
