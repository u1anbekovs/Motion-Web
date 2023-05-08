const Validation = (values) => {

    let errors = {};


    if (!values.name) {
        errors.name = "Имя не может пустым"
    }
    if (!values.number) {
        errors.number = "Номер не может пустым"
    } else if (values.number.length < 10) {
        errors.number = "Номер не корректен"
    }
    if (!values.email) {
        errors.email = "Email не может пустым"
    } else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(values.email)) {
        errors.email = "Email не корректен"
    }

    return errors;
};

export default Validation;