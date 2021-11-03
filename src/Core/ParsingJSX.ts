export const parseJSX = (
  html: string,
  components: {
    [key: string]: components;
  }
): HTMLElement => {
  const $element = document.createElement("div");
  $element.innerHTML = html;

  return;
};
