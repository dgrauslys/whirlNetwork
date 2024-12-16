import { baseUrl } from "../../constants";

interface NavItem {
    name: string;
    url: string;
}

export const navItems: NavItem[] = [
    {
        name: 'About',
        url: `${baseUrl}about`,
    },
    {
        name: 'Services',
        url: `${baseUrl}services`,
    },
    {
        name: 'Reviews',
        url: `${baseUrl}reviews`,
    }
];