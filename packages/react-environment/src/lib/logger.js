function Logger() {
  this.levelStyles = {
    base: 'font-family: system-ui;',
    info: 'color: #4361ee;',
    warn: 'color: #f9cb40;',
    error: 'color: #f05345;'
  };
}

/**
 * @param message {any}
 * @param level {'info'|'error'|'warn'}
 @returns {void}
 */
Logger.prototype.log = function (message, level) {
  if (typeof message === 'string') {
    console[level] &&
      console[level](
        `%c[${level.toUpperCase()}]: ${message}`,
        [this.levelStyles.base, this.levelStyles[level] || ''].join(' ')
      );
  } else {
    console.log(message);
  }
};

Logger.prototype.info = function (message) {
  this.log(message, 'info');
};

Logger.prototype.warn = function (message) {
  this.log(message, 'warn');
};

Logger.prototype.error = function (message) {
  this.log(message, 'error');
};

Logger.prototype.group = console.group;
Logger.prototype.groupEnd = console.groupEnd;

Logger.prototype.groupMany = function (group, messages) {
  console.group(group);
  for (const message of messages) {
    this.log(message, 'info');
  }
  console.groupEnd();
};

let logger;

/** @returns {Logger} */
function requestLogger() {
  if (logger == null) {
    logger = new Logger();
  }

  return logger;
}

export { requestLogger };
