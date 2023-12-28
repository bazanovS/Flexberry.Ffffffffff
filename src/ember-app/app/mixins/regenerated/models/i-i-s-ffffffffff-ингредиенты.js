import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  остаток: DS.attr('decimal'),
  составы: DS.belongsTo('i-i-s-ffffffffff-составы', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-ffffffffff-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-ffffffffff-ингредиенты.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  остаток: {
    descriptionKey: 'models.i-i-s-ffffffffff-ингредиенты.validations.остаток.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  составы: {
    descriptionKey: 'models.i-i-s-ffffffffff-ингредиенты.validations.составы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-ffffffffff-ингредиенты.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИнгредиентыE', 'i-i-s-ffffffffff-ингредиенты', {
    составы: belongsTo('i-i-s-ffffffffff-составы', 'Составы', {
      наименование: attr('Наименование', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'наименование' }),
    количество: attr('Количество', { index: 2 }),
    остаток: attr('Остаток', { index: 3 }),
    сотрудники: belongsTo('i-i-s-ffffffffff-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 5, hidden: true }),
      должность: attr('Должность', { index: 6 })
    }, { index: 4, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ИнгредиентыL', 'i-i-s-ffffffffff-ингредиенты', {
    составы: belongsTo('i-i-s-ffffffffff-составы', 'Наименование', {
      наименование: attr('Наименование', { index: 0 })
    }, { index: -1, hidden: true }),
    количество: attr('Количество', { index: 1 }),
    остаток: attr('Остаток', { index: 2 }),
    сотрудники: belongsTo('i-i-s-ffffffffff-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 3 }),
      должность: attr('Должность', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
