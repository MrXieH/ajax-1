getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const response = request.response
            const style = document.createElement('style')
            style.innerHTML = response
            document.head.appendChild(style)
        }
    }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const response = request.response
            const script = document.createElement('script')
            script.innerHTML = response
            document.body.appendChild(script)
        }
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const response = request.response
            const container = document.createElement('div')
            container.innerHTML = response
            document.body.appendChild(container)
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            alert('我的XML内容：' + request.response)
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const response = request.response
            const div = document.createElement('div')
            div.innerHTML = response
            document.body.appendChild(div)
        }
    }
    request.send()
}



let totalPage = 3
let pageNo = 2
getMore.onclick = () => {
    if (pageNo < totalPage) {
        const request = new XMLHttpRequest()
        request.open('GET', `/page${pageNo}`)
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                const response = request.response
                const data = JSON.parse(response)
                data.forEach(item => {
                    const li = document.createElement('li')
                    li.innerText = item.id
                    list.appendChild(li)
                })
                pageNo += 1
            }
        }
        request.send()   
    } else {
        alert('沒有更多了')
    }
}