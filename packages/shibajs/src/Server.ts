export default class Server {
  config: object;

  constructor(config: object) {
    this.config = config;
  }
  public registerControllers(controllers: { register: (t: unknown) => void } []) {
    return controllers.map((controller) => {
      controller.register(this);
    });
  }

  public start(fn: () => void) {
    fn();
  }
}
