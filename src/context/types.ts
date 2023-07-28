import React from "react";
import {MenuItem} from "primereact/menuitem"

export interface NavItemGroup {
    label: React.ReactNode,
    items: MenuItem[]
}

export type ScreenSize = 'sm' | 'md' | 'lg' | 'xl';

export interface AdminDashboardContext {
    onSidebarToggle: () => void,
    isSmallScreen: boolean,
    navItems: {
        root: Omit<MenuItem, "label" > & {label: React.ReactNode},
        grouped: NavItemGroup[],
        unGrouped: Omit<NavItemGroup, "items">[]
    }
}

export interface RawMenuItem{
    name: string,
    path: string,
    icon?: React.ReactNode
}

export interface UserNavLink {
    readonly id: number,
    name:  string,
    path: string,
}
export interface PostNavLink {
    readonly id: number,
    name:  string,
    path: string,
}

export interface User {
    id: number;
    name: string;
    email: string;
    accountType: string;
    interests: string[];
    questionsCount: number;
    answersCount: number,
    dateRegistered: string
}

export interface Question {
    id: number,
    title: string,
    postedBy: string,
    answersCount: number,
    datePosted: string
}