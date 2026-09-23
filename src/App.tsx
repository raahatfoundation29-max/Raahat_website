/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import EventDetail from './pages/EventDetail';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import GetInvolved from './pages/GetInvolved';
import Legal from './pages/Legal';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about-us" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="our-work" element={<Work />} />
          <Route path="work/:id" element={<EventDetail />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gratitude" element={<About />} />
          <Route path="our-people" element={<About />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="legal" element={<Legal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
