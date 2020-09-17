import { CustomerFindPipe } from './customer-find.pipe';

describe('CustomerFindPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomerFindPipe();
    expect(pipe).toBeTruthy();
  });
});
