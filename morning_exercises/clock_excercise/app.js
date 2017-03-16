var calculate = function(hourHand, minuteHand) {
  if(hourHand < 0 || hourHand > 12) {
    return "Out of range";
  } else if (minuteHand < 0 || minuteHand > 60) {
    return "Out of range";
  }
  var minuteHandPos = (minuteHand/60) * 360;
  var hourHandPos = ((minuteHand/60) * 30) + ((hourHand % 12)/12) * 360;
  var answer = [hourHandPos, minuteHandPos];
  return answer;
};
