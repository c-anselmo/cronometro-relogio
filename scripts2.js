const hora = document.querySelector('.hora')
const minutos = document.querySelector('.minutos')
const segundos = document.querySelector('.segundos')
const seta = document.querySelector('.seta')
const cron = document.querySelector('.cronometro')
const rel = document.querySelector('.relogio')

function pegarHora(){
    const time = new Date()

    const horaRot = (360/12) * time.getHours()
    const minutosRot = (360/60) * time.getMinutes()
    const segundosRot = (360/60) * time.getSeconds()

    hora.style.transform = `rotate(${horaRot}deg)`
    minutos.style.transform = `rotate(${minutosRot}deg)`
    segundos.style.transform = `rotate(${segundosRot}deg)`
}

setInterval(() => {
    pegarHora();
  }, 1000);

pegarHora();


rel.style.transform = 'translateX(300%)'
seta.addEventListener('click', slide)

function slide(){
    if(rel.style.transform === 'translateX(300%)'){
        rel.style.transform = 'translateX(0%)'
        cron.style.transform = 'translateX(300%)'
    }else if(cron.style.transform === 'translateX(300%)'){
        cron.style.transform = 'translateX(0%)'
        rel.style.transform = 'translateX(300%)'
    }
}

