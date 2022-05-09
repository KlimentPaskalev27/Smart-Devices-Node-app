// the form.js is linked on the add-device.html (/add-device) page
// It contains a number of functions which are used during and at the end of form populating and submission.

//the showOptions function is executed every time the user selects a new device from a predefined list
// it runs every time because its maint purpose is to check what device the user selected
// and then update the form with only the relevant input fields of properties only that device has
function showOptions() {

    // show the On/Off button when first device is selected
    document.getElementById('on_off').classList.remove("hide");
    //check which device is selected by user in dropdown to later compare with what properties it has
    var checked;
    var name = document.getElementsByName('name');
    for (var i = 0; i < name.length; i++) {
        if (name[i].type == "radio") {
            if (name[i].checked && name[i].name == "name") {
                checked = name[i].value; //this is the device name the user has selected. Now continue with checks for that device
            }
        }
    }


    // initialise a boolean which states whether the selected device is within the list of devices which have the "temperature" property
    var tempDevice = false;
    // Define an array of devices that can have the temperature set
    var temp = ["Refrigerator", "Boiler", "Oven", "Heater", "Jakuzi", "Electric sauna"];
    // hide this option in the form until a suitable divice is chosen and can have this input
    document.getElementById('temprt').classList.remove("show");
    document.getElementById('temprt').classList.add("hide");
    // then for each of its input tags make sure they are not required and can allow the user
    // to submit a form for another device without being prompted to set something not visible to them
    document.getElementsByName('temperature').forEach(function (el) {
        el.removeAttribute("required");
    });
    // compare if the checked by the user device exists within the list of devices that have this property
    for (var i = 0; i < temp.length; i++) {
        if (temp[i] == checked) {
            // if it does in fact exist within the list, then show
            // the input fields for this property in the form
            // and pass the check by setting the boolean to 
            // true that it does need to have this property set
            // then make all those input fields require again
            document.getElementById('temprt').classList.add("show");
            document.getElementById('temprt').classList.remove("hide");
            tempDevice = true;
            document.getElementsByName('temperature').forEach(function (el) {
                el.setAttribute("required", "");
            });
        }
    }
    // if the boolean test did not pass and the chosen device doesnt need this property
    // then set the value of the field to "Not applicable"
    if (!tempDevice) {
        var tempis = document.getElementById('temperature');
        tempis.value = "Not applicable";
    }
    

    // initialise a boolean which states whether the selected device is within the list of devices which have the "volume" property
    var volDevice = false;
    // Define an array of devices that can have the volume set
    var vol = ["PlayStation 4", "Chromecast", "Living room TV", "Bedroom TV", "Speakers"];
    // hide this option in the form until a suitable divice is chosen and can have this input
    document.getElementById('volumediv').classList.remove("show");
    document.getElementById('volumediv').classList.add("hide");
    // then for each of its input tags make sure they are not required and can allow the user
    // to submit a form for another device without being prompted to set something not visible to them
    document.getElementsByName('volume').forEach(function (el) {
        el.removeAttribute("required");
    });
    // compare if the checked by the user device exists within the list of devices that have this property
    for (var i = 0; i < vol.length; i++) {
        if (vol[i] == checked) {
            // if it does in fact exist within the list, then show
            // the input fields for this property in the form
            // and pass the check by setting the boolean to 
            // true that it does need to have this property set
            // then make all those input fields require again
            document.getElementById('volumediv').classList.add("show");
            document.getElementById('volumediv').classList.remove("hide");
            document.getElementsByName('volume').forEach(function (el) {
                el.setAttribute("required", "");
            });
            volDevice = true;
        }
    }
    // if the boolean test did not pass and the chosen device doesnt need this property
    // then set the value of the field to "Not applicable"
    if (!volDevice) {
        var vols = document.getElementById('volume');
        vols.value = "Not applicable";
    }


    // initialise a boolean which states whether the selected device is within the list of devices which have the "open/close" property
    var openDevice = false;
    // devices that can be opened/closed
    var open = ["Garage door", "Automatic Blinders"];
    // hide this option in the form until a suitable divice is chosen and can have this input
    document.getElementById('open_close').classList.remove("show");
    document.getElementById('open_close').classList.add("hide");
    // then for each of its input tags make sure they are not required and can allow the user
    // to submit a form for another device without being prompted to set something not visible to them
    document.getElementsByName('Open_Close').forEach(function (el) {
        el.removeAttribute("required");
    });
    // compare if the checked by the user device exists within the list of devices that have this property
    for (var i = 0; i < open.length; i++) {
        if (open[i] == checked) {
            // if it does in fact exist within the list, then show
            // the input fields for this property in the form
            // and pass the check by setting the boolean to 
            // true that it does need to have this property set
            // then make all those input fields require again
            document.getElementById('open_close').classList.add("show");
            document.getElementById('open_close').classList.remove("hide");
            document.getElementsByName('Open_Close').forEach(function (el) {
                el.setAttribute("required", "");
            });
            openDevice = true;
        }
    }
    // if the boolean test did not pass and the chosen device doesnt need this property
    // then scheck a hidden radio button that has "Not applicable" value
    if (!openDevice) {
        var ops = document.getElementById('open_na');
        ops.checked = true;
    }

    // initialise a boolean which states whether the selected device is within the list of devices which have the "timer" property
    var timerDevice = false;
    // Define an array of devices that can have the timer set
    var timed = ["Microwave", "Dish washer", "Oven", "Tumble dryer", "Heater", "Vacuum robot", "Washing machine", "Electric sauna"];
    // hide this option in the form until a suitable divice is chosen and can have this input
    document.getElementById('timerDiv').classList.remove("show");
    document.getElementById('timerDiv').classList.add("hide");
    // then for each of its input tags make sure they are not required and can allow the user
    // to submit a form for another device without being prompted to set something not visible to them
    document.getElementsByName('timer').forEach(function (el) {
        el.removeAttribute("required");
    });
    // compare if the checked by the user device exists within the list of devices that have this property
    for (var i = 0; i < timed.length; i++) {
        if (timed[i] == checked) {
            // if it does in fact exist within the list, then show
            // the input fields for this property in the form
            // and pass the check by setting the boolean to 
            // true that it does need to have this property set
            // then make all those input fields require again
            document.getElementById('timerDiv').classList.add("show");
            document.getElementById('timerDiv').classList.remove("hide");
            timerDevice = true;
            document.getElementsByName('timer').forEach(function (el) {
                el.setAttribute("required", "");
            });
        }
    }
    // if the boolean test did not pass and the chosen device doesnt need this property
    // then set the value of the field to "Not applicable"
    var time = document.getElementById('timer');
    if (!timerDevice) {
        time.value = "Not applicable";
    }


    // initialise a boolean which states whether the selected device is within the list of devices which have the "humidity" property
    var humidityDevice = false;
    // Define an array of devices that can have the humidity set
    var humid = ["Tumble dryer", "Dehumidifier", "Electric sauna"];
    // hide this option in the form until a suitable divice is chosen and can have this input
    document.getElementById('humidityDiv').classList.remove("show");
    document.getElementById('humidityDiv').classList.add("hide");
    // then for each of its input tags make sure they are not required and can allow the user
    // to submit a form for another device without being prompted to set something not visible to them
    document.getElementsByName('humidity').forEach(function (el) {
        el.removeAttribute("required");
    });
    // compare if the checked by the user device exists within the list of devices that have this property
    for (var i = 0; i < humid.length; i++) {
        if (humid[i] == checked) {
            // if it does in fact exist within the list, then show
            // the input fields for this property in the form
            // and pass the check by setting the boolean to 
            // true that it does need to have this property set
            // then make all those input fields require again
            document.getElementById('humidityDiv').classList.add("show");
            document.getElementById('humidityDiv').classList.remove("hide");
            humidityDevice = true;
            document.getElementsByName('humidity').forEach(function (el) {
                el.setAttribute("required", "");
            });
        }
    }
    // if the boolean test did not pass and the chosen device doesnt need this property
    // then set the value of the field to "Not applicable"
    var humidity = document.getElementById('humidity');
    if (!humidityDevice) {
        humidity.value = "Not applicable";
    }


    // initialise a boolean which states whether the selected device is within the list of devices which have the "percentage" property
    var percentDevice = false;
    // Define an array of devices that can have the percentage of charging or brightness set
    var percented = ["Bedroom TV", "Phone charging station", "Living room TV", "Lights Living room", "Lights Kitchen", "Lights Bathroom"];
    // hide this option in the form until a suitable divice is chosen and can have this input
    document.getElementById('percentDiv').classList.remove("show");
    document.getElementById('percentDiv').classList.add("hide");
    // then for each of its input tags make sure they are not required and can allow the user
    // to submit a form for another device without being prompted to set something not visible to them
    document.getElementsByName('percentage').forEach(function (el) {
        el.removeAttribute("required");
    });
    // compare if the checked by the user device exists within the list of devices that have this property
    for (var i = 0; i < percented.length; i++) {
        if (percented[i] == checked) {
            // if it does in fact exist within the list, then show
            // the input fields for this property in the form
            // and pass the check by setting the boolean to 
            // true that it does need to have this property set
            // then make all those input fields require again
            document.getElementById('percentDiv').classList.add("show");
            document.getElementById('percentDiv').classList.remove("hide");
            percentDevice = true;
            document.getElementsByName('percentage').forEach(function (el) {
                el.setAttribute("required", "");
            });
        }
    }
    // if the boolean test did not pass and the chosen device doesnt need this property
    // then set the value of the field to "Not applicable"
    var percent = document.getElementById('percent');
    if (!percentDevice) {
        percent.value = "Not applicable";
    }


    // initialise a boolean which states whether the selected device is within the list of devices which have the "app" property
    var appDevice = false;
    // Define an array of devices that can have apps
    var apped = ["Chromecast", "PC", "PlayStation 4"];
    // hide this option in the form until a suitable divice is chosen and can have this input
    document.getElementById('appDiv').classList.remove("show");
    document.getElementById('appDiv').classList.add("hide");
    // then for each of its input tags make sure they are not required and can allow the user
    // to submit a form for another device without being prompted to set something not visible to them
    document.getElementsByName('app').forEach(function (el) {
        el.removeAttribute("required");
    });
    // compare if the checked by the user device exists within the list of devices that have this property
    for (var i = 0; i < apped.length; i++) {
        if (apped[i] == checked) {
            // if it does in fact exist within the list, then show
            // the input fields for this property in the form
            // and pass the check by setting the boolean to 
            // true that it does need to have this property set
            // then make all those input fields require again
            document.getElementById('appDiv').classList.add("show");
            document.getElementById('appDiv').classList.remove("hide");
            appDevice = true;
            document.getElementsByName('app').forEach(function (el) {
                el.setAttribute("required", "");
            });
        }
    }
    // if the boolean test did not pass and the chosen device doesnt need this property
    // then scheck a hidden radio button that has "Not applicable" value
    var appt = document.getElementById('app_na');
    if (!appDevice) {
        appt.checked = true;
    }


    // initialise a boolean which states whether the selected device is within the list of devices which have the "channel" property
    var channelDevice = false;
    // Define an array of devices that can have channels
    var channeled = ["Bedroom TV", "Living room TV"];
    // hide this option in the form until a suitable divice is chosen and can have this input
    document.getElementById('channelDiv').classList.remove("show");
    document.getElementById('channelDiv').classList.add("hide");
    // then for each of its input tags make sure they are not required and can allow the user
    // to submit a form for another device without being prompted to set something not visible to them
    document.getElementsByName('channel').forEach(function (el) {
        el.removeAttribute("required");
    });
    // compare if the checked by the user device exists within the list of devices that have this property
    for (var i = 0; i < channeled.length; i++) {
        if (channeled[i] == checked) {
            // if it does in fact exist within the list, then show
            // the input fields for this property in the form
            // and pass the check by setting the boolean to 
            // true that it does need to have this property set
            // then make all those input fields require again
            document.getElementById('channelDiv').classList.add("show");
            document.getElementById('channelDiv').classList.remove("hide");
            channelDevice = true;
            document.getElementsByName('channel').forEach(function (el) {
                el.setAttribute("required", "");
            });
        }
    }
    // if the boolean test did not pass and the chosen device doesnt need this property
    // then set the value of the field to "Not applicable"
    var channel = document.getElementById('channel');
    if (!channelDevice) {
        channel.value = "Not applicable";
    }
}

// the openDropdown function is triggered when the user clicks on the dropdown button on the page
// Toggle the dropdown and add event listeners to options
function openDropdown() {
    document.getElementById("myDropdown").classList.toggle("show"); //show the dropdown menu
    //add event listeners to radio butns
    var name = document.getElementsByName('name');
    for (var i = 0; i < name.length; i++) {
        if (name[i].type == "radio") {
            name[i].addEventListener("click", showOptions); // make sure each radio button with device names in the dropdown will fire showOptions when clicked
            // this way, whenever the user changes the device of choice, the input fields will change
        }
    }
}

// the function below will get the device name the user chose and print it on the form so that when they close the dropdown they can still see what they chose
// Print radio button value of dropdown on screen
function displayRadioValue() {
    document.getElementById("result").innerHTML = "Chosen device: ";
    var ele = document.getElementsByName('name');
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].type == "radio") {
            if (ele[i].checked && ele[i].name == "name") {
                document.getElementById("result").innerHTML = "Chosen device: " + ele[i].value;
            }
        }
    }
} 


// confirm form submission
// whenever the user submits a form to "delete" or "update" a device, ask them for confirmation
function validate() {
    if ( confirm('Do you really want to proceed?') ) { //confirm() opens a pop-up and returns true or false depending on answer
        return true;
    } else {
        alert("You decided to stop.");
        return false; // cancel the form submission
    }
}