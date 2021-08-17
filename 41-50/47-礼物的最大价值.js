/**
 * 题目：在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。
 * 你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。
 * 给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
 * 提示：0 < grid.length <= 200；0 < grid[0].length <= 200；
 * 解法：这种棋盘题一看就是动态规划
 * - 三板斧：状态定义，状态转义，初始状态
 * - 定义：dp[i][j],截止i行j列所能拿到的礼物的最大价值
 * - 转移：dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]) + grid[i][j]
 * - 初始：dp[0][0] = grid[0][0],返回dp[m-1][n-1]
 * - if (i === 0) dp[i][j] = dp[i][j-1] + grid[i][j]
 * - if (j === 0) dp[i][j] = dp[i-1][j] + grid[i][j]
 */
var maxValue = function(grid) {
    // 此题限定了m>0, n>0 所以没有写判空处理
    const m = grid.length
    const n = grid[0].length
    let dp = Array(m).fill(-1).map(x => Array(n).fill(-1))
    for (let i in grid) {
        for (let j in grid[i]) {
            // console.log(typeof(i), typeof(j)) // XXX let i in grid 里的i是子符串，所以下面判断 i==0，不能用三个等号。
            if (i>0 && j>0) dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]) + grid[i][j]    // XXX js中字符串与数字比较大小时，会把字符串转数字然后比较
            else if (i==0 && j>0) dp[i][j] = dp[i][j-1] + grid[i][j]    // XXX 若无法转换，则会转换为NaN，它和任意数字比较均返回false
            else if (j==0 && i>0) dp[i][j] = dp[i-1][j] + grid[i][j]
            else dp[0][0] = grid[0][0]
        }
    }
    return dp[m-1][n-1]
};