// let isToday = require('date-fns/is_today')
// console.log(isToday(new Date()))
//=> true

const now = new Date();
const before = new Date('July 11 1997 11:00:00');
const origin = new Date(1);
document.querySelector('body').innerHTML += `
<h1>${now.getHours()}:${now.getMinutes()}  ${ now.getDate()} of ${now.getMonth()}</h1>
<h2>${now.toLocaleString()}</h2>
<h2>${origin.toDateString()}</h2>

<h2>${( Math.round((now.getTime() - before.getTime())/1000/60/60/24/3.65)   )/100}</h2>
<script src="http://cdn.date-fns.org/VERSION/date_fns.min.js"></script>
<script>
  dateFns.isToday(new Date())
  console.log(dateFns)
</script>
`
