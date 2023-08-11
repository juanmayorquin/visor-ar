export function Section({texto, video, backgroundColor, isBold}){
    const sectionStyle = {
        backgroundColor: backgroundColor
    }

    const textStyle = {
        fontWeight: isBold ? "bold" : "normal",
    }
    
    if(video != null){
        return(
            <section className="section container" style={sectionStyle}>
                <p className="section__text" style={textStyle}>{texto}</p>
                <div className="section__video-container">
                    <iframe className="section__video" src={video} title="YouTube video player" ></iframe>
                </div>
            </section>    
        );
    }
    else{
        return(
            <section className="section container" style={sectionStyle}>
                <p className="section__text no-m-bot" style={textStyle}>{texto}</p>
            </section>    
        );
    }
}