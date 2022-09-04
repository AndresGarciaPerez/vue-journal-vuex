
 export default () => ({
    isLoading: true,
    entries: [
      {
         id: new Date().getTime(),
         date: new Date().toDateString(),
         text: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.'
      },

      {
         id: new Date().getTime() +1000,
         date: new Date().toDateString(),
         text: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.'
      },

      {
         id: new Date().getTime() +2000,
         date: new Date().toDateString(),
         text: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.'
      }
      
    ]
 })