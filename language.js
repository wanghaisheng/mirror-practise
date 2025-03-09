// Import page data from pageData.js
const pageData = {
    home: {
        cn: {
            title: '镜子练习',
            greeting: '你好，用户',
            subtitle: '今天是开始自我接纳的好日子',
            quote: '"真正的自信来自接纳真实的自己，包括缺点和不足。"',
            author: '— 布伦妮·布朗',
            startPractice: '开始今日练习',
            weeklyProgress: '本周进度',
            completed: '已完成',
            consecutiveDays: '连续天数',
            completionRate: '完成率',
            exploreMore: '探索更多',
            featureCards: [
                {
                    title: '练习指南',
                    description: '深入了解镜子练习的方法和技巧'
                },
                {
                    title: '进度分析',
                    description: '查看详细的练习数据和进度报告'
                },
                {
                    title: '社区交流',
                    description: '与其他用户分享经验和感受'
                }
            ]
        },
        en: {
            title: 'Mirror Practice',
            greeting: 'Hello, User',
            subtitle: 'Today is a good day for self-acceptance',
            quote: '"True confidence comes from accepting your authentic self, including your flaws and imperfections."',
            author: '— Brené Brown',
            startPractice: 'Start Today\'s Practice',
            weeklyProgress: 'Weekly Progress',
            completed: 'Completed',
            consecutiveDays: 'Streak',
            completionRate: 'Completion Rate',
            exploreMore: 'Explore More',
            featureCards: [
                {
                    title: 'Practice Guide',
                    description: 'Learn more about mirror practice methods and techniques'
                },
                {
                    title: 'Progress Analysis',
                    description: 'View detailed practice data and progress reports'
                },
                {
                    title: 'Community',
                    description: 'Share experiences and feelings with other users'
                }
            ]
        }
    },
    practice: {
        cn: {
            title: '练习'
        },
        en: {
            title: 'Practice'
        }
    },
    history: {
        cn: {
            title: '历史记录'
        },
        en: {
            title: 'History'
        }
    },
    profile: {
        cn: {
            title: '个人中心'
        },
        en: {
            title: 'Profile'
        }
    },
    navigation: {
        cn: {
            home: '首页',
            practice: '练习',
            history: '历史',
            profile: '我的'
        },
        en: {
            home: 'Home',
            practice: 'Practice',
            history: 'History',
            profile: 'Profile'
        }
    }
};

// Function to update all text elements with translations
function updateLanguage(lang) {
    // Default to Chinese if no language specified
    const currentLang = lang || 'cn';
    
    // Update page content based on current page and data
    const pageName = getCurrentPage();
    if (pageName && pageData[pageName]) {
        updatePageContent(pageName, currentLang);
    }
    
    // Always update navigation elements
    updateNavigation(currentLang);
    
    // Dispatch a custom event to notify about language change
    window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { 
            language: currentLang,
            pageName: pageName
        } 
    }));
}

// Helper function to determine current page
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('home')) return 'home';
    if (path.includes('practice')) return 'practice';
    if (path.includes('history')) return 'history';
    if (path.includes('profile')) return 'profile';
    return null;
}

// Update page-specific content
function updatePageContent(pageName, lang) {
    const data = pageData[pageName][lang];
    
    // Update page title
    document.querySelector('.status-bar span').textContent = data.title;
    
    // Update other elements based on page type
    switch(pageName) {
        case 'home':
            updateHomeContent(data);
            break;
        case 'practice':
            updatePracticeContent(data);
            break;
        case 'history':
            updateHistoryContent(data);
            break;
        case 'profile':
            updateProfileContent(data);
            break;
    }
}

// Update navigation bar
function updateNavigation(lang) {
    const navData = pageData.navigation[lang];
    const navItems = document.querySelectorAll('.nav-bar .nav-item');
    
    navItems[0].querySelector('span').textContent = navData.home;
    navItems[1].querySelector('span').textContent = navData.practice;
    navItems[2].querySelector('span').textContent = navData.history;
    navItems[3].querySelector('span').textContent = navData.profile;
}

// Page-specific update functions
function updateHomeContent(data) {
    document.querySelector('[data-content="greeting"]').textContent = data.greeting;
    document.querySelector('[data-content="subtitle"]').textContent = data.subtitle;
    document.querySelector('[data-content="quote"]').textContent = data.quote;
    document.querySelector('[data-content="author"]').textContent = data.author;
    document.querySelector('[data-content="start-practice"]').textContent = data.startPractice;
    document.querySelector('[data-content="weekly-progress"]').textContent = data.weeklyProgress;
    document.querySelector('[data-content="completed"]').textContent = data.completed;
    document.querySelector('[data-content="consecutive-days"]').textContent = data.consecutiveDays;
    document.querySelector('[data-content="completion-rate"]').textContent = data.completionRate;
    document.querySelector('[data-content="explore-more"]').textContent = data.exploreMore;
    
    // Update feature cards
    const cardContainers = document.querySelectorAll('.feature-cards .feature-card');
    data.featureCards.forEach((card, index) => {
        const container = cardContainers[index];
        if (container) {
            container.querySelector('h4').textContent = card.title;
            container.querySelector('p').textContent = card.description;
        }
    });
}

function updatePracticeContent(data) {
    // Implementation for updating practice page content
    document.querySelector('.practice-title').textContent = data.title;
}

function updateHistoryContent(data) {
    // Implementation for updating history page content
    document.querySelector('.history-title').textContent = data.title;
}

function updateProfileContent(data) {
    // Implementation for updating profile page content
    document.querySelector('.profile-title').textContent = data.title;
}

// Initialize language based on URL parameter
function initLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'cn';
    updateLanguage(lang);
}

// Call initLanguage when DOM is loaded
document.addEventListener('DOMContentLoaded', initLanguage);