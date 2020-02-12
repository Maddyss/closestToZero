import closestToZero from './closestToZero';

describe('closestToZero', () => {
  it('when input is [8, 5, 10] it must return 5', () => {
    expect(closestToZero('[8, 5, 10]')).toBe(5);
  });
  it('when input is [5, 4, -9, 6, -10, -1, 8] it must return -1', () => {
    expect(closestToZero('[5, 4, -9, 6, -10, -1, 8]')).toBe(-1);
  });
  it('when input is [8, 2, 3, -2] it must return 2', () => {
    expect(closestToZero('[8, 2, 3, -2]')).toBe(2);
  });
  it('when input is [] it must return 0', () => {
    expect(closestToZero('[]')).toBe(0);
  });
  it('when input is other it must return 0', () => {
    expect(closestToZero('bonjour')).toBe(0);
  });
  it('when input is [8, 2, 3, "bonjour"] it must return 2', () => {
    expect(closestToZero('[8, 2, 3, "bonjour"]')).toBe(2);
  });
  it('when input is [5, 1, -1, 1] it must return 1', () => {
    expect(closestToZero('[5, 1, -1, 1]')).toBe(1);
  });
});
