export function initializeTooltips() {
    const isMobile = () => window.matchMedia("(max-width: 1024px)").matches;
    
    const wrappers = document.querySelectorAll("[data-tooltip-wrapper]:not([data-initialized])");

    const toggleTooltip = (tooltip, show) => {
        tooltip.style.visibility = show ? "visible" : "hidden";
        tooltip.style.opacity = show ? "1" : "0";
    };

    wrappers.forEach(wrapper => {
        wrapper.setAttribute('data-initialized', 'true');
        const tooltip = wrapper.querySelector("[data-tooltip]");

        wrapper.addEventListener("click", (e) => {
            if (!isMobile()) return;
            e.stopPropagation();

            const isVisible = tooltip.style.visibility === "visible";
            
            if (!isVisible) {
                document.querySelectorAll("[data-tooltip]").forEach(t => {
                    if (t !== tooltip) toggleTooltip(t, false);
                });
            }
            toggleTooltip(tooltip, !isVisible);
        });

        wrapper.addEventListener("focus", () => toggleTooltip(tooltip, true));
        wrapper.addEventListener("blur", () => toggleTooltip(tooltip, false));
    });

    document.addEventListener("click", (e) => {
        if (!isMobile()) return;

        if (e.target.closest('[data-tooltip-wrapper]')) return; 

        document.querySelectorAll("[data-tooltip]").forEach(t => toggleTooltip(t, false));
    });
}

document.addEventListener("DOMContentLoaded", initializeTooltips);