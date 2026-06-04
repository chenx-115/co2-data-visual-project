# 当前 HTML 图表汇总

本文汇总的是 `D:\论文寻找Web` 当前目录下用于复现 Our World in Data 图表的 HTML 页面。`owid-grapher-master` 文件夹里面也有少量 HTML，但它们属于 OWID Grapher 项目的 demo 或开发工具，不是当前这批复现图表的主体；我放在最后单独说明。

## 一、根目录下的复现图表

| HTML 文件 | 图表主题 | 图表类型 | 主要含义 | 是否和其它图重复 |
|---|---|---|---|---|
| `owid_co2_annual_emissions_bar.html` | Annual CO₂ emissions, 2024 | 横向柱状图 | 比较不同国家或地区在 2024 年的年度 CO2 排放总量，重点是“谁排得最多”。 | 和 treemap 有明显重叠，二者都在回答“谁排放最多”，但柱状图更适合看排名。 |
| `owid_co2_treemap_who_emits_most.html` | Who emits the most CO2? | 矩形树图 treemap | 展示 2017 年全球 CO2 排放由哪些大洲、国家和国际运输部分组成，重点是“全球排放结构”。 | 和年度排放柱状图、世界区域排放图有部分重叠，但它更强调构成比例和视觉面积。 |
| `owid_co2_annual_by_world_region_area.html` | Annual CO₂ emissions by world region | 区域/折线趋势图 | 展示各大洲或世界区域在长期历史中的年度 CO2 排放变化，重点是“区域排放格局如何随时间变化”。 | 和 treemap 都涉及区域构成，但 treemap 是单一年份结构，这张图是长期趋势。 |
| `owid_co2_annual_percentage_change_2024_echarts.html` | Annual percentage change in CO₂ emissions, 2024 | 世界地图/时间轴 | 展示各国年度 CO2 排放相比上一年的百分比变化，重点是“哪些国家排放在增长或下降”。 | 重复度最低，因为它不是看排放总量，而是看变化速度。 |
| `owid_co2_per_capita_line.html` | CO₂ emissions per capita | 多折线图 | 展示不同国家或地区的人均 CO2 排放变化，重点是“每个人平均排放多少”。 | 和能源问题散点图、排放份额 vs 人口份额图都有公平性含义，但这里更直接看人均吨数和时间变化。 |
| `owid_energy_problem_scatter.html` | Consumption-based CO2 emissions per capita vs. GDP per capita | 散点/气泡图 | 展示消费端人均 CO2 排放与人均 GDP 的关系，气泡大小表示人口，重点是“收入水平和消费排放之间有什么关系”。 | 和人均排放图有部分重叠，但它加入了 GDP 维度，并且使用消费端排放。 |
| `owid_share_co2_vs_population_interactive.html` | Share of global CO₂ emissions vs. share of population, 2024 | 双对数散点图 | 比较一个国家或地区占全球 CO2 排放的比例与占全球人口的比例，重点是“排放份额是否高于人口份额”。 | 和人均排放、公平性主题相关，但表达方式不同：它看全球份额，不直接看每人多少吨。 |

## 二、每张图的具体含义

### 1. `owid_co2_annual_emissions_bar.html`

这张图的核心问题是：**2024 年哪些国家或地区的年度 CO2 排放量最大？**

它适合用来做“排放大国排名”。例如可以直观看到中国、美国、印度等主要排放体在绝对排放量上的差距。它看的是总量，所以人口多、工业规模大的国家通常会更靠前。

它的含义偏向“总责任规模”，但不适合直接判断人均责任或生活方式是否高碳，因为它没有除以人口。

### 2. `owid_co2_treemap_who_emits_most.html`

这张图的核心问题是：**2017 年全球 CO2 排放由哪些地区和国家组成？**

treemap 用方块面积表示排放占比，方块越大，说明该地区或国家在全球排放中的占比越大。它的优点是很适合展示“结构”：比如亚洲、北美、欧洲分别占多大一块，以及大洲内部哪些国家占主要位置。

它和柱状图都能表达“谁排放最多”，但视觉重点不同。柱状图更像排名表，treemap 更像全球排放版图。

### 3. `owid_co2_annual_by_world_region_area.html`

这张图的核心问题是：**不同世界区域的 CO2 排放在历史上如何变化？**

它不是只看某一年，而是看长期走势。适合观察欧洲、北美、亚洲等区域排放的历史转移，例如早期工业化地区先增长，后来亚洲排放快速上升。

它的含义偏向“历史过程”和“区域结构变化”，适合放在论文或报告中解释全球排放中心如何变化。

### 4. `owid_co2_annual_percentage_change_2024_echarts.html`

这张图的核心问题是：**2024 年哪些国家的 CO2 排放增长了，哪些下降了？**

它看的是年度百分比变化，而不是排放总量。一个国家即使排放总量很小，也可能因为增长快而颜色很明显；一个排放大国也可能因为变化幅度不大而不突出。

因此它适合解释“变化趋势”或“减排进展”，不适合单独说明“谁排得最多”。

### 5. `owid_co2_per_capita_line.html`

这张图的核心问题是：**不同国家或地区的人均 CO2 排放有什么差异？**

人均排放能把人口因素纳入比较。它适合讨论公平性，例如一个国家总排放不一定最高，但如果人口少、消费和能源使用强度高，人均排放可能很高。

它比总量柱状图更适合回答“普通人平均造成多少排放”这一类问题。

### 6. `owid_energy_problem_scatter.html`

这张图的核心问题是：**收入水平越高，消费端人均 CO2 排放是否越高？**

横轴是人均 GDP，纵轴是消费端人均 CO2 排放，气泡大小代表人口。它适合说明世界能源问题中的一个关键矛盾：很多低收入国家需要更多能源来发展，而高收入国家往往已经拥有较高消费水平和较高人均排放。

它和人均排放折线图不同，因为它不是只看排放，还同时引入经济发展水平。它更适合讨论“发展、能源、排放”之间的关系。

### 7. `owid_share_co2_vs_population_interactive.html`

这张图的核心问题是：**一个国家占全球排放的比例，是否高于它占全球人口的比例？**

如果某个国家的排放份额明显高于人口份额，说明它相对人口而言排放更多；如果排放份额低于人口份额，则说明它相对人口而言排放较少。

它适合讨论全球气候公平问题。它和人均排放图表达的是相近思想，但这张图用“全球份额”表达，视觉上更容易比较国家在全球体系中的位置。

## 三、重复含义分析

目前这些 HTML 图表并不是完全重复，但有几组存在明显的主题重叠。

| 重叠组合 | 重复点 | 主要区别 | 是否建议都保留 |
|---|---|---|---|
| `owid_co2_annual_emissions_bar.html` 与 `owid_co2_treemap_who_emits_most.html` | 都回答“谁排放最多”。 | 柱状图强调国家排名和数值比较；treemap 强调整体构成和面积比例。 | 建议都保留。如果只要一个，排名用柱状图，构成用 treemap。 |
| `owid_co2_treemap_who_emits_most.html` 与 `owid_co2_annual_by_world_region_area.html` | 都涉及大洲/区域排放结构。 | treemap 是 2017 年静态结构；区域图是长期历史变化。 | 建议都保留，二者用途不同。 |
| `owid_co2_per_capita_line.html` 与 `owid_energy_problem_scatter.html` | 都涉及人均排放。 | 前者看人均 CO2 的时间变化；后者看人均 GDP 与消费端人均排放的关系。 | 建议都保留，后者多了经济维度。 |
| `owid_co2_per_capita_line.html` 与 `owid_share_co2_vs_population_interactive.html` | 都能讨论排放公平性。 | 前者直接看每人排放多少吨；后者看全球排放份额是否超过人口份额。 | 建议都保留，表达角度不同。 |
| `owid_co2_annual_percentage_change_2024_echarts.html` 与其它图 | 都属于 CO2 排放主题。 | 它看增长/下降百分比，不看总量或人均。 | 重复度最低，建议保留。 |

## 四、如果写论文或报告，建议这样使用

1. 如果要说明“全球谁排放最多”，优先用 `owid_co2_annual_emissions_bar.html`。
2. 如果要说明“全球排放结构由哪些区域和国家组成”，优先用 `owid_co2_treemap_who_emits_most.html`。
3. 如果要说明“不同区域的排放中心如何随时间变化”，优先用 `owid_co2_annual_by_world_region_area.html`。
4. 如果要说明“哪些国家排放正在增长或下降”，优先用 `owid_co2_annual_percentage_change_2024_echarts.html`。
5. 如果要说明“按人口平均后谁排放更高”，优先用 `owid_co2_per_capita_line.html`。
6. 如果要说明“收入、能源消费和排放之间的关系”，优先用 `owid_energy_problem_scatter.html`。
7. 如果要说明“排放份额和人口份额是否匹配”，优先用 `owid_share_co2_vs_population_interactive.html`。

## 五、总体结论

这 7 个 HTML 文件都围绕 CO2 排放，但分析角度不同：

| 分析角度 | 对应图表 |
|---|---|
| 排放总量 | `owid_co2_annual_emissions_bar.html` |
| 排放结构 | `owid_co2_treemap_who_emits_most.html` |
| 区域历史变化 | `owid_co2_annual_by_world_region_area.html` |
| 年度增减变化 | `owid_co2_annual_percentage_change_2024_echarts.html` |
| 人均排放 | `owid_co2_per_capita_line.html` |
| 收入与消费排放关系 | `owid_energy_problem_scatter.html` |
| 排放份额与人口份额公平性 | `owid_share_co2_vs_population_interactive.html` |

最接近重复的是 `owid_co2_annual_emissions_bar.html` 和 `owid_co2_treemap_who_emits_most.html`，因为它们都能表达“谁排放最多”。不过一个适合排名，一个适合结构展示，所以不算无意义重复。

如果后续想精简页面，优先考虑是否同时需要“柱状排名”和“treemap 结构图”。其它几张图的分析目的差异比较明显，建议保留。

## 六、非复现主体 HTML 文件说明

在 `owid-grapher-master` 子目录里还存在一些 HTML，例如：

| 文件 | 含义 |
|---|---|
| `owid-grapher-master\owid-grapher-master\bespoke\server\component-demo.html` | OWID Grapher 项目的组件 demo 页面模板，不是当前复现图表。 |
| `owid-grapher-master\owid-grapher-master\devTools\fonts\generate-widths.html` | 字体字符串宽度生成工具页面，用于开发或字体测量，不是数据可视化图表。 |

这两个文件不建议和根目录 7 个复现图表混在一起分析，因为它们不是论文展示用的图表页面。
