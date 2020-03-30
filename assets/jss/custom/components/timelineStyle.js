import { container, primaryColor } from "assets/jss/nextjs-material-kit.js";

const timelineStyle = {
    container: {
        ...container,
        display: 'flex',
        flexDirection: "row",
        position: 'relative',
        margin: "40px 0",

        "&::after": {
            backgroundColor: '#0066cc',
            content: '""',
            position: "absolute",
            top: "calc(50% - 2px)",
            width: '100%',
            height: '5px'
        }
    }
}

export default timelineStyle;