import React from "react";
import { GoogleMap, Marker, useLoadScript, } from "@react-google-maps/api"
import mapstyles from "../mapstyles";

function StoreLocator({ stores }) {

    console.log(stores)



    const [id, name, address, borough, zipcode, geometry] = stores

    const libraries = ["places"];

    //New Div for map//
    const mapContainerStyle = {
        width: "100vw",
        height: "100vh",
    }

    //Center the Map Data//
    const center = {
        lat: 40.712776,
        lng: -74.005974,

    }

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })

    //CSS for MAP//
    const options = {
        styles: mapstyles,
        disableDefaultUI: true,
        zoomControl: true,
    }

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading Maps...</div>;

    return (<>
        <div key={id}>
            <h1>Store Locator</h1>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center} options={options}>
                {stores.map(store => (
                    <Marker
                        key={store.id}
                        position={{
                            lat: store.geometry.coordinates[1],
                            lng: store.geometry.coordinates[0],
                        }}
                    />
                ))}
            </GoogleMap>
        </div>
    </>)
}

export default StoreLocator