/**
 * Concrete examples:
 * findMedianSortedArrays([0,0],[0,0]) => 0
 * findMedianSortedArrays([],[1]) => 1
 * findMedianSortedArrays([1,3], [2]) => 2
 * findMedianSortedArrays([1,2],[3,4]) => 2.5
 * findMedianSortedArrays([-1, -2],[3]) => -1
 */

/**
 *
 * @param {array} nums1 - A sorted input array.
 * @param {array} nums2 - A sorted input array.
 * @return {number} - The median of the two sorted arrays.
 */
const findMedianSortedArrays = (nums1, nums2) => {
  // Brute Force
  // Concat the input arrays.
  const mergedArray = nums1.concat(nums2);
  mergedArray.sort((a, b) => a - b);
  // Check if the length of the array is odd.
  if (mergedArray.length % 2 !== 0) {
    // Our median is the middle element of the array.
    const median = Math.floor(0 + ((mergedArray.length - 1) - 0) / 2);
    return mergedArray[median];
  }
  // Otherwise our median is the average of the middle two elements.
  const index1 = Math.floor(0 + ((mergedArray.length - 1) - 0) / 2);
  const index2 = index1 + 1;
  return (mergedArray[index1] + mergedArray[index2])/2;
};

console.log(findMedianSortedArrays([0, 0], [0, 0]));
console.log(findMedianSortedArrays([], [1]));
console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([-2, -1], [3]));
