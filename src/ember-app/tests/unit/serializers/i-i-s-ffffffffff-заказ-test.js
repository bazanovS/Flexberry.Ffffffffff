import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-ffffffffff-заказ', 'Unit | Serializer | i-i-s-ffffffffff-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-ffffffffff-заказ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-ffffffffff-колво-сахара',
    'transform:i-i-s-ffffffffff-оплата',
    'transform:i-i-s-ffffffffff-ящик',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
