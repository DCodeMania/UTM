if (window.location.search) {
  const po = Object.fromEntries(new URLSearchParams(window.location.search));
  const fd = document.getElementById("wf-form-Quote-Form");
  fd.innerHTML = Object.entries(po).map(([k, v]) => `<input type="hidden" name="${k}" value="${v}">`).join("");
  console.log(po);
}

// ?utm_source=google&utm_medium=sem_g&utm_campaign=2411754&utm_term=kwd-12666661&utm_content=testing