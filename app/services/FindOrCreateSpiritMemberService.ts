import { Service } from '../../packages/shibajs';
import FindOrCreateSpiritMemberWorker from '../workers/FindOrCreateSpiritMemberWorker';

export default class FindOrCreateSpiritMemberService extends Service {
  taxNumber: string;

  constructor({ taxNumber }: { taxNumber: string }) {
    super();
    this.taxNumber = taxNumber;
  }

  public async call() {
    this.callWorker();
  }

  private async callWorker() {
    new FindOrCreateSpiritMemberWorker().perform({ taxNumber: this.taxNumber });
  }
}
