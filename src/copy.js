const copyButton = document.querySelector('button.copy')
copyButton.addEventListener('click', () => {
  const texts = document.querySelectorAll('.transcription .content p')
  const output = [...texts].reduce((acc, text) => acc += text.innerText, "")
  navigator.clipboard.writeText(output)

  const icon = copyButton.querySelector('i.ph')
  icon.setAttribute('class', 'ph ph-check-circle')

  setTimeout(() => {
    icon.setAttribute('class', 'ph ph-copy-simple')
  }, 2000)
})