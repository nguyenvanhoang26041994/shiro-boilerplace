import { Controller } from '../../packages/shibajs';
import FindSuperfundService from '../services/FindSuperfundService';
import SuperfundDetailSerializer from '../serializers/SuperfundDetailSerializer';

export default class SuperfundController extends Controller {
  constructor() {
    super();
  }

  private async findSuperfund() {
    const service = new FindSuperfundService({ slug: 'spirit' });
    await service.call();

    return this.send(
      200,
      service.data,
      SuperfundDetailSerializer
    );
  }
}
