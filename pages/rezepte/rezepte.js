const spans = document.querySelectorAll(".ingridient-quantity");
const initialAmounts = Array.from(spans).map((span) =>
    parseFloat(span.innerText)
);

function updateAmounts() {
    const input = document.getElementById("input-portions");
    if (input.value === "1") {
        return initialAmounts;
    } else {
        return initialAmounts.map((amount) => amount * input.value);
    }
}

function render() {
    const input = document.getElementById("input-portions");
    if (input.checkValidity()) {
        const updatedAmounts = updateAmounts();
        const spans = document.querySelectorAll(".ingridient-quantity");
        spans.forEach(
            (span, index) => (span.innerText = updatedAmounts[index])
        );
        spans.forEach((span) => {
            const parsedValue = parseFloat(span.innerText);
            if (parsedValue === 0.5) {
                span.innerText = "½";
            } else if (parsedValue % 1 === 0.5) {
                span.innerText = Math.floor(parsedValue) + "½";
            }
        });
    } else {
        input.reportValidity();
    }
}

function handleClickAndEnterEvents() {
    render();
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleClickAndEnterEvents();
    }
});
