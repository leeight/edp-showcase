/**
 * @file [Please Input File Description]
 * @author leeight(leeight@gmail.com)
 */

define( function ( require ) {
    var Action = require( 'er/Action' );

    /**
     * [Please Input Action Description]
     * 
     * @constructor
     */
    function PlanList() {
        Action.apply( this, arguments );
    }

    
    PlanList.prototype = {
        modelType: require( './ListModel' ),
        viewType: require( './ListView' )
    };
    

    require( 'er/util' ).inherits( PlanList, Action );
    return PlanList;
} );
