document.querySelectorAll('.copy').forEach((box) => {
  const button = box.querySelector('button');
  const code = box.querySelector('code');
  let timer;
  button.hidden = false;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(code.textContent);
      button.textContent = 'Copied';
    } catch {
      getSelection().selectAllChildren(code);
      button.textContent = 'Press ⌘C';
    }
    clearTimeout(timer);
    timer = setTimeout(() => { button.textContent = 'Copy'; }, 2000);
  });
});
