let card = document.querySelectorAll('.card');
let img = document.querySelector('.card img');



card.forEach((btn) => {



    btn.addEventListener('mouseenter', () => {
        console.log('mouseEnter');
        let btnImg = btn.childNodes[3]
        btnImg.style.display = 'inline';
    })


    btn.addEventListener('mouseleave', () => {
        console.log('mouseleave')
        btnImg = btn.childNodes[3]
        btnImg.style.display = 'none';
    })

    console.log(btn.childNodes)   // List Of ChildNodes
    console.log(btn.childNodes[3])  // Accessing A Img using childNode

    btn.addEventListener('mousemove', (e) => {
        console.log(e)
        btn.childNodes[3].style.left = e.x + 'px';
        btn.childNodes[3].style.top = e.y + 'px';
    })
})
