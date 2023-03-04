const object = document.querySelector('.object')

const func = () => {
   object.addEventListener('click', () => {
      object.innerHTML = '🙈'
   })
}

func()
