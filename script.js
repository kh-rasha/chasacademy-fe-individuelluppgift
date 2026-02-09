
(function measureLCP() {
    if (!("PerformanceObserver" in window)) return;

    try {
        const po = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const last = entries[entries.length - 1];
            if (!last) return;
            console.log("[LCP]", Math.round(last.startTime), "ms", last.element);
        });
        po.observe({ type: "largest-contentful-paint", buffered: true });
    } catch (e) {
        console.warn("LCP observer not supported:", e);
    }
})();

// Replace the blocking heavy work with idle work (better perceived performance)
function simulateHeavyWorkNonBlocking() {
    const work = () => {
        const start = performance.now();
        while (performance.now() - start < 200) {
            // simulate heavy work
        }
        console.log("Heavy work done (idle).");
    };

    if ("requestIdleCallback" in window) {
        requestIdleCallback(work);
    } else {
        // fallback: run after first paint-ish
        setTimeout(work, 0);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Run heavy work after initial render (not blocking LCP)
    simulateHeavyWorkNonBlocking();

    document.querySelectorAll(".add-to-cart").forEach((btn) => {
        btn.addEventListener("click", function () {
            alert("Item added to cart!");
        });
    });

    const form = document.getElementById("newsletter-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for subscribing!");
            form.reset();
        });
    }

    // axe run only when you want it (open page with ?axe=1)
    const params = new URLSearchParams(window.location.search);
    if (params.get("axe") === "1" && window.axe) {
        axe.run(document, {
            resultTypes: ["violations", "incomplete", "passes"],
        }).then((results) => {
            console.group("[axe] summary");
            console.log("violations:", results.violations.length);
            console.log("incomplete:", results.incomplete.length);
            console.log("passes:", results.passes.length);
            console.groupEnd();

            if (results.violations.length) {
                console.log("[axe] violations details:", results.violations);
            }
        }).catch((err) => {
            console.warn("axe error:", err);
        });
    }
});
