import { Serializer } from '../../packages/shibajs';

export default class SuperfundDetailSerializer extends Serializer {
  readonly attrs = ['id', 'fund_name', 'slug', 'usi', 'code', 'banner_image'];
}
