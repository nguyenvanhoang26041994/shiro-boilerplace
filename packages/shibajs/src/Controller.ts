export default class Controller {
  public register() {

  }

  public send(status: number, data: unknown, Serializer: new (data: unknown) => void) {
    return {
      status: status,
      data: new Serializer(data),
    };
  }
}
