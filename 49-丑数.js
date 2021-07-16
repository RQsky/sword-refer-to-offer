/**
 * 题目：我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。
 * 提示：1是丑数；n不超过1690。
 * 解法：动态规划，说实话我第一时间并没有想到。
 * 状态定义：dp[i]，表示第i+1个丑数是什么，dp[0] = 1
 * 状态转移：丑数必由较小的某个丑数*（2/3/5）得到。算一下这三种可能中哪一个可以最接近当前的丑数，它就是下一个丑数。
 */
var nthUglyNumber = function(n) {
    let a=0, b=0, c=0, dp = []
    dp[0] = 1
    for (let i=1;i<n;i++) {
        while (dp[a]*2<=dp[i-1]) a++
        while (dp[b]*3<=dp[i-1]) b++
        while (dp[c]*5<=dp[i-1]) c++
        dp[i] = Math.min(dp[a]*2, dp[b]*3, dp[c]*5)
    }
    return dp[n-1]
};