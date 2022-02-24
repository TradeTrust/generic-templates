declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*?inline" {
  const value: any;
  export default value;
} // https://webpack.js.org/guides/asset-modules/#replacing-inline-loader-syntax

declare module "*.jpg" {
  const value: any;
  export default value;
}
declare module "*.svg" {
  const value: any;
  export default value;
}

declare module "@percy/testcafe" {
  const value: any;
  export default value;
}
