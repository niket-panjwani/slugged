const { convertCase } = require('../src/caseConversion');

describe('convertCase function', () => {
  test('should convert to lowercase', () => {
    const result = convertCase('TEST', { caseStyle: 'lowercase' });
    expect(result).toBe('test');
  });

  test('should convert to uppercase', () => {
    const result = convertCase('test', { caseStyle: 'uppercase' });
    expect(result).toBe('TEST');
  });

  test('should return the same string if caseStyle is not specified', () => {
    const result = convertCase('Test');
    expect(result).toBe('Test');
  });

  test('should return the same string if caseStyle is not recognized', () => {
    const result = convertCase('Test', { caseStyle: 'unknown' });
    expect(result).toBe('Test');
  });
});