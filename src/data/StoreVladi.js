import { reactive } from 'vue'

const informazioni = {

    latestCourses: [
        {
            name: "Make Better Decisions",
            teacher: "James Collins",
            price: "$21.00",
            img: "img/Decisions-icon.png",
        },
        {
            name: "How to be a speaker",
            teacher: "Luigi Vuittone",
            price: "Free",
            img: "img/Speaker-icon.png",
        },
        {
            name: "Network Introductions",
            teacher: "Laurenzio Maestri",
            price: "Free",
            img: "img/Network-icon.png",
        },
        {
            name: "Brand Management",
            teacher: "Ajeje Brazorf",
            price: "Free",
            img: "img/Brand-icon.png",
        },
    ],

    latestBlogs: [
        {
            title: "Winning your business",
            content: "Never settle for less! You can have everything you want and need. Use the most powerful ",
            date: "February 17, 2019 ",
            img: 'img/theme_slider1_bg-1.jpg',
        },
        {
            title: "Selling Strategies",
            content: "Never settle for less! You can have everything you want and need. Use the most powerful ",
            date: "February 16, 2019 ",
            img: 'img/theme_slider2_bg-1.jpg',
        },
        {
            title: "Winning your business",
            content: "Never settle for less! You can have everything you want and need. Use the most powerful ",
            date: "February 15, 2019 ",
            img: 'img/theme_slider3_bg-1.jpg',
        },
    ],

    carouselData: [
        {
            name: "Davide di Giacomo",
            task: "Web Developer",
            img: "img/naruto-1.jpg",
        },
        {
            name: "Edoardo Menicucci",
            task: "Web Developer",
            img: "img/naruto-2.jpg",
        },
        {
            name: "Vladislav Ciuperca",
            task: "Web Developer",
            img: "img/naruto-3.jpg",
        },
        {
            name: "Gaara Qualcosa",
            task: "Hokage della Sabbia",
            img: "img/naruto-5.jpg",
        },
        {
            name: "Sakura Qualcosa",
            task: "Ninja Curatore",
            img: "img/naruto-4.jpg",
        },
    ],

    testimonials: [
        {
            name: "Signore Contento",
            class: '125',
            faculty: 'Web Developement',
            user_img: "img/naruto-1.jpg",
            faculty_img: "img/Medicine.png",
            testimonial: " I cant thank EduPrime enough for what it has done for me.I am now a successful doctor at one of the best clinics in the world."
        },
        {
            name: "Cliente Soddisfatto",
            class: '125',
            faculty: 'Computer Science',
            user_img: "img/naruto-2.jpg",
            faculty_img: "img/Computer-Science.png",
            testimonial: " I cant thank EduPrime enough for what it has done for me.I am now a successful doctor at one of the best clinics in the world."
        },
        {
            name: "Essere Umano",
            class: '125',
            faculty: 'Scuola della vita',
            user_img: "img/naruto-3.jpg",
            faculty_img: "img/Medicine.png",
            testimonial: " I cant thank EduPrime enough for what it has done for me.I am now a successful doctor at one of the best clinics in the world."
        },
        {
            name: "Contento Man",
            class: '125',
            faculty: 'cultura dei sobborghi',
            user_img: "img/naruto-4.jpg",
            faculty_img: "img/Computer-Science.png",
            testimonial: " Eduprime is so beutiful. Eduprime is so good. Eduprame have perfect hairline and a sharp jawline. Eduprime smell so good"
        },

    ],

}



const iMieiDati = reactive(informazioni);





export default iMieiDati 