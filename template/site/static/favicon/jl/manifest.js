!function( L ) {
  if( location.protocol === 'http:' || location.protocol === 'https:' && window.navigator.onLine ) {
    L.rel  = 'manifest'
    L.href = 'static/favicon/jl/manifest.json'
    document.head.appendChild( L )
    document.head.removeChild( document.currentScript )
  }
}( document.createElement( 'link' ) )