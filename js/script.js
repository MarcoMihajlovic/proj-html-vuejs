var app = new Vue ({
    el: "#root",

    data: {
        logo_path: "img/MasterStudy-1.svg",
        
        menu: ['Courses', 'Course Formats', 'Add Course', 'Pages', 'Demos'],
        
        icons: ['fab fa-linkedin','fab fa-instagram', 'fab fa-twitter', 'fab fa-facebook'],
        
        about: {
            name: 'ABOUT',
            description: 'MasterStudy is Education WordPress theme featured by Learning Management System (LMS) for online education.',
            developed: 'Developed by StylemixThemes',
            icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-instagram']
        },

        contact: {
            name: 'CONTACT',
            address: 'USA, California, First Avenue, California',
            tel: 'Tel.: +1 212 458 300 32',
            fax: 'Fax: +1 212 375 24 14',
            mail: 'info@masterstudy.com'
        },

        pages: {
            name: 'PAGES',
            page: ['Blog', 'Home', 'Shortcodes', 'courses', 'Membership', 'Typography']
        },

        blog: {
            name: 'BLOG',
            articles: [
                {
                    img: 'img/photo-1517520287167-4bbf64a00d66-75x75.jpeg',
                    title: 'Our main target is to "Developing Yourself as a Leader"',
                    date: '-August 9, 2018'
                },
                
                {
                    img: 'img/photo-1490376840453-5f616fbebe5b-75x75.jpeg',
                    title: 'Those Other College Expenses You Aren\'t Thinking About',
                    date: '-June 3, 2015' 
                }
            ]
        }


    }
    
})