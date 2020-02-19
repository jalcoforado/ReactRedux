import ReactDOM from 'react-dom'
import React from 'react'
import PrimeiroComponte from './componentes/PrimeiroComponete'
import { render } from '@testing-library/react'
const elemento = document.getElementById('root')


ReactDOM.render(
    <div>
        <PrimeiroComponte valor="bom dia"/>
    </div>
,elemento)   