function revertCamelCase() {
  return this.replace(/([a-z])([A-Z])/g, '$1 $2');
}

function toCapitalCase() {
  return this.split(' ')
    .map(
      (word) => `${word.charAt(0).toUpperCase()}${word.toLowerCase().slice(1)}`
    )
    .join(' ');
}

String.prototype.toCapitalCase = toCapitalCase;
String.prototype.revertCamelCase = revertCamelCase;
