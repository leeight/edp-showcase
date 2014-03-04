function activeXFeature() {
    if (!window.ActiveXObject) {
        return false;
    }
    try {
        if (window.external && external.msActiveXFilteringEnabled
            && external.msActiveXFilteringEnabled()
        ) {
            return false;
        }
    }
    catch(ex) {}
    return true;
}


function getPlugin(name) {
    try {
        return new ActiveXObject( name + '.1');
    }
    catch (ex) {}
    for (var x = 2; x <= 20; x++) {
        try {
            return new ActiveXObject( name + "." + x );
        }
        catch (ex) {}
    }
    return null;
}

function  main () {
    if ( !activeXFeature() ) {
        alert("Unsupport ActiveXObject");
        return false;
    }

    var message = [];
    var name = 'QQIEHelper.QQRightClick';
    var version = null;
    var p = getPlugin( name );
    if ( p ) {
        version = p.getVersion();
    }
    message.push( name + ' = ' + version );

    /*
    name = 'AliIMX.WangWangX';
    version = null;
    p = getPlugin( name );
    if ( p ) {
        version = p.GetWangWangVersion();
    }
    message.push( name + ' = ' + version );

    name = 'ShockwaveFlash.ShockwaveFlash';
    version = null;
    p = getPlugin( name );
    if ( p ) {
        version = p.GetVariable('$version');
    }
    message.push( name + ' = ' + version );
    */

    alert( message.join( '\n' ) );
}
// main();

alert( ScriptEngineMajorVersion() + '.' + ScriptEngineMinorVersion() + '.' + ScriptEngineBuildVersion() );
