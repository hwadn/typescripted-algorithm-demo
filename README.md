# leetcode 分类

## 1.滑动窗口
滑动窗口指的是这样一类问题的求解方法，在数组上通过双指针同向移动（保持固定或非固定的窗口长度）而解决的一类问题

### 模板：
- 固定窗口

窗口长度固定，左端点有序移动

[438. 找到字符串中所有字母异位词](https://leetcode.cn/problems/find-all-anagrams-in-a-string/)

[567. 字符串的排列](https://leetcode.cn/problems/permutation-in-string/)

``` ts
for (let i = 1; i <= s2.length - s1.length; i++) {
	cache[i] -= 1
	cache[i + s2.length - s1.length] += 1
	if (xxx) {
		xxx
	}
}

```


- 动态窗口

窗口长度变化，一个端点有序移动，另一个端点动态调整

[3. 无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)


[209. 长度最小的子数组](https://leetcode.cn/problems/minimum-size-subarray-sum/)


[904. 水果成篮](https://leetcode.cn/problems/fruit-into-baskets/) 

[713. 乘积小于 K 的子数组](https://leetcode.cn/problems/subarray-product-less-than-k/)

``` ts
let left = 0

for (let i = 0; i < s.length; i++) {
	xxx
	while (xxx) {
		xxx
		left++
	}

	xxxx
}
```

## 动态规划
动态规划（英语：Dynamic programming，简称 DP）是一种在数学、管理科学、计算机科学、经济学和生物信息学中使用的，通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法。

动态规划常常适用于有重叠子问题和最优子结构性质的问题，并且记录所有子问题的结果，因此动态规划方法所耗时间往往远少于朴素解法。

动态规划有自底向上和自顶向下两种解决问题的方式。自顶向下即记忆化递归，自底向上就是递推。

使用动态规划解决的问题有个明显的特点，一旦一个子问题的求解得到结果，以后的计算过程就不会修改它，这样的特点叫做无后效性，求解问题的过程形成了一张有向无环图。动态规划只解决每个子问题一次，具有天然剪枝的功能，从而减少计算量。

- 一维

- 二维

[5. 最长回文子串](https://leetcode.cn/problems/longest-palindromic-substring/)

<hr/>

[53. 最大子序和](https://leetcode.cn/problems/maximum-subarray/)【todo】

[62. 不同路径](https://leetcode.cn/problems/unique-paths/)【todo】

[70. 爬楼梯](https://leetcode.cn/problems/climbing-stairs/)【todo】

[118. 杨辉三角](https://leetcode.cn/problems/pascals-triangle/)【todo】

[300. 最长上升子序列](https://leetcode.cn/problems/longest-increasing-subsequence/)【todo】

[746. 使用最小花费爬楼梯](https://leetcode.cn/problems/min-cost-climbing-stairs/)【todo】

[1277. 统计全为1的正方形子矩阵](https://leetcode.cn/problems/count-square-submatrices-with-all-ones/)【todo】
