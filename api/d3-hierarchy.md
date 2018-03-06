# 层级布局 Hierarchies (d3-hierarchy)
>用来可视化层次型数据的布局算法

- `d3.hierarchy` - 从层次型的数据构造一个根节点
- `node.ancestors` - 生成祖先数组
- `node.descendants` - 生成后代数组
- `node.leaves` - 生成层级数组
- `node.path` - 生成到达另一个节点的最短路径
- `node.sum` - 求和
- `node.sort` - 排序所有后代的兄弟节点
- `node.each` - 广度优先遍历
- `node.eachAfter` - 后序遍历
- `node.eachBefore` - 先序遍历
- `node.copy` - 拷贝层次布局


- `d3.stratify` - 创建一个层操作符
- `stratify` - 从表格式的数据构造一个根节点
- `stratify.id` - 设置节点ID访问器
- `stratify.parentId` - 设置父节点ID访问器
- `d3.cluster` - 创建一个新的簇（系统树图）布局
- `cluster` - 将给定的层次数据排列到簇中
- `cluster.size` - 设置布局大小
- `cluster.nodeSize` - 设置节点大小
- `cluster.separation` - 设置层间距


- `d3.tree` - 创建新的整齐的树布局
- `tree` - 将给定的层次数据排列到树中
- `tree.size` - 设置布局大小
- `tree.nodeSize` - 设置节点大小
- `tree.separation` - 设置层间距


- `d3.treemap` - 创建一个新的矩形填充树布局（简称矩形树布局）
- `treemap` - 使用矩形填充树布局排列给定的层次数据
- `treemap.tile` - 设置铺砌方法
- `treemap.size` - 设置布局大小
- `treemap.round` - 设置输出坐标是否是取整的
- `treemap.padding` - 设置间距
- `treemap.paddingInner` - 设置兄弟节点之间的间距
- `treemap.paddingOuter` - 设置父子节点之间的间距
- `treemap.paddingTop` - 设置父节点顶边缘和子节点的间距
- `treemap.paddingRight` - 设置父节点右边缘和子节点的间距
- `treemap.paddingBottom` - 设置父节点底边缘和子节点的间距
- `treemap.paddingLeft` - 设置父节点左边缘和子节点的间距


- `d3.treemapBinary` - 使用平衡二叉树铺砌
- `d3.treemapDice` - 水平行铺砌
- `d3.treemapSlice` - 垂直列铺砌
- `d3.treemapSliceDice` - 水平和垂直交替铺砌
- `d3.treemapSquarify` - 正方形铺砌
- `squarify.ratio` - 设置期望的矩形长宽比


- `d3.partition` - 创建新的分区布局（旭日图和冰柱图）
- `partition` - 使用分区布局排列给定的层次数据
- `partition.size` - 设置布局大小
- `partition.round` - 设置输出坐标是否是取整的
- `partition.padding` - 设置间距


- `d3.pack` - 创建一个新的圆形填充布局（简称包布局）
- `pack` - 使用包布局排列给定的层次数据
- `pack.radius` - 设置半径访问器
- `pack.size` - 设置布局大小
- `pack.padding` - 设置间距
- `d3.packSiblings` - 包装指定的圆数组
- `d3.packEnclose` - 围住指定的圆数组