/* ============================================================
   香港政府部門指南 — 資料與互動
   資料來源：GovHK 政府架構、1823、各部門官網（2026 年 11 月查核）
   ============================================================ */

const BUREAUS = [
  {
    id: "csb", abbr: "CSB", name: "公務員事務局", en: "Civil Service Bureau",
    cat: ["governance"],
    duty: "管理約 17 萬名公務員的人事政策，包括招聘、晉升、培訓、薪酬及紀律，確保政府有效率地運作。",
    focus: ["公務員招聘", "政務職系", "公務員學院", "薪酬調整"],
    depts: ["公務員學院", "公務員敍用委員會"],
    tip: { label: "市民貼士", text: "想加入政府，職位空缺、綜合招聘考試（CRE）及《基本法及香港國安法》測試安排都在這裡公布。", linkText: "公務員事務局", url: "https://www.csb.gov.hk/tc_chi/" },
    site: "https://www.csb.gov.hk/tc_chi/"
  },
  {
    id: "cstb", abbr: "CSTB", name: "文化體育及旅遊局", en: "Culture, Sports and Tourism Bureau",
    cat: ["life"],
    duty: "制定文化藝術、體育、旅遊及創意產業政策，管理公共文化設施，統籌大型盛事。",
    focus: ["博物館", "公共圖書館", "體育館", "旅遊盛事"],
    depts: ["康樂及文化事務署", "旅遊事務署", "香港旅遊發展局", "香港藝術發展局", "西九文化區管理局", "香港體育學院"],
    tip: { label: "市民貼士", text: "康文署的羽毛球場、泳池、營地經「SmartPLAY」預訂；大部分博物館設免費入場日。", linkText: "SmartPLAY 預訂場地", url: "https://www.smartplay.lcsd.gov.hk/" },
    site: "https://www.cstb.gov.hk/tc/"
  },
  {
    id: "hyab", abbr: "HYAB", name: "民政及青年事務局", en: "Home and Youth Affairs Bureau",
    cat: ["social", "life"],
    duty: "負責地區行政、公民教育、青年發展、婦女及家庭事務、宗教、少數族裔支援。",
    focus: ["區議會", "青年發展", "大廈管理", "地區服務"],
    depts: ["民政事務總署", "政府新聞處", "青年發展委員會", "公民教育委員會", "婦女事務委員會"],
    tip: { label: "市民貼士", text: "大廈漏水、法團爭議、租務問題，先找所屬地區的民政事務處；颱風或事故時，民政事務總署會開放臨時庇護中心。", linkText: "民政事務總署", url: "https://www.had.gov.hk/" },
    site: "https://www.hyab.gov.hk/tc/home/"
  },
  {
    id: "hb", abbr: "HB", name: "房屋局", en: "Housing Bureau",
    cat: ["housing"],
    duty: "制定公營及私營房屋政策，推動過渡性房屋、簡約公屋，並規管劏房租賃。",
    focus: ["公屋", "居屋", "綠置居", "簡約公屋", "劏房租管"],
    depts: ["房屋署", "香港房屋委員會"],
    tip: { label: "市民貼士", text: "公屋申請以計分及輪候處理；白表居屋要抽籤，綠表包括公屋住戶。租金援助、調遷、加戶向屋邨辦事處申請。", linkText: "房屋署", url: "https://www.housingauthority.gov.hk/tc/" },
    site: "https://www.hb.gov.hk/tc/"
  },
  {
    id: "sb", abbr: "SB", name: "保安局", en: "Security Bureau",
    cat: ["safety"],
    duty: "統籌治安、出入境、消防、懲教、海關、禁毒及應急管理，是市民接觸最多的政策局之一。",
    focus: ["警務", "出入境", "消防救護", "海關", "懲教"],
    depts: ["香港警務處", "入境事務處", "香港海關", "消防處", "懲教署", "政府飛行服務隊", "民眾安全服務隊", "醫療輔助隊", "禁毒處"],
    tip: { label: "市民貼士", text: "999 只處理即時危險；非緊急報案可到警署或使用「電子報案中心」。護照、身份證、出生登記全部由入境處負責。", linkText: "電子報案中心", url: "https://www.erc.police.gov.hk/" },
    site: "https://www.sb.gov.hk/chi/"
  },
  {
    id: "cmab", abbr: "CMAB", name: "政制及內地事務局", en: "Constitutional and Mainland Affairs Bureau",
    cat: ["governance"],
    duty: "負責選舉制度、人權保障、內地事務、粵港澳大灣區合作及駐內地辦事處。",
    focus: ["選民登記", "選舉安排", "大灣區", "駐內地辦事處"],
    depts: ["選舉事務處", "香港特區政府駐北京辦事處", "駐粵經濟貿易辦事處"],
    tip: { label: "市民貼士", text: "年滿 18 歲的香港永久性居民可登記做選民；搬屋後記得更新登記地址，否則會影響投票資格。", linkText: "選民登記", url: "https://www.reo.gov.hk/" },
    site: "https://www.cmab.gov.hk/tc/home/"
  },
  {
    id: "fstb", abbr: "FSTB", name: "財經事務及庫務局", en: "Financial Services and the Treasury Bureau",
    cat: ["money"],
    duty: "掌管金融市場、稅務、政府財政預算、庫務、公司註冊、破產管理及官方統計。",
    focus: ["報稅", "差餉", "公司註冊", "金融監管", "政府統計"],
    depts: ["稅務局", "庫務署", "差餉物業估價署", "公司註冊處", "破產管理署", "政府統計處", "政府物流服務署", "政府產業署", "香港金融管理局", "證券及期貨事務監察委員會", "保險業監管局", "積金局"],
    tip: { label: "市民貼士", text: "每年 5 至 6 月收到報稅表，用「稅務易」網上報稅可自動延期一個月；租約記得打厘印，日後追租才有法律效力。", linkText: "稅務易", url: "https://www.gov.hk/tc/residents/taxes/etax/" },
    site: "https://www.fstb.gov.hk/tc/"
  },
  {
    id: "cedb", abbr: "CEDB", name: "商務及經濟發展局", en: "Commerce and Economic Development Bureau",
    cat: ["money"],
    duty: "負責對外貿易、投資推廣、知識產權、電訊廣播、競爭政策、消費者保障及中小企支援。",
    focus: ["中小企", "郵政", "電訊", "知識產權", "消費者權益"],
    depts: ["工業貿易署", "投資推廣署", "知識產權署", "通訊事務管理局辦公室", "香港郵政", "香港電台", "香港貿易發展局", "消費者委員會"],
    tip: { label: "市民貼士", text: "電訊服務投訴找通訊事務管理局辦公室（OFCA）；貨不對辦可找海關或消委會。中小企可申請 BUD 專項基金。", linkText: "OFCA", url: "https://www.ofca.gov.hk/" },
    site: "https://www.cedb.gov.hk/tc/"
  },
  {
    id: "edb", abbr: "EDB", name: "教育局", en: "Education Bureau",
    cat: ["education"],
    duty: "制定學前至高等教育政策，管理課程與評核、教師註冊、學校規管及學生資助。",
    focus: ["15 年免費教育", "文憑試", "幼稚園計劃", "學生資助"],
    depts: ["教育局", "大學教育資助委員會秘書處", "學生資助處", "香港考試及評核局", "香港教育城"],
    tip: { label: "市民貼士", text: "6 歲起享 12 年免費中小學教育，加上幼稚園計劃合共 15 年。派位、插班、特殊教育支援經教育局區域辦事處辦理。", linkText: "教育局", url: "https://www.edb.gov.hk/tc/index.html" },
    site: "https://www.edb.gov.hk/tc/index.html"
  },
  {
    id: "lwb", abbr: "LWB", name: "勞工及福利局", en: "Labour and Welfare Bureau",
    cat: ["social"],
    duty: "負責勞工權益、就業、社會保障、安老、復康及幼兒照顧服務。",
    focus: ["最低工資", "僱傭條例", "綜援", "長者津貼", "安老服務"],
    depts: ["勞工處", "社會福利署", "在職家庭津貼辦事處", "僱員再培訓局"],
    tip: { label: "市民貼士", text: "被拖糧、解僱爭議找勞工處勞資關係科；綜援、生果金、長者生活津貼由社會福利署處理。", linkText: "勞工處", url: "https://www.labour.gov.hk/" },
    site: "https://www.lwb.gov.hk/tc/"
  },
  {
    id: "itib", abbr: "ITIB", name: "創新科技及工業局", en: "Innovation, Technology and Industry Bureau",
    cat: ["money"],
    duty: "推動創科政策、研發資助、新型工業化、智慧城市及政府數碼服務。",
    focus: ["創科基金", "智慧城市", "智方便", "開放數據"],
    depts: ["創新科技署", "數字政策辦公室", "香港科技園公司", "數碼港", "香港生產力促進局", "香港應用科技研究院"],
    tip: { label: "市民貼士", text: "「智方便」、1823、GovHK 及開放數據平台都由數字政策辦公室管理；初創可申請創科基金或科學園培育計劃。", linkText: "數字政策辦公室", url: "https://www.digitalpolicy.gov.hk/tc/" },
    site: "https://www.itib.gov.hk/zh-hk/"
  },
  {
    id: "devb", abbr: "DEVB", name: "發展局", en: "Development Bureau",
    cat: ["city"],
    duty: "負責規劃、地政、屋宇、基建工務、水務、機電安全、文物保育及樹木管理。",
    focus: ["城市規劃", "樓宇安全", "水務", "基建", "文物保育"],
    depts: ["規劃署", "地政總署", "屋宇署", "建築署", "土木工程拓展署", "渠務署", "水務署", "機電工程署", "文物保育專員辦事處", "綠化、園境及樹木管理組"],
    tip: { label: "市民貼士", text: "收到屋宇署「強制驗樓／驗窗」命令要按時處理；水費、爆水管找水務署；地契及地稅找地政總署。", linkText: "屋宇署", url: "https://www.bd.gov.hk/tc/" },
    site: "https://www.devb.gov.hk/tc/home/"
  },
  {
    id: "tlb", abbr: "TLB", name: "運輸及物流局", en: "Transport and Logistics Bureau",
    cat: ["transport"],
    duty: "負責道路交通、公共交通、航運、航空、港口及物流發展。",
    focus: ["車牌", "駕駛執照", "隧道收費", "公共交通", "航運航空"],
    depts: ["運輸署", "路政署", "海事處", "民航處", "民航意外調查機構", "香港海運港口局"],
    tip: { label: "市民貼士", text: "續牌、考車、國際車牌經運輸署辦理；「易通行」已取代大部分隧道收費亭，車輛須貼電子標籤。", linkText: "運輸署", url: "https://www.td.gov.hk/tc/home/index.html" },
    site: "https://www.tlb.gov.hk/tc/"
  },
  {
    id: "eeb", abbr: "EEB", name: "環境及生態局", en: "Environment and Ecology Bureau",
    cat: ["environment"],
    duty: "負責環境保護、氣候變化、廢物管理、能源、食物安全、漁農業、動物福利及天氣預報。",
    focus: ["回收", "空氣質素", "食物安全", "天氣警告", "郊野公園"],
    depts: ["環境保護署", "食物環境衞生署", "漁農自然護理署", "香港天文台", "鄉郊保育辦公室"],
    tip: { label: "市民貼士", text: "垃圾收費本屆政府不會推行，回收可使用「綠在區區」。颱風及暴雨警告以天文台公布為準，八號風球及黑雨有法定停工安排。", linkText: "香港天文台", url: "https://www.hko.gov.hk/tc/index.html" },
    site: "https://www.eeb.gov.hk/tc/"
  },
  {
    id: "health", abbr: "HHB", name: "醫務衞生局", en: "Health Bureau",
    cat: ["health"],
    duty: "制定醫療衞生政策，管理公營醫療服務、基層醫療、中醫藥、藥物監管及控煙。",
    focus: ["公立醫院", "基層醫療", "家庭醫生", "中醫藥", "控煙"],
    depts: ["衞生署", "醫院管理局", "基層醫療署", "中醫藥規管辦公室"],
    tip: { label: "市民貼士", text: "2026 年起急症室每次 $400，危殆及危急病人免費；非緊急情況可先看家庭醫生或普通科門診，免卻長時間輪候。", linkText: "醫院管理局", url: "https://www.ha.org.hk/" },
    site: "https://www.healthbureau.gov.hk/cn/"
  }
];

const DEPTS = [
  { name: "入境事務處", en: "Immigration Department", cat: "identity", bureau: "保安局",
    duty: "簽發香港特區護照及身份證，辦理出生、死亡及婚姻登記，管理簽證及出入境管制。",
    when: "申請護照、補領身份證、結婚註冊、出生登記", url: "https://www.immd.gov.hk/hkt/" },
  { name: "選舉事務處", en: "Registration and Electoral Office", cat: "identity", bureau: "政制及內地事務局",
    duty: "管理選民登記冊，籌備及執行各級選舉，處理選舉投訴。",
    when: "登記做選民、查投票站、選舉查詢", url: "https://www.reo.gov.hk/" },
  { name: "衞生署", en: "Department of Health", cat: "health", bureau: "醫務衞生局",
    duty: "公共衞生監測、疫苗接種、學生健康服務、控煙酒、藥物及中藥規管。",
    when: "打疫苗、兒童健康檢查、投訴違例吸煙", url: "https://www.dh.gov.hk/" },
  { name: "醫院管理局", en: "Hospital Authority", cat: "health", bureau: "醫務衞生局",
    duty: "管理全港公立醫院、專科門診及普通科門診，提供資助醫療服務。",
    when: "睇急症、專科診症、住院、覆診", url: "https://www.ha.org.hk/" },
  { name: "房屋署", en: "Housing Department", cat: "housing", bureau: "房屋局",
    duty: "執行房屋政策，管理公共屋邨，處理公屋申請、居屋銷售及租約事務。",
    when: "申請公屋、買居屋、調遷、租金援助", url: "https://www.housingauthority.gov.hk/tc/" },
  { name: "屋宇署", en: "Buildings Department", cat: "housing", bureau: "發展局",
    duty: "規管私人樓宇的建築及安全，處理僭建物、危險樓宇、強制驗樓及小型工程。",
    when: "收到驗樓令、舉報僭建、裝修申請", url: "https://www.bd.gov.hk/tc/" },
  { name: "地政總署", en: "Lands Department", cat: "housing", bureau: "發展局",
    duty: "管理土地契約、地稅、土地測量及收地，維持土地紀錄。",
    when: "查地契、繳地稅、土地界址爭議", url: "https://www.landsd.gov.hk/tc/index.html" },
  { name: "差餉物業估價署", en: "Rating and Valuation Department", cat: "housing", bureau: "財經事務及庫務局",
    duty: "評估物業應課差餉租值，徵收差餉及地租。",
    when: "交差餉、反對物業估值", url: "https://www.rvd.gov.hk/tc/" },
  { name: "運輸署", en: "Transport Department", cat: "transport", bureau: "運輸及物流局",
    duty: "簽發駕駛執照及車輛牌照，監管公共交通服務，管理道路交通。",
    when: "考車牌、續牌、國際車牌、車輛過戶", url: "https://www.td.gov.hk/tc/home/index.html" },
  { name: "路政署", en: "Highways Department", cat: "transport", bureau: "運輸及物流局",
    duty: "維修及改善公共道路、行人路、橋樑與街道設施。",
    when: "路面破損、路牌損壞、道路工程", url: "https://www.hyd.gov.hk/tc/home/index.html" },
  { name: "海事處", en: "Marine Department", cat: "transport", bureau: "運輸及物流局",
    duty: "規管船隻、船員及港口運作，處理海事意外及海上安全。",
    when: "遊艇牌照、船員證、海上事故", url: "https://www.mardep.gov.hk/" },
  { name: "民航處", en: "Civil Aviation Department", cat: "transport", bureau: "運輸及物流局",
    duty: "規管航空安全、機場運作及無人機（小型無人機）活動。",
    when: "放無人機、航空服務投訴", url: "https://www.cad.gov.hk/chinese/home.html" },
  { name: "香港警務處", en: "Hong Kong Police Force", cat: "safety", bureau: "保安局",
    duty: "維持治安、預防及偵查罪案、執行交通法例、處理報案及緊急求助。",
    when: "報案、失蹤人士、交通意外、被騙", url: "https://www.police.gov.hk/" },
  { name: "消防處", en: "Fire Services Department", cat: "safety", bureau: "保安局",
    duty: "滅火、救援、提供救護車服務，並規管樓宇消防設施。",
    when: "火警、被困、召喚救護車", url: "https://www.hkfsd.gov.hk/" },
  { name: "香港海關", en: "Customs and Excise Department", cat: "safety", bureau: "保安局",
    duty: "執行關稅、緝毒、保護知識產權及《商品說明條例》，管制進出口物品。",
    when: "舉報冒牌貨、不良營商手法、走私", url: "https://www.customs.gov.hk/" },
  { name: "懲教署", en: "Correctional Services Department", cat: "safety", bureau: "保安局",
    duty: "管理懲教院所，提供更生計劃及善後輔導。",
    when: "探監、在囚人士福利、更生支援", url: "https://www.csd.gov.hk/" },
  { name: "政府飛行服務隊", en: "Government Flying Service", cat: "safety", bureau: "保安局",
    duty: "提供空中救援、搜索、消防及政府飛行支援。",
    when: "行山被困、海上救援、偏遠地區運送", url: "https://www.gfs.gov.hk/" },
  { name: "稅務局", en: "Inland Revenue Department", cat: "money", bureau: "財經事務及庫務局",
    duty: "徵收薪俸稅、利得稅、物業稅及印花稅，處理報稅表及退稅。",
    when: "報稅、打厘印、退稅、商業登記", url: "https://www.ird.gov.hk/" },
  { name: "公司註冊處", en: "Companies Registry", cat: "money", bureau: "財經事務及庫務局",
    duty: "辦理公司成立、周年申報及公司資料查冊。",
    when: "開公司、查公司董事及股東", url: "https://www.cr.gov.hk/" },
  { name: "破產管理署", en: "Official Receiver's Office", cat: "money", bureau: "財經事務及庫務局",
    duty: "處理破產及公司清盤個案，管理相關資產。",
    when: "申請破產、債權人查詢", url: "https://www.oro.gov.hk/" },
  { name: "政府統計處", en: "Census and Statistics Department", cat: "money", bureau: "財經事務及庫務局",
    duty: "編製人口、社會及經濟統計數據，進行人口普查。",
    when: "查失業率、人口數據、物價指數", url: "https://www.censtatd.gov.hk/tc/" },
  { name: "庫務署", en: "Treasury", cat: "money", bureau: "財經事務及庫務局",
    duty: "管理政府收支、帳目及繳費服務。",
    when: "繳付政府帳單、退款查詢", url: "https://www.try.gov.hk/" },
  { name: "勞工處", en: "Labour Department", cat: "welfare", bureau: "勞工及福利局",
    duty: "提供就業服務、執行勞工法例、處理勞資爭議、推廣職業安全及健康。",
    when: "搵工、追討欠薪、工傷索償", url: "https://www.labour.gov.hk/" },
  { name: "社會福利署", en: "Social Welfare Department", cat: "welfare", bureau: "勞工及福利局",
    duty: "提供社會保障、家庭及兒童福利、安老、復康及青少年服務。",
    when: "申請綜援、生果金、長者生活津貼", url: "https://www.swd.gov.hk/tc/" },
  { name: "在職家庭及學生資助事務處", en: "Working Family and Student Financial Assistance Agency", cat: "welfare", bureau: "勞工及福利局／教育局",
    duty: "處理在職家庭津貼、學生資助、書簿津貼及免入息審查貸款。",
    when: "申請學費資助、開學津貼、在職家庭津貼", url: "https://www.wfsfaa.gov.hk/" },
  { name: "教育局", en: "Education Bureau", cat: "education", bureau: "教育局",
    duty: "制定教育政策，管理學校註冊、課程、學位分配及教師註冊。",
    when: "小一及中一派位、插班、教師註冊", url: "https://www.edb.gov.hk/tc/index.html" },
  { name: "香港考試及評核局", en: "Hong Kong Examinations and Assessment Authority", cat: "education", bureau: "教育局",
    duty: "舉辦香港中學文憑考試及其他公開考試。",
    when: "報考 DSE、查閱成績", url: "https://www.hkeaa.edu.hk/" },
  { name: "大學教育資助委員會", en: "University Grants Committee", cat: "education", bureau: "教育局",
    duty: "就高等教育發展及撥款向政府提供意見，資助八所大學。",
    when: "大學資助政策、院校數據", url: "https://www.ugc.edu.hk/big5/ugc/index.html" },
  { name: "環境保護署", en: "Environmental Protection Department", cat: "environment", bureau: "環境及生態局",
    duty: "執行空氣、噪音、廢物及水質法例，推動減廢回收及氣候行動。",
    when: "裝修噪音、投訴污染、回收設施", url: "https://www.epd.gov.hk/" },
  { name: "食物環境衞生署", en: "Food and Environmental Hygiene Department", cat: "environment", bureau: "環境及生態局",
    duty: "規管食物安全及環境衞生，管理街市、潔淨服務、滅鼠及小販事務。",
    when: "食肆衞生投訴、垃圾黑點、鼠患", url: "https://www.fehd.gov.hk/" },
  { name: "漁農自然護理署", en: "Agriculture, Fisheries and Conservation Department", cat: "environment", bureau: "環境及生態局",
    duty: "管理漁農業、郊野公園、動物福利及瀕危物種管制。",
    when: "狗隻牌照、郊野公園、野生動物", url: "https://www.afcd.gov.hk/" },
  { name: "香港天文台", en: "Hong Kong Observatory", cat: "environment", bureau: "環境及生態局",
    duty: "監測及預測天氣，發出颱風、暴雨、酷熱等警告，監測地震及輻射水平。",
    when: "颱風、暴雨、氣溫及天氣警告", url: "https://www.hko.gov.hk/tc/index.html" },
  { name: "水務署", en: "Water Supplies Department", cat: "environment", bureau: "發展局",
    duty: "供應食水及沖廁水，處理水費、水管維修及供水申請。",
    when: "水費、爆水管、申請供水", url: "https://www.wsd.gov.hk/" },
  { name: "渠務署", en: "Drainage Services Department", cat: "environment", bureau: "發展局",
    duty: "規劃及維修污水處理與雨水排放系統，處理水浸問題。",
    when: "水浸、渠道淤塞、污水倒灌", url: "https://www.dsd.gov.hk/" },
  { name: "康樂及文化事務署", en: "Leisure and Cultural Services Department", cat: "culture", bureau: "文化體育及旅遊局",
    duty: "管理公共圖書館、博物館、泳池、體育館、公園及文化場地。",
    when: "借書、訂場、看展覽、游泳", url: "https://www.lcsd.gov.hk/" },
  { name: "香港郵政", en: "Hongkong Post", cat: "culture", bureau: "商務及經濟發展局",
    duty: "提供郵政、包裹、特快專遞及郵政信箱服務。",
    when: "寄信、寄包裹、查郵費", url: "https://www.hongkongpost.hk/tc/" },
  { name: "香港電台", en: "Radio Television Hong Kong", cat: "culture", bureau: "商務及經濟發展局",
    duty: "提供公共廣播服務，製作新聞、教育及文化節目。",
    when: "收聽新聞、教育節目", url: "https://www.rthk.hk/" },
  { name: "政府新聞處", en: "Information Services Department", cat: "culture", bureau: "民政及青年事務局",
    duty: "發布政府新聞及公告，管理政府新聞網及社交媒體。",
    when: "查政府公告、新聞稿", url: "https://www.isd.gov.hk/" },
  { name: "民政事務總署", en: "Home Affairs Department", cat: "culture", bureau: "民政及青年事務局",
    duty: "統籌地區行政，支援區議會、業主立案法團，簽發部分牌照。",
    when: "大廈管理、法團、賓館牌照", url: "https://www.had.gov.hk/" },
  { name: "數字政策辦公室", en: "Digital Policy Office", cat: "culture", bureau: "創新科技及工業局",
    duty: "推動政府數碼服務，管理 1823、智方便、GovHK 及開放數據平台。",
    when: "使用政府電子服務、投訴", url: "https://www.digitalpolicy.gov.hk/tc/" },
  { name: "知識產權署", en: "Intellectual Property Department", cat: "money", bureau: "商務及經濟發展局",
    duty: "註冊商標、專利及外觀設計，推廣知識產權保護。",
    when: "註冊商標、申請專利", url: "https://www.ipd.gov.hk/" },
  { name: "工業貿易署", en: "Trade and Industry Department", cat: "money", bureau: "商務及經濟發展局",
    duty: "執行貿易政策，支援中小企，簽發產地來源證及處理資助計劃。",
    when: "中小企資助、進出口文件", url: "https://www.tid.gov.hk/" },
  { name: "規劃署", en: "Planning Department", cat: "housing", bureau: "發展局",
    duty: "制定城市規劃，處理規劃申請及土地用途查詢。",
    when: "查土地用途、改劃申請", url: "https://www.pland.gov.hk/" },
  { name: "機電工程署", en: "Electrical and Mechanical Services Department", cat: "housing", bureau: "發展局",
    duty: "規管電力、氣體、升降機及機動遊戲的安全。",
    when: "升降機故障、氣體安全、電力事故", url: "https://www.emsd.gov.hk/" },
  { name: "法律援助署", en: "Legal Aid Department", cat: "welfare", bureau: "政務司司長辦公室",
    duty: "為符合資格人士提供法律援助，支付訴訟費用及委派律師。",
    when: "無力負擔訴訟、家事法庭案件", url: "https://www.lad.gov.hk/" },
  { name: "廉政公署", en: "Independent Commission Against Corruption", cat: "safety", bureau: "獨立機構",
    duty: "調查貪污，防貪教育及制度檢討。",
    when: "舉報貪污、查詢防貪規定", url: "https://www.icac.org.hk/" },
  { name: "申訴專員公署", en: "Office of the Ombudsman", cat: "oversight", bureau: "獨立機構",
    duty: "調查對政府部門及公營機構的投訴，提出改善建議。",
    when: "不滿部門處理、投訴行政失當", url: "https://www.ombudsman.hk/" },
  { name: "審計署", en: "Audit Commission", cat: "oversight", bureau: "獨立機構",
    duty: "審計政府帳目及公營機構，提交報告予立法會。",
    when: "查閱政府開支審計報告", url: "https://www.aud.gov.hk/" },
  { name: "個人資料私隱專員公署", en: "Office of the Privacy Commissioner for Personal Data", cat: "oversight", bureau: "獨立機構",
    duty: "執行《個人資料（私隱）條例》，處理投訴及推廣保障私隱。",
    when: "個人資料被濫用、起底投訴", url: "https://www.pcpd.org.hk/" },
  { name: "平等機會委員會", en: "Equal Opportunities Commission", cat: "oversight", bureau: "獨立機構",
    duty: "執行反歧視法例，處理歧視投訴及提供調解。",
    when: "遭受性別、殘疾、種族歧視", url: "https://www.eoc.org.hk/" },
  { name: "消費者委員會", en: "Consumer Council", cat: "oversight", bureau: "法定機構",
    duty: "處理消費者投訴，進行產品測試及發布消費資訊。",
    when: "貨不對辦、退款爭議", url: "https://www.consumer.org.hk/" }
];

const TIMELINE = [
  { age: "0 歲", title: "出生登記", text: "嬰兒出生後 <b>42 天內</b>，由父母帶同醫院證明到入境事務處辦理出生登記，<b>免費</b>。取得出生證明書後，便可申請兒童身份證及特區護照。" },
  { age: "6 歲", title: "小一入學", text: "每年 9 月申請「自行分配學位」，未獲取錄可參加統一派位。校網及派位結果由<b>教育局</b>公布，跨區申請要留意住址證明。" },
  { age: "11 歲", title: "兒童身份證", text: "11 至 17 歲的香港居民須登記<b>兒童身份證</b>；年滿 18 歲前需換領成人身份證。首次登記免費。" },
  { age: "18 歲", title: "成人身份證與選民登記", text: "換領成人身份證，並可向<b>選舉事務處</b>登記做選民。這個年紀亦可報考車牌，筆試及路試由<b>運輸署</b>安排。" },
  { age: "結婚", title: "婚姻登記", text: "先向婚姻登記處遞交擬結婚通知書（<b>$305</b>），15 天後可在登記處行禮（<b>$715</b>）或於特許場所由監禮人主持。" },
  { age: "工作", title: "強積金與勞工權益", text: "僱主及僱員各供 <b>5%</b> 強積金，月入上限 $30,000（各最多 $1,500）。法定最低工資 <b>每小時 $43.1</b>，被拖糧可找勞工處。" },
  { age: "每年", title: "報稅", text: "5 至 6 月收到報稅表，用<b>「稅務易」</b>網上報稅可自動延期一個月。租約要打厘印，否則日後追租會有困難。" },
  { age: "上樓", title: "公屋與居屋", text: "公屋申請按計分及輪候處理，居屋以抽籤發售。租住私人樓宇要留意<b>劏房租管</b>、租約印花及水電費安排。" },
  { age: "65 歲", title: "退休保障", text: "65 歲可申請<b>長者生活津貼</b>（每月 $4,345，需入息及資產審查）；70 歲可申請<b>高齡津貼</b>（生果金，每月 $1,675，毋須審查）。" },
  { age: "人生終點", title: "死亡登記", text: "由親屬帶同醫生證明到<b>入境事務處</b>辦理死亡登記，取得證明書後安排殮葬；遺產承辦則經高等法院處理。" }
];

const FAQS = [
  { q: "樓上漏水，我可以點做？", tag: "家居", a: "<p>先通知管理處及樓上單位，記錄漏水位置、時間及照片。若對方不合作，可致電 <a href='tel:1823'>1823</a> 要求協助，個案會轉介<b>屋宇署</b>及<b>食物環境衞生署</b>聯合調查；涉及供水系統可找<b>水務署</b>（2824 5000）。</p><p>《建築物管理條例》下，法團有責任處理公用部分；私人單位之間的滲水，可透過「滲水投訴調查聯合行動」跟進。</p>" },
  { q: "半夜裝修、鄰居噪音好嘈，應該打 999 定 1823？", tag: "噪音", a: "<p>如屬<b>即時滋擾或有人身安全風險</b>，打 <a href='tel:999'>999</a>。一般裝修、冷氣機、寵物噪音，可致電 <a href='tel:1823'>1823</a> 轉介<b>環境保護署</b>；住宅單位的鄰里噪音亦可由警方處理。</p><p>環保署設有噪音投訴熱線，並會在接到投訴後到場量度。記得記錄時間、持續多久及聲音來源。</p>" },
  { q: "懷疑被電話詐騙，第一步做甚麼？", tag: "防騙", a: "<p>立即收線，<b>不要轉帳、不要提供驗證碼</b>。致電 <a href='tel:18222'>18222</a> 反詐騙協調中心查證，或使用「防騙視伏器」查可疑電話、網址及戶口。</p><p>如已損失金錢，盡快報警（999 或到警署），並保留對話紀錄、轉帳單據。銀行亦可協助凍結可疑交易。</p>" },
  { q: "被公司拖糧、突然解僱，可以點追？", tag: "勞工", a: "<p>保留僱傭合約、糧單、更表及對話紀錄，盡快到<b>勞工處勞資關係科</b>求助。勞工處會提供免費調解；調解不成可轉介<b>勞資審裁處</b>，申索金額設有上限。</p><p>如公司倒閉欠薪，可向<b>破產欠薪保障基金</b>申請特惠款項。追討有時間限制，唔好拖。</p>" },
  { q: "想申請公屋，要符合甚麼資格？", tag: "房屋", a: "<p>申請人須年滿 18 歲、持有香港身份證、在香港有居留權，並符合入息及資產限額。家庭成員關係、住宅物業擁有權亦有限制。</p><p>經<b>房屋署</b>網上或紙本申請，會按「配額及計分制」排序；輪候期間每年要申報入息及資產。詳情以房屋委員會最新公布為準。</p>" },
  { q: "小朋友出世，要辦甚麼手續？", tag: "家庭", a: "<ol><li>出生後 <b>42 天內</b>到入境事務處辦理<b>出生登記</b>，費用全免，領取出生證明書。</li><li>辦理兒童身份證（11 歲以下可先申請護照）。</li><li>申請特區護照（16 歲以下有效期 5 年，32 頁 $215）。</li><li>如需要，向社會福利署或學生資助處申請相關津貼。</li></ol>" },
  { q: "投訴政府部門，但 1823 都解決不到，仲有咩途徑？", tag: "申訴", a: "<p>可向<b>申訴專員公署</b>（2629 0555）投訴行政失當，公署會獨立調查，並要求部門交代。亦可向立法會議員、區議員求助，或申請司法覆核（涉及法律爭議）。</p><p>涉及個人資料可找<b>私隱專員公署</b>；涉及歧視可找<b>平機會</b>；涉及貪污則找<b>廉政公署</b>（25 266 266）。</p>" },
  { q: "急症室等好久，甚麼情況才應該去？", tag: "醫療", a: "<p>急症室按病情分流，<b>危殆及危急</b>病人優先，並獲豁免 2026 年起 $400 的收費。輕微發燒、腸胃炎、扭傷等，可考慮家庭醫生、私家診所或普通科門診。</p><p>如出現胸痛、呼吸困難、昏迷、大量出血、嚴重創傷，立即打 999 召喚救護車，不要自行駕車。</p>" },
  { q: "垃圾徵費幾時實施？", tag: "環保", a: "<p>政府已宣布<b>本屆政府不會推行垃圾收費</b>，市民毋須購買指定垃圾袋。現行政策以減廢回收為主，各區設有「綠在區區」回收點，可回收紙、膠、金屬、玻璃及小家電。</p><p>建築廢物、化學廢物及醫療廢物仍受現行法例規管，不可當作普通垃圾棄置。</p>" },
  { q: "車牌過期、搬屋改地址，要通知哪些部門？", tag: "交通", a: "<p>駕駛執照及車輛牌照續期經<b>運輸署</b>辦理，可在網上或「智方便」處理。搬屋後須更新車輛登記地址，否則收不到續牌通知。</p><p>同時記得更新<b>選民登記地址</b>、稅務局通訊地址及銀行紀錄。地址證明亦是申請公屋、學校派位的重要文件。</p>" }
];

/* ============================================================
   介面邏輯
   ============================================================ */

const BUREAU_GROUPS = {
  csb: "governance", cstb: "life", hyab: "life", hb: "city", sb: "life",
  cmab: "governance", fstb: "money", cedb: "money", edb: "social",
  lwb: "social", itib: "money", devb: "city", tlb: "city", eeb: "city",
  health: "social"
};

const CAT_LABEL = {
  identity: "身份・出入境", health: "醫療衞生", housing: "房屋土地",
  transport: "交通運輸", safety: "治安消防", money: "稅務金融",
  welfare: "勞工福利", education: "教育", environment: "環境食物",
  culture: "康文郵政", oversight: "監察・其他"
};

const state = { q: "", bureau: "all", dept: "all" };
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));
const norm = (s) => (s || "").toString().toLowerCase().replace(/\s+/g, "");

/* ---------- 架構圖 ---------- */
function renderOrg() {
  const host = $("#orgBureaus");
  if (!host) return;
  host.innerHTML = BUREAUS.map(b =>
    `<button class="org-node" data-target="${b.id}" title="${b.name}">${b.name}</button>`
  ).join("");
  host.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-target]");
    if (!btn) return;
    const card = document.querySelector(`.bureau[data-id="${btn.dataset.target}"]`);
    if (!card) return;
    document.querySelectorAll(".bureau.open").forEach(b => { if (b !== card) b.classList.remove("open"); });
    card.classList.add("open");
    card.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

/* ---------- 政策局 ---------- */
function bureauHTML(b) {
  return `
  <article class="bureau" data-id="${b.id}" data-group="${BUREAU_GROUPS[b.id] || "life"}">
    <button class="bureau-head" aria-expanded="false">
      <span class="bureau-abbr">${b.abbr}</span>
      <span class="bureau-title">
        <strong>${b.name}</strong>
        <span>${b.en}</span>
      </span>
      <span class="bureau-plus" aria-hidden="true"></span>
    </button>
    <div class="bureau-body">
      <p class="duty">${b.duty}</p>
      <ul class="focus-list">${b.focus.map(f => `<li>${f}</li>`).join("")}</ul>
      <div class="dept-chips">${b.depts.map(d => `<span>${d}</span>`).join("")}</div>
      <div class="tip"><b>${b.tip.label}</b>${b.tip.text} <a href="${b.tip.url}" target="_blank" rel="noopener">${b.tip.linkText}</a></div>
      <a class="bureau-link" href="${b.site}" target="_blank" rel="noopener">前往${b.name}官方網站</a>
    </div>
  </article>`;
}

function renderBureaus() {
  const host = $("#bureauGrid");
  if (!host) return;
  host.innerHTML = BUREAUS.map(bureauHTML).join("");
  host.addEventListener("click", (e) => {
    const head = e.target.closest(".bureau-head");
    if (!head) return;
    const card = head.closest(".bureau");
    const open = card.classList.toggle("open");
    head.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

/* ---------- 部門 ---------- */
function deptHTML(d) {
  return `
  <article class="dept" data-cat="${d.cat}" data-name="${d.name}">
    <span class="cat-dot" aria-hidden="true"></span>
    <div class="dept-top">
      <h3>${d.name}<span class="en">${d.en}</span></h3>
    </div>
    <p class="duty">${d.duty}</p>
    <p class="when">幾時搵佢：${d.when}</p>
    <div class="meta">
      <span>${d.bureau}</span>
      <a href="${d.url}" target="_blank" rel="noopener">官網 ↗</a>
    </div>
  </article>`;
}

function renderDepts() {
  const host = $("#deptGrid");
  if (!host) return;
  host.innerHTML = DEPTS.map(deptHTML).join("");
}

/* ---------- 時間線 ---------- */
function renderTimeline() {
  const host = $("#timeline");
  if (!host) return;
  host.innerHTML = TIMELINE.map(t => `
    <div class="tl-item">
      <span class="tl-age">${t.age}</span>
      <h3>${t.title}</h3>
      <p>${t.text}</p>
    </div>`).join("");
}

/* ---------- 常見問題 ---------- */
function renderFaq() {
  const host = $("#faqList");
  if (!host) return;
  host.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item">
      <button class="faq-q" aria-expanded="false" aria-controls="faq-a-${i}">
        <span>${f.q}</span><span aria-hidden="true">+</span>
      </button>
      <div class="faq-a" id="faq-a-${i}">
        <span class="tag">${f.tag}</span>${f.a}
      </div>
    </div>`).join("");
  host.addEventListener("click", (e) => {
    const btn = e.target.closest(".faq-q");
    if (!btn) return;
    const item = btn.closest(".faq-item");
    const open = item.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

/* ---------- 搜尋與篩選 ---------- */
function applyFilters() {
  const q = norm(state.q);

  // 政策局
  let bCount = 0;
  $$(".bureau").forEach(card => {
    const b = BUREAUS.find(x => x.id === card.dataset.id);
    const hay = norm([b.name, b.en, b.duty, b.focus.join(""), b.depts.join("")].join(" "));
    const okQ = !q || hay.includes(q);
    const okG = state.bureau === "all" || card.dataset.group === state.bureau;
    const show = okQ && okG;
    card.hidden = !show;
    if (show) bCount++;
  });
  const bEmpty = $("#bureauEmpty");
  if (bEmpty) bEmpty.hidden = bCount !== 0;

  // 部門
  let dCount = 0;
  $$(".dept").forEach(card => {
    const d = DEPTS.find(x => x.name === card.dataset.name);
    if (!d) return;
    const hay = norm([d.name, d.en, d.duty, d.when, d.bureau].join(" "));
    const okQ = !q || hay.includes(q);
    const okC = state.dept === "all" || d.cat === state.dept;
    const show = okQ && okC;
    card.hidden = !show;
    if (show) dCount++;
  });
  const dEmpty = $("#deptEmpty");
  if (dEmpty) dEmpty.hidden = dCount !== 0;
}

function bindFilters() {
  $$("#bureauFilters .filter").forEach(btn => {
    btn.addEventListener("click", () => {
      $$("#bureauFilters .filter").forEach(b => b.classList.toggle("active", b === btn));
      state.bureau = btn.dataset.filter;
      applyFilters();
    });
  });
  $$("#deptFilters .filter").forEach(btn => {
    btn.addEventListener("click", () => {
      $$("#deptFilters .filter").forEach(b => b.classList.toggle("active", b === btn));
      state.dept = btn.dataset.filter;
      applyFilters();
    });
  });

  const heroInput = $("#heroSearch");
  if (heroInput) {
    heroInput.addEventListener("input", () => {
      state.q = heroInput.value.trim();
      applyFilters();
    });
    heroInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        document.querySelector("#departments").scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  $$("#quickChips button").forEach(btn => {
    btn.addEventListener("click", () => {
      state.q = btn.dataset.q;
      if (heroInput) heroInput.value = state.q;
      applyFilters();
      document.querySelector("#departments").scrollIntoView({ behavior: "smooth" });
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== heroInput) {
      e.preventDefault();
      heroInput?.focus();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

/* ---------- 數字動畫 ---------- */
function animateCounters() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  $$("[data-count]").forEach(el => {
    const target = Number(el.dataset.count);
    const isWan = el.dataset.format === "wan";
    if (isWan) return;
    const suffix = el.dataset.suffix || "";
    const dur = 1100;
    const start = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(target * eased);
      el.textContent = isWan
        ? (val >= 10000 ? `${Math.floor(val / 10000)} 萬` : val.toLocaleString())
        : val.toLocaleString() + (p === 1 ? suffix : "");
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

/* ---------- 主題 ---------- */
function initTheme() {
  const saved = localStorage.getItem("hkg-theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  const btn = $("#themeToggle");
  btn?.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", cur);
    localStorage.setItem("hkg-theme", cur);
  });
}

/* ---------- 捲動效果 ---------- */
function initScroll() {
  const bar = $("#progress");
  const toTop = $("#toTop");
  const navLinks = $$(".nav a");
  const sections = navLinks.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);

  function onScroll() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    if (bar) bar.style.width = `${pct}%`;
    toTop?.classList.toggle("show", h.scrollTop > 600);

    let current = "";
    sections.forEach(sec => {
      if (sec.getBoundingClientRect().top <= 120) current = `#${sec.id}`;
    });
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === current));
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- 入場動畫 ---------- */
function initReveal() {
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

  $$(".section-head, .dept, .bureau, .hotline, .tl-item, .note-card, .smart-card").forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${Math.min(i % 4, 3) * 55}ms`;
    io.observe(el);
  });

  // 保險：若觀察器未觸發（例如列印、無滾動環境），1.5 秒後全部顯示
  setTimeout(() => $$(".reveal").forEach(el => el.classList.add("in")), 1500);
}

/* ---------- 啟動 ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderOrg();
  renderBureaus();
  renderDepts();
  renderTimeline();
  renderFaq();
  bindFilters();
  applyFilters();
  initTheme();
  initScroll();
  initReveal();
  // 數字直接顯示最終值，避免載入時跳動

  const y = new Date().getFullYear();
  const last = document.querySelector(".disclaimer");
  if (last && !last.textContent.includes(String(y))) { /* keep static text */ }
});
