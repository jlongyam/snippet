{
  function Initialize() {
    var promises = []
    this.add = url => {
      var promise = new Promise( ( resolve, reject )=> {
        var script = document.createElement( 'script' )
        script.src = url
	script.async = true
        script.addEventListener( 'load', ()=> { resolve(script) }, false )
        script.addEventListener( 'error', ()=> { reject(script) }, false )
        document.head.appendChild( script )
      })
      promises.push(promise)
    }
    this.loaded = ( callbackOnFailed )=> { Promise.all( promises ).then( result => {}, callbackOnFailed ) }
  }
  // data-config="default"
  const config = 'config.'+document.currentScript.dataset.config+'.js'
  if( location.protocol === 'file:' ) {
    var filesToLoad = [ config, 'a.js', 'b.js', 'c.js' ]
    filesToLoad.forEach( ( file )=> {
      var init = new Initialize()
      init.add( file )
      init.loaded( ( failedCallback )=> {
        console.log( "Error: initialize failed" )
        // reload this file use 'failedCallback'
        })
    })
  }
  else {
    console.log( 'Require Server Operation' )
    // module
  }
}
/*
In config.default.js

config = {
  app: 'App',
  version: '1.0.1',
  build: 'development'
}

*/
/*
in html > head
<script data-config="default" src="initial.js"></script>
*/