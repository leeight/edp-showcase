/**
 * @file [Please Input File Description]
 * @author leeight(leeight@gmail.com)
 */

define( function ( require ) {
    // require template
    require( 'er/tpl!./list.tpl.html' );
    require( 'er/tpl!./list.tpl.html' );
    require( 'er/tpl!./list.tpl.html' );

    var UIView = require( 'ef/UIView' );
    
    /**
     * [Please Input View Description]
     * 
     * @constructor
     */
    function PlanListView() {
        UIView.apply( this, arguments );
    }
    
    PlanListView.prototype = {
        template: 'TPL_plan_list',

        uiProperties: {
        },

        uiEvents: {
        }
    };

    require( 'er/util' ).inherits( PlanListView, UIView );
    return PlanListView;
} );
