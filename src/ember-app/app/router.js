import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-ffffffffff-заказ-l');
  this.route('i-i-s-ffffffffff-заказ-e',
  { path: 'i-i-s-ffffffffff-заказ-e/:id' });
  this.route('i-i-s-ffffffffff-заказ-e.new',
  { path: 'i-i-s-ffffffffff-заказ-e/new' });
  this.route('i-i-s-ffffffffff-ингредиенты-l');
  this.route('i-i-s-ffffffffff-ингредиенты-e',
  { path: 'i-i-s-ffffffffff-ингредиенты-e/:id' });
  this.route('i-i-s-ffffffffff-ингредиенты-e.new',
  { path: 'i-i-s-ffffffffff-ингредиенты-e/new' });
  this.route('i-i-s-ffffffffff-напитки-l');
  this.route('i-i-s-ffffffffff-напитки-e',
  { path: 'i-i-s-ffffffffff-напитки-e/:id' });
  this.route('i-i-s-ffffffffff-напитки-e.new',
  { path: 'i-i-s-ffffffffff-напитки-e/new' });
  this.route('i-i-s-ffffffffff-проверка-денег-l');
  this.route('i-i-s-ffffffffff-проверка-денег-e',
  { path: 'i-i-s-ffffffffff-проверка-денег-e/:id' });
  this.route('i-i-s-ffffffffff-проверка-денег-e.new',
  { path: 'i-i-s-ffffffffff-проверка-денег-e/new' });
  this.route('i-i-s-ffffffffff-продукты-l');
  this.route('i-i-s-ffffffffff-продукты-e',
  { path: 'i-i-s-ffffffffff-продукты-e/:id' });
  this.route('i-i-s-ffffffffff-продукты-e.new',
  { path: 'i-i-s-ffffffffff-продукты-e/new' });
  this.route('i-i-s-ffffffffff-составы-l');
  this.route('i-i-s-ffffffffff-составы-e',
  { path: 'i-i-s-ffffffffff-составы-e/:id' });
  this.route('i-i-s-ffffffffff-составы-e.new',
  { path: 'i-i-s-ffffffffff-составы-e/new' });
  this.route('i-i-s-ffffffffff-сотрудники-l');
  this.route('i-i-s-ffffffffff-сотрудники-e',
  { path: 'i-i-s-ffffffffff-сотрудники-e/:id' });
  this.route('i-i-s-ffffffffff-сотрудники-e.new',
  { path: 'i-i-s-ffffffffff-сотрудники-e/new' });
});

export default Router;
