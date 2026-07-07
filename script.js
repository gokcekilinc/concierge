const checkbox = document.getElementById("accept");
const button = document.getElementById("btn");

// Buraya Guest Relations WhatsApp numaranızı yazın.
// Örnek: 905551112233
const whatsappNumber = "905309756982";

// İsterseniz misafirin yazacağı ilk mesaj
const message = encodeURIComponent("Hello! I would like to contact Guest Relations.");

checkbox.addEventListener("change", () => {
    button.disabled = !checkbox.checked;
});

button.addEventListener("click", () => {
    window.location.href =
        https://wa.me/${whatsappNumber}?text=${message};
});
