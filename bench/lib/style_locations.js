import { OverscaledTileID } from '../../src/source/tile_id';

const tiles = [
  new OverscaledTileID(12, 0, 12, 655, 1583),
  new OverscaledTileID(8, 0, 8, 40, 98),
  new OverscaledTileID(4, 0, 4, 3, 6),
  new OverscaledTileID(0, 0, 0, 0, 0)
];

// const locations = [
//     {
//       description: 'Zoom level 4',
//       zoom: 4,
//       center: [-77.032194, 38.912753]
//     },
//     {
//       description: 'Zoom level 8',
//       zoom: 8,
//       center: [-77.032194, 38.912753]
//     },
//     {
//       description: 'Zoom level 11',
//       zoom: 11,
//       center: [-77.032194, 38.912753]
//     },
//     {
//       description: 'Zoom level 13',
//       zoom: 13,
//       center: [-77.032194, 38.912753]
//     },
//     {
//       description: 'Zoom level 15',
//       zoom: 15,
//       center: [-77.032194, 38.912753]
//     },
//     {
//       description: 'Zoom level 17',
//       zoom: 17,
//       center: [-77.032194, 38.912753]
//     }
// ];

const locations = [
  {
    "description": "Road labels – Houston, z12",
    "tile": new OverscaledTileID(12, 0, 12, 962, 1692),
    "zoom": 12,
    "center": [-95.392263, 29.799396]
  },
  {
    "description": "Road labels – Houston, z13",
    "tile": new OverscaledTileID(13, 0, 13, 1925, 3386),
    "zoom": 13,
    "center": [-95.38116, 29.74916]
  },
  {
    "description": "High zoom labels (also: buildings, roads) – New York City, z16",
    "tile": new OverscaledTileID(16, 0, 16, 19299, 24629),
    "zoom": 16,
    "center": [-73.984682, 40.757660]
  },
  {
    "description": "High zoom labels (also: buildings, roads) – New York City, z17",
    "tile": new OverscaledTileID(17, 0, 17, 19299, 24629),
    "zoom": 17,
    "center": [-73.984682, 40.757660]
  },
  {
    "description": "High zoom cjk labels, when using local lang (also: buildings, roads) – Tokyo, z16",
    "tile": new OverscaledTileID(16, 0, 16, 58210, 25803),
    "zoom": 16,
    "center": [139.759860, 35.69522]
  },
  {
    "description": "High zoom cjk labels, when using local lang (also: buildings, roads) – Tokyo, z17",
    "tile": new OverscaledTileID(17, 0, 17, 58210, 25803),
    "zoom": 17,
    "center": [139.759860, 35.69522]
  },
  {
    "description": "Water – Finland, z10",
    "tile": new OverscaledTileID(10, 0, 10, 590, 288),
    "zoom": 10,
    "center": [27.602348, 61.520945]
  },
  {
    "description": "Landuse – Paris, z11",
    "tile": new OverscaledTileID(11, 0, 11, 1036, 705),
    "zoom": 11,
    "center": [2.209530, 48.745030]
  },
  {
    "description": "Buildings – LA, z16",
    "tile": new OverscaledTileID(16, 0, 16, 11229, 26180),
    "zoom": 6,
    "center": [-118.314417, 33.995654]
  },
  {
    "description": "High zoom (roads, paths, landuse, labels) – Paris, 15",
    "tile": new OverscaledTileID(15, 0, 15, 16594, 11271),
    "zoom": 15,
    "center": [2.315725, 48.866517]
  },
  {
    "description": "High zoom (pedestrian polygon fills, roads, paths, landuse, labels) – Paris, z16.25",
    "tile": new OverscaledTileID(16.25, 0, 16.25, 33189, 22543),
    "zoom": 16.25,
    "center": [2.315725, 48.866517]
  },
  {
    "description": "Hillshading – Switzerland, z9",
    "tile": new OverscaledTileID(9, 0, 9, 268, 181),
    "zoom": 9,
    "center": [8.835221, 46.317157]
  },
  {
    "description": "Hillshading and contours – Switzerland, z12",
    "tile": new OverscaledTileID(12, 0, 12, 2148, 1452),
    "zoom": 12,
    "center": [8.835221, 46.317157]
  },
  {
    "description": "Landcover – Germany z6",
    "tile": new OverscaledTileID(6, 0, 6, 33, 21),
    "zoom": 6,
    "center": [8.429493, 51.056406]
  },
  {
    "description": "Landcover – Germany z8",
    "tile": new OverscaledTileID(8, 0, 8, 133, 86),
    "zoom": 8,
    "center": [7.762074, 50.322133]
  }
];

export { tiles, locations };
