module.exports = function(pkg) {
  if (pkg.dependencies) {
    pkg.dependencies = sortObj(pkg.dependencies)  
  }
  
  if (pkg.devDependencies) {
    pkg.devDependencies = sortObj(pkg.devDependencies)  
  }
  
  return pkg
}

function sortObj (obj) {
  var sorted = {}
  Object.keys(obj).sort().forEach(function(key) {
    sorted[key] = obj[key]
  })
  return sorted
}