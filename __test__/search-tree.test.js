'use strict';

const BST = require('../lib/search-tree');


describe('/lib/search-tree', () => {



  let notATree = new BST(10);
  notATree.value = null;

  describe('Binary Seatch Tree', () => {
    test('remove', () => {
      let mockBST = new BST(9);
      mockBST.insert(8);
      mockBST.insert(10);
      mockBST.insert(12);
      mockBST.insert(11);
      mockBST.insert(15);
      expect(mockBST.toString()).toEqual(' 8  9  10  11  12  15 ');
      mockBST.remove(12);
      expect(mockBST.toString()).toEqual(' 8  9  10  11  15 ');
    });
    test('remove from null', () => {
      let nullBST = new BST(9);
      nullBST.value = null;
      expect(nullBST.remove(9)).toEqual(null);
    });
    //TODO: remove specific things
    test('remove head', () => {

    });

    test('remove right leaf', () => {

    });

    test('remove node with left and right', () => {

    });
    test('remove should not be unintentionally destructive', () => {
      let testTree = new BST(10);
      testTree.insert(8);
      testTree.insert(12);
      testTree.insert(19);
      testTree.remove(10);
      expect(testTree.value).toEqual(12);
      console.log(testTree.toString());
      expect(testTree.right.value).toEqual(19);
    });

  });
});
