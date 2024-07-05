import { Component } from "react";
import './information.css'
import circle from "./img/Коло.svg"
import corner from "./img/Кут.svg"
import oneHandred from "./img/100метрів 1.svg"
import stv from "./img/Точка прицілювання  1.svg"
import reticle from "./img/Прицільні сітки.svg"
import mrad1 from "./img/1 рад 1.svg"
import mrad2 from "./img/Рад.svg"


class Information extends Component {
    render() {
        return (
            <div>
                 <h1 className="title">НОТАТКИ</h1>
                <div className="informContainer">

                    <div className="part1">
                        <div className="circle">
                        <h3 className="text">В колі 360 градусів</h3>
                        <img className="marTop" src={circle} alt="Коло"/>
                    </div>

                    <div className="oneDegree">
                        <h3 className="text">1 градус = 60 МОА</h3>
                        <img className="marTop" src={corner} alt="Кут"/>
                    </div>

                    <div className="moaSm">
                            <h3>
                                На відстані 100 м. <br />
                                1 МОА = 2,908 см.  <br />
                                1 кутова хвилина = 1 МОА
                            </h3>                                  
                        <img className="marTop"
                        
                                src={oneHandred} alt="100м" />
                    </div>
                    </div>
                    
                    <div className="part2">
                        <div className="stv">
                        <h3>Розрахунок середньої точки влучання (СТВ) від потрібної точки влучання (ТВ)</h3>
                        <img src={stv} alt="stv" />
                    </div>

                     <div className="reticle">
                        <h3>Прицільні сітки:</h3>
                        <img className="marTop" src={reticle} alt="reticle" />
                    </div>

                    <div className="mrad">
                        <h3>Тисячна або мілірадіан, скорочено називається міл або мрад. дорівнює одній тисячній радіана ( = 0.001 радіана) 
                        1 МІЛ = 3.4377 МОА не  залежно від відстані</h3>
                        <div className="pics">
                            <img src={mrad1} alt="reticle" />
                            <img src={mrad2} alt="reticle" />
                        </div>
                    </div>
                    </div>
                    
                </div>     
                
            </div>
        )
    }
}

export default Information