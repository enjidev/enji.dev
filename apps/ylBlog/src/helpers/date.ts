import dayjs from '@/utils/dayjs';

export const relativeTime = (date: string) => dayjs().to(dayjs(date));
