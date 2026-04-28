'use client'
import { useEffect, useState } from 'react'

const WMO_CODES = {
  0: 'Clear', 1: 'Mostly Clear', 2: 'Partly Cloudy', 3: 'Overcast',
  45: 'Foggy', 48: 'Icy Fog', 51: 'Light Drizzle', 53: 'Drizzle', 55: 'Heavy Drizzle',
  61: 'Light Rain', 63: 'Rain', 65: 'Heavy Rain', 71: 'Light Snow', 73: 'Snow',
  75: 'Heavy Snow', 80: 'Showers', 81: 'Heavy Showers', 95: 'Thunderstorm', 96: 'Hail Storm',
}

function aqiLabel(aqi) {
  if (!aqi) return { label: 'N/A', cls: '' }
  if (aqi <= 20) return { label: 'Good', cls: 'aqi-good' }
  if (aqi <= 40) return { label: 'Fair', cls: 'aqi-good' }
  if (aqi <= 60) return { label: 'Moderate', cls: 'aqi-moderate' }
  if (aqi <= 80) return { label: 'Poor', cls: 'aqi-unhealthy' }
  return { label: 'Very Poor', cls: 'aqi-bad' }
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null)
  const [air, setAir] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const [wRes, aRes] = await Promise.all([
          fetch('https://api.open-meteo.com/v1/forecast?latitude=40.4093&longitude=49.8671&current=temperature_2m,wind_speed_10m,relative_humidity_2m,apparent_temperature,weather_code,wind_direction_10m&wind_speed_unit=kmh&timezone=Asia/Baku'),
          fetch('https://air-quality-api.open-meteo.com/v1/air-quality?latitude=40.4093&longitude=49.8671&current=pm10,pm2_5,dust,ozone,nitrogen_dioxide,european_aqi&timezone=Asia/Baku'),
        ])
        const wData = await wRes.json()
        const aData = await aRes.json()
        setWeather(wData.current)
        setAir(aData.current)
      } catch (_) {}
    }
    fetchData()
    const interval = setInterval(fetchData, 30 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const condition = weather ? (WMO_CODES[weather.weather_code] || 'Clear') : '-'
  const temp = weather ? Math.round(weather.temperature_2m) : '-'
  const aqi = aqiLabel(air?.european_aqi)

  return (
    <div className="weather-widget">
      <div className="weather-basic">
        <span style={{ color: 'var(--green-dark)' }}>Baku</span>
        <span>{temp !== '-' ? `${temp}°C` : '-'}</span>
        <span>{condition}</span>
        {weather && <span>{Math.round(weather.wind_speed_10m)} km/h</span>}
        <span className={aqi.cls} style={{ fontSize: '0.75rem', borderLeft: '1px solid var(--border)', paddingLeft: 8 }}>
          AQI: {aqi.label}
        </span>
      </div>
      <div className="weather-card">
        <div style={{ fontWeight: 500, color: 'var(--text)', marginBottom: 4 }}>Baku, Azerbaijan</div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Live Environmental Data</div>
        <div className="weather-card-grid">
          <div className="weather-card-item"><label>Temperature</label><span>{temp}°C</span></div>
          <div className="weather-card-item"><label>Feels Like</label><span>{weather ? `${Math.round(weather.apparent_temperature)}°C` : '-'}</span></div>
          <div className="weather-card-item"><label>Humidity</label><span>{weather ? `${weather.relative_humidity_2m}%` : '-'}</span></div>
          <div className="weather-card-item"><label>Wind</label><span>{weather ? `${Math.round(weather.wind_speed_10m)} km/h` : '-'}</span></div>
          <div className="weather-card-item"><label>PM2.5</label><span>{air ? `${air.pm2_5?.toFixed(1)} µg/m³` : '-'}</span></div>
          <div className="weather-card-item"><label>PM10</label><span>{air ? `${air.pm10?.toFixed(1)} µg/m³` : '-'}</span></div>
          <div className="weather-card-item"><label>Dust</label><span>{air ? `${air.dust?.toFixed(1)} µg/m³` : '-'}</span></div>
          <div className="weather-card-item"><label>Ozone</label><span>{air ? `${air.ozone?.toFixed(0)} µg/m³` : '-'}</span></div>
          <div className="weather-card-item"><label>NO₂</label><span>{air ? `${air.nitrogen_dioxide?.toFixed(1)} µg/m³` : '-'}</span></div>
          <div className="weather-card-item"><label>Air Quality</label><span className={aqi.cls}>{aqi.label}</span></div>
        </div>
        <div style={{ marginTop: 12, fontSize: '0.7rem', color: 'var(--text-muted)' }}>
          Source: Open-Meteo · Updates every 30 min
        </div>
      </div>
    </div>
  )
}
