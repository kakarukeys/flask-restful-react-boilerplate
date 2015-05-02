## Flask-RESTful-React Boilerplate

comes with Underscore, jQuery, Twitter Bootstrap 3.

### Development
* Run `npm install`
* Run `node_modules/gulp/bin/gulp.js`
* Run `mkvirtualenv -p /usr/bin/python3.3 full_stack_study`, where full_stack_study is your virtual environment name.
* Change to `webapp` directory
* Run `pip install -r requirements.txt`
* Run `python app/app.py`
* Go to `localhost:5000` to display the app
* Go to `localhost:5000/bdd/testrunner.html` to see your tests
* Any changes to `app` or `styles` folder will automatically rebuild to `webapp/app/static/` folder
* Both tests and application changes will refresh automatically in the browser
* Run `node_modules/gulp/bin/gulp.js test` to run all tests with phantomJS and produce XML reports
* Run `bower install <package> --save` to install bower dependencies into `webapp/app/static/lib/` folder
* Edit `webapp/app/templates/index.html` to wire up lib js/css files 

### Deployment
* Run `node_modules/gulp/bin/gulp.js deploy` to prepare js,css files for production
* Run `docker build -t full_stack_study` to build the image
* Run `docker run -p 80:80 -dt full_stack_study` to start the container

### Directory
* **jsx**: Where you edit your UI scripts
* **specs/**: Where you put your test files
* **styles/**: Where you put your css files
* **webapp/app**: Where you edit your flask code
* **webapp**: Where you put your deployment files
* **webapp/app/static**: Where your js,css automatically builds to.
* **webapp/app/static/lib**: Where your bower components go to.
* **gulpfile.js**: Gulp configuration
