module.exports = {
  "title": "不是酸柠檬的web博客",
  "description": "不是酸柠檬的博客，web前端博客，专注JavaScript、Vue、HTML+CSS、Git，关注学习web前端",
  "dest": "public",
  "base":"/blog/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "学习库",
            "link": "/docs/study-library/"
          }
        ]
      },
      {
        "text": "关于",
        "icon": "reco-message",
        "link": "/about/",
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Lee-Jp",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/about/": [
        "",
        "theme",
        "plugin",
        "api"
      ],
      "/docs/study-library/": [
        "",
        "html",
        "Css",
        "JavaScript",
        "Vue",
        "Engineering",
        "Browser",
        "network",
        "algorithm",
        "design-pattern",
        "interview",
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "不是酸柠檬",
    "authorAvatar": "/avatar.png",
    "record": 'ICP 备案文案',
    "recordLink": 'ICP 备案指向链接',
    "cyberSecurityRecord": '公安部备案文案',
    "cyberSecurityLink": '公安部备案指向链接',
    "startYear": '2020'
  },
  "markdown": {
    "lineNumbers": true
  }
}