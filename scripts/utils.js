export function show(param) {
  if(param)	param.classList.remove("hide");
}

export function hide(param) {
	if(param)
	param.classList.add("hide");
}
export function getElem(param) {
	return document.querySelector(`${param}`) || null;
}