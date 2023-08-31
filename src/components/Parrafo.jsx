export function Parrafo({ titulo, texto }) {    
    return (
        <div className="parrafo">
            <h2 className="parrafo__title">{titulo}</h2>
            {texto}
        </div>
    )
}