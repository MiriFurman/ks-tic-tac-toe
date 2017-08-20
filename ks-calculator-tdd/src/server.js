import 'babel-polyfill';
import bodyParser from 'body-parser';
import wixRenderer from 'wix-renderer';
import wixRunMode from 'wix-run-mode';
import wixExpressRenderingModel from 'wix-express-rendering-model';
import wixExpressCsrf from 'wix-express-csrf';
import wixExpressRequireHttps from 'wix-express-require-https';

module.exports = (app, context) => {
  const config = context.config.load('ks-calculator-tdd');
  const calcs = [];
  app.use(wixExpressCsrf());
  app.use(wixExpressRequireHttps);

  app.post('/api/calcs', bodyParser.json(), (req, res) => {
    calcs.push(req.body.calc);
    res.end();
  });

  app.get('/api/calcs', (req, res) => {
    setTimeout(() => res.send(calcs), 1000);
  });

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
