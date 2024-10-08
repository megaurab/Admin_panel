export const Validate = (email) =>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    if(!isEmailValid) return "Invalid email, try again";

    return null;
}

