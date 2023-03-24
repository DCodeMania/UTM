if (window.location.search) {
  const po = Object.fromEntries(new URLSearchParams(window.location.search));
  const fd = document.getElementById("wf-form-Quote-Form");
  const inputs = Object.entries(po).map(([k, v]) => `<input type="hidden" name="${k}" value="${v}">`).join("");
  fd.insertAdjacentHTML('afterbegin', inputs);
  console.log(po);
}