import { Worker } from '../../packages/shibajs';

export default class FindOrCreateSpiritMemberWorker extends Worker {
  options = {
    retry: 3,
  };

  retryIn = 2 * 60 * 1000;

  public perform({ taxNumber }: { taxNumber: string }) {
    // TO DO call service
  }

  protected retriesExhausted() {
    
  }
}
