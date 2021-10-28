function cov_2cs5epntht() {
  var path = "/Users/ndorozhynska/Documents/cypress_workshop/react-redux-realworld-example-app/src/reducers/settings.js";
  var hash = "fef0ea4058e9393b209ae78ed8639088d5b81186";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/ndorozhynska/Documents/cypress_workshop/react-redux-realworld-example-app/src/reducers/settings.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 24,
          column: 3
        }
      },
      "1": {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 14,
          column: 8
        }
      },
      "2": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 16
        }
      },
      "3": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 21,
          column: 8
        }
      },
      "4": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 23,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 15
          },
          end: {
            line: 7,
            column: 16
          }
        },
        loc: {
          start: {
            line: 7,
            column: 39
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 7
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 16
          },
          end: {
            line: 7,
            column: 26
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 7,
            column: 24
          },
          end: {
            line: 7,
            column: 26
          }
        }],
        line: 7
      },
      "1": {
        loc: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 24,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 14,
            column: 8
          }
        }, {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 16,
            column: 16
          }
        }, {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 21,
            column: 8
          }
        }, {
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 23,
            column: 19
          }
        }],
        line: 8
      },
      "2": {
        loc: {
          start: {
            line: 13,
            column: 16
          },
          end: {
            line: 13,
            column: 59
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 13,
            column: 31
          },
          end: {
            line: 13,
            column: 52
          }
        }, {
          start: {
            line: 13,
            column: 55
          },
          end: {
            line: 13,
            column: 59
          }
        }],
        line: 13
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fef0ea4058e9393b209ae78ed8639088d5b81186"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2cs5epntht = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2cs5epntht();
import { SETTINGS_SAVED, SETTINGS_PAGE_UNLOADED, ASYNC_START } from '../constants/actionTypes';
export default ((state = (cov_2cs5epntht().b[0][0]++, {}), action) => {
  cov_2cs5epntht().f[0]++;
  cov_2cs5epntht().s[0]++;

  switch (action.type) {
    case SETTINGS_SAVED:
      cov_2cs5epntht().b[1][0]++;
      cov_2cs5epntht().s[1]++;
      return { ...state,
        inProgress: false,
        errors: action.error ? (cov_2cs5epntht().b[2][0]++, action.payload.errors) : (cov_2cs5epntht().b[2][1]++, null)
      };

    case SETTINGS_PAGE_UNLOADED:
      cov_2cs5epntht().b[1][1]++;
      cov_2cs5epntht().s[2]++;
      return {};

    case ASYNC_START:
      cov_2cs5epntht().b[1][2]++;
      cov_2cs5epntht().s[3]++;
      return { ...state,
        inProgress: true
      };

    default:
      cov_2cs5epntht().b[1][3]++;
      cov_2cs5epntht().s[4]++;
      return state;
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmpzIl0sIm5hbWVzIjpbIlNFVFRJTkdTX1NBVkVEIiwiU0VUVElOR1NfUEFHRV9VTkxPQURFRCIsIkFTWU5DX1NUQVJUIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaW5Qcm9ncmVzcyIsImVycm9ycyIsImVycm9yIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FDRUEsY0FERixFQUVFQyxzQkFGRixFQUdFQyxXQUhGLFFBSU8sMEJBSlA7QUFNQSxnQkFBZSxDQUFDQyxLQUFLLGdDQUFHLEVBQUgsQ0FBTixFQUFhQyxNQUFiLEtBQXdCO0FBQUE7QUFBQTs7QUFDckMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0wsY0FBTDtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQ0wsR0FBR0csS0FERTtBQUVMRyxRQUFBQSxVQUFVLEVBQUUsS0FGUDtBQUdMQyxRQUFBQSxNQUFNLEVBQUVILE1BQU0sQ0FBQ0ksS0FBUCxnQ0FBZUosTUFBTSxDQUFDSyxPQUFQLENBQWVGLE1BQTlCLGlDQUF1QyxJQUF2QztBQUhILE9BQVA7O0FBS0YsU0FBS04sc0JBQUw7QUFBQTtBQUFBO0FBQ0UsYUFBTyxFQUFQOztBQUNGLFNBQUtDLFdBQUw7QUFBQTtBQUFBO0FBQ0UsYUFBTyxFQUNMLEdBQUdDLEtBREU7QUFFTEcsUUFBQUEsVUFBVSxFQUFFO0FBRlAsT0FBUDs7QUFJRjtBQUFBO0FBQUE7QUFDRSxhQUFPSCxLQUFQO0FBZko7QUFpQkQsQ0FsQkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBTRVRUSU5HU19TQVZFRCxcbiAgU0VUVElOR1NfUEFHRV9VTkxPQURFRCxcbiAgQVNZTkNfU1RBUlRcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRUSU5HU19TQVZFRDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpblByb2dyZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiBhY3Rpb24uZXJyb3IgPyBhY3Rpb24ucGF5bG9hZC5lcnJvcnMgOiBudWxsXG4gICAgICB9O1xuICAgIGNhc2UgU0VUVElOR1NfUEFHRV9VTkxPQURFRDpcbiAgICAgIHJldHVybiB7fTtcbiAgICBjYXNlIEFTWU5DX1NUQVJUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGluUHJvZ3Jlc3M6IHRydWVcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcbiJdfQ==