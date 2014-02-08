/***************************************************************************
 * 
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * test_console.js ~ 2014/02/08 15:13:40
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$ 
 * @description 
 *  
 **/
console.log('hello world');
var i = 0;  // dots counter
setInterval(function() {
  process.stdout.clearLine();  // clear current text
  process.stdout.cursorTo(0);  // move cursor to beginning of line

  i = (i + 1) % 4;
  var dots = new Array(i + 1).join(".");
  process.stdout.write("Waiting" + dots);  // write text
}, 300);




















/* vim: set ts=4 sw=4 sts=4 tw=100: */
