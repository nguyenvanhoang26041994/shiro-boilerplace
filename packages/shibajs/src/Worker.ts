export default class Worker {
  options: {
    retry: number;
  } = {
    retry: 1,
  };

  retryIn: number = 60 * 1000;

  public perform(params?: object) {

  }

  protected retriesExhausted() {

  }
}
