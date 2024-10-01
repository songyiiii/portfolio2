import arts1 from '../image/arts1.png';
import node from '../image/node.jpg';
import next from '../image/next.png';
import typescript from '../image/typescript.jpg';
import react from '../image/react.jpg';
import aws from '../image/aws.png';
import swiper from '../image/swiper.png';
import mysql from '../image/mysql.png';
import gsapimg from '../image/gsap.png';
import matterimg from '../image/matter.png';
const skillImg = [
    node,
    next,
    typescript,
    react,
    aws,
    swiper,
    mysql,
    gsapimg,
    matterimg,
];
const project = [
    {
        id: '01',
        name: 'Auction Chance',
        img: arts1,
        personnel: '4인 프로젝트',
        period: '3 weeks',
        info:   ['PLATFORM Used Auction','중고상품 경매 플랫폼'],
        tag: ['react', 'next.js', 'typescript', 'swiper', 'antd'],
        link: 'http://3.38.151.32:3000/',
    },
    {
        id: '02',
        name: 'Arts',
        img: arts1,
        personnel: '1인 프로젝트',
        period: '2 weeks',
        info: ['PLATFORM Buy Art Online','미술상품 온라인 거래 플랫폼'],
        tag: ['react', 'next.js', 'typescript', 'swiper', 'antd'],
    },
];

export { project, skillImg };
