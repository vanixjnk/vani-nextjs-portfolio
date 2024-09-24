import CurrentTimeLineExp, { calculateDuration } from '../content/CurrentTimeLineExp';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import { skills } from '../utils/mySkills';

const AboutSection = () => {
  return (
    <SectionContainer>

      <div className='w-full flex flex-col gap-6'>

        <TitleSectionPageContainer title='About me' />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <p className='text-base text-gray-400'>
          Sinh năm 2006 tại Khánh Hòa - xứ sở yến sào. Tên thật là Nguyễn Đình Bảo, hiện đang học tại Trường Đại học Sư phạm Thành phố Hồ Chí Minh - HCMUE.
          </p>

          <p className='text-base text-gray-400'>
          Với niềm đam mê tạo ra những giải pháp tinh tế, tôi không ngừng khám phá thế giới phát triển phần mềm đang thay đổi từng ngày. Hành trình của tôi xoay quanh việc chuyển đổi ý tưởng thành mã nguồn, mang lại trải nghiệm người dùng mượt mà và liên tục vượt qua các giới hạn của những gì có thể thực hiện.
          </p>

        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <div className='flex flex-col items-start gap-3 mt-3'>

            {
              skills.map(({ title, techs }) => (
                <div key={title}>

                  <h3 className='font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start'>{title}</h3>

                  <AnimationContainer customClassName='flex items-center flex-wrap gap-3 mb-5'>
                    <ShowSkills skills={techs} />
                  </AnimationContainer>

                </div>
              ))
            }

          </div>

        </AnimationContainer>
        
      </div>

    </SectionContainer>
  )
}

export default AboutSection;
