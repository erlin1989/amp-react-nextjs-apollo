import React from 'react'
import { shallow } from 'enzyme'
import {
  OpeningHour,
  StyledOpeningHour,
  StartTime,
  EndTime,
  Day,
} from './OpeningHour'
import { convertMinutesToTime, convertDayOfWeekToLabel } from 'lib/time'

describe('OpeningHour', () => {
  it('renders without crashing', () => {
    shallow(<OpeningHour startMinute={30} endMinute={300} dayOfWeek={1} />)
  })

  it('renders a "StyledOpeningHour" component', () => {
    const element = shallow(
      <OpeningHour startMinute={30} endMinute={300} dayOfWeek={1} />
    )
    expect(element.find(StyledOpeningHour)).toHaveLength(1)
  })

  it('renders a formatted time based on "startMinute" prop', () => {
    const startMinute = 30
    const expected = convertMinutesToTime(startMinute)

    const element = shallow(
      <OpeningHour startMinute={startMinute} endMinute={300} dayOfWeek={1} />
    )

    const actual = element.find(StartTime).props().children

    expect(actual).toBe(expected)
  })

  it('renders a formatted time based on "endMinute" prop', () => {
    const endMinute = 300
    const expected = convertMinutesToTime(endMinute)

    const element = shallow(
      <OpeningHour startMinute={30} endMinute={endMinute} dayOfWeek={1} />
    )

    const actual = element.find(EndTime).props().children

    expect(actual).toBe(expected)
  })

  it('renders a day of week label based on "dayOfWeek" prop', () => {
    const dayOfWeek = 7
    const expected = convertDayOfWeekToLabel(dayOfWeek)

    const element = shallow(
      <OpeningHour startMinute={30} endMinute={300} dayOfWeek={dayOfWeek} />
    )

    const actual = element.find(Day).props().children

    expect(actual).toBe(expected)
  })

  it('renders a "StartTime"', () => {
    const element = shallow(
      <OpeningHour startMinute={30} endMinute={300} dayOfWeek={1} />
    )
    expect(element.find(StartTime)).toHaveLength(1)
  })

  it('renders a "EndTime"', () => {
    const element = shallow(
      <OpeningHour startMinute={30} endMinute={300} dayOfWeek={1} />
    )
    expect(element.find(EndTime)).toHaveLength(1)
  })

  it('renders a "Day"', () => {
    const element = shallow(
      <OpeningHour startMinute={30} endMinute={300} dayOfWeek={1} />
    )
    expect(element.find(Day)).toHaveLength(1)
  })
})
