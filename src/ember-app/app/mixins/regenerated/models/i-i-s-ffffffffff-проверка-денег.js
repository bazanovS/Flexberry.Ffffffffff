import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПроверки: DS.attr('date', { defaultValue() { return new Date(); } }),
  денежныйЯщик: DS.attr('i-i-s-ffffffffff-ящик'),
  количествоДенег: DS.attr('decimal'),
  сотрудники: DS.belongsTo('i-i-s-ffffffffff-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаПроверки: {
    descriptionKey: 'models.i-i-s-ffffffffff-проверка-денег.validations.датаПроверки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  денежныйЯщик: {
    descriptionKey: 'models.i-i-s-ffffffffff-проверка-денег.validations.денежныйЯщик.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  количествоДенег: {
    descriptionKey: 'models.i-i-s-ffffffffff-проверка-денег.validations.количествоДенег.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-ffffffffff-проверка-денег.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПроверкаДенегE', 'i-i-s-ffffffffff-проверка-денег', {
    датаПроверки: attr('Дата проверки', { index: 0 }),
    сотрудники: belongsTo('i-i-s-ffffffffff-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 2, hidden: true }),
      должность: attr('Должность', { index: 3 })
    }, { index: 1, displayMemberPath: 'фИО' }),
    денежныйЯщик: attr('Денежный ящик', { index: 4 }),
    количествоДенег: attr('Количество денег', { index: 5 })
  });

  modelClass.defineProjection('ПроверкаДенегL', 'i-i-s-ffffffffff-проверка-денег', {
    датаПроверки: attr('Дата проверки', { index: 0 }),
    сотрудники: belongsTo('i-i-s-ffffffffff-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 1 }),
      должность: attr('Должность', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
