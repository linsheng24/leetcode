/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
  let pointer = head;
  let newHead = head;
  let temp = null;
  while (pointer && pointer.next) {
    const result = swapToNextNode(pointer);
    if (temp) temp.next = result;
    if (newHead === head) newHead = result;
    temp = pointer;
    pointer = pointer.next;
  }
  return newHead;
};

const swapToNextNode = function (node) {
  if (!node || !node.next) return node;
  const nextNode = node.next;
  node.next = nextNode.next;
  nextNode.next = node;
  return nextNode;
};
// @lc code=end
