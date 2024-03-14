const dropdown = document.querySelectorAll('.dropdown .trigger');
   
dropdown.forEach((trigger)=> {
        trigger.addEventListener('click',(e) => {
            const dropdown = trigger.parentElement
            
            const isOpen = dropdown.classList.contains('open') 

            if (isOpen) {
                dropdown.classList.remove('open')
               
            }else{
                dropdown.classList.add('open')
            }
        }
        )
    })
