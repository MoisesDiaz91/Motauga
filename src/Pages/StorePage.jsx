import Store from "../Components/Store"


function StorePage({stores}){

    const storeCardComponents = stores.map(store =>{
        return <Store key={store.id} store={store}/>
    })

    return(
        <div className='store-page'>
            <div className="shopTitle">
                <h1>The Motauga Familia</h1>
                <h4>Juice Providers</h4>
            </div>

             <div className="products">
                   {storeCardComponents}
             </div>
            
        </div>
    )
}

export default StorePage