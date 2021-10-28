function cov_17dcttxd0z() {
  var path = "/Users/ndorozhynska/Documents/cypress_workshop/react-redux-realworld-example-app/src/store.js";
  var hash = "178d5ba685e949e86f2960255857281b5343dd68";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/ndorozhynska/Documents/cypress_workshop/react-redux-realworld-example-app/src/store.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 23
        },
        end: {
          line: 10,
          column: 38
        }
      },
      "1": {
        start: {
          line: 13,
          column: 27
        },
        end: {
          line: 13,
          column: 52
        }
      },
      "2": {
        start: {
          line: 15,
          column: 22
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "3": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 21,
          column: 3
        }
      },
      "4": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 90
        }
      },
      "5": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 105
        }
      },
      "6": {
        start: {
          line: 24,
          column: 21
        },
        end: {
          line: 25,
          column: 48
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 22
          },
          end: {
            line: 15,
            column: 23
          }
        },
        loc: {
          start: {
            line: 15,
            column: 28
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 15
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        }, {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        }],
        line: 16
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "178d5ba685e949e86f2960255857281b5343dd68"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_17dcttxd0z = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_17dcttxd0z();
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import reducer from './reducer';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
export const history = (cov_17dcttxd0z().s[0]++, createHistory()); // Build the middleware for intercepting and dispatching navigation actions

const myRouterMiddleware = (cov_17dcttxd0z().s[1]++, routerMiddleware(history));
cov_17dcttxd0z().s[2]++;

const getMiddleware = () => {
  cov_17dcttxd0z().f[0]++;
  cov_17dcttxd0z().s[3]++;

  if (process.env.NODE_ENV === 'production') {
    cov_17dcttxd0z().b[0][0]++;
    cov_17dcttxd0z().s[4]++;
    return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware);
  } else {
    cov_17dcttxd0z().b[0][1]++;
    cov_17dcttxd0z().s[5]++;
    // Enable additional logging in non-production environments.
    return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, createLogger());
  }
};

export const store = (cov_17dcttxd0z().s[6]++, createStore(reducer, composeWithDevTools(getMiddleware())));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiY3JlYXRlTG9nZ2VyIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInByb21pc2VNaWRkbGV3YXJlIiwibG9jYWxTdG9yYWdlTWlkZGxld2FyZSIsInJlZHVjZXIiLCJyb3V0ZXJNaWRkbGV3YXJlIiwiY3JlYXRlSGlzdG9yeSIsImhpc3RvcnkiLCJteVJvdXRlck1pZGRsZXdhcmUiLCJnZXRNaWRkbGV3YXJlIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwic3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsZUFBVCxFQUEwQkMsV0FBMUIsUUFBNkMsT0FBN0M7QUFDQSxTQUFTQyxZQUFULFFBQTZCLGNBQTdCO0FBQ0EsU0FBU0MsbUJBQVQsUUFBb0MsMENBQXBDO0FBQ0EsU0FBU0MsaUJBQVQsRUFBNEJDLHNCQUE1QixRQUEwRCxjQUExRDtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsV0FBcEI7QUFFQSxTQUFTQyxnQkFBVCxRQUFpQyxvQkFBakM7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLDhCQUExQjtBQUVBLE9BQU8sTUFBTUMsT0FBTyw2QkFBR0QsYUFBYSxFQUFoQixDQUFiLEMsQ0FFUDs7QUFDQSxNQUFNRSxrQkFBa0IsNkJBQUdILGdCQUFnQixDQUFDRSxPQUFELENBQW5CLENBQXhCOzs7QUFFQSxNQUFNRSxhQUFhLEdBQUcsTUFBTTtBQUFBO0FBQUE7O0FBQzFCLE1BQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQUE7QUFBQTtBQUN6QyxXQUFPZCxlQUFlLENBQUNVLGtCQUFELEVBQXFCTixpQkFBckIsRUFBd0NDLHNCQUF4QyxDQUF0QjtBQUNELEdBRkQsTUFFTztBQUFBO0FBQUE7QUFDTDtBQUNBLFdBQU9MLGVBQWUsQ0FBQ1Usa0JBQUQsRUFBcUJOLGlCQUFyQixFQUF3Q0Msc0JBQXhDLEVBQWdFSCxZQUFZLEVBQTVFLENBQXRCO0FBQ0Q7QUFDRixDQVBEOztBQVNBLE9BQU8sTUFBTWEsS0FBSyw2QkFBR2QsV0FBVyxDQUM5QkssT0FEOEIsRUFDckJILG1CQUFtQixDQUFDUSxhQUFhLEVBQWQsQ0FERSxDQUFkLENBQVgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlTG9nZ2VyIH0gZnJvbSAncmVkdXgtbG9nZ2VyJ1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi9kZXZlbG9wbWVudE9ubHknO1xuaW1wb3J0IHsgcHJvbWlzZU1pZGRsZXdhcmUsIGxvY2FsU3RvcmFnZU1pZGRsZXdhcmUgfSBmcm9tICcuL21pZGRsZXdhcmUnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJztcblxuaW1wb3J0IHsgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCdcbmltcG9ydCBjcmVhdGVIaXN0b3J5IGZyb20gJ2hpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnknO1xuXG5leHBvcnQgY29uc3QgaGlzdG9yeSA9IGNyZWF0ZUhpc3RvcnkoKTtcblxuLy8gQnVpbGQgdGhlIG1pZGRsZXdhcmUgZm9yIGludGVyY2VwdGluZyBhbmQgZGlzcGF0Y2hpbmcgbmF2aWdhdGlvbiBhY3Rpb25zXG5jb25zdCBteVJvdXRlck1pZGRsZXdhcmUgPSByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpO1xuXG5jb25zdCBnZXRNaWRkbGV3YXJlID0gKCkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHJldHVybiBhcHBseU1pZGRsZXdhcmUobXlSb3V0ZXJNaWRkbGV3YXJlLCBwcm9taXNlTWlkZGxld2FyZSwgbG9jYWxTdG9yYWdlTWlkZGxld2FyZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gRW5hYmxlIGFkZGl0aW9uYWwgbG9nZ2luZyBpbiBub24tcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMuXG4gICAgcmV0dXJuIGFwcGx5TWlkZGxld2FyZShteVJvdXRlck1pZGRsZXdhcmUsIHByb21pc2VNaWRkbGV3YXJlLCBsb2NhbFN0b3JhZ2VNaWRkbGV3YXJlLCBjcmVhdGVMb2dnZXIoKSlcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gIHJlZHVjZXIsIGNvbXBvc2VXaXRoRGV2VG9vbHMoZ2V0TWlkZGxld2FyZSgpKSk7XG4iXX0=