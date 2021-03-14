import 'leaflet/dist/leaflet.css';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

function App() {
  return (
    <Tabs>
    <TabList>
      <Tab>
        London
      </Tab>
      <Tab> Paris</Tab>
    </TabList>

    <TabPanel>
           <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
              <Popup>
               Ici, c'est Londres! 
              </Popup>
            </Marker>
          </MapContainer>
    </TabPanel>
    <TabPanel>
           <MapContainer center={[48.8566, 2.3522]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[48.8566, 2.3522]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
              <Popup>
               Ici, c'est Paris!
              </Popup>
            </Marker>
          </MapContainer>
    </TabPanel>
  </Tabs>
  );
}

export default App;
