export function convertDayNumToText(dayNum: 1 | 2 | 3 | 4 | 5 | 6 | 7): string {
  switch (dayNum) {
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
    case 7:
      return '일';
    default:
      return '월';
  }
}
