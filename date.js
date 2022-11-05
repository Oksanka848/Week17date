/*
    3. Напишите функцию `formatDate(date)`, форматирующую `date` 
    по следующему принципу: 
    - Если спустя `date` прошло менее 1 секунды, вывести `"прямо сейчас"`.
    - В противном случае, если с `date` прошло меньше 1 минуты, вывести `"n сек. назад"`.
    - В противном случае, если меньше часа, вывести `"m мин. назад"`.
    - В противном случае, полная дата в формате `"DD.MM.YY HH:mm"`. А именно: `"день.месяц.год часы:минуты"`, всё в виде двух цифр, т.е. `31.12.16 10:00`.
        
        Например:
        
        ```jsx
        alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
        
        alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
        
        alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
        
        // вчерашняя дата вроде 31.12.2016, 20:00
        alert( formatDate(new Date(new Date - 86400* 4 * 1000)) );
        ```*/
function formatDate(date) {
  let now = Date.now() - date;
  let sec = Math.round(now / 1000);
  let min = Math.round(now / (60 * 1000));

  if (now < 1000) {
    return "прямо сейчас";
  } else if (sec < 60) {
    return `${sec} сек. назад`;
  } else if (min < 60) {
    return `${min} мин. назад`;
  } else {
    let fulldate = date.toLocaleDateString("ru", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    });

    let fulltime = date.toLocaleTimeString("ru", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return `${fulldate} ${fulltime}`;
  }
}

console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));

alert(formatDate(new Date(new Date() - 1)));
alert(formatDate(new Date(new Date() - 30 * 1000)));
alert(formatDate(new Date(new Date() - 5 * 60 * 1000)));
alert(formatDate(new Date(new Date() - 86400 * 1000)));
