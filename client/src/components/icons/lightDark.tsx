import { IconProps, iconSizeVariants } from "."


export const LightDark = (props: IconProps) => {
    // const isActive = props.status === "active";
    const fill = props.theme === "dark" ? "#72757e4e" : "#7f5af04f";


    return <svg className={iconSizeVariants[props.size]} viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <rect width="68" height="68" rx="21" fill={fill} />
        <path d="M34 8.5V14.875M52.0313 15.9687L47.5235 20.4765M59.5 34H53.125M52.0313 52.0313L47.5235 47.5235M34 53.125V59.5M20.4765 47.5235L15.9687 52.0313M14.875 34H8.5M20.4765 20.4765L15.9687 15.9687M44.625 34C44.625 36.8179 43.5056 39.5204 41.513 41.513C39.5204 43.5056 36.8179 44.625 34 44.625C31.1821 44.625 28.4796 43.5056 26.487 41.513C24.4944 39.5204 23.375 36.8179 23.375 34C23.375 31.1821 24.4944 28.4796 26.487 26.487C28.4796 24.4944 31.1821 23.375 34 23.375C36.8179 23.375 39.5204 24.4944 41.513 26.487C43.5056 28.4796 44.625 31.1821 44.625 34Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

}