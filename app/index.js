'use strict';

var chalk = require('chalk');
var yeoman = require('yeoman-generator');

var MgoGenerator = module.exports = yeoman.generators.Base.extend({

  init: function() {

    this.pkg = require('../package.json');

    var yaya = chalk.yellow.bold([
        "       _----------_       ",
        "     /              \\     ",     
        "    |                |    .----------------------------.",
        "    |     o    o     |    | Remenber the running of us |",
        "    |     ______     |    |   under the setting sun,   |",
        "   /     |      |     \\   |    it\'s our lost youth    |",
        "  |__     \\    /     __|  \'____________________________\'",
        "    |      \\__/      |    ",
        "    |      ____      |    ",
        "    |    /      \\    |    ",
        "    '---'        '---'    ",
    ].join('\n'));

    this.log(yaya);

    // default
    this.moduleDefault = {
      name: this.arguments[0] || '',
      version: '1.0.0',
      desc: 'mogu module',
      repository: 'http://gitlab.mogujie.org',
      type: 'default',
      author: 'mogu f2e'
    };

    this.prefix = this.arguments[1] ? this.arguments[1] + '/' : '';

    this.on('end', function() {
      this.log('\nRunning ' + chalk.yellow.bold('npm install & bo install') + ' for you to install the required dependencies\n');

      process.chdir(this.prefix + this.name.replace(/\s/img, '_'));

      this.runInstall('npm');
      this.runInstall('bo');
    });
  },

  askFor: function() {
    if (!this.moduleDefault.name) {
      var cb = this.async();

      var prompts = [{
        name: 'name',
        message: 'Enter the name of your cute module:',
        default: 'foo'
      }, {
        type: 'list',
        name: 'type',
        message: 'What\'s type do you want to choices:',
        choices: [
          'default',
          'ushop',
          'empty'
        ],
        default: this.moduleDefault.type
      }, {
        name: 'version',
        message: 'Enter the version of your cute module:',
        default: this.moduleDefault.version
      }, {
        name: 'desc',
        message: 'Enter the description of your cute module:',
        default: this.moduleDefault.desc
      }, {
        name: 'repository',
        message: 'Enter the repository of your cute module:',
        default: this.moduleDefault.repository
      }, {
        name: 'author',
        message: 'Finally enter the your name ^ ^:',
        default: this.moduleDefault.author
      }];

      this.prompt(prompts, function(props) {
        this.name = props.name;
        this.desc = props.desc;
        this.type = props.type;
        this.author = props.author;
        this.version = props.version;
        this.repository = props.repository;

        var today = new Date;
        this.time = [today.getFullYear(), today.getMonth() + 1 <= 9 ? '0' + (today.getMonth() + 1) : today.getDate(), today.getDate() + 1].join('-');
        
        cb();
      }.bind(this));
    } else {
      this.name = this.moduleDefault.name;
      this.desc = this.moduleDefault.desc;
      this.type = this.moduleDefault.type;
      this.author = this.moduleDefault.author;
      this.version = this.moduleDefault.version;
      this.repository = this.moduleDefault.repository;

      var today = new Date;
      this.time = [today.getFullYear(), today.getMonth() + 1 <= 9 ? '0' + (today.getMonth() + 1) : today.getDate(), today.getDate() + 1].join('-');
    }
  },

  app: function() {
    var mpath = this.prefix + this.name.replace(/\s/img, '_');

    this.mkdir(mpath);
    
    switch(this.type) {
      case 'ushop':
        this.template('index_ushop.php', mpath + '/index.php');
        break;

      case 'empty':
        this.template('index_empty.php', mpath + '/index.php');
        break;

      default:
        this.template('index.php', mpath + '/index.php');
        break;
    }
    this.template('index.less', mpath + '/index.less');
    this.template('index.js', mpath + '/index.js');
    this.template('README.md', mpath + '/README.md');
  },

  projectfiles: function() {
    var mpath = this.prefix + this.name.replace(/\s/img, '_');

    this.template('_package.json', mpath + '/package.json');
    this.copy('_bo.json', mpath + '/bo.json');
    this.copy('_Gruntfile.js', mpath + '/Gruntfile.json');
    this.copy('_.gitignore', mpath + '/.gitignore');
  }

});
