import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-ffffffffff-продукты', 'Unit | Model | i-i-s-ffffffffff-продукты', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-ffffffffff-горячие-напитки',
    'model:i-i-s-ffffffffff-еда',
    'model:i-i-s-ffffffffff-заказ',
    'model:i-i-s-ffffffffff-ингредиенты',
    'model:i-i-s-ffffffffff-напитки',
    'model:i-i-s-ffffffffff-проверка-денег',
    'model:i-i-s-ffffffffff-продукты',
    'model:i-i-s-ffffffffff-составы',
    'model:i-i-s-ffffffffff-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
