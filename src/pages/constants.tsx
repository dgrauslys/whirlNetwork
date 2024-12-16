interface Section {
    img: string;
    title: string;
    buttonTitle: string;
    copy: string;
}

interface HomePageSections {
    firstSection: Section;
    secondSection: Section;
    thirdSection: Section;
}

export const homePageSections: HomePageSections = {
    firstSection: {
        img: 'dog.jpg',
        title: 'Your First Step to Clarity',
        buttonTitle: 'Get Decluttered',
        copy: 'We\’ll declutter, organize, and create a calm, functional space tailored to your needs. With expert product recommendations, take your first step toward a lighter, more peaceful home.'
    },
    secondSection: {
        img: 'jars.jpg',
        copy: 'Transform your space with personalized decluttering and organizing. I\’ll handle product research and even take a donation load for you, leaving your home lighter, functional, and stress-free.',
        title: 'Elevate Your Space, Elevate Your Life',
        buttonTitle: 'Get Organized',
    },
    thirdSection: {
        img: 'nightstand.jpg',
        title: 'The Ultimate Reset',
        copy: 'Experience a complete transformation of your home. I\’ll declutter, organize, and add personalized touches like labels and daily donation drop-offs. The result? A harmonious, stress-free space that brings you peace and freedom every day.',
        buttonTitle: 'Find Your Peace',
    },
};

interface Service {
    title: string;
    properties: string[];
    propertiesElaborated: string[];
    price: string;
    buttonTitle: string;
    imageUrl: string;
    serviceUrl: string;
}

export const services: Service[] = [
    {
        title: 'Essentials',
        properties: [
            '5 hours of hands-on organizing help',
            'Decluttering to free up your space',
            'Sorting your items into easy-to-find categories',
            'Tidying and organizing your belongings',
            'Personalized recommendations for products to enhance your space'
        ],
        propertiesElaborated: [
            'Zugy will provide 5 hours of dedicated, direct, hands-on organizing assistance in your space. During this intensive session, she will work alongside you to tackle large projects or make significant progress in decluttering, employing her expertise to sort, organize, and rearrange items effectively.',
            'With Zugy\'s expert guidance, you\'ll undergo a decluttering process to evaluate and streamline the items in your home or office. She helps in making decisive choices about what to keep, discard, or donate, aiming to reduce clutter and enhance the functionality and aesthetic of your space.',
            'Zugy will organize your belongings into logical, easy-to-find categories, improving the efficiency of your space. She provides strategies for grouping similar items and recommends the best storage solutions, ensuring everything is systematically placed and easy to locate.',
            'Zugy will help tidy and maintain the order of your belongings, using techniques that keep your space neat and accessible. She assists in developing a systematic approach to handle daily organization tasks, from folding clothing to arranging books and managing paperwork.',
            'Based on her assessment of your space and needs, Zugy will suggest specific organizational products that can help maintain and enhance the orderliness of your environment. Her personalized recommendations are designed to match your personal style and the functional requirements of your space, ensuring any additions are both practical and aesthetically pleasing.'
        ],
        price: '$350',
        buttonTitle: 'Get Decluttered',
        imageUrl: 'dog.jpg',
        serviceUrl: '/package?package=0',
    },
    {
        title: 'Serenity',
        properties: [
            '10 hours of dedicated organizing support',
            'Thorough decluttering to make your space feel fresh',
            'Sorting items into neat and functional categories',
            'Professional organization to transform your home',
            'Research on the best products tailored to your needs',
            'Taking 1 load of donations to make giving back easy'
        ],
        propertiesElaborated: [
            'Zugy offers a comprehensive 10-hour block of professional organizing support. During this extended time, she will work closely with you to tackle multiple areas of your home or office, focusing on achieving substantial organizational improvements. This support is ideal for more extensive projects or entire home organization, providing ample time to achieve significant transformations.',
            'Zugy conducts a thorough decluttering process to clear out unnecessary items and refresh your space. She focuses on removing items that no longer serve a functional or emotional purpose, thereby creating a more airy and less cluttered environment. This decluttering not only improves the aesthetics of your space but also promotes a healthier, more serene living or working environment.',
            'With Zugy\’s guidance, items in your space will be sorted into well-defined and functional categories, making them more accessible and easier to manage. She applies proven organizing principles to group related items together, improving workflow and efficiency, whether it\'s kitchen supplies, office documents, or personal belongings. This organized system prevents items from becoming misplaced and reduces the time spent searching for them.',
            'Zugy uses her professional skills to transform your living or working spaces fundamentally. Her approach not only includes organizing physical items but also redesigning your space for optimal utility and comfort. Whether it’s rearranging furniture, optimizing storage solutions, or suggesting aesthetic enhancements, her goal is to create a space that reflects your tastes and meets your functional needs.',
            'Understanding that each space is unique, Zugy dedicates time to researching and recommending the best organizational products specifically tailored to your needs. Whether you need specialized storage containers, innovative office gadgets, or ergonomic solutions, she ensures that each recommendation enhances the functionality and style of your space.',
            'To simplify the process of giving back, Zugy will take care of transporting one load of your donated items to a local charity or donation center. This service includes helping you select which items can be donated, organizing them, and handling the physical task of delivering them. This not only helps declutter your space but also supports community assistance, making the process of giving back seamless and hassle-free.'
        ],
        price: '$700',
        buttonTitle: 'Get Organized',
        imageUrl: 'jars.jpg',
        serviceUrl: '/package?package=1',
    },
    {
        title: 'Total Revival',
        properties: [
            '20 hours of comprehensive organizing services',
            'Full-scale decluttering for a complete refresh',
            'Creating customized categories to keep everything in place',
            'Expert organization to maximize your space',
            'Personalized product research to elevate your home',
            'Adding stickers and labels for a polished finish',
            'Taking 1 load of donations every day during the process for a seamless experience'
        ],
        propertiesElaborated: [
            'This extensive service provides 20 hours of detailed organizing assistance, designed for clients looking to undertake a significant reorganization of their space, whether it\'s a large home, office, or multiple areas. During these hours, Zugy works meticulously to organize, optimize, and transform your environments, ensuring each minute is used effectively to create lasting organizational changes.',
            'Zugy offers a full-scale decluttering service that revitalizes your space by removing unnecessary and unwanted items. This involves a deep purge of possessions that no longer serve a functional or aesthetic purpose, allowing for a comprehensive refresh of your living or working areas. The process not only clears physical space but also helps in reducing visual clutter and creating a more tranquil environment.',
            'Zugy\'s approach includes developing customized organizational categories tailored to your specific needs and lifestyle. This process ensures that all items are logically grouped and stored in a manner that makes them easy to access and maintain. It\'s particularly helpful in maintaining order and can be adapted to any area, including kitchens, garages, offices, or children’s rooms.',
            'Leveraging her expertise in space optimization, Zugy reimagines and reorganizes your areas to maximize usability and aesthetic appeal. This includes strategically placing furniture and belongings to enhance the flow of the room and implementing storage solutions that increase the functional use of every square inch of the space.',
            'Zugy conducts personalized research to find the best organizing products that complement and elevate your home’s decor while increasing its functionality. This might include specialized storage systems, unique containers, or innovative technology that helps keep your space organized and up-to-date.',
            'To give your space a polished and professionally organized look, Zugy implements a labeling system using stylish stickers and labels. This not only helps in maintaining the organization but also adds a visual appeal to the storage areas, making it easy for you and others to find and return items to their designated spots.',
            'As part of the decluttering process, Zugy manages the removal of donation items daily. This service ensures that items designated for donation are promptly removed from your space, helping to keep the organizing process fluid and uninterrupted. It also simplifies the act of giving back, as Zugy handles the logistics of transporting items to donation centers or charities.',
        ],
        price: '$1400',
        buttonTitle: 'Find Your Peace',
        imageUrl: 'nightstand.jpg',
        serviceUrl: '/package?package=2',
    },
];