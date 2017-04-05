function main() {
    var from_measure = document.getElementById('original').value
    var to_measure = document.getElementById('converted');
    to_measure.innerHTML = converter(from_measure);
    return false;
}