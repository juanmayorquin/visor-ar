export function ModelSection({nombre, src, img, alt}){
    return(
        <section className="modelSection">
            <h3 className="modelSection__title">{nombre}</h3>
            <model-viewer 
                className="modelSection__model"
                src={src}
                poster={img}
                alt={alt}
                orbit="45deg 55deg 1m"
                touch-action="pan-y"
                disable-tap
                disable-zoom
                disable-pan
                camera-controls
                auto-rotate ar>
            </model-viewer>            
        </section>
    );
}