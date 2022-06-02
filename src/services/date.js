export default function getTime() {
  var timestamp = Date.now();
  var date = new Date(timestamp);
  var y = date.getFullYear().toString();
  var m = date.getMonth().toString();
  var d = date.getDate().toString();
  var h = date.getHours().toString();
  var i = date.getMinutes().toString();
  var s = date.getSeconds().toString();
  if (m.length === 1) {
    m = "0" + m;
  }
  if (d.length === 1) {
    d = "0" + d;
  }
  if (h.length === 1) {
    h = "0" + h;
  }
  if (i.length === 1) {
    i = "0" + i;
  }
  if (s.length === 1) {
    s = "0" + s;
  }
  var timeString = y + "-" + m + "-" + d + " " + h + ":" + i + ":" + s;
  return timeString;
}
