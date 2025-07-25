!function( L ) {
  if( window.navigator.onLine ) {
    L.rel  = 'manifest'
    L.href = './static/favicon/jl/manifest.json'
    let d = document
    d.head.appendChild( L )
    d.head.removeChild( d.currentScript )
  }
}( document.createElement( 'link' ) )