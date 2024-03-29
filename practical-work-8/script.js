(function () {
    var names = ["Mason", "Lily", "Jakson", "William", "Cristian", "Jon", "Ella", "Oscar", "George", "Billy", "Janet"];

    for (let name of names) {
        if (name.charAt(0).toLowerCase() == "j") {
            speakHello.speak(name);
        } else {
            speakGoodBye.speak(name);
        }
    }

    for (let name of names) {
        if (name.charCodeAt(name.length - 1) === 110) {
            speakHello.speak(name);
        } else {
            speakGoodBye.speak(name);
        }
    }
})();