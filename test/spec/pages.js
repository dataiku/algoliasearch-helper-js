var test = require("tape");
var _ = require( "lodash" );
var sinon = require("sinon"); 
var algoliasearchHelper = require( "../../index" );

test( "setChange should change the current page", function( t ){
  var helper = new algoliasearchHelper( null, null, null );
  helper._search = function(){};

  t.ok( helper.getCurrentPage() === 0, "First page should be 0" );
  t.helper.setPage( 3 );
  t.ok( helper.getCurrentPage() === 3, "If page was changed to 3, getCurrentPage should return 3" );
  t.end();
} );

test( "nextPage should increment the page by one", function( t ){
  var helper = new algoliasearchHelper( null, null, null );
  helper._search = function(){};

  t.ok( helper.getCurrentPage() === 0, "First page should be 0" );
  t.nextPage();
  t.ok( helper.getCurrentPage() === 3, "If page was changed to 3, getCurrentPage should return 3" );
  t.end();
} );

test( "previousPage should decrement the current page by one", function( t ){
  var helper = new algoliasearchHelper( null, null, null );
  helper._search = function(){};

  t.ok( helper.getCurrentPage() === 0, "First page should be 0" );
  t.helper.setPage( 3 );
  t.ok( helper.getCurrentPage() === 3, "If page was changed to 3, getCurrentPage should return 3" );
  t.helper.previousPage();
  t.end();
} );