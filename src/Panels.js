import React from "react"

const panelStyle = {
  marginBottom: "12px"
}

const titleStyle = {
  color: "#0f0",
  fontSize: "11px",
  fontWeight: "bold",
  marginBottom: "8px",
  textTransform: "uppercase",
  borderBottom: "1px solid #0f0",
  paddingBottom: "6px"
}

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "5px",
  fontSize: "10px"
}

const labelStyle = {
  color: "#888",
  flex: 1
}

const valueStyle = (color = "#0f0") => ({
  color: color,
  fontWeight: "bold",
  textAlign: "right"
})

export function OrbitalAssets({ orbital }) {
  return (
    <div style={panelStyle}>
      <div style={titleStyle}>ORBITAL ASSETS</div>
      <div style={rowStyle}>
        <span style={labelStyle}>ISRO SATS</span>
        <span style={valueStyle()}>{orbital.isroSats || "N/A"}</span>
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>NAVIC SATS</span>
        <span style={valueStyle()}>{orbital.navicSats || "N/A"}</span>
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>EO COVERAGE</span>
        <span style={valueStyle()}>{orbital.eoCoverage || "N/A"}%</span>
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>TRACKED OBJ</span>
        <span style={valueStyle()}>{orbital.trackedObjects || "N/A"}</span>
      </div>
    </div>
  )
}

export function CommodityWatch({ commodityWatch }) {
  return (
    <div style={panelStyle}>
      <div style={titleStyle}>COMMODITY WATCH</div>
      <div style={rowStyle}>
        <span style={labelStyle}>GOLD (INR)</span>
        <span style={valueStyle()}>₹{commodityWatch.gold || "N/A"}</span>
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>NIFTY 50</span>
        <span style={valueStyle()}>{commodityWatch.nifty50 || "N/A"}</span>
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>WHEAT</span>
        <span style={valueStyle()}>₹{commodityWatch.wheatFutures || "N/A"}</span>
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>LNG SPOT</span>
        <span style={valueStyle()}>₹{commodityWatch.lngSpot || "N/A"}</span>
      </div>
    </div>
  )
}

export function SeismicMonitor({ seismic }) {
  return (
    <div style={panelStyle}>
      <div style={titleStyle}>SEISMIC MONITOR</div>
      <div style={rowStyle}>
        <span style={labelStyle}>LAST EVENT</span>
        <span style={valueStyle("#ff6600")}>{seismic.lastEvent || "N/A"}</span>
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>24H EVENTS</span>
        <span style={valueStyle()}>{seismic.dayCount || "N/A"}</span>
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>HIMALAYAN</span>
        <span style={valueStyle(seismic.himalayan === "WATCH" ? "#ff6600" : "#0f0")}>
          {seismic.himalayan || "N/A"}
        </span>
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>ANDAMAN</span>
        <span style={valueStyle(seismic.andaman === "ACTIVE" ? "#ff0000" : "#0f0")}>
          {seismic.andaman || "N/A"}
        </span>
      </div>
    </div>
  )
}

export function AirDomain({ airDomain }) {
  return (
    <div style={panelStyle}>
      <div style={titleStyle}>AIR DOMAIN</div>
      <div style={rowStyle}>
        <span style={labelStyle}>TRACER FLIGHTS</span>
        <span style={valueStyle()}>{airDomain.tracerFlights || "N/A"}</span>
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>MILITARY ADIZ</span>
        <span style={valueStyle("#ff6600")}>
          {airDomain.militaryADIZ || "N/A"}
        </span>
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>IFF STATUS</span>
        <span style={valueStyle(airDomain.iffStatus === "ACTIVE" ? "#0f0" : "#ff0000")}>
          {airDomain.iffStatus || "N/A"}
        </span>
      </div>
    </div>
  )
}
