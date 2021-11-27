'use strict';

const HashTable = require('../index');

describe('Testing HashTable', () => {

  it('Can add a key/value pair to the hashtable', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('Sarah', 'Dev');
    expect(hashTable.map[hashTable.hash('Sarah')].head.value['Sarah']).toStrictEqual('Dev');
  });

  it('Can retrieve a value based on a key', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('Sarah', 'Dev');
    expect(hashTable.get('Sarah')).toStrictEqual('Dev');
  });

  it('Will return null if a key does not exist in the hashtable', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('Sarah', 'Dev');
    expect(hashTable.get('Dev')).toStrictEqual(null);
  });

  it('Will successfully handle a collision in the hashtable', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('Sarah', 'Engineer');
    hashTable.add('Sarah', 'Dev');
    expect(hashTable.map[hashTable.hash('Sarah')].head.next.value).toStrictEqual({'Sarah': 'Dev'});
  });

  it('Will successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('Sarah', 'Engineer');
    hashTable.add('Sarah', 'Dev');
    expect(hashTable.map[hashTable.hash('Sarah')].head.value['Sarah']).toStrictEqual('Engineer');
    expect(hashTable.map[hashTable.hash('Sarah')].head.next.value['Sarah']).toStrictEqual('Dev');
  });

  it('Can successfully hash a key to an in-range value', () => {
    const hashTable = new HashTable(1024);
    expect(hashTable.hash('Sarah')).toStrictEqual(569);
  });

  it('Can successfully return boolean indicating whether key exists in the table', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('Sarah', 'Dev');
    expect(hashTable.contains('Sarah')).toStrictEqual(true);
    expect(hashTable.contains('Dev')).toStrictEqual(false);
  });

});




