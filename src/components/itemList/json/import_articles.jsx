import raw from 'raw.macro';

function ReadJson(){
    const jsonContent = raw("./items.json");
    return (
        <div>
            {jsonContent}
        </div>
    )

}
export default ReadJson;