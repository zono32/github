export const JuegoReducer = (state = [], action) => {
  switch (action.type) {
    case 'crear':
        return [...state, action.payLoad]
      case 'borrar':
          return state.filter(juego => juego.id !== action.payLoad)
      case 'editar':
          let indice = state.findIndex(juego => juego.id === action.payLoad.id);
          state[indice] = action.payLoad;
          return [...state];
  
    default:
        return state;
  }
  
}
