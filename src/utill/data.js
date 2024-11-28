import arts1 from '../image/arts1.png';
import auction from '../image/auction.png';
import owl from '../image/owl.png';
import chanspace from '../image/chanspace.png';

const project = [
  {
    id: '01',
    name: "CHANS'PACE",
    img: chanspace,
    personnel: '3인 프로젝트',
    period: '4 weeks',
    info: '공간 대여 온라인 플랫폼',
    tag: ['react', 'next.js', 'typescript', 'styled-components'],
    link: 'http://54.180.82.243:3000/',
  },
  {
    id: '01',
    name: 'Arts',
    img: arts1,
    personnel: '1인 프로젝트',
    period: '2 weeks',
    info: '미술상품 온라인 거래 플랫폼',
    tag: ['react', 'next.js', 'typescript', 'styled-components'],
    link: 'http://3.38.151.32:3000/',
  },
  {
    id: '02',
    name: 'Auction Chance',
    img: auction,
    personnel: '4인 프로젝트',
    period: '3 weeks',
    info: '중고상품 경매 플랫폼',
    tag: ['node.js', 'ejs', 'css'],
    link: 'https://github.com/auction-chance/project',
  },
  {
    id: '03',
    name: 'OWL Airline',
    img: owl,
    personnel: '3인 프로젝트',
    period: '1 weeks',
    info: '항공사 웹페이지',
    tag: ['html', 'javascript', 'css'],
    link: 'http://hansongyi43.dothome.co.kr/CodinOnproject/html/',
  },
];

const profileData = [
  {
    about: ['한송이', '1995-04-08', 'ISTP', '서울시 서초구'],
    educationDate: ['2014.03 - 2016.03', '2023.04 - 2023.06', '2024.05-'],
    education: [
      '용인송담대학교 세무회계',
      'sbs아카데미 웹퍼블리셔',
      'posco x codingOn 웹개발',
    ],
    careerDate: ['2015.10-2023.03', '2023.02 - 2024.04'],
    career: ['(주)두노코리아 관리부', '포도수원인계점 운영'],
    skills: [
      'Node.js',
      'React',
      'next.js',
      'typescript',
      'matter.js',
      'swiper',
      'GSAP',
      'ant Design',
      'Mysql',
      'aws',
    ],
  },
];

export { project, profileData };
