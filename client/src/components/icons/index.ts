export const iconSizeVariants = {
    xs: "size-8",
    sm: "size-10",
    md: "size-12",
    lg: "size-16", // adjust this to your desired size
    xl: "size-18"
}

export type theme = "dark" | "light";

export interface IconProps {
    size: keyof typeof iconSizeVariants;
    theme: theme;
}