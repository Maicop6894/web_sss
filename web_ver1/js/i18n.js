document.addEventListener("DOMContentLoaded", () => {
    const langSwitcher = document.getElementById("languageSwitcher");

    langSwitcher.addEventListener("change", (e) => {
        applyLanguage(e.target.value);
    });

    function applyLanguage(lang) {
        const elements = document.querySelectorAll("[data-i18]");
        elements.forEach(el => {
            const key = el.getAttribute("data-i18");
            const text = getTranslation(lang, key);
            if (text) el.textContent = text;
        });

        const placeholders = document.querySelectorAll("[data-i18-placeholder]");
        placeholders.forEach(el => {
            const key = el.getAttribute("data-i18-placeholder");
            const text = getTranslation(lang, key);
            if (text) el.placeholder = text;
        });
    }

    function getTranslation(lang, keyPath) {
        return keyPath.split(".").reduce((obj, key) => obj?.[key], translations[lang]);
    }

    applyLanguage("vi");
});
