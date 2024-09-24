import SearchAllProjects from '../content/SearchAllProjects';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';

const myGithub = 'https://github.com/vanixjnk';

const ProjectsSection = () => {
  return (
    <SectionContainer>

      <div className='w-full flex flex-col gap-6'>

        <TitleSectionPageContainer title='Projects' />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <p className='w-full text-base text-gray-400'>
          Đây là hầu hết các dự án tôi đã thực hiện kể từ khi bắt đầu lập trình, một số là dự án cá nhân, làm việc tự do, làm việc, thực hành hoặc cho tình huống khác. Nếu bạn muốn xem hoàn toàn tất cả các dự án của tôi, hãy truy cập <a href={myGithub} target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all easy'>github.com/vanixjnk</a>.
          </p>

        </AnimationContainer>

        <SearchAllProjects />

      </div>

    </SectionContainer>
  )
}

export default ProjectsSection;