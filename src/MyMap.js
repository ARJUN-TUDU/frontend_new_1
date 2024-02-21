import React, { useEffect,useState } from 'react'

import Map,{FullscreenControl,
  GeolocateControl,
  Marker,Source,Layer,NavigationControl } from 'react-map-gl';

const MyMap = () => {



  const [viewState,setViewState] = useState({
    longitude:-100,
    latitude:40,
    zoom:10
  })

  const [start,setStart] = useState([-73,42]);
  const [end,setEnd] = useState([-73,42.10131]);
  const [coords,setCoords] = useState([]);




  const getRoute = async() => {
    const response = await fetch (
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?access_token=pk.eyJ1IjoiYXJqdW50dWR1MTAwMSIsImEiOiJjbHNrcXFreXkwNjdoMmxzMXQzMm10anBrIn0.Pg9ooyS8l5mhV8b_4msODw`
    )

    
    const data = await response.json();
    console.log(data)
    const cords = data.routes[0].geometry;
    console.log(cords)

    setCoords(cords);
    
    

  }



  const geoJson = {

      "type":"FeatureCollection",
      "features":[
        {
            "type":"feature",
            "geometry":{
                            "type":"LineString",
                            "coordinates":[...coords]
            }
        }
      ]

  }

  const lineStyle ={
    id: 'route',
    type:'line',
    layout:{
        "line-join":"round",
        "line-cap":"round"
    },
    paint:{
        "line-color":"blue",
        "line-width":4,
        "line-opacity":0.75
    }
  }

  useEffect(()=>{
    getRoute();
  },[start,end])


  return (
    <Map
    
    {...viewState}
    onMove={evt => setViewState(evt.viewState)}
    mapStyle="mapbox://styles/arjuntudu1001/clskqvgjw01aw01ql3mw717g4"
    mapboxAccessToken='pk.eyJ1IjoiYXJqdW50dWR1MTAwMSIsImEiOiJjbHNrcXFreXkwNjdoMmxzMXQzMm10anBrIn0.Pg9ooyS8l5mhV8b_4msODw'
    style = {{width:"100vw",height:"100vh"}}
    >

        <Source id='routeSource' type='geojson' data={geoJson}>
            <Layer {...lineStyle} />
        </Source>
    <Marker   longitude= {-100} latitude = {40} anchor = "bottom">
        
        <img src = "./ping.png"/>

    </Marker>
    
     
    <GeolocateControl/>
    <FullscreenControl/>
    <NavigationControl/>




    
    </Map>
  )
}

export default MyMap