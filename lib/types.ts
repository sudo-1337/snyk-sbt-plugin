import {DepGraph} from '@snyk/dep-graph';

export interface PluginResult {
  plugin: PluginMetadata;
  package: DepTree|DepGraph[];
}

export interface DepDict {
  [name: string]: DepTree;
}

export interface DepRoot {
  depTree: DepTree; // to be soon replaced with depGraph
  meta?: any;
}

export interface DepTree {
  name: string;
  version: string;
  dependencies?: DepDict;
  packageFormatVersion?: string;
  multiBuild?: boolean;
}

export interface PluginMetadata {
  name: string;
  runtime: string;
}

export interface SbtModulesGraph {
  modules: {
    string: string;
  };
  dependencies: {
    string: string[];
  };
}
