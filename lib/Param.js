// FIXME: NO_PARAM
// src/sketch.h:563
// static const hParam NO_PARAM
// src/group.cpp:11-12
// const hParam   Param::NO_PARAM = { 0 };
// #define NO_PARAM (Param::NO_PARAM)

const isNumber = require('is-number');

/**
 * definition from src/sketch.h:551
 * @member Number tag
 * @member hParam h
 * @member Number val
 * @member Boolean known
 * @member Boolean free
 * @member hParam substd (Used only in the solver)
 */
function Param(arg0) {
  const opts = arg0 || {};
  if (!(this instanceof Param)) {
    return new Param(arg0);
  }

  if (isNumber(opts.tag)) {
    this.tag = opts.tag;
  }

  if (opts.hParam || opts.h) {
    this.h = opts.hParam || opts.h;
  }

  if (isNumber(opts.val) || isNumber(opts.value)) {
    this.val = opts.val;
  }

  if (typeof opts.known === 'boolean') {
    this.known = opts.known;
  }

  if (typeof opts.free === 'boolean') {
    this.free = opts.free;
  }

  // Used only in the solver
  if (opts.substd) {
    this.substd = opts.substd;
  }
}

/**
 * definition from src/sketch.h:565
 */
Param.prototype.clear = function clear() {
  // noop, no definition
};

module.exports = Param;