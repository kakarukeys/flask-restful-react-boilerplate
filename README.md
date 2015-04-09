## Flask-RESTful-React Boilerplate

### Development
* Run `npm install`
* Run `node_modules/gulp/bin/gulp.js`
* Run `mkvirtualenv -p /usr/bin/python3.3 full_stack_study`
* Change to `webapp` directory
* Run `python app/app.py`
* Go to `localhost:5000` to display the app
* Go to `localhost:5000/bdd/testrunner.html` to see your tests
* Any changes to `app` or `styles` folder will automatically rebuild to `build` folder
* Both tests and application changes will refresh automatically in the browser
* Run `node_modules/gulp/bin/gulp.js test` to run all tests with phantomJS and produce XML reports

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
* **gulpfile.js**: Gulp configuration
