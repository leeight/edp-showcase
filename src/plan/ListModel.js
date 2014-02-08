/**
 * @file [Please Input File Description]
 * @author leeight(leeight@gmail.com)
 */

define( function ( require ) {
    var Model = require( 'er/Model' );
    var datasource = require( 'er/datasource' );

    /**
     * [Please Input Model Description]
     * 
     * @constructor
     */
    function PlanListModel() {
        Model.apply( this, arguments );
    }

    PlanListModel.prototype = {
        datasource: null
    };

    // return模块
    require( 'er/util' ).inherits( PlanListModel, Model );
    return PlanListModel;
} );
