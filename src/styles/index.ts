import './global.css'
import autofit from 'autofit.js'


export function setupStyle() { 
  if(import.meta.env.MODE === 'development') return{}
  autofit.init({
    dh: 1080,
    dw: 1920,
    el: "body",
    resize: true
  })
}
