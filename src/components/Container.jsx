export function Container({content, backgroundColor, textColor}) {
    const styles = {
        backgroundColor: backgroundColor,
        color: textColor
    }
    
    return (
        <div style={styles} className="container">
            {content}
        </div>
        );
}