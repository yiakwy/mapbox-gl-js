
import Benchmark from '../lib/benchmark';
import createMap from '../lib/create_map';

const width = 1024;
const height = 768;
const zooms = [4, 8, 11, 13, 15, 17];

export default class Paint extends Benchmark {
    setup() {
      console.log('this.location', this.location);
      let promises = [];
      if (this.location) {
        promises.push(createMap({
          zoom: this.location.zoom,
          width,
          height,
          center: this.location.center,
          style: this.styleURL
        }));
      } else {
        promises = zooms.map(zoom => {
          return createMap({
            zoom,
            width,
            height,
            center: [-77.032194, 38.912753],
            style: this.styleURL
          });
        });
      }
      console.log('promises', promises);

      return Promise.all(promises)
      .then(maps => {
          console.log('maps', maps);
          console.log('center', maps[0].getCenter());
          console.log('zoom', maps[0].getZoom());
          this.maps = maps;
      });

      // return Promise.all(zooms.map(zoom => {
      //     return createMap({
      //         zoom,
      //         width,
      //         height,
      //         center: [-77.032194, 38.912753],
      //         style: 'mapbox://styles/mapbox/streets-v9'
      //     });
      // })).then(maps => {
      //     console.log('maps', maps);
      //     this.maps = maps;
      // });
    }

    bench() {
        for (const map of this.maps) {
            map._styleDirty = true;
            map._sourcesDirty = true;
            map._render();
        }
    }

    teardown() {
        for (const map of this.maps) {
            map.remove();
        }
    }
}
