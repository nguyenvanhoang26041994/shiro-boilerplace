import { Gateway } from '../../packages/shibajs';

export default new (class SpiritGateway extends Gateway {
  public async findOrCreateMemberAPI({ payload }: { payload: { taxNumber: string } }) {
    return await this.get('https://spiritsuper.au.com/api/v1/findOrCreateMember', {
      body: JSON.stringify(payload),
    });
  }
})();
