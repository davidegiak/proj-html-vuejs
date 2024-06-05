import { reactive } from 'vue';

let generalData = reactive({
    getLinks: [
        {link:"Request a Website", url:"#"},
        {link:"Browse Themes", url:"#"},
        {link:"Payment options", url:"#"},
        {link:"Support System", url:"#"},
        {link:"Checkout", url:"#"},
        {link:"Purchase Theme", url:"#"},

    ],
    netLinks: [
        {link:"Purchase Theme", url:"#"},
        {link:"Our Benefits", url:"#"},
        {link:"Our Team", url:"#"},
        {link:"Other Products", url:"#"},
        {link:"My account", url:"#"}
    ],
    info: [
        {title:"Demo Classes", paragraf:"In the first week, students try to accommodate with the teaching style and choose their optional courses."},
        {title:"Demo Classes", paragraf:"In the first week, students try to accommodate with the teaching style and choose their optional courses."},
    ],
    cards: [
        {title:"Coaching Session", paragraf:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor[...]", date:"20 May 21:30 PM"},
        {title:"Coaching Session", paragraf:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor[...]", date:"20 May 21:30 PM"},
        {title:"Coaching Session", paragraf:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor[...]", date:"20 May 21:30 PM"},
    ],
    partners:[
        {url:'/img/partner-1.png'},
        {url:'/img/partner-2.png'},
        {url:'/img/partner-3.png'},
        {url:'/img/partner-4.png'},
        {url:'/img/partner-5.png'},
        {url:'/img/partner-6.png'},
        {url:'/img/partner-7.png'},
        {url:'/img/partner-8.png'},
    ],
    headOne:"Get EduPrime",
    headTwo:"Networking",
    
});

export default (generalData)