function panicExceptionAtLizards (text) {
    if (text == 'lizard') {
        return true;
    } else {
        throw "ERROR: input must be a lizard";
    }
}

panicExceptionAtLizards("frog");
