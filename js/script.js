var app = new Vue ({
    el: "#root",

    data: {
        logo_path: "img/MasterStudy-1.svg",
        
        menu: ['Courses', 'Course Formats', 'Add Course', 'Pages', 'Demos'],
        
        icons: ['fab fa-linkedin','fab fa-instagram', 'fab fa-twitter', 'fab fa-facebook'],

        footerBoxes: [
            {
                name: 'ABOUT',
                description: 'MasterStudy is Education WordPress theme featured by Learning Management System (LMS) for online education.',
                developed: 'Developed by StylemixThemes',
                icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-instagram']
            },

            {
                name: 'CONTACT',
                address: 'USA, California, First Avenue, California',
                tel: 'Tel.: +1 212 458 300 32',
                fax: 'Fax: +1 212 375 24 14',
                mail: 'info@masterstudy.com'
            },

            {
                name: 'PAGES',
                page: ['Blog', 'Home', 'Shortcodes', 'courses', 'Membership', 'Typography']
            },

            {
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

        ],
        
        /* about: {
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
        }, */

        courseCards: [
            {
                img: 'img/photo-1496307042754-b4aa456c4a2d-370x200.jpeg',
                description: 'How to be a DJ? Make Electronic Music',
                type: 'Electronic',
                level: 'Advanced',
                lessions: '8 Lectures',
                time: '6 Hours'
            },

            {
                img: 'img/12345-1-370x200.png',
                description: 'Nvidia and UE4 Technologies Practice',
                type: 'Nvidia',
                level: 'Advanced',
                lessions: '8 Lectures',
                time: '6 Hours'
            },

            {
                img: 'img/photo-1491897554428-130a60dd4757-370x200.jpeg',
                description: 'Fashion photography from professional',
                type: 'Fashion',
                level: 'Advanced',
                lessions: '8 Lectures',
                time: '6 Hours'
            },

            {
                img: 'img/photo-1416339134316-0e91dc9ded92-370x200.jpeg',
                description: 'Design Instruments for Communication',
                type: 'Communication',
                level: 'Intermediate',
                lessions: '8 Lectures',
                time: '6 Hours'
            },

            {
                img: 'img/cathryn-lavery-67852-unsplash-370x200.jpg',
                description: 'Make your Concept Right and Beautiful',
                type: 'Art',
                level: 'Intermediate',
                lessions: '8 Lectures',
                time: '6 Hours'
            },

            {
                img: 'img/photo-1475452779376-caebfb988090-370x200.jpeg',
                description: 'Road Bike Manual or How to Be a Champion',
                type: 'Bicycling',
                level: 'Beginner',
                lessions: '8 Lectures',
                time: '6 Hours'   
            }
        ],

        whyBoxes: [
            {
                class: 'fas fa-suitcase',
                name: 'Entrepreneurship',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, esse soluta? Magnam aperiam cupiditate, consequatur sequi culpa architecto at qui error, facere porro dolor, commodi perferendis maxime incidunt quis minima?'
            },

            {
                class: 'fas fa-rocket',
                name: 'Accelerated learning',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, esse soluta? Magnam aperiam cupiditate, consequatur sequi culpa architecto at qui error, facere porro dolor, commodi perferendis maxime incidunt quis minima?'
            },

            {
                class: 'far fa-thumbs-up',
                name: 'Productivity',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, esse soluta? Magnam aperiam cupiditate, consequatur sequi culpa architecto at qui error, facere porro dolor, commodi perferendis maxime incidunt quis minima?'
            },

            {
                class: 'fas fa-cog',
                name: 'Life Coaching',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, esse soluta? Magnam aperiam cupiditate, consequatur sequi culpa architecto at qui error, facere porro dolor, commodi perferendis maxime incidunt quis minima?'
            }
        ]


    }
    
})