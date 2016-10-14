JSONEditor.defaults.themes.bootstrap3Flexible = JSONEditor.defaults.themes.bootstrap3.extend({
    getGridRow: function(editor) {
      var el = document.createElement('div');
      el.className = 'row';
      if(!!editor.schema.wrapperClass)
        el.className += " "+editor.schema.wrapperClass;
      return el;
    },
});
