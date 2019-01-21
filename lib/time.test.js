import { convertMinutesToTime, convertDayOfWeekToLabel } from 'lib/time'

describe('convertMinutesToTime', () => {
  it('converts the number of minutes since midnight into 24h format', () => {
    const expected = '12:12'
    const actual = convertMinutesToTime(732)

    expect(actual).toBe(expected)
  })

  it('renders an empty string if the number of minutes is too large', () => {
    const expected = ''
    const actual = convertMinutesToTime(55555)

    expect(actual).toBe(expected)
  })

  it('renders an empty string if the number of minutes is negative', () => {
    const expected = ''
    const actual = convertMinutesToTime(-1)

    expect(actual).toBe(expected)
  })

  it('renders an empty string for non numbers', () => {
    const expected = ''
    const actual = convertMinutesToTime('5')

    expect(actual).toBe(expected)
  })
})

describe('convertDayOfWeekToLabel', () => {
  const values = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  it('returns a day label depending on the day number passed', () => {
    values.forEach((expected, index) => {
      const actual = convertDayOfWeekToLabel(index + 1)
      expect(actual).toBe(expected)
    })
  })

  it('returns an empty string for numbers greater than 7', () => {
    const expected = ''
    const actual = convertDayOfWeekToLabel(8)

    expect(actual).toBe(expected)
  })

  it('returns an empty string for numbers less than 0', () => {
    const expected = ''
    const actual = convertDayOfWeekToLabel(-1)

    expect(actual).toBe(expected)
  })

  it('returns an empty string for non numbers', () => {
    const expected = ''
    const actual = convertDayOfWeekToLabel('5')

    expect(actual).toBe(expected)
  })
})
