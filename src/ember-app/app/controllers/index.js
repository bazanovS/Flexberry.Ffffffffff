import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.клиентам.caption'),
          title: i18n.t('forms.application.sitemap.клиентам.title'),
          children: [{
            link: 'i-i-s-ffffffffff-заказ-l',
            caption: i18n.t('forms.application.sitemap.клиентам.i-i-s-ffffffffff-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.клиентам.i-i-s-ffffffffff-заказ-l.title'),
            icon: 'file',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудникам.caption'),
          title: i18n.t('forms.application.sitemap.сотрудникам.title'),
          children: [{
            link: 'i-i-s-ffffffffff-ингредиенты-l',
            caption: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-ffffffffff-ингредиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-ffffffffff-ингредиенты-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-ffffffffff-напитки-l',
            caption: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-ffffffffff-напитки-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-ffffffffff-напитки-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-ffffffffff-проверка-денег-l',
            caption: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-ffffffffff-проверка-денег-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-ffffffffff-проверка-денег-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-ffffffffff-продукты-l',
            caption: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-ffffffffff-продукты-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-ffffffffff-продукты-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-ffffffffff-составы-l',
            caption: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-ffffffffff-составы-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-ffffffffff-составы-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-ffffffffff-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-ffffffffff-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-ffffffffff-сотрудники-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})