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
        name: 'Arts',
        className: 'section1',
        img: arts1,
        personnel: '1인 프로젝트',
        period: '2 weeks',
        info: ['온라인 미술 거래 플랫폼', '미술품 판매 및 전시회 홍보 목적'],
        tag: ['react', 'next.js', 'typescript', 'swiper', 'antd'],
        link: 'http://3.38.151.32:3000/',
    },
    {
        id: '02',
        name: 'Arts',
        className: 'section2',

        img: arts1,
        personnel: '1인 프로젝트',
        period: '2 weeks',
        info: ['온라인 미술 거래 플랫폼', '미술품 판매 및 전시회 홍보 목적'],
        tag: ['react', 'next.js', 'typescript', 'swiper', 'antd'],
    },
    {
        id: '03',
        name: 'Arts',
        className: 'section1',

        img: arts1,
        personnel: '1인 프로젝트',
        period: '2 weeks',
        info: ['온라인 미술 거래 플랫폼', '미술품 판매 및 전시회 홍보 목적'],
        tag: ['react', 'next.js', 'typescript', 'swiper', 'antd'],
    },
];

export { project, skillImg };
