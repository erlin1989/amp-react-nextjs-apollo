import numeral from 'numeral'

/**
 * Converts the day of the week into it's string form
 * E.g. 1 -> Monday. 7 -> Sunday
 * @param {Number} dayOfWeek
 * @returns {String} Day of the week
 */
export function convertDayOfWeekToLabel(dayOfWeek) {
  switch (dayOfWeek) {
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
    case 7:
      return 'Sunday'
    default:
      return ''
  }
}

/**
 * Converts the number of minutes since midnight into a 24h time format
 * @param {Number} minutesFromMidnight
 * @returns {String} The time in 24h format
 */
export function convertMinutesToTime(minutesFromMidnight) {
  if (typeof minutesFromMidnight !== 'number' || minutesFromMidnight < 0) {
    return ''
  }

  const MINUTES_PER_HOUR = 60
  const minutes = minutesFromMidnight % MINUTES_PER_HOUR
  const hour = Math.floor(minutesFromMidnight / MINUTES_PER_HOUR)

  if (hour > 23) {
    return ''
  }

  return `${numeral(hour).format('00')}:${numeral(minutes).format('00')}`
}
