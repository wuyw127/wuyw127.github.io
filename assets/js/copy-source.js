document.addEventListener("copy", (e) => {
  const sel = window.getSelection();
  const text = sel ? sel.toString() : "";
  if (!text) return;

  e.preventDefault();
  const suffix = "\n\n——来源：" + location.href;
  e.clipboardData.setData("text/plain", text + suffix);
});