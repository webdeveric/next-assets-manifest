function isObject(arg)
{
  return Object.prototype.toString.call(arg) === '[object Object]';
}

function makeOptionsArray( commonOptions = {}, customOptions = [] )
{
  if ( commonOptions === customOptions ) {
    return [ commonOptions ];
  }

  if ( ! Array.isArray( customOptions ) ) {
    customOptions = [ customOptions ];
  }

  return customOptions
    .filter( isObject )
    .map( options => ({
      ...commonOptions,
      ...options,
    }));
}

module.exports = {
  isObject,
  makeOptionsArray,
};
