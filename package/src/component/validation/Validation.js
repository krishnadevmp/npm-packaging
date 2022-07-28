const validate = (type, value) => {
    switch (type) {
        case 'email':
            const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            return isValid ? '' : 'Invalid email'

        default:
            break;
    }
}

export default validate;