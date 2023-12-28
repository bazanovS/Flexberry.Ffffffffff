import {
  defineNamespace,
  defineProjections,
  Model as ПроверкаДенегMixin
} from '../mixins/regenerated/models/i-i-s-ffffffffff-проверка-денег';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПроверкаДенегMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
