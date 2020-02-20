import React from 'react'

//Solução mais usada
// export default props =>
//     <div>
//         <h1>Primeiro elemento</h1>
//         <h2>Segundo elemento</h2>
//     </div>

//Solução Sem gerar div
// export default props =>
//     <React.Fragment>
//         <h1>Primeiro elemento</h1>
//         <h2>Segundo elemento</h2>
//     </React.Fragment>

// Solução Com array
 export default props => [
        <h1>Primeiro elemento</h1>,
        <h2>Segundo elemento</h2>
 ]
     
