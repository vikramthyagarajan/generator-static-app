'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');
var path = require('path');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
  initializing: function() {
    this.log(yosay(
      'Welcome to the ' + chalk.red('generator-static-app') + ' generator!'
    ));

    //specifying arguments and options
    this.argument('appname', { type: String, required: false});

    this.userConfig = {};
  },
  prompting: {
    name: function() {
      var that = this;
      var done = this.async();
      this.prompt({
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
        default: this.appname
      }, function(answers) {
        _.merge(that.userConfig,answers);
        done();
      });
    },
    folder: function() {
      var that = this;
      var done = this.async();
      if(path.basename(this.destinationPath()) != this.userConfig.projectName) {
        this.prompt({
          type: 'confirm',
          name: 'folderCreation',
          message: 'Appname does not match folder you"re in. Would you like the generator to create folder?',
          default: true,
        }, function(answers) {
          _.merge(that.userConfig,answers);
          done();
        });
      }
      else done();
    }
  },

  writing: function () {
    var config = this.userConfig;
    if (config.folderCreation) {
      mkdirp(config.projectName);
      this.destinationRoot(this.destinationPath(config.projectName));
    }
    this.directory('skeleton', '.');
    this.template('package.json', 'package.json', this.userConfig);
  },

  install: function () {
    this.installDependencies();
  },

  end: function() {
    this.log('the static app has been made. run it with the "node ." command in the directory');
  }
});
