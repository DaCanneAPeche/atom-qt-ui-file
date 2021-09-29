'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'qt-ui:toggle': () => this.toggle()
    }));

  },

  deactivate() {
  },

  serialize() {
  },

  // return true if a file name is an .ui file, else retirn false
  checkIfIsUiFile(title) {
    splitedTitle = title.split(".");

    if (( splitedTitle.length > 1)
    &&  (splitedTitle[splitedTitle.length - 1] === "ui")) {return true;}
    return false;
  },

  showQtEditor() {

    document.querySelector(".vertical").querySelector(".item-views").innerHTML = "hey man, the plugin is in dev";

  },

  toggle() {
    atom.workspace.onDidChangeActivePaneItem(item => {
      if (this.checkIfIsUiFile(item.getTitle())) {
        this.showQtEditor();
      }
    });
  }

};
