interface MapIframeProps {
  latitude?: number | null
  longitude?: number | null
  zoom?: number
  width?: string
  height?: string
}

export const MapIframe = ({
  latitude,
  longitude,
  zoom = 15,
  width = '100%',
  height = '300px',
}: MapIframeProps) => {
  const hasCoordinates =
    latitude !== null && latitude !== undefined && longitude !== null && longitude !== undefined
  const safeLatitude = hasCoordinates ? latitude : 0
  const safeLongitude = hasCoordinates ? longitude : 0
  const src = `https://maps.google.com/maps?q=${safeLatitude},${safeLongitude}&z=${zoom}&output=embed`

  return (
    <div style={{ width, height, borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={src}
      />
      {hasCoordinates ? null : (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(255, 255, 255, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: 600,
            color: '#64748b',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          coordinates not available
        </div>
      )}
    </div>
  )
}
