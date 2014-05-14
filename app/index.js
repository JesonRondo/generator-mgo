'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var MgoGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        // this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    var yaya = '\
\n           ' + chalk.yellow('..:+?++=++==+..') +'\
\n        ' + chalk.yellow('.?++================~=.') +'\
\n       ' + chalk.yellow('.?++=============~===~~,.') +'\
\n       ' + chalk.yellow('I++===') +'NZ' + chalk.yellow('========') +'NZ' + chalk.yellow('~~~~~=.') +'\
\n      ' + chalk.yellow('.7++=======+I7==~==~~~~~=.') +'\
\n      ' + chalk.yellow('.I+$?++==') +'8D?::DD' + chalk.yellow('===++=~~~.') + '    .----------------------------.' +'\
\n      ' + chalk.yellow('.I?+==~==') +'DDDNDDD' + chalk.yellow('=~~~~~~~~.') + '    | ' + chalk.yellow.bold('Remenber the running of us') + ' |' +'\
\n     ' + chalk.yellow('..I+======') +'Z$$$$$Z~' + chalk.yellow('=~~~~~~~:') + '    |   ' + chalk.yellow.bold('under the setting sun,') + '   |' +'\
\n  ' + chalk.yellow('..=~~=++======') +'Z$$$$7' + chalk.yellow('=~~~~~~~~=:.') + '  |       ' + chalk.yellow.bold('it\'s our youth') + '       |' +'\
\n    ' + chalk.yellow('+=~=++===~~~') +'7$$$$' + chalk.yellow('=~~~~~~~~~~:~.') + ' \'____________________________\'' +'\
\n       ' + chalk.yellow(',====~~~~~~~~~~~~~~~~:~~.') +'\
\n       ' + chalk.yellow('.==~~~~~~~~~===~~~~~::~~.') +'\
\n        ' + chalk.yellow('.~~~~~~~..   ..+=~~~::.') +'\
\n        ' + chalk.yellow('...:,..         .:~~,..') +'\
\n                           ' + chalk.yellow('.\'') +'\
\n';
    
    this.log(yaya);

    // replace it with a short and sweet description of your generator
    //this.log(chalk.magenta('You\'re using the fantastic Mgo generator.'));

    var prompts = [{
      name: 'moduleName',
      message: 'Enter the name of your cute module:'
    }];

    this.prompt(prompts, function (props) {
      this.moduleName = props.moduleName;

      done();
    }.bind(this));
  },

  app: function () {
    this.copy('_package.json', 'package.json');
    this.copy('_.gitignore', '.gitignore');
    this.copy('_Gruntfile.js', 'Gruntfile.js');
    this.copy('index.php', 'index.php');
    this.copy('index.js', 'index.js');
    this.copy('index.less', 'index.less');
  },

  projectfiles: function () {
    // this.copy('editorconfig', '.editorconfig');
    // this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = MgoGenerator;
