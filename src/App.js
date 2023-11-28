import "./App.css";
import Kep from "./komponens/Kep.js";
import { adatLista } from "./adatok.js";
import React, { useState } from "react";

function App() {
    const [kepIndex, setNagykep] = useState(0);
    function nagyKepCsere(id) {
        console.log("nagykép csere", id);
        setNagykep(id);
    }
    return (
        <div className="App">
            <header className="App-header">
                <h1>Képgaléria</h1>
            </header>
            <article>
                <div id="fokep">
                    <h3>Nagy kép címe</h3>
                    <Kep adat={adatLista[kepIndex]} />
                    <p>leiras</p>
                </div>
                <div id="galeria">
                    {adatLista.map((elem, index) => {
                        return (
                            <Kep
                                adat={elem}
                                key={index}
                                nagyKepCsere={nagyKepCsere}
                            />
                        );
                    })}
                </div>
            </article>
            <footer>
                <p>Nguyen Duc Duy</p>
            </footer>
        </div>
    );
}

export default App;
