import { Serializer as ИнгредиентыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-ffffffffff-ингредиенты';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ИнгредиентыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
