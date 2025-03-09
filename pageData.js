const pageData = {
  home: {
    cn: {
      title: "镜子练习",
      greeting: "你好，用户",
      subtitle: "今天是开始自我接纳的好日子",
      quote: ""真正的自信来自接纳真实的自己，包括缺点和不足。"",
      author: "— 布伦妮·布朗",
      startPractice: "开始今日练习",
      weeklyProgress: "本周进度",
      completed: "已完成",
      consecutiveDays: "连续天数",
      completionRate: "完成率",
      exploreMore: "探索更多",
      featureCards: [
        {
          icon: "book",
          color: "blue",
          title: "练习指南",
          description: "深入了解镜子练习的方法和技巧"
        },
        {
          icon: "chart-line",
          color: "green",
          title: "进度分析",
          description: "查看详细的练习数据和进度报告"
        },
        {
          icon: "users",
          color: "yellow",
          title: "社区交流",
          description: "与其他用户分享经验和感受"
        },
        {
          icon: "heart",
          color: "red",
          title: "自定义肯定语",
          description: "创建符合个人需求的自我肯定语句"
        }
      ]
    },
    en: {
      title: "Mirror Practice",
      greeting: "Hello, User",
      subtitle: "Today is a good day for self-acceptance",
      quote: ""True confidence comes from accepting your authentic self, including your flaws and imperfections."",
      author: "— Brené Brown",
      startPractice: "Start Today's Practice",
      weeklyProgress: "Weekly Progress",
      completed: "Completed",
      consecutiveDays: "Streak",
      completionRate: "Completion Rate",
      exploreMore: "Explore More",
      featureCards: [
        {
          icon: "book",
          color: "blue",
          title: "Practice Guide",
          description: "Learn more about mirror practice methods and techniques"
        },
        {
          icon: "chart-line",
          color: "green",
          title: "Progress Analysis",
          description: "View detailed practice data and progress reports"
        },
        {
          icon: "users",
          color: "yellow",
          title: "Community Discussion",
          description: "Share experiences and feelings with other users"
        },
        {
          icon: "heart",
          color: "red",
          title: "Custom Affirmations",
          description: "Create personalized affirmation statements"
        }
      ]
    }
  },
  practice: {
    cn: {
      title: "练习",
      steps: "练习步骤",
      preparation: {
        title: "准备",
        description: "在开始练习前，请先做好以下准备：",
        items: [
          "找一个安静、私密的环境",
          "确保光线充足，让你能清晰看到自己",
          "调整仪容，尽量以舒适自然的状态面对镜子",
          "深呼吸几次，让身心放松"
        ],
        completeButton: "完成准备"
      },
      gazing: {
        title: "直视练习",
        description: "直视镜中的自己，尤其是眼睛。保持专注，不要回避。",
        timerOptions: ["10秒", "30秒", "60秒"],
        startButton: "开始计时"
      },
      feeling: {
        title: "感受承认",
        description: "观察内心感受，不必评判，只需承认并接受这些感受。",
        prompt: ""我注意到我现在感到..."",
        feelings: ["紧张", "好奇", "期待", "不安", "平静"],
        addButton: "+添加",
        placeholder: "记录你的感受...",
        continueButton: "继续"
      },
      affirmation: {
        title: "自我对话",
        description: "对着镜中的自己，重复以下肯定语句。你也可以自定义语句或添加你的名字。",
        text: ""我爱你，我喜欢你，我无条件地接纳你，支持你"",
        repeatLabel: "重复次数",
        customizeButton: "自定义肯定语句",
        completeButton: "完成练习"
      },
      musicPlayer: {
        title: "舒缓冥想音乐",
        subtitle: "轻松放松心情"
      }
    },
    en: {
      title: "Practice",
      steps: "Practice Steps",
      preparation: {
        title: "Preparation",
        description: "Before starting, please prepare the following:",
        items: [
          "Find a quiet, private environment",
          "Ensure adequate lighting so you can see yourself clearly",
          "Adjust your appearance, face the mirror in a comfortable, natural state",
          "Take a few deep breaths to relax your body and mind"
        ],
        completeButton: "Complete Preparation"
      },
      gazing: {
        title: "Eye Gazing",
        description: "Look directly at yourself in the mirror, especially your eyes. Stay focused, don't avoid.",
        timerOptions: ["10 sec", "30 sec", "60 sec"],
        startButton: "Start Timer"
      },
      feeling: {
        title: "Acknowledge Feelings",
        description: "Observe your inner feelings without judgment, just acknowledge and accept them.",
        prompt: ""I notice that I now feel..."",
        feelings: ["Tense", "Curious", "Expectant", "Anxious", "Calm"],
        addButton: "+Add",
        placeholder: "Record your feelings...",
        continueButton: "Continue"
      },
      affirmation: {
        title: "Self Dialogue",
        description: "Looking at yourself in the mirror, repeat the following affirmations. You can customize them or add your name.",
        text: ""I love you, I like you, I accept you unconditionally, I support you"",
        repeatLabel: "Repeat Count",
        customizeButton: "Customize Affirmation",
        completeButton: "Complete Practice"
      },
      musicPlayer: {
        title: "Relaxing Meditation Music",
        subtitle: "Relax Your Mind"
      }
    }
  },
  history: {
    cn: {
      title: "历史记录",
      practiceRecords: "练习记录",
      dataAnalysis: "数据分析",
      statistics: "练习统计",
      viewMore: "查看更多",
      totalPractices: "总练习次数",
      weeklyPractices: "本周练习",
      longestStreak: "最长连续天数",
      averageDuration: "平均时长(分钟)",
      monthlyCalendar: "2023年11月",
      weeklyDuration: "每周练习时长（分钟）",
      recentRecords: "最近练习记录",
      home: "首页",
      practice: "练习",
      history: "历史",
      my: "我的"
    },
    en: {
      title: "History",
      practiceRecords: "Practice Records",
      dataAnalysis: "Data Analysis",
      statistics: "Practice Statistics",
      viewMore: "View More",
      totalPractices: "Total Practices",
      weeklyPractices: "This Week",
      longestStreak: "Longest Streak",
      averageDuration: "Avg Duration(min)",
      monthlyCalendar: "November 2023",
      weeklyDuration: "Weekly Practice Duration (min)",
      recentRecords: "Recent Practice Records",
      home: "Home",
      practice: "Practice",
      history: "History",
      my: "Profile"
    }
  },
  profile: {
    cn: {
      title: "个人中心",
      editProfile: "编辑资料",
      streak: "连续练习",
      level: "等级",
      beginner: "初学者",
      myAffirmations: "我的肯定语句",
      reminders: "提醒设置",
      backgroundMusic: "背景音乐",
      practiceSettings: "练习设置",
      privacy: "隐私设置",
      resources: "资源与帮助",
      logout: "退出登录",
      streakDays: "连续练习: 5天",
      motto: ""每一天都是重新认识自己的机会""
    },
    en: {
      title: "Profile",
      editProfile: "Edit Profile",
      streak: "Streak",
      level: "Level",
      beginner: "Beginner",
      myAffirmations: "My Affirmations",
      reminders: "Reminders",
      backgroundMusic: "Background Music",
      practiceSettings: "Practice Settings",
      privacy: "Privacy Settings",
      resources: "Resources & Help",
      logout: "Log Out",
      streakDays: "Streak: 5 days",
      motto: ""Every day is an opportunity to rediscover yourself""
    }
  },
  navigation: {
    cn: {
      home: "首页",
      practice: "练习",
      history: "历史",
      profile: "我的"
    },
    en: {
      home: "Home",
      practice: "Practice",
      history: "History",
      profile: "Profile"
    }
  }
};