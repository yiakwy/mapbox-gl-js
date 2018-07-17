import { OverscaledTileID } from '../../src/source/tile_id';

const tiles = [
  new OverscaledTileID(12, 0, 12, 655, 1583),
  new OverscaledTileID(8, 0, 8, 40, 98),
  new OverscaledTileID(4, 0, 4, 3, 6),
  new OverscaledTileID(0, 0, 0, 0, 0)
];

const locations = [
    {
      description: 'Zoom level 4',
      zoom: 4,
      center: [-77.032194, 38.912753]
    },
    {
      description: 'Zoom level 8',
      zoom: 8,
      center: [-77.032194, 38.912753]
    },
    {
      description: 'Zoom level 11',
      zoom: 11,
      center: [-77.032194, 38.912753]
    },
    {
      description: 'Zoom level 13',
      zoom: 13,
      center: [-77.032194, 38.912753]
    },
    {
      description: 'Zoom level 15',
      zoom: 15,
      center: [-77.032194, 38.912753]
    },
    {
      description: 'Zoom level 17',
      zoom: 17,
      center: [-77.032194, 38.912753]
    }
];

export { tiles, locations };
