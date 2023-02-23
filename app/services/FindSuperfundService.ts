import { Service } from '../../packages/shibajs';
import { Superfund } from '../models';

export default class FindSuperfundService extends Service {
  superfund: object;
  slug: string;

  constructor({ slug }: { slug: string }) {
    super();
    this.slug = slug;
  }

  public async call() {
    try {
      this.data = await this.findOne();
    } catch(e) {
      this.addError(e);
    }
  }

  private async findOne() {
    this.superfund ||= await Superfund.findBy({ slug: this.slug });
    return this.superfund;
  }
}
