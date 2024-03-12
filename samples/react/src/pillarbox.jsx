import { useEffect } from 'react';
import pillarbox from '@srgssr/pillarbox-web';
import '@srgssr/pillarbox-web/dist/pillarbox.min.css';

export default function Pillarbox({ src, type = 'srgssr/urn' }) {
  useEffect(() => {
    const player = pillarbox('main-player', { fill: true });
    player.src({ src, type });
  }, []);

  return <video id="main-player" className="video-js pillarbox-js" controls
                crossOrigin="anonymous"></video>;
}

