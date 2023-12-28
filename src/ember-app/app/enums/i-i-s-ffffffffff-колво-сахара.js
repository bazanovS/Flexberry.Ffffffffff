import { createEnum } from 'ember-flexberry-data/utils/enum-functions';

export default createEnum({
  ЧетыреКубика: 'БезСахара',
  БезСахара: 'ОдинКубик',
  ПятьКубиков: 'ДваКубика',
  ДваКубика: 'ТриКубика',
  ОдинКубик: 'ЧетыреКубика',
  ТриКубика: 'ПятьКубиков'
});
