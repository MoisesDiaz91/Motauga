
import Strain from "../Components/Strain"


function StrainPage({ strains}) {

console.log(strains)

    const strainCardComponents = strains.map(strain => {
       
        return <Strain key={strain.id} strain={strain} />
    })

    return (
        <div className='strain-page'>
            <div className="shopTitle">
                <h1>The Collection</h1>
            </div>

            <div className="products">
                {strainCardComponents}
            </div>

        </div>
    )
}

export default StrainPage