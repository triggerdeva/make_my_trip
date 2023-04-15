export default (dateOne,dateTwo) => {
    return   (new Date(dateTwo) - new Date(dateOne)) > 0 ? true : false;
}