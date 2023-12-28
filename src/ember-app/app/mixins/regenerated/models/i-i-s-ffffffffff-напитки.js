import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  цена: DS.attr('decimal'),
  ингредиенты: DS.belongsTo('i-i-s-ffffffffff-ингредиенты', { inverse: null, async: false }),
  составы: DS.belongsTo('i-i-s-ffffffffff-составы', { inverse: null, async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-ffffffffff-напитки.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-ffffffffff-напитки.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  ингредиенты: {
    descriptionKey: 'models.i-i-s-ffffffffff-напитки.validations.ингредиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составы: {
    descriptionKey: 'models.i-i-s-ffffffffff-напитки.validations.составы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НапиткиE', 'i-i-s-ffffffffff-напитки', {
    наименование: attr('Наименование напитка', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    составы: belongsTo('i-i-s-ffffffffff-составы', 'Наименование', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 3, hidden: true }),
    ингредиенты: belongsTo('i-i-s-ffffffffff-ингредиенты', 'Ингредиенты', {

    }, { index: 4, displayMemberPath: 'количество' })
  });

  modelClass.defineProjection('НапиткиL', 'i-i-s-ffffffffff-напитки', {
    наименование: attr('Наименование напитка', { index: 0 }),
    цена: attr('Цена', { index: 1 })
  });
};
