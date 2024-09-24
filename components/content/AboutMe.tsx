import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
        Tôi là một nhà phát triển Front-end với hơn +{calculateDuration('2020-01-01', false)} kinh nghiệm. Với niềm đam mê tạo ra những giải pháp tinh tế, tôi không ngừng khám phá thế giới phát triển phần mềm đang thay đổi từng ngày. Hành trình của tôi xoay quanh việc chuyển đổi ý tưởng thành mã nguồn, mang lại trải nghiệm người dùng mượt mà và liên tục vượt qua các giới hạn của những gì có thể thực hiện.
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;