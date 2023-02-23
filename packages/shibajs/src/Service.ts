export default class Service {
  data: unknown;
  errors: unknown[];

  public addError(e: unknown) {
    this.errors.push(e);
  }

  public isSuccess(): boolean {
    return this.isError();
  }

  public isError(): boolean {
    return !this.errors.length;
  }
}
