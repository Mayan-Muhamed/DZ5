const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const convert = (element, target1, target2,  isTrue) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', 'convert.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            if (isTrue) {
                target1.value = (element.value / response.usdKgs).toFixed(2)
                target2.value = (element.value / response.eurKgs).toFixed(2)
            } else if(isTrue === null){
                target1.value = (element.value * response.eurKgs).toFixed(2)
                target2.value = (element.value * response.usdEur).toFixed(2)
            }else {
                target1.value = (element.value * response.usdKgs).toFixed(2)
                target2.value = (element.value * response.eurUsd).toFixed(2)
            }
            if (element.value === ''){
                target1.value = ''
                target2.value = ''
            }
        }
    }
}

convert(som, usd, eur,true)
convert(eur, som,  usd, null)
convert(usd, som, eur,false)
