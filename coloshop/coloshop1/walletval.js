
    const btn=document.querySelector("#form")
    btn.addEventListener('submit',(e)=>{
    e.preventDefault()
    var b = document.getElementById('money').value
    localStorage.setItem('mo',b)
    window.location='bankpay.html'
})





  
