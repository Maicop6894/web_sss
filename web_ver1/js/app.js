document.addEventListener("DOMContentLoaded", () => {
    const langSwitcher = document.getElementById("languageSwitcher");

    // Đổi ngôn ngữ khi chọn
    langSwitcher.addEventListener("change", (e) => {
        applyLanguage(e.target.value);
    });

    // Hàm apply ngôn ngữ
    function applyLanguage(lang) {
        const elements = document.querySelectorAll("[data-i18n]");

        elements.forEach(el => {
            const key = el.getAttribute("data-i18n");
            const text = getTranslation(lang, key);
            if (text) el.textContent = text;
        });

        // áp dụng placeholder
        const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
        placeholders.forEach(el => {
            const key = el.getAttribute("data-i18n-placeholder");
            const text = getTranslation(lang, key);
            if (text) el.placeholder = text;
        });
    }

    // Lấy text trong object translations
    function getTranslation(lang, keyPath) {
        return keyPath.split(".").reduce((obj, key) => obj?.[key], translations[lang]);
    }

    // Set mặc định là tiếng Việt
    applyLanguage("vi");
});