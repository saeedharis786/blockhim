const blockName = "Name1";  // Replace with the name you want to block

function blockContent() {
  const elements = document.body.getElementsByTagName('*');
  for (let element of elements) {
    if (element.children.length === 0 && element.textContent.includes(blockName)) {
      element.style.display = 'none';
    }
  }
}

window.addEventListener('load', blockContent);
