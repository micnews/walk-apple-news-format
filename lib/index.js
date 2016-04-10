
const walk = (obj, cb) => {
  if (obj.components) {
    obj.components.forEach(component => {
      cb(component);
      walk(component, cb);
    });
  }
};

module.exports = walk;
