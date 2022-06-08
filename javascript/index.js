const days = document.querySelectorAll('.box')
days.forEach(box => {
  box.addEventListener('mouseenter', () => {
    const idDaySelected = box.attributes.id.value

    const moneyActive = document.querySelector('.ativo')
    moneyActive.classList.remove('ativo')

    const idMoneyToShow = `money-${idDaySelected}`
    const moneyToShow = document.getElementById(idMoneyToShow)
    moneyToShow.classList.add('ativo')
  })

  idDaySelected = box.attributes.id.value
  const idDayToEdit = `money-${idDaySelected}`

  let pixelNumber = document.getElementById(idDayToEdit)
  pixelNumber = pixelNumber.innerText

  let boxToEdit = document.getElementById(idDaySelected)

  window.addEventListener('load', graficSize)
  window.addEventListener('resize', graficSize)

  function graficSize() {
    let pageWidth = innerWidth
    if (pageWidth < 377) {
      boxEdited = `${pixelNumber * 3}px`
      boxToEdit.style.height = boxEdited
    } else {
      let boxEdited = `${pixelNumber * 2}px`

      boxToEdit.style.height = boxEdited
    }
  }
})
