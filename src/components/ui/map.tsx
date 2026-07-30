'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface MapProps {
  center: [number, number]
  zoom?: number
  className?: string
}

export function Map({ center, zoom = 13, className }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (mapRef.current || !mapContainer.current) return

    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const map = L.map(mapContainer.current, {
      center: [center[1], center[0]],
      zoom,
      zoomControl: false,
      attributionControl: false,
    })

    L.tileLayer(
      dark
        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
      }
    ).addTo(map)

    L.control.zoom({ position: 'bottomright' }).addTo(map)
    L.control.attribution({ position: 'bottomleft', prefix: false }).addTo(map)

    const marker = L.marker([center[1], center[0]], {
      title: 'SEMYOPAL II',
    }).addTo(map)
    marker.bindPopup('<b>SEMYOPAL II</b><br/>SMAK Seminari St. Yohanes Paulus II')

    mapRef.current = map

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  return (
    <div
      ref={mapContainer}
      className={className}
      style={{ width: '100%', height: '100%' }}
    />
  )
}
