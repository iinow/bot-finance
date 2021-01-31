import moment from 'moment'

export function format(date: Date, formatString: string) {
  return moment(date).format(formatString)
}
