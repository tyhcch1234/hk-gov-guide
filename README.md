# 香港政府部門指南

一個以香港市民角度編寫的政府部門入門網站：15 個政策局各自負責甚麼、91 個部門及法定機構「咩事搵邊個」與主要工作、以及日常生活最實用的收費、熱線與求助流程。

## 內容

- **政府架構**：行政長官 → 三司 → 十五局 → 執行部門的簡單圖解
- **政策局卡片**：逐局說明職責、政策範圍、轄下部門及市民貼士
- **部門速查**：91 個部門及法定機構，可按 12 個範疇篩選或即時搜尋；每張卡列出主要工作（3 項）、「幾時搵佢」及官網
- **市民必知**：999／1823／18222 等關鍵號碼、人生大事時間線、常用收費表
- **常見情境**：漏水、噪音、詐騙、拖糧、公屋、出生登記、投訴部門等 10 條問答

## 技術

純靜態網站，無建置步驟、無框架：

```
index.html   結構與文案
styles.css   設計系統（含深色模式、響應式、列印樣式）
app.js       資料（政策局／部門／時間線／FAQ）與互動邏輯
```

功能包括即時搜尋、範疇篩選、可展開卡片、深色模式（記住選擇）、閱讀進度條、入場動畫（尊重 `prefers-reduced-motion`）。

本地預覽：

```bash
python3 -m http.server 8000
```

## 資料來源

- [GovHK 政府架構](https://www.gov.hk/tc/about/govdirectory/govstructure.htm)
- [政府部門及有關機構網站](https://www.gov.hk/tc/about/govdirectory/govwebsite/index.htm)
- [1823 常見問題](https://www.1823.gov.hk/tc/)（收費、津貼金額）
- [入境事務處收費表](https://www.immd.gov.hk/hkt/services/fee-tables/)
- [醫院管理局公營醫療收費改革](https://www.ha.org.hk/)（2026 年 1 月 1 日生效）
- [稅務局薪俸稅率](https://www.gov.hk/tc/residents/taxes/taxfiling/taxrates/salariesrates.htm)
- [最低工資委員會](https://www.mwc.org.hk/tc/)、[社會福利署公共福利金](https://www.swd.gov.hk/tc/pubsvc/socsecu/ssallowance/)

## 更新資料

所有內容集中在 `app.js` 開頭的 `BUREAUS`、`DEPTS`、`TIMELINE`、`FAQS` 四個陣列；部門數目、篩選結果數字會自動按 `DEPTS` 長度更新，毋須改 HTML。新增部門時提供 `works` 陣列（主要工作）即可。

## 免責聲明

本網站為民間整理，並非政府官方網站。政策、收費及服務安排可能隨時更新，辦理前請以相關部門官方公布為準。資料查核至 2026 年 11 月。
