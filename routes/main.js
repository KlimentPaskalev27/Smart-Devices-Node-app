module.exports = function (app) {
    //Validation and Sanitazation
    // require the express-validator as a dependency to use its functions
    const { check, validationResult } = require('express-validator');

    // the home page
        app.get("/", function (req, res) {
            // pass in ejs variables which to render on the page
            //tells it for the requested url, which html to render with which variables
            res.render("index.html", {
                title: "SmartHome Ltd.",
                descr: "SmartHome provides users with an easy-to-use application to connect their devices at home and control them remotely.",
                h2: "The future is only a step away. Let us help you make it!",
                p: "'Smart home devices are increasingly attractive options for people who want to add intelligent features and technology into their homes,' said Michael P.McGinnis, vice president of global research at IDC."
            })
        });
    // end of homepage

    // the About page
        app.get("/about", function (req, res) {
            // pass in EJS variables to populate html tags on the page
            //tells it for the requested url, which html to render with which variables
            res.render("about.html", {
                title: "About us",
                descr: "SmartHome provides users with an easy-to-use application to connect their devices at home and control them remotely.",
                h2: "Let us introduce you to what we do and why you'd love it!",
                h3: "We offer free software to manage your home appliances with an easy-to-use interface.",
                p: "SmartDevices is a small startup aiming to provide millions of users a free piece of software to control their house appliances. Making life not only easier, but also helping achieve a greener future. Have nonstop control over working appliances and don't waste energy unless needed."
            });
        });
    // end of About page

    // a List page with all devices in the database
        app.get("/list", function (req, res) {
            // query the DB to get every entry in it
            let sqlquery = "SELECT * FROM devices";
            db.query(sqlquery, (err, result) => {
                if (err) {
                    res.redirect("/");
                }
                // use the response array of objects to populate page. Pass it in as ejs variable
                res.render("list.html", { availableDevices: result });
            });
        });
    // end of List page


    // the Add device page and process
        app.get("/add-device", function (req, res) {
            // query database to get all the devices
            let sqlquery = "SELECT name FROM devices";
            // execute sql query
            db.query(sqlquery, (err, result) => {
                // check if there is an error
                if (err) {
                    // if there is, redirect to home page
                    res.redirect("/");
                } else { // if there isnt an error, render the page using the database response data
                    res.render("add-device.html", {
                        devices: result, // database response
                        title: "Add a new device", //ejs variables
                        descr: "SmartHome provides users with an easy-to-use application to connect their devices at home and control them remotely.",
                        // options is the list of all devices. Easier to iterate and create a list of options in html using this as ejs variable
                        options: ["Refrigerator", "Microwave", "Boiler", "Bedroom TV",
                            "Dish washer", "Oven", "PlayStation 4", "Chromecast", "Internet router",
                            "Tumble dryer", "Heater", "Phone charging station", "Vacuum robot", "Washing machine",
                            "Living room TV", "Speakers", "PC", "Lights Living room", "Lights Kitchen",
                            "Lights Bathroom", "Garage door", "Automatic Blinders", "Fan", "Dehumidifier",
                            "Jakuzi", "Electric sauna"]
                    });
                }
            });
        });

        
        // this is the pages whicht he form from /add-device directs the user
        // it uses the body-parser module to get the input data from the form on /add-device
        // body-parser helps us use that data to create a POST request to the database
        app.post("/device-added", [
            // use the sanitizer to perform some validation checks on the form inputs.accordion
            // and also return a message to the user if a requirement is not met
            check('name')
                .notEmpty().isString().withMessage("Device name must be valid from given selection.")
                .isLength({ min: 2 }).withMessage("Device cannot be single letter. Shortest device is PC."),
            check('On_Off').notEmpty().isBoolean().withMessage("Device must be either ON or OFF."),
            check('Open_Close').notEmpty().withMessage("This device requires and Open/Close state to be set.")
            .isLength({ min: 4 }).withMessage("Device can be either in states OPEN or CLOSE"),
            check('temperature').notEmpty().withMessage("Please set the temperature for this device."),
            check('volume').notEmpty().withMessage("Please select the volume for the device."),
            check('timer').notEmpty().withMessage("Please set the timer."),
            check('humidity').notEmpty().withMessage("Please select humidity."),
            check('percentage').notEmpty().withMessage("Please set the percentage at which the device should operate at."),
            check('app').notEmpty().withMessage("Please select an app to run on device."),
            check('channel').notEmpty().withMessage("Enter a number for which channel to start.")
        ], function (req, res) {
                // check for errors after validation
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    // if there are errors returned, print the errors as a ejs variable on the error.html page
                    res.render("error.html", { error: errors.errors[0].msg });
                }
                // if no errors, continue
                // saving data in database using the INSERT command
                let sqlquery = "INSERT INTO devices (name, On_Off, Open_Close, temperature, volume, timer, humidity, percentage, app, channel) VALUES (?,?,?,?,?,?,?,?,?,?)";
                // define each of the req.body. data coming in
                const { name, On_Off, Open_Close, temperature, volume, timer, humidity, percentage, app, channel } = req.body;
                let newrecord = [name, On_Off, Open_Close, temperature, volume, timer, humidity, percentage, app, channel];
                query = db.query(sqlquery, newrecord, (err, result) => { //create the query
                    if (err) {
                        // if there are errors, print them on the error.html page by passing the error response message as ejs var
                        res.render("error.html", { error: err.message });
                    } else {
                        // if there are no errors, and the new device is added, redirect user to list page to see the updated list
                        res.redirect("/list");
                    }
                })
        });
    // end of Add device process

    
    //Search and Show Device status
        // go to the search page
        app.get("/search", function (req, res) {
            res.render("search.html");
        });

        // the Device status page which shows a list of the existing devices ot the user so they can choose which one to check the status of
        app.get("/show-device-status", function (req, res) {
            let sqlquery = "SELECT * FROM devices"; // get all entries
            db.query(sqlquery, (err, result) => {
                if (err) {
                    res.redirect("/");
                }
                // populate page with all the entries so the user can choose
                res.render("show-device-status.html", { availableDevices: result });
            });
        });


        //this is for search results page and for showing the Device status.
        app.get("/results", function (req, res) {
            //searching in the database using either the word from Search or the selected device from Device status
            let word = [req.query.keyword];
            // query the DB for that device name
            let sqlquery = "SELECT * FROM devices WHERE name like ?";
            // execute sql query
            db.query(sqlquery, word, (err, result) => {
                if (err) {
                    // if there is an error, render the error on the custom error page
                    res.render("error.html", { error: "No device found with the keyword you have entered" + req.query.keyword + ". Error: " + err.message });
                } else {
                    // render the DB response for that specific entry using the device-status.html
                    res.render('device-status.html', { availableDevices: result });
                }
            });
        });
    // End of Search and Show Device status

    // Update device process and pages
        // the Update device page 
        app.get("/update-device-status", function (req, res) {
            let sqlquery = "SELECT * FROM devices";
            db.query(sqlquery, (err, result) => {
                if (err) {
                    // if there is an error, redirect to home page
                    res.redirect("/");
                }
                // shows a list of all existing devices in the database so the user can choose which to update
                res.render("update-device-status.html", { availableDevices: result });
            });
        });


        // after choosing which device to update, query the database to get all the fields this device has
        app.get("/update", function (req, res) {
            // query the database with the name of the chosen device from /update-device-status
            let sqlquery = "SELECT * FROM devices WHERE name LIKE ?";
            let word = [req.query.keyword];
            db.query(sqlquery, word, (err, result) => {
                if (err) {
                    res.redirect("/");
                }
                // all the values of the device will be shown on the page so the user can see how the properties are set currently
                res.render("update.html", { availableDevices: result });
            });
        });

        // after submitting form on /update page, get the data from the form using body-parser
        app.post("/updated", [
            // for each field from the form on /udpate, pass some validation to test the inputs
            check('name')
                .notEmpty().isString().withMessage("Device name must be valid from given selection.")
                .isLength({ min: 2, max: 20 }).withMessage("Device cannot be single letter. Shortest device is PC."),
            check('On_Off').notEmpty().isBoolean().withMessage("Device must be either ON or OFF."),
            check('Open_Close').notEmpty().withMessage("This device requires and Open/Close state to be set.")
                .isLength({ min: 4, max: 14 }).withMessage("Device can be either in states OPEN or CLOSE"),
            check('temperature').notEmpty().withMessage("Please set the temperature for this device."),
            check('volume').notEmpty().withMessage("Please select the volume for the device."),
            check('timer').notEmpty().withMessage("Please set the timer."),
            check('humidity').notEmpty().withMessage("Please select humidity."),
            check('percentage').notEmpty().withMessage("Please set the percentage at which the device should operate at."),
            check('app').notEmpty().withMessage("Please select an app to run on device."),
            check('channel').notEmpty().withMessage("Enter a number for which channel to start.")
        ], function (req, res) {
            // check for errors after validation
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                //if there is an error, render the error as a EJS var on the custom error page
                res.render("error.html", { error: errors.errors[0].msg });
            }
            // if no errors, continue
            // create the SQL command to update all columns of a device with a matching name
            let sqlquery = "UPDATE devices SET On_Off = ? , Open_Close = ? , temperature = ? , volume = ? , timer =? , humidity = ? , percentage = ? , app = ? , channel = ? WHERE name = ?;";
            const { On_Off, Open_Close, temperature, volume, timer, humidity, percentage, app, channel, name } = req.body;
            let newrecord = [On_Off, Open_Close, temperature, volume, timer, humidity, percentage, app, channel, name];
            // execute sql query
            db.query(sqlquery, newrecord, (err, result) => {
                if (err) {
                    res.render("error.html", { error: err.message });
                } else {
                    res.render("updated.html");
                }
            })
        });
    // End of Update device process

    // Delete device process
        // this is the Delete device page
        app.get("/delete-device", function (req, res) {
            // get a list of all existing devices so that the user can choose which one to delete
            let sqlquery = "SELECT * FROM devices";
            db.query(sqlquery, (err, result) => {
                if (err) {
                    res.redirect("/");
                }
                res.render("delete-device.html", { availableDevices: result });
            });
        });

        // take the form submission of /delete-device after user has chosen which device to delete
        app.get("/deleted", function (req, res) {
            //searching in the database for that device with matching name using LIKE operator and DELETE command
            let word = [req.query.name];
            let sqlquery = "DELETE FROM devices WHERE name LIKE ?";
            // execute sql query
            db.query(sqlquery, word, (err, result) => {
                if (err) {
                    // render error
                    res.render("error.html", { error: "No device found with the name you have selected: " + + req.query.name + ". Error: " + err.message });
                } else {
                    // render confirmation page after SQL command is successful
                    res.redirect('/device-deleted');
                }
            });
        });

        // this is a destination page after /delete-device
        app.get("/device-deleted", function (req, res) {
            // get all devices now left in DB after deletion
            let sqlquery = "SELECT * FROM devices";
            db.query(sqlquery, (err, result) => {
                if (err) {
                    res.redirect("/");
                }
                // get a new list of all devices now that one has been deleted
                res.render("device-deleted.html", { availableDevices: result });
            });
        });
    // End of Delete device process

    // a list of all existing devices but different from list.html in presentation if data
    app.get("/existing-devices", function (req, res) {
        // query database to get all the books
        let sqlquery = "SELECT * FROM devices";
        // execute sql query
        db.query(sqlquery, (err, result) => {
            if (err) {
                res.redirect("/");
            }
            res.render("existing-devices.html", { availableDevices: result });
        });
    }); 
}