import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(startDate: string, showMonths: boolean): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return "1 year";
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title><a href='https://www.ia.com.mx' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>MSV.VN</a> | Sep. 2023 - {calculateDuration('2023-09-01', true)}</TimelineEvent.Title>

        <TimelineEvent.Description>
        Tôi hiện đang làm việc tại MSV.VN, website tăng tương tác mạng xã hội số 1 Việt Nam. Với sứ mệnh hỗ trợ người dùng tối ưu hóa hoạt động trên các nền tảng mạng xã hội, chúng tôi cung cấp những giải pháp hiệu quả giúp tăng cường sự hiện diện trực tuyến và phát triển cộng đồng. Tại MSV.VN, tôi cùng đội ngũ chuyên gia nỗ lực không ngừng để mang đến trải nghiệm tốt nhất cho khách hàng, đồng thời khẳng định vị thế của chúng tôi trong lĩnh vực tăng tương tác mạng xã hội.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title>MMO | May. 2019 - Jul. 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
          Mua bán account Game, thiết kế website.
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;