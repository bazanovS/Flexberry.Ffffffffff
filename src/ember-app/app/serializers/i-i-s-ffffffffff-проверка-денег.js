import { Serializer as ПроверкаДенегSerializer } from
  '../mixins/regenerated/serializers/i-i-s-ffffffffff-проверка-денег';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПроверкаДенегSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
