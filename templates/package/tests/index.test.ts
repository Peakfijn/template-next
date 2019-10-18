import { hello } from '../src';

beforeAll(() => {
	jest.spyOn(console, 'log').mockImplementation(() => undefined);
});

afterAll(() => {
	(console.log as any).mockRestore();
});

it('logs hi', () => {
	hello();
	expect(console.log).toBeCalledWith('Hi!');
});
