import * as $ from "jquery";

'use strict';

var cell = function cell(options) {
  var row = options.row || "",
    column = options.column || "",
    content = "",
    setContent = function setContent(newContent) {
      if (content === "") {
        content = newContent;
        render();
        return true;
      } else {
        console.error("Cell already has content");
        return false;
      }
    },
    getContent = function getContent() {
      return content;
    },
    render = function render() {
      var destination = `#cell-${row}-${column}`;
      $(destination).html(content);
    };

  return {
    row: row,
    column: column,
    content: content,
    setContent: setContent,
    getContent: getContent
  };
}

export default cell;
