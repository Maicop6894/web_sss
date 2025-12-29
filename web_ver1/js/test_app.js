
// Set year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple search (demo)
document.getElementById('searchInput').addEventListener('keydown', function(e){
if(e.key === 'Enter'){ e.preventDefault(); alert('Tìm kiếm: '+ this.value); }
});

// Simple language switching: map keys -> translations
const translations = {
vi: {
lienhe : "Liên hệ",
group_name: "TTT GROUP",
group_tag: "Thiết kế • Phát triển • Kiểm thử hệ thống nhúng ô tô",
tech_list: "AUTOSAR, RTOS, CAN/CAN-FD, AI for Testing",
achievements: "Sản phẩm đạt chuẩn ISO 26262 • 50+ dự án",
chip_expertise: "Chuyên gia hệ thống nhúng ô tô",
hero_title: "Phát triển hệ thống nhúng trong ô tô",
hero_sub: "TTT Group ứng dụng AI để tối ưu hoá phát triển phần mềm quản lý và tự động hoá kiểm thử cho ngành ô tô.",
btn_programs: "Xem dịch vụ",
btn_contact: "Liên hệ / Hợp tác",
about_title: "Về TTT Group",
about_sub: "Thành lập từ chuyên gia lĩnh vực ô tô, TTT Group cung cấp giải pháp thiết kế, phát triển và kiểm thử hệ thống nhúng, đồng thời ứng dụng AI để gia tăng hiệu quả kiểm thử và quản trị dự án.",
vission_title: "Tầm nhìn", vission_text: "Trở thành đối tác hàng đầu trong giải pháp phần mềm nhúng an toàn cho ngành ô tô.",
values_title: "Giá trị cốt lõi", values_text: "An toàn — Chất lượng — Tự động hoá — Minh bạch.",
principles_title: "Nguyên tắc", principles_text: "Thiết kế vì an toàn, kiểm thử vì chất lượng, tối ưu hoá bằng AI.",
services_title: "Dịch vụ chính",
s1_title: "Thiết kế hệ thống nhúng", s1_text: "Kiến trúc phần cứng & phần mềm, yêu cầu an toàn chức năng (ISO 26262).",
s2_title: "Phát triển phần mềm ô tô", s2_text: "ECU firmware, AUTOSAR, middleware, giao tiếp CAN/CAN-FD.",
s3_title: "Kiểm thử & Tự động hoá", s3_text: "HIL / SIL, E2E testing, pipeline tự động hóa kiểm thử bằng AI.",
impact_title: "Sứ mệnh & Hiệu quả", impact_sub: "Ứng dụng kỹ thuật và AI để rút ngắn thời gian phát triển, nâng cao chất lượng và an toàn.",
team_title: "Đội ngũ",
news_title: "Tin tức & Sự kiện",
contact_title: "Liên hệ & Hợp tác",
contact_sub: "Chúng tôi sẵn sàng trao đổi về dự án, hợp tác R&D và tích hợp AI cho kiểm thử.",
btn_download: "Tải hồ sơ (PDF)",
btn_transparency: "Minh bạch & Báo cáo",
form_title: "Gửi yêu cầu",
btn_send: "Gửi"
},
en: {
lienhe : "contact",
group_name: "TTT GROUP",
group_tag: "Design • Development • Testing of Automotive Embedded Systems",
tech_list: "AUTOSAR, RTOS, CAN/CAN-FD, AI for Testing",
achievements: "ISO 26262-compliant products • 50+ projects",
chip_expertise: "Automotive Embedded Systems Experts",
hero_title: "Design — Develop — Test Automotive Embedded Systems",
hero_sub: "TTT Group applies AI to optimize management software and automate testing for automotive industry.",
btn_programs: "View Services",
btn_contact: "Contact / Partnership",
about_title: "About TTT Group",
about_sub: "Founded by automotive experts, TTT Group delivers embedded system design, development and testing, leveraging AI to improve QA and project management.",
vission_title: "Vision", vission_text: "To be the leading partner in safety-critical embedded software solutions for automotive.",
values_title: "Core values", values_text: "Safety — Quality — Automation — Transparency.",
principles_title: "Principles", principles_text: "Design for safety, test for quality, optimize with AI.",
services_title: "Main Services",
s1_title: "Embedded System Design", s1_text: "Hardware & software architecture, functional safety (ISO 26262).",
s2_title: "Automotive Software Development", s2_text: "ECU firmware, AUTOSAR, middleware, CAN/CAN-FD.",
s3_title: "Testing & Automation", s3_text: "HIL / SIL, E2E testing, AI-driven automated test pipelines.",
impact_title: "Mission & Impact", impact_sub: "Applying engineering and AI to shorten development cycles and raise safety & quality.",
team_title: "Team",
news_title: "News & Events",
contact_title: "Contact & Collaboration",
contact_sub: "We're open to project discussions, R&D partnerships and AI testing integration.",
btn_download: "Download Profile (PDF)",
btn_transparency: "Transparency & Reports",
form_title: "Send Request",
btn_send: "Send"
},
jp: {
lienhe : "連絡",
group_name: "TTT GROUP",
group_tag: "自動車組込みシステムの設計・開発・検証",
tech_list: "AUTOSAR, RTOS, CAN/CAN-FD, テスト向けAI",
achievements: "ISO 26262 準拠 • 50+ プロジェクト",
chip_expertise: "自動車組込みシステムの専門家",
hero_title: "設計 — 開発 — 自動車組込みシステムのテスト",
hero_sub: "TTT GroupはAIを活用し、管理ソフトとテスト自動化を最適化します。",
btn_programs: "サービスを見る",
btn_contact: "お問い合わせ / 協力",
about_title: "TTT Groupについて",
about_sub: "自動車業界の専門家が設立。組込みシステムの設計・開発・検証とAIによる品質改善を提供。",
vission_title: "ビジョン", vission_text: "自動車向け安全性の高い組込みソフトの主要パートナーになること。",
values_title: "価値", values_text: "安全 — 品質 — 自動化 — 透明性。",
principles_title: "原則", principles_text: "安全のための設計、品質のための検証、AIによる最適化。",
services_title: "主なサービス",
s1_title: "組込みシステム設計", s1_text: "ハード/ソフトのアーキテクチャ、機能安全(ISO 26262)。",
s2_title: "自動車ソフト開発", s2_text: "ECUファームウェア、AUTOSAR、ミドルウェア、CAN/CAN-FD。",
s3_title: "テストと自動化", s3_text: "HIL / SIL、E2E テスト、AIによるテストパイプライン。",
impact_title: "ミッション & インパクト", impact_sub: "工学とAIで開発期間短縮、品質と安全性向上を実現します。",
team_title: "チーム",
news_title: "ニュース & イベント",
contact_title: "お問い合わせ",
contact_sub: "プロジェクト、共同研究、テスト自動化の統合についてご相談ください。",
btn_download: "資料ダウンロード (PDF)",
btn_transparency: "透明性 & レポート",
form_title: "依頼を送信",
btn_send: "送信"
}
};

// update all elements that have data-i18 attribute
function applyTranslations(lang){
document.querySelectorAll('[data-i18]').forEach(el=>{
const key = el.getAttribute('data-i18');
if(translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
});
// also update small fields not using data-i18 keys explicitly:
const leftList = translations[lang].tech_list || '';
document.querySelectorAll('[data-i18="tech_list"]').forEach(e=> e.textContent = leftList);
}

// initialize based on select
const langSelect = document.getElementById('languageSwitcher');
langSelect.addEventListener('change', ()=> applyTranslations(langSelect.value));
// default
applyTranslations('vi');

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click', function(e){
const target = this.getAttribute('href');
if(target && target.startsWith('#')){
const el = document.querySelector(target);
if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
}
});
});


