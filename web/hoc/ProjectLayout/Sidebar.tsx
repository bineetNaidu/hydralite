import React from "react";
import styles from "./ProjectLayout.module.scss";
import { lower_pages, Page, upper_pages } from "./pages";
import { ProjectButton } from "./Button";

export interface SidebarProps {
    project: string;
    selected: Page;
}

export const Sidebar: React.FunctionComponent<SidebarProps> = ({ project, selected }) => {
    const name = "Project Hydralite";
    const logo = "/logo.png";
    const members = 120;

    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" className={styles.icon} />
                <div className={styles.logoText}>
                    <div className={styles.logoTextName}>{name}</div>
                    <div className={styles.logoTextCount}>{members} members</div>
                </div>
            </div>
            <div className={styles.buttons}>
                <div className={styles.buttonSection}>
                    {
                        upper_pages.map((v, i) => <ProjectButton key={v.name + i} href={v.name} selected={selected == v.name} image={<v.logo />} title={v.title} />)
                    }
                </div>
                <div className={styles.buttonSection}>
                    {
                        lower_pages.map((v, i) => <ProjectButton key={v.name + i} href={v.name} selected={selected == v.name} image={<v.logo />} title={v.title} />)
                    }
                </div>
            </div>
        </div>
    );
};