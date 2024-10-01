export const isValidJSON = str => {
    try {
        return Boolean(JSON.parse(str)) && typeof str === "string"
    } catch(err) {
        return false;
    }
};