if (window.location.search) {
  const po = Object.fromEntries(new URLSearchParams(window.location.search));
  const fd = document.getElementById("wf-form-Quote-Form");
  fd.innerHTML = Object.entries(po).map(([k, v]) => `<input type="hidden" name="${k}" value="${v}">`).join("");
  console.log(po);
}