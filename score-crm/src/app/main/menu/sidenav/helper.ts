import { animate, style, transition, trigger } from "@angular/animations";

export interface INavBarData {
    routeLink: string;
    icon?: string;
    label: string;
    expanded?: boolean;
    items?: INavBarData[];
}

export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('760ms',
            style({ opacity: 1 })
        )
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate('170ms',
            style({ opacity: 0 })
        )
    ])
])
