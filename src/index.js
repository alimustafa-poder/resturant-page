import "./style.css";
import * as func from "./dishTexts.js";



document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('dishes')) return;
    if (!e.target.closest('div').classList.contains('tabs')) return;
    let name = e.target.textContent.toLowerCase().replace(/\s+/g, '') + "TabChange";
    let fun = func[name];
    if (!fun || fun === undefined) return;
    e.target.addEventListener('click', fun())
})
window.onload = () => {
    func.biryaniTabChange();
}


