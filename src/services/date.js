import moment from "moment";

export default function getTime() {
  var timestamp = moment().format("YYYY-MM-DD HH:mm:ss");
  return timestamp;
}
