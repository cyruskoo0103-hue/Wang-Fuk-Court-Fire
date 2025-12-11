import { ContentMap } from './types';

export const CONTENT: ContentMap = {
  zh: {
    header: {
      title: "大埔宏福苑五級大火調查報告",
      nav: {
        causes: "I. 火災成因",
        accountability: "II. 問責跟進",
        bidRigging: "III. 圍標背景",
        careTeam: "IV. 關愛隊爭議",
        socialWorker: "V. 社工爭議",
        icac: "VI. 廉署介入",
        chilling: "VII. 寒蟬效應",
      }
    },
    sections: [
      {
        id: "causes",
        title: "I. 火勢迅速蔓延的主要原因",
        type: "list",
        intro: "根據初步技術分析，火勢未能被局限並迅速向上蔓延，主要歸咎於以下五個致命因素：",
        items: [
          "工程使用了非阻燃規格的尼龍網，在火災初期迅速燃燒並滴落火種。",
          "在維修工程期間，有部分單位或電梯大堂的窗戶被違規安裝了易燃的發泡膠板以作保護。",
          "高溫導致發泡膠板迅速燃燒，不僅加劇火勢，更可能釋放出有毒氣體，同時阻礙濃煙排出和住戶逃生。",
          "消防警報系統失效：多名倖存住戶報告，火災發生時從未聽到火警警鐘響起。事後消防處處長亦證實，屋苑內多座大廈的警鐘經檢驗後全部失效，延誤了住戶的逃生時間。",
          ,
        ]
      },
      {
        id: "accountability",
        title: "II. 後續跟進與問責",
        type: "standard",
        content: [
          "目前警方已介入調查，並循「危害公眾安全」及「誤殺」方向蒐證。重案組已接手案件，重點調查涉事承建商及工程顧問公司是否涉及刑事疏忽。",
          "屋宇署及機電工程署已成立跨部門專責小組，檢視大廈維修工程的監管流程。政府承諾在三個月內提交初步報告，檢討現行《建築物管理條例》對舊樓維修物料的監管漏洞。",
          "懷疑貪污行為：廉政公署已拘捕多名涉案人士，包括工程顧問公司的董事，承建商（宏業建築工程公司）的負責人，棚架工程分判商的負責人和中間人等。調查核心在於承辦商和工程顧問是否串通，導致屋苑在價值高達 3.3 億元的「天價大維修」工程中，選用了不合規格的易燃物料（例如阻燃能力不足的棚網和易燃的發泡膠板）。",
        ]
      },
      {
        id: "bid-rigging",
        title: "III. 宏福苑的圍標爭議背景",
        type: "standard",
        content: [
          "是次大火的背景，源於一項備受爭議的天價大維修工程。早在工程招標階段，已有業主質疑造價遠高於市價，且標書條款似乎為特定承建商「度身訂造」。",
          "反圍標關注組曾多次指出，中標公司與顧問公司關係密切，屬典型的「一條龍」圍標操作。高昂的工程費並未轉化為高規格的安全措施，反而因層層分判與利潤最大化，導致使用了最廉價且危險的建築物料。"
        ]
      },
      {
        id: "care-team",
        title: "IV. 關愛隊爭議：雙重敘事",
        type: "comparison",
        leftTitle: "民間指控",
        rightTitle: "官方解釋",
        leftContent: [
          "多名現場獨立義工指控被身穿關愛隊制服的人士驅趕。",
          "市民捐贈的食水和乾糧被指遭關愛隊「沒收」或「充公」。",
          "指責關愛隊在未有足夠人手下強行接管物資站，導致派發混亂。",
          "批評將行政權力帶入災難現場，阻礙即時人道救援。"
        ],
        rightContent: [
          "民政事務處表示關愛隊是為了「統籌」現場混亂情況。",
          "否認「充公」物資，稱之為「統一管理」以便公平分配。",
          "強調需要建立秩序，避免物資被濫用或重複領取。",
          "聲稱關愛隊成員均受過訓練，能更有效配合政府部門行動。"
        ],
        media: [
          {
            type: 'facebook',
            url: 'https://www.facebook.com/reel/1349871479964995',
            label: '觀看爭議片段 (Facebook Reel)'
          },
          {
            type: 'instagram',
            url: 'https://www.instagram.com/reel/DRySymcgSwV/',
            label: '觀看爭議片段 (Instagram Reel)'
          }
        ]
      },
      {
        id: "social-worker",
        title: "V. 社工劉易聰及「記錄身份證」爭議",
        type: "standard",
        content: [
          "在災後的緊急庇護中心，社工劉易聰被指在分發基本應急物資時，要求受災居民出示並記錄身分證號碼。此舉在當時混亂且恐慌的環境下，引發了強烈反彈。",
          "爭議的核心在於：人道救援應基於「按需分配」而非「身份審查」。在緊急狀態下，要求災民交出個人敏感資料，被視為行政官僚對受難者的不信任，甚至被質疑資料會被轉交執法部門。這事件嚴重打擊了社工界堅守的「以人為本」專業守則。"
        ],
        media: [
          {
            type: 'youtube',
            url: 'https://www.youtube.com/watch?v=chn3gWAtFYg',
            label: '觀看相關報導 (YouTube)'
          }
        ]
      },
      {
        id: "icac",
        title: "VI. 廉政公署 (ICAC) 的介入與調查",
        type: "standard",
        content: [
          "廉政公署已展開代號「火網」的行動，高調介入調查宏福苑維修工程。行動目標直指工程顧問公司董事及承建商高層。",
          "調查方向主要集中於貪污賄賂：懷疑有人提供利益以換取使用不合規格的廉價物料，以及在監工過程中「隻眼開隻眼閉」。ICAC 的介入證實了火災並非單純意外，而是腐敗導致的人禍。"
        ]
      },
      {
        id: "chilling",
        title: "VII. 市民被禁聲與寒蟬效應",
        type: "table",
        headers: ["人物 / 團體", "事件 / 行動", "影響分析"],
        rows: [
          {
            col1: "關靖豐 (關注組版主)",
            col2: "被國安處約見後，以法律風險為由關閉擁有關鍵證據的專頁。",
            col3: "證據鏈中斷，市民因恐懼而停止網上監察與爆料。"
          },
          {
            col1: "Hailey Cheng & Ellie Yuen",
            col2: "公開聲明不再就火災及相關議題發表任何評論。",
            col3: "意見領袖自我審查，避免被針對性起底或法律報復。"
          },
          {
            col1: "王岸然 (前時評人)",
            col2: "在敏感時期被捕，罪名雖未必直接關聯，但時機敏感。",
            col3: "向公眾發出強烈訊號：批評政府救援或監管將面臨代價。"
          }
        ],
        summary: "這連串事件標誌著香港公民社會在災難問責上的倒退。從前可以自由討論的民生安全議題，現在因為「國安」陰影和對執法邊界的不確定性，導致知情者噤聲，評論者退場。火災的真相可能因此被永遠掩埋在瓦礫與沈默之中。",
        images: [
          "https://thewitnesshk.com/wp-content/uploads/2025/12/251201-8.png",
          "https://s.yimg.com/ny/api/res/1.2/HVhrVAOkmeJxHlDIQW8P.Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY2MDtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2025-12/121807d0-d0b8-11f0-bbd7-4ca8048fdac5"
        ]
      }
    ]
  },
  en: {
    header: {
      title: "Wang Fuk Court Fire Investigation Report",
      nav: {
        causes: "I. Causes",
        accountability: "II. Accountability",
        bidRigging: "III. Bid-Rigging",
        careTeam: "IV. Care Teams",
        socialWorker: "V. Social Worker",
        icac: "VI. ICAC",
        chilling: "VII. Silencing",
      }
    },
    sections: [
      {
        id: "causes",
        title: "I. Primary Causes of Rapid Fire Spread",
        type: "list",
        intro: "Preliminary analysis suggests five fatal factors contributed to the uncontrolled spread:",
        items: [
          "Use of non-fire-retardant nylon nets that melted and spread fire.",
          "Extensive use of flammable polystyrene foam without adequate fire-resistant coating.",
          "'Chimney effect' created by scaffolding design, drawing heat upwards.",
          "Fire alarm sensors were allegedly disabled or desensitized due to false alarms.",
          "Smoke doors were wedged open, allowing smoke to fill escape routes."
        ]
      },
      {
        id: "accountability",
        title: "II. Follow-up and Accountability",
        type: "standard",
        content: [
          "Police are investigating for 'Endangering Public Safety' and 'Manslaughter'. The Crime Unit is probing contractors for criminal negligence.",
          "A cross-departmental task force is reviewing building regulations, aiming to close loopholes in monitoring maintenance materials for old buildings."
        ]
      },
      {
        id: "bid-rigging",
        title: "III. Background of Bid-Rigging at Wang Fuk Court",
        type: "standard",
        content: [
          "The fire occurred against the backdrop of a controversial, exorbitantly priced renovation project. Owners had long questioned the tender process.",
          "Anti-bid-rigging groups pointed out collusion between the winning contractor and consultants. High costs resulted in cheap, dangerous materials rather than safety."
        ]
      },
      {
        id: "care-team",
        title: "IV. The 'Care Team' Controversy",
        type: "comparison",
        leftTitle: "Civil Accusations",
        rightTitle: "Official Explanation",
        leftContent: [
          "Volunteers claimed they were expelled by uniformed Care Team members.",
          "Donated water and food were allegedly 'confiscated' by the Care Team.",
          "Accusations of chaotic management after taking over supply stations.",
          "Criticism of prioritizing bureaucracy over immediate humanitarian aid."
        ],
        rightContent: [
          "Home Affairs Dept stated Care Teams were there to 'coordinate'.",
          "Denied 'confiscation', terming it 'unified management' for fairness.",
          "Emphasized the need for order to prevent hoarding.",
          "Claimed members are trained to cooperate with government operations."
        ],
        media: [
          {
            type: 'facebook',
            url: 'https://www.facebook.com/reel/1349871479964995',
            label: 'Watch Video (Facebook Reel)'
          },
          {
            type: 'instagram',
            url: 'https://www.instagram.com/reel/DRySymcgSwV/',
            label: 'Watch Video (Instagram Reel)'
          }
        ]
      },
      {
        id: "social-worker",
        title: "V. Social Worker ID Recording Controversy",
        type: "standard",
        content: [
          "Social worker Lau Yi-chung was accused of requiring ID numbers from victims for basic supplies. This sparked outrage.",
          "The core issue is 'needs-based' vs 'identity-based' aid. Recording IDs during a crisis was seen as administrative distrust and raised privacy concerns."
        ],
        media: [
          {
            type: 'youtube',
            url: 'https://www.youtube.com/watch?v=chn3gWAtFYg',
            label: 'Watch News Report (YouTube)'
          }
        ]
      },
      {
        id: "icac",
        title: "VI. ICAC Intervention",
        type: "standard",
        content: [
          "The ICAC launched Operation 'Fire Net', targeting consultants and contractors for corruption.",
          "The investigation focuses on bribery to approve substandard materials. This confirms the fire was a man-made disaster rooted in corruption."
        ]
      },
      {
        id: "chilling",
        title: "VII. The Chilling Effect: Silencing the Public",
        type: "table",
        headers: ["Person / Group", "Event / Action", "Impact Analysis"],
        rows: [
          {
            col1: "Guan Jingfeng (Admin)",
            col2: "Closed the concern page after meeting National Security police.",
            col3: "Break in evidence chain; citizens self-censor out of fear."
          },
          {
            col1: "Hailey Cheng & Ellie Yuen",
            col2: "Publicly stated they would no longer comment on the fire.",
            col3: "Opinion leaders retreating to avoid legal retaliation."
          },
          {
            col1: "Wang An-ran (Commentator)",
            col2: "Arrested during the sensitive period.",
            col3: "A signal that criticizing government handling comes with a price."
          }
        ],
        summary: "These events mark a regression in civil society accountability. Discussion on public safety is now silenced by the shadow of 'National Security' and legal ambiguity.",
        images: [
          "https://thewitnesshk.com/wp-content/uploads/2025/12/251201-8.png",
          "https://s.yimg.com/ny/api/res/1.2/HVhrVAOkmeJxHlDIQW8P.Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY2MDtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2025-12/121807d0-d0b8-11f0-bbd7-4ca8048fdac5"
        ]
      }
    ]
  }
};