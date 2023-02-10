import './index.css';
import Img from "./assets/img.png"
import about from "./page/about"
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    element.classList.add('color_red');
    element.innerHTML = "hello wabpack aaa";
    // 将图像添加到我们已经存在的 div 中。
    const myIcon = new Image();
    myIcon.src = Img;
    element.appendChild(myIcon);
    btn.innerHTML = 'Click About';
    btn.onclick = about;
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());
console.log("first use webpack");