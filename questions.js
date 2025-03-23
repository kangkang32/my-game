const questions = [
// 生活操作常识 (10)
{
        category: "生活操作常识",
        question: "使用微波炉加热食物时，不应该使用哪种材质的容器？",
        options: ["玻璃", "陶瓷", "金属", "塑料（微波炉专用）"],
        answer: "金属"
    },
{
        category: "生活操作常识",
        question: "洗涤羊毛衣物时，应该使用什么水温？",
        options: ["冷水", "温水", "热水", "沸水"],
        answer: "冷水"
    },
{
        category: "生活操作常识",
        question: "煮饭时加盖的主要作用是什么？",
        options: ["加快煮饭速度", "防止水分蒸发", "保温", "减少能源消耗"],
        answer: "防止水分蒸发"
    },
{
        category: "生活操作常识",
        question: "如何正确清洗不粘锅？",
        options: ["用钢丝球刷洗", "用温水和软布擦拭", "使用洗洁精高温洗涤", "直接放入洗碗机"],
        answer: "用温水和软布擦拭"
    },
{
        category: "生活操作常识",
        question: "电饭煲在使用完毕后，应如何清洁内胆？",
        options: ["用铁丝刷刷洗", "用温水和中性洗涤剂擦洗", "放在火上烘干", "直接用冷水冲洗"],
        answer: "用温水和中性洗涤剂擦洗"
    },
{
        category: "生活操作常识",
        question: "如何正确使用洗衣机进行衣物清洗？",
        options: ["只用冷水", "分开颜色衣物", "全部混洗", "长时间浸泡"],
        answer: "分开颜色衣物"
    },
{
        category: "生活操作常识",
        question: "使用电热水壶时，应该注意什么？",
        options: ["水满过热", "定期清洗水垢", "边走边用", "长时间空烧"],
        answer: "定期清洗水垢"
    },
{
        category: "生活操作常识",
        question: "煮面时为什么需要加盐？",
        options: ["提高温度", "增加口感", "防止粘连", "节约能源"],
        answer: "增加口感"
    },
{
        category: "生活操作常识",
        question: "冰箱内食物应如何分类存放？",
        options: ["混放", "分开生熟", "随意放", "放在门上"],
        answer: "分开生熟"
    },
{
        category: "生活操作常识",
        question: "使用电风扇时应注意哪些安全事项？",
        options: ["直接用手接风", "避免水接触", "放在潮湿地", "频繁调节风向"],
        answer: "避免水接触"
    },

// 安全防护常识 (10)
{
        category: "安全防护常识",
        question: "发生火灾时，逃生过程中应该采取什么姿势？",
        options: ["直立行走", "弯腰行走", "匍匐前进", "跑步逃离"],
        answer: "匍匐前进"
    },
{
        category: "安全防护常识",
        question: "在雷雨天气，下列哪种行为最危险？",
        options: ["待在汽车内", "待在建筑物内", "使用有线电话", "穿橡胶鞋"],
        answer: "使用有线电话"
    },
{
        category: "安全防护常识",
        question: "遇到煤气泄漏时，正确的处理方法是？",
        options: ["打开门窗通风", "立即使用明火检测", "使用手机报警", "关闭电源并切断气源"],
        answer: "关闭电源并切断气源"
    },
{
        category: "安全防护常识",
        question: "如果在高空作业时失足，正确的自我保护措施是？",
        options: ["保持放松状态", "大声呼救", "用双手抓紧旁边物体", "迅速弯腰"],
        answer: "用双手抓紧旁边物体"
    },
{
        category: "安全防护常识",
        question: "在家中安装烟雾报警器的最佳位置是？",
        options: ["厨房正上方", "卧室内", "客厅中央", "走廊上"],
        answer: "走廊上"
    },
{
        category: "安全防护常识",
        question: "遇到地震时，最安全的躲避位置是？",
        options: ["窗户旁", "桌子下", "楼梯间", "电梯内"],
        answer: "桌子下"
    },
{
        category: "安全防护常识",
        question: "在公共场合如何防范扒窃？",
        options: ["放空包包", "紧握个人物品", "随意站立", "穿宽松衣服"],
        answer: "紧握个人物品"
    },
{
        category: "安全防护常识",
        question: "使用电梯时遇到故障应如何应对？",
        options: ["自行尝试维修", "按紧急按钮求救", "强行打开门", "等待很长时间"],
        answer: "按紧急按钮求救"
    },
{
        category: "安全防护常识",
        question: "遇到突发洪水时应采取的措施是？",
        options: ["赶紧驾车逃离", "寻找高处避险", "停留在低洼地区", "进入河流中"],
        answer: "寻找高处避险"
    },
{
        category: "安全防护常识",
        question: "正确使用灭火器的步骤包括下列哪项？",
        options: ["拔掉安全销、对准火源根部、按下喷射按钮", "只拔掉安全销", "只按下喷射按钮", "只对准火焰顶端"],
        answer: "拔掉安全销、对准火源根部、按下喷射按钮"
    },

// 健康管理常识 (10)
{
        category: "健康管理常识",
        question: "成年人每天应该喝多少水最为健康？",
        options: ["1-2升", "2-3升", "3-4升", "4-5升"],
        answer: "2-3升"
    },
{
        category: "健康管理常识",
        question: "以下哪种食物富含维生素C？",
        options: ["牛肉", "鸡蛋", "猕猴桃", "大米"],
        answer: "猕猴桃"
    },
{
        category: "健康管理常识",
        question: "预防感冒最有效的方式是什么？",
        options: ["多喝热水", "保持室内湿度", "勤洗手", "适量运动"],
        answer: "勤洗手"
    },
{
        category: "健康管理常识",
        question: "长期久坐最容易导致哪种健康问题？",
        options: ["心脏病", "骨质疏松", "颈椎病", "糖尿病"],
        answer: "颈椎病"
    },
{
        category: "健康管理常识",
        question: "早睡早起有助于改善以下哪种状况？",
        options: ["睡眠质量", "消化不良", "视力模糊", "记忆力下降"],
        answer: "睡眠质量"
    },
{
        category: "健康管理常识",
        question: "保持良好睡眠习惯的重要性在于？",
        options: ["提高免疫力", "增加压力", "导致失眠", "影响食欲"],
        answer: "提高免疫力"
    },
{
        category: "健康管理常识",
        question: "经常锻炼对健康的主要好处是？",
        options: ["增强心肺功能", "减少肌肉", "降低耐力", "增加脂肪"],
        answer: "增强心肺功能"
    },
{
        category: "健康管理常识",
        question: "均衡饮食中不应过量摄入的是？",
        options: ["蛋白质", "蔬菜", "糖分", "纤维"],
        answer: "糖分"
    },
{
        category: "健康管理常识",
        question: "定期体检有助于？",
        options: ["预防疾病", "延长寿命", "发现隐患", "以上都是"],
        answer: "以上都是"
    },
{
        category: "健康管理常识",
        question: "久坐对人体的危害主要表现为？",
        options: ["促进血液循环", "增加心血管疾病风险", "提高新陈代谢", "增强体力"],
        answer: "增加心血管疾病风险"
    },

// 自然科学常识 (10)
{
        category: "自然科学常识",
        question: "地球大气层中含量最多的气体是什么？",
        options: ["氧气", "二氧化碳", "氮气", "氢气"],
        answer: "氮气"
    },
{
        category: "自然科学常识",
        question: "光在真空中的速度约为多少？",
        options: ["300米/秒", "3000米/秒", "30万米/秒", "300万米/秒"],
        answer: "30万米/秒"
    },
{
        category: "自然科学常识",
        question: "太阳系中最大的行星是？",
        options: ["地球", "木星", "土星", "火星"],
        answer: "木星"
    },
{
        category: "自然科学常识",
        question: "水的化学式是什么？",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O"
    },
{
        category: "自然科学常识",
        question: "地球的自转一圈大约需要多少时间？",
        options: ["12小时", "24小时", "48小时", "36小时"],
        answer: "24小时"
    },
{
        category: "自然科学常识",
        question: "地球的内部主要由哪三层构成？",
        options: ["地壳、地幔、地核", "大气层、水层、岩层", "冰层、岩层、液层", "外壳、内核、中间层"],
        answer: "地壳、地幔、地核"
    },
{
        category: "自然科学常识",
        question: "风的形成主要是由于？",
        options: ["地球自转", "温度差异", "地壳运动", "月球引力"],
        answer: "温度差异"
    },
{
        category: "自然科学常识",
        question: "水循环包括以下哪一过程？",
        options: ["蒸发", "凝结", "降水", "以上都是"],
        answer: "以上都是"
    },
{
        category: "自然科学常识",
        question: "植物的光合作用主要产生什么？",
        options: ["氧气", "二氧化碳", "氮气", "甲烷"],
        answer: "氧气"
    },
{
        category: "自然科学常识",
        question: "下列哪种现象属于自然界中的周期现象？",
        options: ["日出日落", "火山爆发", "地震", "台风"],
        answer: "日出日落"
    },

// 人文社科常识 (10)
{
        category: "人文社科常识",
        question: "《红楼梦》的作者是谁？",
        options: ["曹雪芹", "吴承恩", "罗贯中", "施耐庵"],
        answer: "曹雪芹"
    },
{
        category: "人文社科常识",
        question: "世界上使用人口最多的语言是什么？",
        options: ["英语", "汉语", "西班牙语", "阿拉伯语"],
        answer: "汉语"
    },
{
        category: "人文社科常识",
        question: "下列哪位哲学家提出了“我思故我在”？",
        options: ["柏拉图", "笛卡尔", "康德", "亚里士多德"],
        answer: "笛卡尔"
    },
{
        category: "人文社科常识",
        question: "文艺复兴运动主要起源于哪个国家？",
        options: ["法国", "英国", "意大利", "德国"],
        answer: "意大利"
    },
{
        category: "人文社科常识",
        question: "‘全球化’最早出现在以下哪个领域？",
        options: ["经济", "文化", "政治", "科技"],
        answer: "经济"
    },
{
        category: "人文社科常识",
        question: "《论语》是记录哪位思想家的言论的著作？",
        options: ["孔子", "孟子", "老子", "庄子"],
        answer: "孔子"
    },
{
        category: "人文社科常识",
        question: "现代社会中，普及教育的重要性体现在哪方面？",
        options: ["提高国民素质", "增加财富", "制造竞争", "减少沟通"],
        answer: "提高国民素质"
    },
{
        category: "人文社科常识",
        question: "文化多样性体现了？",
        options: ["单一文化", "不同文化之间的差异", "全球统一", "文化冲突"],
        answer: "不同文化之间的差异"
    },
{
        category: "人文社科常识",
        question: "社会学的主要研究对象是？",
        options: ["自然现象", "人类社会及其关系", "科技进步", "经济市场"],
        answer: "人类社会及其关系"
    },
{
        category: "人文社科常识",
        question: "以下哪项是促进社会和谐的重要因素？",
        options: ["相互尊重", "利益冲突", "文化隔阂", "经济落后"],
        answer: "相互尊重"
    },

// 数理逻辑常识 (10)
{
        category: "数理逻辑常识",
        question: "一个数除以0的结果是什么？",
        options: ["0", "1", "无穷大", "没有意义"],
        answer: "没有意义"
    },
{
        category: "数理逻辑常识",
        question: "如果今天是周三，那么100天后是星期几？",
        options: ["周三", "周四", "周五", "周六"],
        answer: "周五"
    },
{
        category: "数理逻辑常识",
        question: "在逻辑推理中，“矛盾”原则指的是？",
        options: ["一件事物可以同时具有两种相反的属性", "一件事物不能同时具有两种相反的属性", "所有事物都是相对的", "真理只有一个"],
        answer: "一件事物不能同时具有两种相反的属性"
    },
{
        category: "数理逻辑常识",
        question: "下列哪种图形是二维图形？",
        options: ["立方体", "球体", "圆形", "锥体"],
        answer: "圆形"
    },
{
        category: "数理逻辑常识",
        question: "逻辑中的“假言命题”通常采用哪种形式？",
        options: ["如果...那么...", "因为...所以...", "无论...都...", "既然...就..."],
        answer: "如果...那么..."
    },
{
        category: "数理逻辑常识",
        question: "数学中零的乘法性质是？",
        options: ["任何数乘以零都等于零", "零乘以任何数都等于一", "零乘以零等于一", "零不能乘以数"],
        answer: "任何数乘以零都等于零"
    },
{
        category: "数理逻辑常识",
        question: "逻辑学中使用的符号“∧”代表？",
        options: ["或", "与", "非", "蕴涵"],
        answer: "与"
    },
{
        category: "数理逻辑常识",
        question: "在集合论中，空集的元素个数是？",
        options: ["0", "1", "无限", "无法确定"],
        answer: "0"
    },
{
        category: "数理逻辑常识",
        question: "下面哪种图形具有无限多个对称轴？",
        options: ["正方形", "圆", "等边三角形", "长方形"],
        answer: "圆"
    },
{
        category: "数理逻辑常识",
        question: "若a > b且b > c，则可以推断？",
        options: ["a > c", "a = c", "a < c", "无法确定"],
        answer: "a > c"
    },

// 传统制度常识 (10)
{
        category: "传统制度常识",
        question: "中国古代科举考试中，最高级别的考试是什么？",
        options: ["院试", "乡试", "会试", "殿试"],
        answer: "殿试"
    },
{
        category: "传统制度常识",
        question: "中国古代的‘六艺’不包括以下哪项？",
        options: ["礼", "乐", "射", "书法"],
        answer: "书法"
    },
{
        category: "传统制度常识",
        question: "封建社会中，土地所有权归属于谁？",
        options: ["农民", "地主", "国家", "贵族"],
        answer: "国家"
    },
{
        category: "传统制度常识",
        question: "古代中国的‘三纲’不包括下列哪一项？",
        options: ["君纲", "父纲", "师纲", "夫纲"],
        answer: "师纲"
    },
{
        category: "传统制度常识",
        question: "在古代科举中，下列哪个考试是最低级别？",
        options: ["院试", "乡试", "会试", "殿试"],
        answer: "院试"
    },
{
        category: "传统制度常识",
        question: "中国古代的“九品中正制”是用于选拔哪类人才？",
        options: ["文官", "武官", "农民", "商人"],
        answer: "文官"
    },
{
        category: "传统制度常识",
        question: "古代封建社会的基本制度是？",
        options: ["奴隶制", "封建制", "资本主义", "共产主义"],
        answer: "封建制"
    },
{
        category: "传统制度常识",
        question: "古代朝廷中的“内阁”主要职能是？",
        options: ["军事指挥", "决策咨询", "税收征管", "农业规划"],
        answer: "决策咨询"
    },
{
        category: "传统制度常识",
        question: "传统礼仪中，贵族间的称谓常体现？",
        options: ["平等", "尊卑", "随意", "亲密"],
        answer: "尊卑"
    },
{
        category: "传统制度常识",
        question: "古代科举考试中，最低级的考试科目是？",
        options: ["童试", "院试", "乡试", "会试"],
        answer: "童试"
    },

// 礼仪文化常识 (10)
{
        category: "礼仪文化常识",
        question: "在正式场合，握手时通常由谁先伸手？",
        options: ["地位高者", "地位低者", "男士", "女士"],
        answer: "地位高者"
    },
{
        category: "礼仪文化常识",
        question: "在餐桌上，筷子应该放在哪里？",
        options: ["碗里", "桌子上", "筷架上", "盘子里"],
        answer: "筷架上"
    },
{
        category: "礼仪文化常识",
        question: "拜访他人时，送礼的最佳时机是？",
        options: ["到达前", "见面时", "离开时", "聚会结束后"],
        answer: "见面时"
    },
{
        category: "礼仪文化常识",
        question: "在中式宴会中，敬酒时应如何行礼？",
        options: ["双手举杯", "单手敬酒", "微笑点头", "低头鞠躬"],
        answer: "双手举杯"
    },
{
        category: "礼仪文化常识",
        question: "在商务会议中，应如何称呼对方？",
        options: ["直呼其名", "先生/女士", "大哥/大姐", "亲爱的"],
        answer: "先生/女士"
    },
{
        category: "礼仪文化常识",
        question: "中式婚礼中，新人通常需要遵循的礼仪是？",
        options: ["交换戒指", "敬茶", "互赠礼物", "互相拥抱"],
        answer: "敬茶"
    },
{
        category: "礼仪文化常识",
        question: "在正式宴会中，使用餐具时应遵循哪种顺序？",
        options: ["由外到内", "由内到外", "随意使用", "先使用主餐具"],
        answer: "由外到内"
    },
{
        category: "礼仪文化常识",
        question: "拜访他人时，进门前应做的礼节是？",
        options: ["大声问好", "敲门", "直接进入", "坐下等待"],
        answer: "敲门"
    },
{
        category: "礼仪文化常识",
        question: "在公共场合保持低声细语的主要目的是什么？",
        options: ["显示礼貌", "节约体力", "制造神秘感", "避免打扰他人"],
        answer: "避免打扰他人"
    },
{
        category: "礼仪文化常识",
        question: "在商务场合递名片时应如何操作？",
        options: ["单手递送", "双手递送", "放入口袋", "背后递送"],
        answer: "双手递送"
    },

// 艺术审美常识 (10)
{
        category: "艺术审美常识",
        question: "蒙娜丽莎的作者是谁？",
        options: ["毕加索", "达·芬奇", "梵高", "米开朗基罗"],
        answer: "达·芬奇"
    },
{
        category: "艺术审美常识",
        question: "《向日葵》是哪位画家的代表作？",
        options: ["莫奈", "梵高", "毕加索", "达·芬奇"],
        answer: "梵高"
    },
{
        category: "艺术审美常识",
        question: "巴洛克艺术主要起源于哪个国家？",
        options: ["意大利", "法国", "德国", "西班牙"],
        answer: "意大利"
    },
{
        category: "艺术审美常识",
        question: "下列哪种音乐风格起源于美国？",
        options: ["摇滚", "古典", "民谣", "交响乐"],
        answer: "摇滚"
    },
{
        category: "艺术审美常识",
        question: "印象派画家常使用哪种色彩技巧？",
        options: ["厚涂", "点彩", "线描", "剪纸"],
        answer: "点彩"
    },
{
        category: "艺术审美常识",
        question: "印象派绘画最突出的特点是？",
        options: ["清晰轮廓", "光影效果", "抽象构图", "厚重笔触"],
        answer: "光影效果"
    },
{
        category: "艺术审美常识",
        question: "以下哪位艺术家以超现实主义作品闻名？",
        options: ["达利", "梵高", "毕加索", "莫奈"],
        answer: "达利"
    },
{
        category: "艺术审美常识",
        question: "雕塑艺术中，常用的材料不包括下列哪种？",
        options: ["大理石", "青铜", "塑料", "木材"],
        answer: "塑料"
    },
{
        category: "艺术审美常识",
        question: "在音乐美学中，“和声”主要指的是？",
        options: ["旋律的高低", "多音组合", "节奏速度", "乐器种类"],
        answer: "多音组合"
    },
{
        category: "艺术审美常识",
        question: "下列哪种艺术形式主要依靠灯光和影像来表现？",
        options: ["戏剧", "装置艺术", "油画", "陶艺"],
        answer: "装置艺术"
    },

// 沟通规则常识 (10)
{
        category: "沟通规则常识",
        question: "在正式邮件中，通常以什么开头？",
        options: ["嘿", "您好", "嗨", "喂"],
        answer: "您好"
    },
{
        category: "沟通规则常识",
        question: "在电话沟通中，应该先说什么？",
        options: ["我是谁", "对方是谁", "问候语", "直接说事"],
        answer: "问候语"
    },
{
        category: "沟通规则常识",
        question: "面对面交流中，保持什么行为最为重要？",
        options: ["眼神交流", "频繁打断", "低声细语", "使用手机"],
        answer: "眼神交流"
    },
{
        category: "沟通规则常识",
        question: "在公共场合，应该如何保持礼貌？",
        options: ["大声喧哗", "主动打招呼", "保持安静", "随意发言"],
        answer: "保持安静"
    },
{
        category: "沟通规则常识",
        question: "在群组讨论中，最有效的沟通方式是什么？",
        options: ["单向传递信息", "倾听与反馈", "只发表意见", "抢话题"],
        answer: "倾听与反馈"
    },
{
        category: "沟通规则常识",
        question: "有效沟通的关键在于？",
        options: ["倾听", "争辩", "打断", "沉默"],
        answer: "倾听"
    },
{
        category: "沟通规则常识",
        question: "在多人讨论中，如何确保每个人都有发言机会？",
        options: ["轮流发言", "主动打断", "只听自己", "忽视他人意见"],
        answer: "轮流发言"
    },
{
        category: "沟通规则常识",
        question: "沟通中，非语言信号主要包括？",
        options: ["眼神交流", "语速", "语调", "用词"],
        answer: "眼神交流"
    },
{
        category: "沟通规则常识",
        question: "电子邮件沟通中应注意的礼仪是？",
        options: ["使用口语化表达", "写得冗长", "主题明确", "不添加问候语"],
        answer: "主题明确"
    },
{
        category: "沟通规则常识",
        question: "在跨文化沟通中，最重要的因素是？",
        options: ["坚持己见", "保持开放心态", "只使用母语", "忽视文化差异"],
        answer: "保持开放心态"
    },

// 法律规范常识 (10)
{
        category: "法律规范常识",
        question: "中国公民年满多少岁具有完全民事行为能力？",
        options: ["16岁", "18岁", "20岁", "22岁"],
        answer: "18岁"
    },
{
        category: "法律规范常识",
        question: "交通事故中，酒驾的法律后果是什么？",
        options: ["罚款", "吊销驾照", "拘留", "以上都是"],
        answer: "以上都是"
    },
{
        category: "法律规范常识",
        question: "侵犯版权行为最严重的后果通常是什么？",
        options: ["罚款", "监禁", "赔偿损失", "以上都是"],
        answer: "以上都是"
    },
{
        category: "法律规范常识",
        question: "下列哪项属于非法集资行为？",
        options: ["银行存款", "股票投资", "传销活动", "正规理财产品"],
        answer: "传销活动"
    },
{
        category: "法律规范常识",
        question: "在法律面前，所有人都应当享有的原则是？",
        options: ["平等", "特权", "优先", "免税"],
        answer: "平等"
    },
{
        category: "法律规范常识",
        question: "我国法律规定的法定退休年龄一般是？",
        options: ["50岁", "55岁", "60岁", "65岁"],
        answer: "60岁"
    },
{
        category: "法律规范常识",
        question: "在合同中，哪项内容最为关键？",
        options: ["签约日期", "权利与义务", "合同封面", "空白部分"],
        answer: "权利与义务"
    },
{
        category: "法律规范常识",
        question: "遇到刑事案件时，应首先联系哪个机构？",
        options: ["家人", "律师", "公安机关", "朋友"],
        answer: "公安机关"
    },
{
        category: "法律规范常识",
        question: "知识产权保护中，版权主要保护的是？",
        options: ["发明创造", "文学艺术作品", "商标", "专利"],
        answer: "文学艺术作品"
    },
{
        category: "法律规范常识",
        question: "法律程序中，举证责任通常由哪方承担？",
        options: ["被告", "原告", "法官", "律师"],
        answer: "原告"
    },

// 经济运作常识 (10)
{
        category: "经济运作常识",
        question: "通货膨胀通常会导致什么结果？",
        options: ["物价下降", "物价上升", "货币价值增加", "失业率下降"],
        answer: "物价上升"
    },
{
        category: "经济运作常识",
        question: "GDP代表什么？",
        options: ["国内生产总值", "国民生产总值", "国内消费总值", "国民收入总值"],
        answer: "国内生产总值"
    },
{
        category: "经济运作常识",
        question: "市场经济中的供求关系决定了什么？",
        options: ["商品价格", "商品质量", "生产成本", "市场份额"],
        answer: "商品价格"
    },
{
        category: "经济运作常识",
        question: "货币政策主要由哪个机构制定？",
        options: ["政府", "中央银行", "商业银行", "国会"],
        answer: "中央银行"
    },
{
        category: "经济运作常识",
        question: "经济衰退通常会导致哪种现象？",
        options: ["失业率下降", "生产过剩", "消费增长", "失业率上升"],
        answer: "失业率上升"
    },
{
        category: "经济运作常识",
        question: "市场经济中，价格通常由什么决定？",
        options: ["政府调控", "供求关系", "生产成本", "商家意愿"],
        answer: "供求关系"
    },
{
        category: "经济运作常识",
        question: "通货紧缩现象主要表现为？",
        options: ["物价持续下降", "物价持续上升", "货币供应增加", "失业率上升"],
        answer: "物价持续下降"
    },
{
        category: "经济运作常识",
        question: "下列哪项属于财政政策工具？",
        options: ["调整利率", "增减税收", "控制货币供应", "设定物价"],
        answer: "增减税收"
    },
{
        category: "经济运作常识",
        question: "经济全球化的主要特征之一是？",
        options: ["国家经济独立", "跨国投资与贸易", "完全封闭", "本地生产"],
        answer: "跨国投资与贸易"
    },
{
        category: "经济运作常识",
        question: "企业盈利的主要来源是？",
        options: ["成本削减", "销售收入", "政府补贴", "投资收益"],
        answer: "销售收入"
    },

// 历史常识 (10)
{
        category: "历史常识",
        question: "世界上第一个统一的多民族国家是？",
        options: ["罗马帝国", "大秦帝国", "奥斯曼帝国", "英帝国"],
        answer: "大秦帝国"
    },
{
        category: "历史常识",
        question: "二战期间，诺曼底登陆发生在哪一年？",
        options: ["1942年", "1944年", "1945年", "1943年"],
        answer: "1944年"
    },
{
        category: "历史常识",
        question: "中国历史上的‘文景之治’主要指哪个朝代？",
        options: ["汉朝", "唐朝", "宋朝", "明朝"],
        answer: "汉朝"
    },
{
        category: "历史常识",
        question: "古埃及文明的象形文字称为？",
        options: ["楔形文字", "象形文字", "罗马字母", "汉字"],
        answer: "象形文字"
    },
{
        category: "历史常识",
        question: "美国独立宣言是在何时签署的？",
        options: ["1776年", "1789年", "1800年", "1765年"],
        answer: "1776年"
    },
{
        category: "历史常识",
        question: "中国古代的“四大发明”不包括下列哪项？",
        options: ["造纸术", "印刷术", "火药", "纺织术"],
        answer: "纺织术"
    },
{
        category: "历史常识",
        question: "第二次世界大战结束于哪一年？",
        options: ["1943年", "1944年", "1945年", "1946年"],
        answer: "1945年"
    },
{
        category: "历史常识",
        question: "罗马帝国分裂的标志性事件是？",
        options: ["君士坦丁大帝归信基督教", "帝国分裂", "西罗马帝国灭亡", "东罗马帝国延续"],
        answer: "西罗马帝国灭亡"
    },
{
        category: "历史常识",
        question: "下列哪一事件标志着中世纪的结束？",
        options: ["文艺复兴", "工业革命", "大航海时代", "宗教改革"],
        answer: "文艺复兴"
    },
{
        category: "历史常识",
        question: "历史上被称为“铁血宰相”的是谁？",
        options: ["俾斯麦", "丘吉尔", "拿破仑", "林肯"],
        answer: "俾斯麦"
    },

// 地理常识 (10)
{
        category: "地理常识",
        question: "世界上最长的河流是？",
        options: ["亚马逊河", "尼罗河", "长江", "密西西比河"],
        answer: "尼罗河"
    },
{
        category: "地理常识",
        question: "地球上最大的沙漠是？",
        options: ["撒哈拉沙漠", "戈壁沙漠", "阿拉伯沙漠", "卡拉哈里沙漠"],
        answer: "撒哈拉沙漠"
    },
{
        category: "地理常识",
        question: "欧洲最大的国家是？",
        options: ["德国", "法国", "俄罗斯", "英国"],
        answer: "俄罗斯"
    },
{
        category: "地理常识",
        question: "世界上最高的山峰是？",
        options: ["K2", "珠穆朗玛峰", "洛子峰", "马纳斯鲁峰"],
        answer: "珠穆朗玛峰"
    },
{
        category: "地理常识",
        question: "位于南半球的国家是？",
        options: ["加拿大", "巴西", "澳大利亚", "瑞典"],
        answer: "澳大利亚"
    },
{
        category: "地理常识",
        question: "世界上面积最大的国家是？",
        options: ["中国", "美国", "俄罗斯", "加拿大"],
        answer: "俄罗斯"
    },
{
        category: "地理常识",
        question: "下列哪个国家位于南美洲？",
        options: ["西班牙", "巴西", "德国", "日本"],
        answer: "巴西"
    },
{
        category: "地理常识",
        question: "世界上最长的山脉是？",
        options: ["阿尔卑斯山", "安第斯山", "喜马拉雅山", "落基山"],
        answer: "安第斯山"
    },
{
        category: "地理常识",
        question: "位于非洲的撒哈拉沙漠主要分布在？",
        options: ["整个非洲", "北非", "东非", "南非"],
        answer: "北非"
    },
{
        category: "地理常识",
        question: "下列哪条河流流经埃及？",
        options: ["亚马逊河", "尼罗河", "长江", "密西西比河"],
        answer: "尼罗河"
    },

// 生物常识 (10)
{
        category: "生物常识",
        question: "人体内最大的器官是？",
        options: ["心脏", "肝脏", "皮肤", "肺"],
        answer: "皮肤"
    },
{
        category: "生物常识",
        question: "下列哪种动物是哺乳动物？",
        options: ["鲨鱼", "海豚", "企鹅", "乌龟"],
        answer: "海豚"
    },
{
        category: "生物常识",
        question: "植物进行光合作用主要吸收哪种气体？",
        options: ["氧气", "二氧化碳", "氮气", "氢气"],
        answer: "二氧化碳"
    },
{
        category: "生物常识",
        question: "人类基因组大约有多少个基因？",
        options: ["1万", "2万", "3万", "4万"],
        answer: "2万"
    },
{
        category: "生物常识",
        question: "地球上最古老的生物之一是？",
        options: ["细菌", "植物", "昆虫", "鱼类"],
        answer: "细菌"
    },
{
        category: "生物常识",
        question: "人体内最长的器官是？",
        options: ["皮肤", "肠道", "神经", "肌肉"],
        answer: "皮肤"
    },
{
        category: "生物常识",
        question: "下列哪种生物属于两栖动物？",
        options: ["青蛙", "蛇", "乌龟", "鸟"],
        answer: "青蛙"
    },
{
        category: "生物常识",
        question: "植物进行光合作用主要依靠哪个器官？",
        options: ["根", "叶", "茎", "花"],
        answer: "叶"
    },
{
        category: "生物常识",
        question: "人类有多少对染色体？",
        options: ["22对", "23对", "24对", "25对"],
        answer: "23对"
    },
{
        category: "生物常识",
        question: "细胞分裂主要分为哪两种类型？",
        options: ["有丝分裂和减数分裂", "无性分裂和有性分裂", "二分裂和多分裂", "简单分裂和复杂分裂"],
        answer: "有丝分裂和减数分裂"
    },

// 化学常识 (10)
{
        category: "化学常识",
        question: "元素周期表中，原子序数为1的元素是？",
        options: ["氧", "氢", "碳", "氦"],
        answer: "氢"
    },
{
        category: "化学常识",
        question: "水的分子式为？",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O"
    },
{
        category: "化学常识",
        question: "下列哪种物质是酸性溶液？",
        options: ["肥皂水", "醋", "碱液", "清水"],
        answer: "醋"
    },
{
        category: "化学常识",
        question: "二氧化碳在常温下的状态是？",
        options: ["固体", "液体", "气体", "等离子体"],
        answer: "气体"
    },
{
        category: "化学常识",
        question: "常见的催化剂不包括下列哪种物质？",
        options: ["酶", "金属", "塑料", "酸"],
        answer: "塑料"
    },
{
        category: "化学常识",
        question: "下列哪种物质是碱性物质？",
        options: ["盐酸", "硫酸", "氢氧化钠", "硝酸"],
        answer: "氢氧化钠"
    },
{
        category: "化学常识",
        question: "元素周期表中，金属元素通常位于？",
        options: ["左侧", "右侧", "中央", "全部均匀分布"],
        answer: "左侧"
    },
{
        category: "化学常识",
        question: "化学反应中，不参与反应的物质称为？",
        options: ["催化剂", "反应物", "生成物", "溶剂"],
        answer: "催化剂"
    },
{
        category: "化学常识",
        question: "下列哪项是常见的有机化合物？",
        options: ["甲烷", "氧气", "氮气", "氖气"],
        answer: "甲烷"
    },
{
        category: "化学常识",
        question: "溶液中pH值小于7表示？",
        options: ["酸性", "碱性", "中性", "不确定"],
        answer: "酸性"
    },

// 物理常识 (10)
{
        category: "物理常识",
        question: "牛顿第一运动定律也称为？",
        options: ["惯性定律", "作用与反作用定律", "万有引力定律", "热力学定律"],
        answer: "惯性定律"
    },
{
        category: "物理常识",
        question: "声音的传播需要介质吗？",
        options: ["需要", "不需要", "部分需要", "视情况而定"],
        answer: "需要"
    },
{
        category: "物理常识",
        question: "电流的单位是？",
        options: ["伏特", "安培", "欧姆", "瓦特"],
        answer: "安培"
    },
{
        category: "物理常识",
        question: "光的折射现象主要发生在？",
        options: ["真空", "固体", "液体和固体交界面", "黑洞附近"],
        answer: "液体和固体交界面"
    },
{
        category: "物理常识",
        question: "温度计中通常使用的液体是什么？",
        options: ["酒精", "水银", "油", "空气"],
        answer: "水银"
    },
{
        category: "物理常识",
        question: "电磁波包括下列哪种波段？",
        options: ["无线电波", "机械波", "声波", "水波"],
        answer: "无线电波"
    },
{
        category: "物理常识",
        question: "牛顿第三定律描述的是？",
        options: ["惯性", "力的平衡", "作用与反作用", "加速度"],
        answer: "作用与反作用"
    },
{
        category: "物理常识",
        question: "下列哪项可以用来测量温度？",
        options: ["温度计", "气压计", "计时器", "测速仪"],
        answer: "温度计"
    },
{
        category: "物理常识",
        question: "下列哪种现象展示了波粒二象性？",
        options: ["光", "声音", "电流", "重力"],
        answer: "光"
    },
{
        category: "物理常识",
        question: "在真空中，电磁波的传播速度是多少？",
        options: ["约3×10^8米/秒", "约3×10^6米/秒", "约3×10^5米/秒", "约3×10^7米/秒"],
        answer: "约3×10^8米/秒"
    },

// 计算机常识 (10)
{
        category: "计算机常识",
        question: "计算机的中央处理器通常被称为？",
        options: ["CPU", "GPU", "RAM", "硬盘"],
        answer: "CPU"
    },
{
        category: "计算机常识",
        question: "以下哪种是计算机的输入设备？",
        options: ["显示器", "键盘", "打印机", "音箱"],
        answer: "键盘"
    },
{
        category: "计算机常识",
        question: "HTML是一种什么类型的语言？",
        options: ["编程语言", "标记语言", "脚本语言", "数据库语言"],
        answer: "标记语言"
    },
{
        category: "计算机常识",
        question: "计算机内存条的容量通常以什么单位计量？",
        options: ["比特", "字节", "兆字节", "毫秒"],
        answer: "兆字节"
    },
{
        category: "计算机常识",
        question: "操作系统中负责管理硬件和软件资源的是？",
        options: ["应用程序", "操作系统内核", "驱动程序", "用户界面"],
        answer: "操作系统内核"
    },
{
        category: "计算机常识",
        question: "计算机存储数据的基本单位是？",
        options: ["比特", "字节", "千字节", "兆字节"],
        answer: "比特"
    },
{
        category: "计算机常识",
        question: "二进制数1010转换为十进制是多少？",
        options: ["10", "11", "12", "13"],
        answer: "10"
    },
{
        category: "计算机常识",
        question: "互联网协议常用的版本有哪两个？",
        options: ["IPv4和IPv6", "HTTP和HTTPS", "TCP和UDP", "SMTP和POP3"],
        answer: "IPv4和IPv6"
    },
{
        category: "计算机常识",
        question: "软件开发中常用的编程语言不包括下列哪项？",
        options: ["Python", "Java", "HTML", "C++"],
        answer: "HTML"
    },
{
        category: "计算机常识",
        question: "计算机网络中，路由器的主要功能是？",
        options: ["数据包转发", "数据存储", "数据加密", "数据压缩"],
        answer: "数据包转发"
    },

// 环境科学常识 (10)
{
        category: "环境科学常识",
        question: "下列哪项是温室气体的一种？",
        options: ["氧气", "二氧化碳", "氮气", "氖气"],
        answer: "二氧化碳"
    },
{
        category: "环境科学常识",
        question: "导致全球变暖的主要原因是？",
        options: ["森林砍伐", "工业排放", "火山爆发", "太阳活动"],
        answer: "工业排放"
    },
{
        category: "环境科学常识",
        question: "垃圾分类有助于？",
        options: ["减少资源浪费", "增加垃圾产量", "污染环境", "破坏生态"],
        answer: "减少资源浪费"
    },
{
        category: "环境科学常识",
        question: "可再生能源不包括下列哪种？",
        options: ["太阳能", "风能", "煤炭", "水能"],
        answer: "煤炭"
    },
{
        category: "环境科学常识",
        question: "环境保护的基本原则是什么？",
        options: ["先发展后治理", "预防为主", "污染为辅", "牺牲经济"],
        answer: "预防为主"
    },
{
        category: "环境科学常识",
        question: "空气污染主要来源于？",
        options: ["工业排放", "森林火灾", "海洋", "自然风"],
        answer: "工业排放"
    },
{
        category: "环境科学常识",
        question: "温室效应主要由哪种气体引起？",
        options: ["氧气", "氮气", "二氧化碳", "氢气"],
        answer: "二氧化碳"
    },
{
        category: "环境科学常识",
        question: "生态系统中的生物多样性主要指？",
        options: ["物种种类", "单一物种数量", "植物高度", "动物体型"],
        answer: "物种种类"
    },
{
        category: "环境科学常识",
        question: "下列哪项措施有助于减少水污染？",
        options: ["工业废水处理", "增加化肥使用", "乱排污水", "扩大农药使用"],
        answer: "工业废水处理"
    },
{
        category: "环境科学常识",
        question: "可再生能源中不包括哪种？",
        options: ["太阳能", "风能", "化石燃料", "水能"],
        answer: "化石燃料"
    },

// 体育常识 (10)
{
        category: "体育常识",
        question: "足球比赛中，每队上场的球员人数是？",
        options: ["9人", "10人", "11人", "12人"],
        answer: "11人"
    },
{
        category: "体育常识",
        question: "奥运会的举办周期是？",
        options: ["每2年", "每4年", "每6年", "每8年"],
        answer: "每4年"
    },
{
        category: "体育常识",
        question: "篮球比赛中，投篮得分最高的是哪种方式？",
        options: ["两分球", "三分球", "罚球", "扣篮"],
        answer: "三分球"
    },
{
        category: "体育常识",
        question: "乒乓球比赛中，单局比赛通常先得多少分获胜？",
        options: ["11分", "15分", "21分", "25分"],
        answer: "11分"
    },
{
        category: "体育常识",
        question: "田径比赛中，百米赛跑主要考察什么能力？",
        options: ["耐力", "爆发力", "协调性", "柔韧性"],
        answer: "爆发力"
    },
{
        category: "体育常识",
        question: "奥运会中的田径项目不包括下列哪项？",
        options: ["百米赛跑", "跳高", "举重", "长跑"],
        answer: "举重"
    },
{
        category: "体育常识",
        question: "足球比赛中，禁区内犯规通常会导致？",
        options: ["点球", "角球", "任意球", "罚球"],
        answer: "点球"
    },
{
        category: "体育常识",
        question: "网球比赛中，每局比赛中得分到达哪个数值时常称为关键分？",
        options: ["15", "30", "40", "0"],
        answer: "40"
    },
{
        category: "体育常识",
        question: "在游泳比赛中，蛙泳的主要动作特点是？",
        options: ["双臂划水", "蝶泳腿踢", "蛙泳腿踢", "自由泳划水"],
        answer: "蛙泳腿踢"
    },
{
        category: "体育常识",
        question: "篮球比赛中，哪种犯规最常导致罚球？",
        options: ["技术犯规", "阻挡犯规", "投篮犯规", "走步"],
        answer: "投篮犯规"
    },

// 音乐常识 (10)
{
        category: "音乐常识",
        question: "交响乐团中通常指挥乐队的是？",
        options: ["小提琴手", "指挥", "钢琴家", "打击乐手"],
        answer: "指挥"
    },
{
        category: "音乐常识",
        question: "下列哪位作曲家创作了《命运交响曲》？",
        options: ["贝多芬", "莫扎特", "巴赫", "肖邦"],
        answer: "贝多芬"
    },
{
        category: "音乐常识",
        question: "音符中的“全音符”时值占全小节的多少？",
        options: ["1/2", "1/4", "1", "2"],
        answer: "1"
    },
{
        category: "音乐常识",
        question: "吉他属于哪种乐器类别？",
        options: ["弦乐器", "打击乐器", "管乐器", "键盘乐器"],
        answer: "弦乐器"
    },
{
        category: "音乐常识",
        question: "下列哪种乐器通常需要用嘴吹奏？",
        options: ["长笛", "小提琴", "钢琴", "吉他"],
        answer: "长笛"
    },
{
        category: "音乐常识",
        question: "五线谱中，最底部那条线代表的音符通常是？",
        options: ["E", "F", "G", "A"],
        answer: "E"
    },
{
        category: "音乐常识",
        question: "中国传统乐器中，二胡属于哪种乐器类别？",
        options: ["弦乐器", "打击乐器", "管乐器", "电子乐器"],
        answer: "弦乐器"
    },
{
        category: "音乐常识",
        question: "音乐中的“节拍”主要指的是？",
        options: ["音高", "音色", "节奏的强弱", "旋律"],
        answer: "节奏的强弱"
    },
{
        category: "音乐常识",
        question: "下列哪种乐器属于打击乐器？",
        options: ["钢琴", "小提琴", "架子鼓", "长笛"],
        answer: "架子鼓"
    },
{
        category: "音乐常识",
        question: "古典音乐中的“协奏曲”通常由谁来演奏主旋律？",
        options: ["独奏乐器", "整个乐团", "指挥", "合唱团"],
        answer: "独奏乐器"
    },

// 电影常识 (10)
{
        category: "电影常识",
        question: "电影《泰坦尼克号》的导演是谁？",
        options: ["詹姆斯·卡梅隆", "史蒂文·斯皮尔伯格", "克里斯托弗·诺兰", "马丁·斯科塞斯"],
        answer: "詹姆斯·卡梅隆"
    },
{
        category: "电影常识",
        question: "奥斯卡金像奖是哪个国家的电影奖项？",
        options: ["英国", "美国", "法国", "德国"],
        answer: "美国"
    },
{
        category: "电影常识",
        question: "电影中常用的“蒙太奇”手法主要用于？",
        options: ["剪辑", "配乐", "表演", "摄影"],
        answer: "剪辑"
    },
{
        category: "电影常识",
        question: "动画电影《狮子王》最初是哪一年上映的？",
        options: ["1992年", "1994年", "1996年", "1998年"],
        answer: "1994年"
    },
{
        category: "电影常识",
        question: "电影《盗梦空间》属于哪种类型的电影？",
        options: ["爱情片", "科幻片", "动作片", "喜剧片"],
        answer: "科幻片"
    },
{
        category: "电影常识",
        question: "电影《阿甘正传》的主演是谁？",
        options: ["汤姆·汉克斯", "莱昂纳多·迪卡普里奥", "布拉德·皮特", "约翰·特拉沃尔塔"],
        answer: "汤姆·汉克斯"
    },
{
        category: "电影常识",
        question: "下列哪部电影获得过奥斯卡最佳影片奖？",
        options: ["《泰坦尼克号》", "《阿凡达》", "《盗梦空间》", "《星际穿越》"],
        answer: "《泰坦尼克号》"
    },
{
        category: "电影常识",
        question: "电影拍摄中，负责后期剪辑的是？",
        options: ["导演", "摄影师", "剪辑师", "编剧"],
        answer: "剪辑师"
    },
{
        category: "电影常识",
        question: "电影中的“特效”通常指的是？",
        options: ["实景拍摄", "计算机生成影像", "演员表演", "音效处理"],
        answer: "计算机生成影像"
    },
{
        category: "电影常识",
        question: "动画电影主要依靠哪种技术制作？",
        options: ["手绘", "CGI", "实拍", "定格动画"],
        answer: "CGI"
    },

// 美食常识 (10)
{
        category: "美食常识",
        question: "意大利面条的主要原料是什么？",
        options: ["米", "小麦", "玉米", "大米"],
        answer: "小麦"
    },
{
        category: "美食常识",
        question: "寿司起源于哪个国家？",
        options: ["中国", "韩国", "日本", "泰国"],
        answer: "日本"
    },
{
        category: "美食常识",
        question: "制作披萨的传统面饼主要成分是？",
        options: ["面粉", "米粉", "玉米粉", "大米粉"],
        answer: "面粉"
    },
{
        category: "美食常识",
        question: "下列哪种调味品常用于中餐烹饪？",
        options: ["番茄酱", "酱油", "沙拉酱", "芥末"],
        answer: "酱油"
    },
{
        category: "美食常识",
        question: "巧克力的主要原料是什么？",
        options: ["咖啡豆", "可可豆", "杏仁", "芝麻"],
        answer: "可可豆"
    },
{
        category: "美食常识",
        question: "中国菜系中，以清淡著称的是？",
        options: ["川菜", "鲁菜", "粤菜", "湘菜"],
        answer: "粤菜"
    },
{
        category: "美食常识",
        question: "寿司的主要食材是什么？",
        options: ["面条", "米饭", "土豆", "面包"],
        answer: "米饭"
    },
{
        category: "美食常识",
        question: "咖啡因主要存在于下列哪种饮品中？",
        options: ["茶", "咖啡", "果汁", "牛奶"],
        answer: "咖啡"
    },
{
        category: "美食常识",
        question: "制作饺子时，饺子皮主要成分是？",
        options: ["玉米粉", "面粉", "米粉", "土豆淀粉"],
        answer: "面粉"
    },
{
        category: "美食常识",
        question: "哪种烹饪方法属于干热烹调？",
        options: ["蒸", "煮", "炒", "炖"],
        answer: "炒"
    },

// 天文常识 (10)
{
        category: "天文常识",
        question: "太阳系中最靠近太阳的行星是？",
        options: ["地球", "金星", "水星", "火星"],
        answer: "水星"
    },
{
        category: "天文常识",
        question: "下列哪颗星是夜空中最亮的星？",
        options: ["北极星", "参宿四", "天狼星", "织女星"],
        answer: "天狼星"
    },
{
        category: "天文常识",
        question: "月球表面的重力约为地球的多少？",
        options: ["1/2", "1/6", "1/4", "1/8"],
        answer: "1/6"
    },
{
        category: "天文常识",
        question: "银河系是？",
        options: ["一颗行星", "一个恒星", "一个星系", "一个卫星"],
        answer: "一个星系"
    },
{
        category: "天文常识",
        question: "下列哪种天文现象描述的是彗星？",
        options: ["行星的环", "恒星的光芒", "尾巴拖曳的冰雪体", "黑洞吸积盘"],
        answer: "尾巴拖曳的冰雪体"
    },
{
        category: "天文常识",
        question: "太阳属于哪一类天体？",
        options: ["恒星", "行星", "卫星", "彗星"],
        answer: "恒星"
    },
{
        category: "天文常识",
        question: "下列哪颗星球被称为“红色星球”？",
        options: ["地球", "火星", "木星", "金星"],
        answer: "火星"
    },
{
        category: "天文常识",
        question: "望远镜主要用于？",
        options: ["听声音", "观察天体", "测量温度", "检测气味"],
        answer: "观察天体"
    },
{
        category: "天文常识",
        question: "下列哪项不属于太阳系行星？",
        options: ["冥王星", "土星", "海王星", "火星"],
        answer: "冥王星"
    },
{
        category: "天文常识",
        question: "星系主要由什么构成？",
        options: ["恒星", "行星", "彗星", "卫星"],
        answer: "恒星"
    },

];
