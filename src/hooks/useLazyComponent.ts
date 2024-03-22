import React, { ComponentType, lazy } from "react";

interface PreloadComponent extends React.LazyExoticComponent<React.ComponentType<any>> {
  preload?: any;
}

const useLazyWithPreload = (importFunction: () => Promise<{ default: ComponentType<any> }>) => {
  const component: PreloadComponent = lazy(importFunction);
  component.preload = importFunction;

  return component;
};

export default useLazyWithPreload;
