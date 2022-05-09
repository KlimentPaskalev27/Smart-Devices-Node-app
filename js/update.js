// This js file is only used while the user is updating an existing device with new values. Used on update.html
// the process is almost the same as the form.js showOptions function.
// Difference here is that we check what is the name of the already selected and passed ejs variable of the device name
// Please check form.js for comments on how the function works, since they are identical.
function showOptions() {
    var device;
    var name = document.getElementsByTagName('h2');
    for (var i = 0; i < name.length; i++) {
        device = name[i].dataset.value;
    }

    var tempDevice = false;
    var temp = ["Refrigerator", "Boiler", "Oven", "Heater", "Jakuzi", "Electric sauna"];
    document.getElementById('temprt').classList.remove("show");
    document.getElementById('temprt').classList.add("hide");
    document.getElementsByName('temperature').forEach(function (el) {
        el.removeAttribute("required");
    })
    for (var i = 0; i < temp.length; i++) {
        if (temp[i] == device) {
            document.getElementById('temprt').classList.add("show");
            document.getElementById('temprt').classList.remove("hide");
            tempDevice = true;
            document.getElementsByName('temperature').forEach(function (el) {
                el.setAttribute("required", "");
            })
        }
    }
    if (!tempDevice) {
        var tempis = document.getElementById('temperature');
        tempis.value = "Not applicable";
    }

    var volDevice = false;
    var vol = ["PlayStation 4", "Chromecast", "Living room TV", "Bedroom TV", "Speakers"];
    document.getElementById('volumediv').classList.remove("show");
    document.getElementById('volumediv').classList.add("hide");
    document.getElementsByName('volume').forEach(function (el) {
        el.removeAttribute("required")
    });
    for (var i = 0; i < vol.length; i++) {
        if (vol[i] == device) {
            document.getElementById('volumediv').classList.add("show");
            document.getElementById('volumediv').classList.remove("hide");
            document.getElementsByName('volume').forEach(function (el) {
                el.setAttribute("required", "");
            });
            volDevice = true;
        }
    }
    if (!volDevice) {
        var vols = document.getElementById('volume');
        vols.value = "Not applicable";
    }

    var openDevice = false;
    var open = ["Garage door", "Automatic Blinders"];
    document.getElementById('open_close').classList.remove("show");
    document.getElementById('open_close').classList.add("hide");
    document.getElementsByName('volume').forEach(function (el) {
        el.removeAttribute("required");
    });
    for (var i = 0; i < open.length; i++) {
        if (open[i] == device) {
            document.getElementById('open_close').classList.add("show");
            document.getElementById('open_close').classList.remove("hide");
            document.getElementsByName('Open_Close').forEach(function (el) {
                el.setAttribute("required", "");
            });
            openDevice = true;
            break;
        }
    }
    if (!openDevice) {
        var ops = document.getElementById('open_na');
        ops.device = true;
    }

    var timerDevice = false;
    var timed = ["Microwave", "Dish washer", "Oven", "Tumble dryer", "Heater", "Vacuum robot", "Washing machine", "Electric sauna"];
    document.getElementById('timerDiv').classList.remove("show");
    document.getElementById('timerDiv').classList.add("hide");
    document.getElementsByName('timer').forEach(function (el) {
        el.removeAttribute("required");
    });
    for (var i = 0; i < timed.length; i++) {
        if (timed[i] == device) {
            document.getElementById('timerDiv').classList.add("show");
            document.getElementById('timerDiv').classList.remove("hide");
            timerDevice = true;
            document.getElementsByName('timer').forEach(function (el) {
                el.setAttribute("required", "");
            });
        }
    }
    var time = document.getElementById('timer');
    if (!timerDevice) {
        time.value = "Not applicable";
    }

    var humidityDevice = false;
    var humid = ["Tumble dryer", "Dehumidifier", "Electric sauna"];
    document.getElementById('humidityDiv').classList.remove("show");
    document.getElementById('humidityDiv').classList.add("hide");
    document.getElementsByName('humidity').forEach(function (el) {
        el.removeAttribute("required");
    });
    for (var i = 0; i < humid.length; i++) {
        if (humid[i] == device) {
            document.getElementById('humidityDiv').classList.add("show");
            document.getElementById('humidityDiv').classList.remove("hide");
            humidityDevice = true;
            document.getElementsByName('humidity').forEach(function (el) {
                el.setAttribute("required", "");
            });
        }
    }
    var humidity = document.getElementById('humidity');
    if (!humidityDevice) {
        humidity.value = "Not applicable";
    }

    var percentDevice = false;
    var percented = ["Bedroom TV", "Phone charging station", "Living room TV", "Lights Living room", "Lights Kitchen", "Lights Bathroom"];
    document.getElementById('percentDiv').classList.remove("show");
    document.getElementById('percentDiv').classList.add("hide");
    document.getElementsByName('percentage').forEach(function (el) {
        el.removeAttribute("required");
    });
    for (var i = 0; i < percented.length; i++) {
        if (percented[i] == device) {
            document.getElementById('percentDiv').classList.add("show");
            document.getElementById('percentDiv').classList.remove("hide");
            percentDevice = true;
            document.getElementsByName('percentage').forEach(function (el) {
                el.setAttribute("required", "");
            });
        }
    }
    var percent = document.getElementById('percent');
    var percent_slider = document.getElementById('firstPercent');
    if (!percentDevice) {
        percent.value = "Not applicable";
        percent_slider = "0";
    }

    var appDevice = false;
    var apped = ["Chromecast", "PC", "PlayStation 4"];
    document.getElementById('appDiv').classList.remove("show");
    document.getElementById('appDiv').classList.add("hide");
    document.getElementsByName('app').forEach(function (el) {
        el.removeAttribute("required");
    });
    for (var i = 0; i < apped.length; i++) {
        if (apped[i] == device) {
            document.getElementById('appDiv').classList.add("show");
            document.getElementById('appDiv').classList.remove("hide");
            appDevice = true;
            document.getElementsByName('app').forEach(function (el) {
                el.setAttribute("required", "");
            });
        }
    }
    var appt = document.getElementById('app_na');
    if (!appDevice) {
        appt.checked = true;
    }

    var channelDevice = false;
    var channeled = ["Bedroom TV", "Living room TV"];
    document.getElementById('channelDiv').classList.remove("show");
    document.getElementById('channelDiv').classList.add("hide");
    document.getElementsByName('channel').forEach(function (el) {
        el.removeAttribute("required");
    });
    for (var i = 0; i < channeled.length; i++) {
        if (channeled[i] == device) {
            document.getElementById('channelDiv').classList.add("show");
            document.getElementById('channelDiv').classList.remove("hide");
            channelDevice = true;
            document.getElementsByName('channel').forEach(function (el) {
                el.setAttribute("required", "");
            });
        }
    }
    var channel = document.getElementById('channel');
    if (!channelDevice) {
        channel.value = "Not applicable";
    }
}