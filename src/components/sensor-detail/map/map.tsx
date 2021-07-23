import Feature from 'ol/Feature'
import Map from 'ol/Map'
import View from 'ol/View'
import Zoom from 'ol/control/Zoom'
import Point from 'ol/geom/Point'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import { fromLonLat } from 'ol/proj'
import VectorSource from 'ol/source/Vector'
import XYZ from 'ol/source/XYZ'
import Icon from 'ol/style/Icon'
import Style from 'ol/style/Style'
import React, { useState, useRef, useEffect } from 'react'
import 'ol/ol.css'
import css from './map.module.scss'

type Props = {
  coordinates: number[],
}

const SensorMap = ({ coordinates }: Props) => {
  const [map, setMap] = useState(new Map({}))
  const [isInitialized, setIntitalized] = useState(false)

  const mapElement = useRef(null)

  // initialize empty map
  useEffect(() => {
    const initialMap = new Map({
      target: mapElement.current || undefined,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}'
          })
        })
      ],
      view: new View({
        center: fromLonLat(coordinates),
        resolution: 5
      }),
      controls: [new Zoom()]
    })

    const markers = new VectorLayer({
      source: new VectorSource(),
      style: new Style({
        image: new Icon({
          anchor: [0.5, 46],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: 'map-marker-icon.png'
        })
      })
    })
    initialMap.addLayer(markers)

    setMap(initialMap)
    setIntitalized(true)
  }, [])

  // on coordinates change
  useEffect(() => {
    if (coordinates && isInitialized) {
      const layers = map.getLayers()
      // TODO: fix this
      // @ts-ignore
      const markerLayerSourceVector = layers.item(1).getSource()
      markerLayerSourceVector.clear()
      const newMarker = new Feature(new Point(fromLonLat(coordinates)))
      markerLayerSourceVector.addFeature(newMarker)
    }
  }, [coordinates, map])

  return (
    <div className={css.map} ref={mapElement}/>
  )
}

export default SensorMap
