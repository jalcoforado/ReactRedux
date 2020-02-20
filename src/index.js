import ReactDOM from 'react-dom'
import React from 'react'
// import PrimeiroComponte from './componentes/PrimeiroComponente'
// import CompA, {CompB} from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
import FamiliaSIlva from './componentes/FamiliaSIlva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById('root')


ReactDOM.render(
    <div>
        <Familia sobrenome="Pereira">
            <Membro nome = "Andre"  />
            <Membro nome = "Mariana" />
        </Familia>
        <Familia sobrenome="Arruda">
            <Membro nome = "Bia"  />
            <Membro nome = "Gustavo" />
        </Familia>
        <FamiliaSIlva sobrenome=" Silva"/> 
        {/* <PrimeiroComponte valor="bom dia"/>
        <CompA valor="Olá Componente A"/>
        <CompB valor="Olá Eu sou o B"/>
        <MultiElementos /> */}
    </div>
,elemento)   