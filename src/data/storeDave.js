import { reactive } from 'vue';



let footerLinks = reactive({
    getLinks:
    [
        {link:"Request a Website", url:"#"},
        {link:"Browse Themes", url:"#"},
        {link:"Payment options", url:"#"},
        {link:"Support System", url:"#"},
        {link:"Checkout", url:"#"},
        {link:"Purchase Theme", url:"#"},

    ],
    netLinks:
    [
        {link:"Purchase Theme", url:"#"},
        {link:"Our Benefits", url:"#"},
        {link:"Our Team", url:"#"},
        {link:"Other Products", url:"#"},
        {link:"My account", url:"#"}
    ],
    headOne:"Get EduPrime",
    headTwo:"Networking"
    
})

export default (footerLinks)