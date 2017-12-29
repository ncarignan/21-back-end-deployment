'use strict';

const KAryTree = require('../lib/k-ary-tree');


describe('/lib/K-ary-tree', () => {

  let mockKary = new KAryTree(1);
  let two = new KAryTree(2);
  let three = new KAryTree(3);
  let four = new KAryTree(4);
  let five = new KAryTree(5);
  let six = new KAryTree(6);
  let seven = new KAryTree(7);
  let eight = new KAryTree(8);

  mockKary.appendChild(two);
  mockKary.appendChild(three);
  mockKary.appendChild(four);
  three.appendChild(five);
  three.appendChild(six);
  three.appendChild(seven);
  six.appendChild(eight);

  console.log(mockKary.toString());
  console.log(mockKary.toArray());

  let notATree = new KAryTree(10);
  notATree.value = null;

  describe('K-Ary Tree', () => {
    describe('toArray', () => {
      test('standard tree', () => {
        expect(mockKary.toArray()).toEqual([ 1, 4, 3, 7, 6, 8, 5, 2 ]);
      });
      test('bad tree', () => {
        expect(notATree.toArray()).toEqual(null);
      });
    });
    describe('toString', () => {
      test('standard tree', () => {
        expect(mockKary.toString()).toEqual('\n1\n2\n3\n4\n5\n6\n7\n8');
      });
      test('bad tree', () => {
        expect(notATree.toString()).toEqual(null);
      });
    });
    describe('breathFirstSearch', () => {
      test('standard tree', () => {
        expect(mockKary.breathFirstSearch(6)).toEqual(six);
      });
      test('bad tree', () => {
        expect(notATree.breathFirstSearch(20)).toEqual(null);
      });
    });




  });
});
