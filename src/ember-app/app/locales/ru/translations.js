import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISFfffffffffЗаказLForm from './forms/i-i-s-ffffffffff-заказ-l';
import IISFfffffffffИнгредиентыLForm from './forms/i-i-s-ffffffffff-ингредиенты-l';
import IISFfffffffffНапиткиLForm from './forms/i-i-s-ffffffffff-напитки-l';
import IISFfffffffffПроверкаДенегLForm from './forms/i-i-s-ffffffffff-проверка-денег-l';
import IISFfffffffffПродуктыLForm from './forms/i-i-s-ffffffffff-продукты-l';
import IISFfffffffffСоставыLForm from './forms/i-i-s-ffffffffff-составы-l';
import IISFfffffffffСотрудникиLForm from './forms/i-i-s-ffffffffff-сотрудники-l';
import IISFfffffffffЗаказEForm from './forms/i-i-s-ffffffffff-заказ-e';
import IISFfffffffffИнгредиентыEForm from './forms/i-i-s-ffffffffff-ингредиенты-e';
import IISFfffffffffНапиткиEForm from './forms/i-i-s-ffffffffff-напитки-e';
import IISFfffffffffПроверкаДенегEForm from './forms/i-i-s-ffffffffff-проверка-денег-e';
import IISFfffffffffПродуктыEForm from './forms/i-i-s-ffffffffff-продукты-e';
import IISFfffffffffСоставыEForm from './forms/i-i-s-ffffffffff-составы-e';
import IISFfffffffffСотрудникиEForm from './forms/i-i-s-ffffffffff-сотрудники-e';
import IISFfffffffffГорячиеНапиткиModel from './models/i-i-s-ffffffffff-горячие-напитки';
import IISFfffffffffЕдаModel from './models/i-i-s-ffffffffff-еда';
import IISFfffffffffЗаказModel from './models/i-i-s-ffffffffff-заказ';
import IISFfffffffffИнгредиентыModel from './models/i-i-s-ffffffffff-ингредиенты';
import IISFfffffffffНапиткиModel from './models/i-i-s-ffffffffff-напитки';
import IISFfffffffffПроверкаДенегModel from './models/i-i-s-ffffffffff-проверка-денег';
import IISFfffffffffПродуктыModel from './models/i-i-s-ffffffffff-продукты';
import IISFfffffffffСоставыModel from './models/i-i-s-ffffffffff-составы';
import IISFfffffffffСотрудникиModel from './models/i-i-s-ffffffffff-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-ffffffffff-горячие-напитки': IISFfffffffffГорячиеНапиткиModel,
    'i-i-s-ffffffffff-еда': IISFfffffffffЕдаModel,
    'i-i-s-ffffffffff-заказ': IISFfffffffffЗаказModel,
    'i-i-s-ffffffffff-ингредиенты': IISFfffffffffИнгредиентыModel,
    'i-i-s-ffffffffff-напитки': IISFfffffffffНапиткиModel,
    'i-i-s-ffffffffff-проверка-денег': IISFfffffffffПроверкаДенегModel,
    'i-i-s-ffffffffff-продукты': IISFfffffffffПродуктыModel,
    'i-i-s-ffffffffff-составы': IISFfffffffffСоставыModel,
    'i-i-s-ffffffffff-сотрудники': IISFfffffffffСотрудникиModel
  },

  'application-name': 'Ffffffffff',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Ffffffffff',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Ffffffffff',
          title: 'Ffffffffff'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        клиентам: {
          caption: 'Клиентам',
          title: 'Клиентам',
          'i-i-s-ffffffffff-заказ-l': {
            caption: 'Заказ',
            title: ''
          }
        },
        сотрудникам: {
          caption: 'Сотрудникам',
          title: 'Сотрудникам',
          'i-i-s-ffffffffff-ингредиенты-l': {
            caption: 'Ингредиенты',
            title: ''
          },
          'i-i-s-ffffffffff-напитки-l': {
            caption: 'Напитки',
            title: ''
          },
          'i-i-s-ffffffffff-проверка-денег-l': {
            caption: 'Проверка денег',
            title: ''
          },
          'i-i-s-ffffffffff-продукты-l': {
            caption: 'Продукты',
            title: ''
          },
          'i-i-s-ffffffffff-составы-l': {
            caption: 'Составы',
            title: ''
          },
          'i-i-s-ffffffffff-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-ffffffffff-заказ-l': IISFfffffffffЗаказLForm,
    'i-i-s-ffffffffff-ингредиенты-l': IISFfffffffffИнгредиентыLForm,
    'i-i-s-ffffffffff-напитки-l': IISFfffffffffНапиткиLForm,
    'i-i-s-ffffffffff-проверка-денег-l': IISFfffffffffПроверкаДенегLForm,
    'i-i-s-ffffffffff-продукты-l': IISFfffffffffПродуктыLForm,
    'i-i-s-ffffffffff-составы-l': IISFfffffffffСоставыLForm,
    'i-i-s-ffffffffff-сотрудники-l': IISFfffffffffСотрудникиLForm,
    'i-i-s-ffffffffff-заказ-e': IISFfffffffffЗаказEForm,
    'i-i-s-ffffffffff-ингредиенты-e': IISFfffffffffИнгредиентыEForm,
    'i-i-s-ffffffffff-напитки-e': IISFfffffffffНапиткиEForm,
    'i-i-s-ffffffffff-проверка-денег-e': IISFfffffffffПроверкаДенегEForm,
    'i-i-s-ffffffffff-продукты-e': IISFfffffffffПродуктыEForm,
    'i-i-s-ffffffffff-составы-e': IISFfffffffffСоставыEForm,
    'i-i-s-ffffffffff-сотрудники-e': IISFfffffffffСотрудникиEForm
  },

});

export default translations;
