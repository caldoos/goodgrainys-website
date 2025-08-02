import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Calder',
    lastName:  'Teo',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Creative Photographer',
    avatar:    '/images/avatar.jpg',
    location:  'Singapore',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  // optional: Leave the array empty if you don't want to display languages
}

const connect = {
    display: false,
    title: <>Connect with {person.firstName}</>,
    description: <>Hit me up for any photography projects!</>,
    formFields: {
        name: {
            required: true,
        },
        email: {
            required: true,
        },
        message: {
            required: true,
        }
    }
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/goodgrainys/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:calderteo20@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <></>,
    subline: <>Creating memories through photography</>,
    gallery: {
        label: 'Gallery',
        title: 'My photo gallery',
        description: `A photo collection by ${person.name}`,
    }
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Calder Teo is a photographer based in Singapore. Started off as a digital photographer, he ventured into film photography and found a new interest in it. The film aesthetic – ambient tones and grainy textures, produces a unique and nostalgic feeling that inspired him to shoot film.
        He enjoys mixing different formats and exploring new styles on both analogue as well as digital. His work focusses on telling stories and seeks to capture beautiful memories.</>
    },
    work: {
        display: false, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'FLY',
                timeframe: '2022 - Present',
                role: 'Creative Photographer',
                achievements: [
                    <>Captured stunning moments and created memorable visual stories through photography.</>,
                    <>Developed unique film photography techniques that enhanced the artistic quality of projects.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Photography Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Creativ3',
                timeframe: '2018 - 2022',
                role: 'Photography Assistant',
                achievements: [
                    <>Assisted in various photography projects and developed skills in different photography styles.</>,
                    <>Contributed to creative projects and learned advanced photography techniques.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Singapore Management University ',
                description: <>Bachelor of Science, Information Systems.</>,
            },
        ]
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Archive',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    title: 'Gallery',
    label: 'Gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/000075560031.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/000071420031.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/photo_6192933565264675831_y.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/photo_6161227485325411244_y.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/photo_6161227485325411246_y.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/001060910014.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/000075540035.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img_7107.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/photo_6161227485325411241_y.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/photo_6161227485325411248_y.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/photo_6161227485325411251_y.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/photo_6161227485325411254_y.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/000074650012-2.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/photo_6192933565264675798_y.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/photo_6161227485325411249_y.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/DSCF5330.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        
    ]
}

export { person, social, connect, home, about, blog, work, gallery };