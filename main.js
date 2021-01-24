let styles = ["Джаз", "Блюз"];
console.log(styles);
document.write(styles, "<br />");

styles.push("Рок-н-ролл");
console.log(styles);
document.write(styles, "<br />");

styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles);
document.write(styles, "<br />");

console.log(styles.shift());
document.write(styles,"<br />");

styles.unshift("Рэп", "Регги");
console.log(styles);
document.write(styles, "<br />");
