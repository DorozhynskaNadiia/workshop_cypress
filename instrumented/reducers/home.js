function cov_1ca9kmdvbd() {
  var path = "/Users/ndorozhynska/Documents/cypress_workshop/react-redux-realworld-example-app/src/reducers/home.js";
  var hash = "8212a7d55ccb78fac3efa0a899e5b70725a5a64b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/ndorozhynska/Documents/cypress_workshop/react-redux-realworld-example-app/src/reducers/home.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 14,
          column: 3
        }
      },
      "1": {
        start: {
          line: 6,
          column: 6
        },
        end: {
          line: 9,
          column: 8
        }
      },
      "2": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 11,
          column: 16
        }
      },
      "3": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 15
          },
          end: {
            line: 3,
            column: 16
          }
        },
        loc: {
          start: {
            line: 3,
            column: 39
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 3,
            column: 16
          },
          end: {
            line: 3,
            column: 26
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 26
          }
        }],
        line: 3
      },
      "1": {
        loc: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 5,
            column: 4
          },
          end: {
            line: 9,
            column: 8
          }
        }, {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 11,
            column: 16
          }
        }, {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 13,
            column: 19
          }
        }],
        line: 4
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8212a7d55ccb78fac3efa0a899e5b70725a5a64b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1ca9kmdvbd = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1ca9kmdvbd();
import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED } from '../constants/actionTypes';
export default ((state = (cov_1ca9kmdvbd().b[0][0]++, {}), action) => {
  cov_1ca9kmdvbd().f[0]++;
  cov_1ca9kmdvbd().s[0]++;

  switch (action.type) {
    case HOME_PAGE_LOADED:
      cov_1ca9kmdvbd().b[1][0]++;
      cov_1ca9kmdvbd().s[1]++;
      return { ...state,
        tags: action.payload[0].tags
      };

    case HOME_PAGE_UNLOADED:
      cov_1ca9kmdvbd().b[1][1]++;
      cov_1ca9kmdvbd().s[2]++;
      return {};

    default:
      cov_1ca9kmdvbd().b[1][2]++;
      cov_1ca9kmdvbd().s[3]++;
      return state;
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSE9NRV9QQUdFX0xPQURFRCIsIkhPTUVfUEFHRV9VTkxPQURFRCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInRhZ3MiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixTQUFTQSxnQkFBVCxFQUEyQkMsa0JBQTNCLFFBQXFELDBCQUFyRDtBQUVBLGdCQUFlLENBQUNDLEtBQUssZ0NBQUcsRUFBSCxDQUFOLEVBQWFDLE1BQWIsS0FBd0I7QUFBQTtBQUFBOztBQUNyQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLSixnQkFBTDtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQ0wsR0FBR0UsS0FERTtBQUVMRyxRQUFBQSxJQUFJLEVBQUVGLE1BQU0sQ0FBQ0csT0FBUCxDQUFlLENBQWYsRUFBa0JEO0FBRm5CLE9BQVA7O0FBSUYsU0FBS0osa0JBQUw7QUFBQTtBQUFBO0FBQ0UsYUFBTyxFQUFQOztBQUNGO0FBQUE7QUFBQTtBQUNFLGFBQU9DLEtBQVA7QUFUSjtBQVdELENBWkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIT01FX1BBR0VfTE9BREVELCBIT01FX1BBR0VfVU5MT0FERUQgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uVHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEhPTUVfUEFHRV9MT0FERUQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdGFnczogYWN0aW9uLnBheWxvYWRbMF0udGFnc1xuICAgICAgfTtcbiAgICBjYXNlIEhPTUVfUEFHRV9VTkxPQURFRDpcbiAgICAgIHJldHVybiB7fTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIl19