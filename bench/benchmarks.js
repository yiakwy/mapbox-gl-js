// @flow

import mapboxgl from '../src';
import { accessToken, styleURL } from './lib/parameters';
import { tiles, locations } from './lib/style_locations';

mapboxgl.accessToken = accessToken;

window.mapboxglVersions = window.mapboxglVersions || [];
window.mapboxglBenchmarks = window.mapboxglBenchmarks || {};

const version = process.env.BENCHMARK_VERSION;
const isStyleBench = process.env.STYLE_BENCHMARK;
window.mapboxglVersions.push(version);

function register(Benchmark) {
  if (isStyleBench) {
    // make sure that during a style benchmark test, a benchmark can run the same branch multiple times with differing style urls
    // sort by the style urls instead of the branch name
    styleURL.forEach((style) => {
      if (!window.mapboxglBenchmarks[Benchmark.name]) {
        window.mapboxglBenchmarks[Benchmark.name] = {};
      }

      switch (Benchmark.name) {
        case 'Layout':
        //   // tiles.forEach(tile => benchmarks.push({benchmark, tile: JSON.parse(JSON.stringify(tile))}));
        //   break;
        case 'Paint':
        case 'QueryBox':
        case 'QueryPoint':
          locations.forEach(location => {
            const descriptor = location.description.toLowerCase().split(' ').join('_');
            if (!window.mapboxglBenchmarks[Benchmark.name][descriptor]) {
              window.mapboxglBenchmarks[Benchmark.name][descriptor] = {};
            }
            window.mapboxglBenchmarks[Benchmark.name][descriptor][style] = new Benchmark(style, location);
          });
          break;
        default:
          window.mapboxglBenchmarks[Benchmark.name][style] = new Benchmark(style);
      }

    });
  } else {
    window.mapboxglBenchmarks[Benchmark.name] = window.mapboxglBenchmarks[Benchmark.name] || {};
    window.mapboxglBenchmarks[Benchmark.name][version] = new Benchmark(styleURL);
  }
}

import Layout from './benchmarks/layout';
import LayoutDDS from './benchmarks/layout_dds';
import Paint from './benchmarks/paint';
import Validate from './benchmarks/style_validate';
import StyleLayerCreate from './benchmarks/style_layer_create';
import QueryPoint from './benchmarks/query_point';
import QueryBox from './benchmarks/query_box';
import ExpressionBenchmarks from './benchmarks/expressions';
import PaintStates from './benchmarks/paint_states';
import LayerBenchmarks from './benchmarks/layers';
import Load from './benchmarks/map_load';
import FilterCreate from './benchmarks/filter_create';
import FilterEvaluate from './benchmarks/filter_evaluate';

register(Layout);
register(Paint);
register(Validate);
register(StyleLayerCreate);
register(QueryPoint);
register(QueryBox);

if (!isStyleBench) {
    register(LayoutDDS);
    ExpressionBenchmarks.forEach(register);
    register(PaintStates);
    LayerBenchmarks.forEach(register);
    register(Load);
    register(FilterCreate);
    register(FilterEvaluate);
}

import getWorkerPool from '../src/util/global_worker_pool';

setTimeout(() => {
    // Ensure the global worker pool is never drained. Browsers have resource limits
    // on the max number of workers that can be created per page.
    // We do this async to avoid creating workers before the worker bundle blob
    // URL has been set up, which happens after this module is executed.
    getWorkerPool().acquire(-1);
}, 0);

export default mapboxgl;
