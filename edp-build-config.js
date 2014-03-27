exports.input = __dirname;

var path = require( 'path' );
exports.output = path.resolve( __dirname, 'output' );

var moduleEntries = 'html,htm,phtml,tpl,vm,js';
var pageEntries = 'html,htm,phtml,tpl,vm';


var MyProcessor = {
    exclude: ['*.png', '*.gif', '*.jpg', '*.js', '*.html', '*.css', '*.tpl', '/dep/*/*/*.less'],
    name: 'MyProcessor',
    process: function(file, processContext, callback) {
        callback();
    }
}

exports.getProcessors = function () {
    return [ 
        MyProcessor,
        new LessCompiler( {
            fileset: [
                'index.html',
                'src/common/css/main.less'
            ],
            entryExtnames: pageEntries
        } ), 
        new CssCompressor(),
        new ModuleCompiler( {
            fileset: [ 'src/common/main.js' ],
            configFile: 'module.conf',
            entryExtnames: moduleEntries,
            getCombineConfig: function( x ) {
                x['common/main'] = {
                    fileset: [ 'er/**', 'esui/**' ]
                }
                return x;
            }
        } ),
        // new JsCompressor(),
        new TplMerge({
            fileset: [
                'src/common/main.js'
            ]
        }),
        new PathMapper( {
            replacements: [
                { type: 'html', tag: 'link', attribute: 'href', extnames: pageEntries },
                { type: 'html', tag: 'img', attribute: 'src', extnames: pageEntries },
                { type: 'html', tag: 'script', attribute: 'src', extnames: pageEntries },
                { extnames: moduleEntries, replacer: 'module-config' },
                { extnames: 'less,css', replacer: 'css' },
            ],
            from: 'src',
            to: 'asset'
        } )
    ];
};

exports.exclude = [
    'tool',
    'doc',
    'test',
    'module.conf',
    'dep/packages.manifest',
    'dep/*/*/test',
    'dep/*/*/doc',
    'dep/*/*/demo',
    'dep/*/*/tool',
    'dep/*/*/*.md',
    'dep/*/*/package.json',
    'edp-*',
    '.edpproj',
    'activex.*',
    '.svn',
    '.git',
    '.gitignore',
    '.idea',
    '.project',
    'Desktop.ini',
    'Thumbs.db',
    '.DS_Store',
    '*.tmp',
    '*.bak',
    '*.swp'
];

exports.injectProcessor = function ( processors ) {
    for ( var key in processors ) {
        global[ key ] = processors[ key ];
    }
};

