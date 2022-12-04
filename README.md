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
